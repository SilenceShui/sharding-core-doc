(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{534:function(t,i,v){"use strict";v.r(i);var _=v(1),e=Object(_.a)({},(function(){var t=this,i=t.$createElement,v=t._self._c||i;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"性能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#性能"}},[t._v("#")]),t._v(" 性能")]),t._v(" "),v("p",[t._v("以下所有数据均在开启了表达式编译缓存的情况下测试，并且电脑处于长时间未关机并且开着很多vs和idea的情况下仅供参考,所有测试都是基于ShardingCore x.3.1.63+ version")]),t._v(" "),v("p",[t._v("以下所有数据均在"),v("a",{attrs:{href:"https://github.com/xuejmnet/sharding-core/blob/main/benchmarks/ShardingCoreBenchmark/EFCoreCrud.cs",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码中有案例"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("efcore版本均为6.0 表结构为string型id的订单取模分成5张表")]),t._v(" "),v("p",[t._v("N代表执行次数")]),t._v(" "),v("h3",{attrs:{id:"性能损耗-sql-server-2012-data-rows-7734363-773w"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#性能损耗-sql-server-2012-data-rows-7734363-773w"}},[t._v("#")]),t._v(" 性能损耗 sql server 2012,data rows 7734363 =773w")]),t._v(" "),v("p",[t._v("// * Summary *")]),t._v(" "),v("p",[t._v("BenchmarkDotNet=v0.13.1, OS=Windows 10.0.18363.1500 (1909/November2019Update/19H2)\nAMD Ryzen 9 3900X, 1 CPU, 24 logical and 12 physical cores\n.NET SDK=6.0.100\n[Host]     : .NET 6.0.0 (6.0.21.52210), X64 RyuJIT\nDefaultJob : .NET 6.0.0 (6.0.21.52210), X64 RyuJIT")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Method")]),t._v(" "),v("th",[t._v("N")]),t._v(" "),v("th",{staticStyle:{"text-align":"right"}},[t._v("Mean")]),t._v(" "),v("th",{staticStyle:{"text-align":"right"}},[t._v("Error")]),t._v(" "),v("th",{staticStyle:{"text-align":"right"}},[t._v("StdDev")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("NoShardingIndexFirstOrDefaultAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("1.512 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.0071 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.0063 ms")])]),t._v(" "),v("tr",[v("td",[t._v("ShardingIndexFirstOrDefaultAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("1.567 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.0127 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.0113 ms")])])])]),t._v(" "),v("p",[t._v("针对未分片数据的查询性能,可以看出10次查询差距为0.05ms,单次查询损耗约为5微妙=0.005毫秒,损耗占比为3%,")]),t._v(" "),v("p",[t._v("结论：efcore 原生查询和sharding-core的查询在针对未分片对象查询上性能可达原先的97%具有极高的性能")]),t._v(" "),v("h3",{attrs:{id:"性能测试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#性能测试"}},[t._v("#")]),t._v(" 性能测试")]),t._v(" "),v("h4",{attrs:{id:"sql-server-2012-data-rows-7734363-773w"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#sql-server-2012-data-rows-7734363-773w"}},[t._v("#")]),t._v(" sql server 2012,data rows 7734363 =773w")]),t._v(" "),v("p",[t._v("// * Summary *")]),t._v(" "),v("p",[t._v("BenchmarkDotNet=v0.13.1, OS=Windows 10.0.18363.1500 (1909/November2019Update/19H2)\nAMD Ryzen 9 3900X, 1 CPU, 24 logical and 12 physical cores\n.NET SDK=6.0.100\n[Host]     : .NET 6.0.0 (6.0.21.52210), X64 RyuJIT\nDefaultJob : .NET 6.0.0 (6.0.21.52210), X64 RyuJIT")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Method")]),t._v(" "),v("th",[t._v("N")]),t._v(" "),v("th",{staticStyle:{"text-align":"right"}},[t._v("Mean")]),t._v(" "),v("th",{staticStyle:{"text-align":"right"}},[t._v("Error")]),t._v(" "),v("th",{staticStyle:{"text-align":"right"}},[t._v("StdDev")]),t._v(" "),v("th",{staticStyle:{"text-align":"right"}},[t._v("Median")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("NoShardingIndexFirstOrDefaultAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("1.739 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.0340 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.0540 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("1.739 ms")])]),t._v(" "),v("tr",[v("td",[t._v("ShardingIndexFirstOrDefaultAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("2.373 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.0460 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.0452 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("2.379 ms")])]),t._v(" "),v("tr",[v("td",[t._v("NoShardingNoIndexFirstOrDefaultAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("579.584 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("15.7983 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("46.5816 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("564.566 ms")])]),t._v(" "),v("tr",[v("td",[t._v("ShardingNoIndexFirstOrDefaultAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("628.567 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("12.5324 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("35.3478 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("615.352 ms")])]),t._v(" "),v("tr",[v("td",[t._v("NoShardingNoIndexCountAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("521.954 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("9.7644 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("18.5778 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("523.128 ms")])]),t._v(" "),v("tr",[v("td",[t._v("ShardingNoIndexCountAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("622.595 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("11.8567 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("10.5107 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("619.452 ms")])]),t._v(" "),v("tr",[v("td",[t._v("NoShardingNoIndexLikeToListAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("6,352.417 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("123.3931 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("115.4220 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("6,360.908 ms")])]),t._v(" "),v("tr",[v("td",[t._v("ShardingNoIndexLikeToListAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("6,260.610 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("122.6605 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("108.7353 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("6,236.577 ms")])]),t._v(" "),v("tr",[v("td",[t._v("NoShardingNoIndexToListAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("491.013 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("4.0199 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("3.5635 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("490.473 ms")])]),t._v(" "),v("tr",[v("td",[t._v("ShardingNoIndexToListAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("620.591 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("6.8447 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("5.7156 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("620.634 ms")])])])]),t._v(" "),v("h4",{attrs:{id:"mysql-5-7-data-rows-7553790-755w-innerdb-buffer-size-3g"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql-5-7-data-rows-7553790-755w-innerdb-buffer-size-3g"}},[t._v("#")]),t._v(" mysql 5.7,data rows 7553790=755w innerdb_buffer_size=3G")]),t._v(" "),v("p",[t._v("// * Summary *")]),t._v(" "),v("p",[t._v("BenchmarkDotNet=v0.13.1, OS=Windows 10.0.18363.1500 (1909/November2019Update/19H2)\nAMD Ryzen 9 3900X, 1 CPU, 24 logical and 12 physical cores\n.NET SDK=6.0.100\n[Host]     : .NET 6.0.0 (6.0.21.52210), X64 RyuJIT\nDefaultJob : .NET 6.0.0 (6.0.21.52210), X64 RyuJIT")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Method")]),t._v(" "),v("th",[t._v("N")]),t._v(" "),v("th",{staticStyle:{"text-align":"right"}},[t._v("Mean")]),t._v(" "),v("th",{staticStyle:{"text-align":"right"}},[t._v("Error")]),t._v(" "),v("th",{staticStyle:{"text-align":"right"}},[t._v("StdDev")]),t._v(" "),v("th",{staticStyle:{"text-align":"right"}},[t._v("Median")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("NoShardingIndexFirstOrDefaultAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("4.911 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.0952 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.1133 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("4.923 ms")])]),t._v(" "),v("tr",[v("td",[t._v("ShardingIndexFirstOrDefaultAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("5.736 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.1139 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.3020 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("5.630 ms")])]),t._v(" "),v("tr",[v("td",[t._v("NoShardingNoIndexFirstOrDefaultAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("11,630.109 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("774.0088 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("2,282.1824 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("11,585.457 ms")])]),t._v(" "),v("tr",[v("td",[t._v("ShardingNoIndexFirstOrDefaultAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("5,388.529 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("39.1442 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("36.6155 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("5,391.835 ms")])]),t._v(" "),v("tr",[v("td",[t._v("NoShardingNoIndexCountAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("14,245.844 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("74.1221 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("69.3339 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("14,242.815 ms")])]),t._v(" "),v("tr",[v("td",[t._v("ShardingNoIndexCountAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("3,007.845 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("24.6299 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("23.0388 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("3,007.830 ms")])]),t._v(" "),v("tr",[v("td",[t._v("NoShardingNoIndexLikeToListAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("27,026.048 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("145.6814 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("121.6505 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("27,032.112 ms")])]),t._v(" "),v("tr",[v("td",[t._v("ShardingNoIndexLikeToListAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("5,650.041 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("94.9405 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("88.8074 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("5,622.049 ms")])]),t._v(" "),v("tr",[v("td",[t._v("NoShardingNoIndexToListAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("26,068.783 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("103.7831 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("97.0788 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("26,094.834 ms")])]),t._v(" "),v("tr",[v("td",[t._v("ShardingNoIndexToListAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("5,414.644 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("71.2123 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("59.4655 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("5,395.306 ms")])])])]),t._v(" "),v("p",[t._v("具体可以通过first前两次结果来计算得出结论单次查询的的损耗为0.06-0.08毫秒之间， sqlserver的各项数据在分表和未分表的情况下都几乎差不多可以得出在770w数据集情况下数据库还并未是数据瓶颈的关键，但是mysql可以看到在分表和未分表的情况下如果涉及到没有索引的全表扫描那么性能的差距将是分表后的表数目之多，测试中为5-6倍，也就是分表数目")]),t._v(" "),v("p",[v("strong",[t._v("如果你可以接受单次查询的损耗在0.06ms-0.08ms的那相信这款框架将会是efcore下非常完美的一款分表分库组件")])])])}),[],!1,null,null,null);i.default=e.exports},546:function(t,i,v){"use strict";v.r(i);var _=v(1),e=Object(_.a)({},(function(){var t=this,i=t.$createElement,v=t._self._c||i;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"性能测试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#性能测试"}},[t._v("#")]),t._v(" 性能测试")]),t._v(" "),v("p",[t._v("以下所有数据均在开启了表达式编译缓存的情况下测试，并且电脑处于长时间未关机并且开着很多vs和idea的情况下仅供参考,所有测试都是基于ShardingCore x.3.1.63+ version")]),t._v(" "),v("p",[t._v("以下所有数据均在"),v("a",{attrs:{href:"https://github.com/xuejmnet/sharding-core/blob/main/benchmarks/ShardingCoreBenchmark/EFCoreCrud.cs",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码中有案例"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("efcore版本均为6.0 表结构为string型id的订单取模分成5张表")]),t._v(" "),v("p",[t._v("N代表执行次数")]),t._v(" "),v("h4",{attrs:{id:"sql-server-2012-data-rows-7734363-773w"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#sql-server-2012-data-rows-7734363-773w"}},[t._v("#")]),t._v(" sql server 2012,data rows 7734363 =773w")]),t._v(" "),v("p",[t._v("// * Summary *")]),t._v(" "),v("p",[t._v("BenchmarkDotNet=v0.13.1, OS=Windows 10.0.18363.1500 (1909/November2019Update/19H2)\nAMD Ryzen 9 3900X, 1 CPU, 24 logical and 12 physical cores\n.NET SDK=6.0.100\n[Host]     : .NET 6.0.0 (6.0.21.52210), X64 RyuJIT\nDefaultJob : .NET 6.0.0 (6.0.21.52210), X64 RyuJIT")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Method")]),t._v(" "),v("th",[t._v("N")]),t._v(" "),v("th",{staticStyle:{"text-align":"right"}},[t._v("Mean")]),t._v(" "),v("th",{staticStyle:{"text-align":"right"}},[t._v("Error")]),t._v(" "),v("th",{staticStyle:{"text-align":"right"}},[t._v("StdDev")]),t._v(" "),v("th",{staticStyle:{"text-align":"right"}},[t._v("Median")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("NoShardingFirstOrDefaultAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("2.305 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.0419 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.0587 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("2.310 ms")])]),t._v(" "),v("tr",[v("td",[t._v("ShardingFirstOrDefaultAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("4.200 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.0793 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.0815 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("4.205 ms")])]),t._v(" "),v("tr",[v("td",[t._v("NoShardingNoIndexFirstOrDefaultAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("1,521.727 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("11.7909 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("11.0292 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("1,519.390 ms")])]),t._v(" "),v("tr",[v("td",[t._v("ShardingNoIndexFirstOrDefaultAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("1,841.243 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("36.1808 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("49.5247 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("1,826.228 ms")])]),t._v(" "),v("tr",[v("td",[t._v("NoShardingNoIndexCountAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("1,602.127 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("31.2448 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("26.0908 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("1,592.494 ms")])]),t._v(" "),v("tr",[v("td",[t._v("ShardingNoIndexCountAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("1,946.878 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("33.9453 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("31.7525 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("1,948.952 ms")])]),t._v(" "),v("tr",[v("td",[t._v("NoShardingNoIndexFirstOrDefaultAsync0w")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("703.570 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("10.4157 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("9.2332 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("705.236 ms")])]),t._v(" "),v("tr",[v("td",[t._v("ShardingNoIndexFirstOrDefaultAsync0w")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("857.718 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("16.4004 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("15.3409 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("858.675 ms")])]),t._v(" "),v("tr",[v("td",[t._v("NoShardingNoIndexFirstOrDefaultAsync99w")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("818.947 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("16.2501 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("24.8156 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("814.093 ms")])]),t._v(" "),v("tr",[v("td",[t._v("ShardingNoIndexFirstOrDefaultAsync99w")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("957.405 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("15.8800 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("16.9915 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("953.739 ms")])]),t._v(" "),v("tr",[v("td",[t._v("NoShardingNoIndexLikeToListAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("7,247.554 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("140.2374 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("191.9586 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("7,292.292 ms")])]),t._v(" "),v("tr",[v("td",[t._v("ShardingNoIndexLikeToListAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("7,232.702 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("106.7630 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("99.8662 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("7,184.900 ms")])]),t._v(" "),v("tr",[v("td",[t._v("NoShardingNoIndexToListAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("815.207 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("14.6120 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("21.4181 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("804.195 ms")])]),t._v(" "),v("tr",[v("td",[t._v("ShardingNoIndexToListAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("948.056 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("7.3526 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("6.8776 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("944.511 ms")])])])]),t._v(" "),v("h4",{attrs:{id:"mysql-5-7-data-rows-7553790-755w-innerdb-buffer-size-3g"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql-5-7-data-rows-7553790-755w-innerdb-buffer-size-3g"}},[t._v("#")]),t._v(" mysql 5.7,data rows 7553790=755w innerdb_buffer_size=3G")]),t._v(" "),v("p",[t._v("// * Summary *")]),t._v(" "),v("p",[t._v("BenchmarkDotNet=v0.13.1, OS=Windows 10.0.18363.1500 (1909/November2019Update/19H2)\nAMD Ryzen 9 3900X, 1 CPU, 24 logical and 12 physical cores\n.NET SDK=6.0.100\n[Host]     : .NET 6.0.0 (6.0.21.52210), X64 RyuJIT\nDefaultJob : .NET 6.0.0 (6.0.21.52210), X64 RyuJIT")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Method")]),t._v(" "),v("th",[t._v("N")]),t._v(" "),v("th",{staticStyle:{"text-align":"right"}},[t._v("Mean")]),t._v(" "),v("th",{staticStyle:{"text-align":"right"}},[t._v("Error")]),t._v(" "),v("th",{staticStyle:{"text-align":"right"}},[t._v("StdDev")]),t._v(" "),v("th",{staticStyle:{"text-align":"right"}},[t._v("Median")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("NoShardingFirstOrDefaultAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("10.092 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("1.6571 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("4.5082 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("8.677 ms")])]),t._v(" "),v("tr",[v("td",[t._v("ShardingFirstOrDefaultAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("9.082 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.1810 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.3445 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("9.096 ms")])]),t._v(" "),v("tr",[v("td",[t._v("NoShardingNoIndexFirstOrDefaultAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("6.586 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.0795 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.0705 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("6.565 ms")])]),t._v(" "),v("tr",[v("td",[t._v("ShardingNoIndexFirstOrDefaultAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("17.617 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.3345 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.3129 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("17.481 ms")])]),t._v(" "),v("tr",[v("td",[t._v("NoShardingNoIndexCountAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("6.498 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.1188 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.1415 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("6.454 ms")])]),t._v(" "),v("tr",[v("td",[t._v("ShardingNoIndexCountAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("17.791 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.2928 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.2739 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("17.805 ms")])]),t._v(" "),v("tr",[v("td",[t._v("NoShardingNoIndexFirstOrDefaultAsync0w")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("3.239 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.0285 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.0267 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("3.231 ms")])]),t._v(" "),v("tr",[v("td",[t._v("ShardingNoIndexFirstOrDefaultAsync0w")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("8.826 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.1719 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.1688 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("8.806 ms")])]),t._v(" "),v("tr",[v("td",[t._v("NoShardingNoIndexFirstOrDefaultAsync99w")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("3.260 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.0208 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.0194 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("3.257 ms")])]),t._v(" "),v("tr",[v("td",[t._v("ShardingNoIndexFirstOrDefaultAsync99w")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("8.634 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.1062 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("0.0994 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("8.653 ms")])]),t._v(" "),v("tr",[v("td",[t._v("NoShardingNoIndexLikeToListAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("26,941.543 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("138.5988 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("129.6454 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("26,920.578 ms")])]),t._v(" "),v("tr",[v("td",[t._v("ShardingNoIndexLikeToListAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("5,840.364 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("112.0434 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("115.0604 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("5,797.137 ms")])]),t._v(" "),v("tr",[v("td",[t._v("NoShardingNoIndexToListAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("25,865.136 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("115.6391 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("102.5111 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("25,847.258 ms")])]),t._v(" "),v("tr",[v("td",[t._v("ShardingNoIndexToListAsync")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("5,502.922 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("92.7201 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("86.7305 ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("5,483.847 ms")])])])]),t._v(" "),v("p",[t._v("具体可以通过first前两次结果来计算得出结论单次查询的的损耗为0.3-0.4毫秒之间,通过数据聚合和数据路由的损耗单次在0.3ms-0.4ms,其中创建dbcontext为0.1毫秒目前没有好的优化方案,0.013毫秒左右是路由表达式解析和编译,复杂表达式可能更加耗时,剩下的0.28毫秒为数据源和表后缀的解析等操作包括实例的反射创建和数据的聚合，\nsqlserver的各项数据在分表和未分表的情况下都几乎差不多可以得出在770w数据集情况下数据库还并未是数据瓶颈的关键，但是mysql可以看到在分表和未分表的情况下如果涉及到没有索引的全表扫描那么性能的差距将是分表后的表数目之多，测试中为5-6倍，也就是分表数目")])])}),[],!1,null,null,null);i.default=e.exports}}]);