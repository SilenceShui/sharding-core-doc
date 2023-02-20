---
icon: launch
title: AbpVNext
category: AbpVNext集成
---


## Demo
### 旧版本demo
[AbpVNextShardingTodoApp](https://github.com/xuejmnet/AbpVNextShardingTodoApp)
### 新版本的demo
[ShardingWithFramework](https://github.com/xuejmnet/ShardingWithFramework)


## Blog
###  旧版本的博客
[Integrate With AbpVNext Blog V1](https://www.cnblogs.com/xuejiaming/p/15449819.html)
### 新版本的博客集成
[Integrate With AbpVNext Blog V2](https://www.cnblogs.com/xuejiaming/p/16450663.html)


## code first
首先abp这边使用`code first`相对比较简单,第一步我们将vs的程序启动项设置为控制台程序`Project.DbMigrator`并且在该项目下新建一个`IDesignTimeDbContextFactory<>`的实现类,并且将nuget控制台启动项设置为`Project.DbMigrator`,然后就可以进行愉快的code first了

## AbpVNext集成 7.6.1.2版本说明
1、创建IShardingKeyIsGuId 和 IShardingKeyIsCreationTime约束   可查看源码自己书写

2、DbContext抽象类 继承AbpDbContext 
   ```csharp
   public abstract class AbstractShardingAbpDbContext<TDbContext> : AbpDbContext<TDbContext>, IShardingDbContext
                                  where TDbContext : DbContext
    {
        private bool _createExecutor = false;
        protected AbstractShardingAbpDbContext(DbContextOptions<TDbContext> options) : base(options)
        {
        }


        private IShardingDbContextExecutor _shardingDbContextExecutor;
        public IShardingDbContextExecutor GetShardingExecutor()
        {
            if (!_createExecutor)
            {
                _shardingDbContextExecutor = this.DoCreateShardingDbContextExecutor();
                _createExecutor = true;
            }
            return _shardingDbContextExecutor;
        }

        private IShardingDbContextExecutor DoCreateShardingDbContextExecutor()
        {
            var shardingDbContextExecutor = this.CreateShardingDbContextExecutor();
            if (shardingDbContextExecutor != null)
            {

                shardingDbContextExecutor.EntityCreateDbContextBefore += (sender, args) =>
                {
                    CheckAndSetShardingKeyThatSupportAutoCreate(args.Entity);
                };
                shardingDbContextExecutor.CreateDbContextAfter += (sender, args) =>
                {
                    var dbContext = args.DbContext;
                    if (dbContext is AbpDbContext<TDbContext> abpDbContext && abpDbContext.LazyServiceProvider == null)
                    {
                        abpDbContext.LazyServiceProvider = this.LazyServiceProvider;
                        if (dbContext is IAbpEfCoreDbContext abpEfCoreDbContext && this.UnitOfWorkManager.Current != null)
                        {
                            abpEfCoreDbContext.Initialize(
                                new AbpEfCoreDbContextInitializationContext(
                                    this.UnitOfWorkManager.Current
                                )
                            );
                        }
                    }
                };
            }
            return shardingDbContextExecutor;
        }


        private void CheckAndSetShardingKeyThatSupportAutoCreate<TEntity>(TEntity entity) where TEntity : class
        {
      //注意如果按照id分表 对应该实体就要遵循约束IShardingKeyIsGuId  或者自己定义
            if (entity is IShardingKeyIsGuId)
            {

                if (entity is IEntity<Guid> guidEntity)
                {
                    if (guidEntity.Id != default)
                    {
                        return;
                    }
                    var idProperty = entity.GetObjectProperty(nameof(IEntity<Guid>.Id));

                    var dbGeneratedAttr = ReflectionHelper
                        .GetSingleAttributeOrDefault<DatabaseGeneratedAttribute>(
                            idProperty
                        );

                    if (dbGeneratedAttr != null && dbGeneratedAttr.DatabaseGeneratedOption != DatabaseGeneratedOption.None)
                    {
                        return;
                    }

                    EntityHelper.TrySetId(
                        guidEntity,
                        () => GuidGenerator.Create(),
                        true
                    );
                }
            }
            //注意如果按照时间分表 对应该实体就要遵循约束IShardingKeyIsCreationTime  或者自己定义
            else if (entity is IShardingKeyIsCreationTime)
            {
                AuditPropertySetter?.SetCreationProperties(entity);
            }
        }

        public override void Dispose()
        {
            _shardingDbContextExecutor?.Dispose();
            base.Dispose();
        }

        public override async ValueTask DisposeAsync()
        {
            if (_shardingDbContextExecutor != null)
            {
                await _shardingDbContextExecutor.DisposeAsync();
            }
            await base.DisposeAsync();
        }
    }
   ```
  
  3、创建路由分片DataTableRoute
  //AbstractSimpleShardingMonthKeyDateTimeVirtualTableRoute 此处根据自己需要进行修改 此例根据实际分表
   ```csharp
    public class DataTableRoute : AbstractSimpleShardingMonthKeyDateTimeVirtualTableRoute<MopProcessData>
    {
        public override bool AutoCreateTableByTime()
        {
            // 是否根据时间自动迁移新表
            return true;
        }

        public override void Configure(EntityMetadataTableBuilder<MopProcessData> builder)
        {
            // 创建时间分表 ， 路由指向CreationTime 保存指针
            builder.ShardingProperty(o => o.CreationTime);
        }

        public override DateTime GetBeginTime()
        {
            return new DateTime(2022, 07, 01);  //数据开始时间

        }

        public override string[] GetCronExpressions()
        {
           //每月的28、29、30、31日的23:59:00分,"0 59 23 28,29,30,31 * ?"
           //每月的1日的00:00:00分,"0 0 0 1 * ?" 
           //每月的1日的00:01:00分,"0 1 0 1 * ?"
            return new string[3] { "0 59 23 28,29,30,31 * ?", "0 0 0 1 * ?", "0 1 0 1 * ?" };
        }
        public override int IncrementMinutes => 14400;   //  在对应的Cron时间生成    Corn时间增加 14400分钟对应月份的表
    }
   ```
  4、配置EntityFrameworkCoreModule
  
     ```csharp
     // 可添加控制台日志输出
      public static readonly ILoggerFactory efLogger = LoggerFactory.Create(builder =>
    {
        builder.AddFilter((category, level) => category == DbLoggerCategory.Database.Command.Name && level == LogLevel.Information).AddConsole();
    });
    
    
        //额外添加分片配置
        context.Services.AddShardingConfigure<DbContext>()
           .UseRouteConfig(op =>
           {
               op.AddShardingTableRoute<DataTableRoute>();
           })
           .UseConfig((sp, op) =>
           {
               op.ThrowIfQueryRouteNotMatch = false;
               op.UseShardingQuery((conStr, builder) =>
               {
               // CommandTimeout 添加超时时间  单位秒   //UseLoggerFactory(efLogger).EnableSensitiveDataLogging()启用日志
                   builder.UseSqlServer(conStr,b=>b.CommandTimeout(15)).UseLoggerFactory(efLogger).EnableSensitiveDataLogging();
               });
               op.UseShardingTransaction((connection, builder) =>
               {
                   builder.UseSqlServer(connection).UseLoggerFactory(efLogger).EnableSensitiveDataLogging();
               });
               op.UseShardingMigrationConfigure(builder =>
               {
               
                   builder.ReplaceService<IMigrationsSqlGenerator, ShardingSqlServerMigrationsSqlGenerator>();
               });
               var configuration = context.Services.GetConfiguration();
               op.AddDefaultDataSource("Lmes", configuration.GetConnectionString("Default"));
           })
           .AddShardingCore();
           
           

      ```
      ShardingSqlServerMigrationsSqlGenerator 类 接管DbMigrator
      ```csharp
  public class ShardingSqlServerMigrationsSqlGenerator : SqlServerMigrationsSqlGenerator
    {
        private readonly IShardingRuntimeContext _shardingRuntimeContext;

        public ShardingSqlServerMigrationsSqlGenerator(IShardingRuntimeContext shardingRuntimeContext, [NotNull] MigrationsSqlGeneratorDependencies dependencies,                                                              [NotNull] IRelationalAnnotationProvider migrationsAnnotations) : base(dependencies, migrationsAnnotations)
        {
            _shardingRuntimeContext = shardingRuntimeContext;
        }

        protected override void Generate(
            MigrationOperation operation,
            IModel model,
            MigrationCommandListBuilder builder)
        {
            var oldCmds = builder.GetCommandList().ToList();
            base.Generate(operation, model, builder);
            var newCmds = builder.GetCommandList().ToList();
            var addCmds = newCmds.Where(x => !oldCmds.Contains(x)).ToList();

            MigrationHelper.Generate(_shardingRuntimeContext, operation, builder, Dependencies.SqlGenerationHelper, addCmds);
        }
    }
      ```
6、  最后在启动文件中XXXHttpApiHostModule  添加  
  //非必须  启动检查缺少的表并且创建
  app.ApplicationServices.UseAutoTryCompensateTable();
  
  
  
