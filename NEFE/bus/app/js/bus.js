$(function(){
	$("#bus_reload").on('touchstart', function(){
		$(this).css("opacity", 0.3)
	}).on('touchend', function(){
		$(this).css("opacity", 1)
	})


	/* 静态测试数据1：路线站点信息 */
	var obj={
		"retCode": 0,
		"retMsg": "Success",
		"retData": {
			"rn": "35路",
			"d": "0",
			"c": "00350",
			"ft": "0600",
			"lt": "2200",
			"l": [{
				"i": "268447",
				"n": "大学城(科学中心)总站",
				"sni": "10000507",
				"si": "10002344",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "268467",
				"n": "广大站",
				"sni": "10000981",
				"si": "10002952",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "268468",
				"n": "广大公寓站",
				"sni": "10000979",
				"si": "10002948",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "268469",
				"n": "广大生活区站",
				"sni": "10000980",
				"si": "10002950",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "268487",
				"n": "广大站",
				"sni": "10000981",
				"si": "10002951",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "268488",
				"n": "中部枢纽站",
				"sni": "10004166",
				"si": "10000060",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "268489",
				"n": "北亭村大街站",
				"sni": "10030369",
				"si": "10000614",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "273747",
				"n": "小洲路东站",
				"sni": "10030299",
				"si": "10028659",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "203788",
				"n": "瀛洲生态公园站",
				"sni": "10004364",
				"si": "10001199",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "203807",
				"n": "小洲村口站",
				"sni": "10003611",
				"si": "10000784",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "203789",
				"n": "瀛洲路站",
				"sni": "10004363",
				"si": "10001197",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "203790",
				"n": "瀛洲路口站",
				"sni": "10004362",
				"si": "10001195",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "203791",
				"n": "救捞局站",
				"sni": "10001848",
				"si": "10005855",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "203792",
				"n": "大沙村东站",
				"sni": "10000464",
				"si": "10002291",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "203793",
				"n": "大沙村站",
				"sni": "10000465",
				"si": "10002292",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "203794",
				"n": "轮修厂站",
				"sni": "10002245",
				"si": "10003368",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "203795",
				"n": "少教所站",
				"sni": "10002857",
				"si": "10004322",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "203808",
				"n": "后滘村站",
				"sni": "10001300",
				"si": "10004994",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "203796",
				"n": "沥滘站",
				"sni": "10002072",
				"si": "10004638",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "203809",
				"n": "三滘村站",
				"sni": "10002737",
				"si": "10004118",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "203797",
				"n": "海珠客运站",
				"sni": "10001177",
				"si": "10009883",
				"brt": "0",
				"sw": "1"
			}, {
				"i": "203810",
				"n": "南洲路口站",
				"sni": "10002501",
				"si": "10003776",
				"brt": "0",
				"sw": "1"
			}, {
				"i": "203811",
				"n": "晓港湾站",
				"sni": "10003579",
				"si": "10000792",
				"brt": "0",
				"sw": "1"
			}, {
				"i": "203798",
				"n": "瑞南新村站",
				"sni": "10002731",
				"si": "10004102",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "203799",
				"n": "五凤乡站",
				"sni": "10003419",
				"si": "10000531",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "203812",
				"n": "沙溪站",
				"sni": "10002812",
				"si": "10004235",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "203813",
				"n": "九十七中学站",
				"sni": "10001841",
				"si": "10005839",
				"brt": "0",
				"sw": "1"
			}, {
				"i": "203800",
				"n": "晓港中马路站",
				"sni": "10003587",
				"si": "10000801",
				"brt": "0",
				"sw": "1"
			}, {
				"i": "203801",
				"n": "海印桥南站",
				"sni": "10001156",
				"si": "10001731",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "203814",
				"n": "大沙头游船码头站",
				"sni": "10030273",
				"si": "10002302",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "203802",
				"n": "星之光电器城站",
				"sni": "10003756",
				"si": "10000986",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "203815",
				"n": "白云路东站",
				"sni": "10000092",
				"si": "10002447",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "203816",
				"n": "白云路站",
				"sni": "10000093",
				"si": "10001830",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "203803",
				"n": "越秀南路站",
				"sni": "10004043",
				"si": "10001396",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "203804",
				"n": "万福东站",
				"sni": "10003359",
				"si": "10000454",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "203805",
				"n": "万福路站",
				"sni": "10003360",
				"si": "10000456",
				"brt": "0",
				"sw": "0"
			}, {
				"i": "203817",
				"n": "文德路总站",
				"sni": "10003398",
				"si": "10000496",
				"brt": "0",
				"sw": "0"
			}]
		}
	}
	/* 静态测试数据1：路线站点信息 */


	/* 静态测试数据2：实时公交位置信息，有短线 */
	var obj2={
		"retCode": 0,
		"retMsg": "Success",
		"retData": [{
			"bl": [],
			"bbl": []
		}, {
			"bl": [{
				"i": "1913849",
				"si": "793023",
				"t": "1",
				"lo": "113.3644444",
				"la": "23.0391667",
				"sub": "793023",
				"no": "粤AP**56"
			}],
			"bbl": [{
				"i": "1913567",
				"si": "793023",
				"t": "1",
				"lo": "113.3655556",
				"la": "23.0391667",
				"sub": "793023",
				"no": "粤AD**90"
			}]
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": [{
				"i": "1913671",
				"si": "793023",
				"t": "1",
				"lo": "113.3711111",
				"la": "23.0547222",
				"sub": "793023",
				"no": "粤AH**55"
			}]
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": [{
				"i": "1913731",
				"si": "793023",
				"t": "1",
				"lo": "113.3202778",
				"la": "23.0577778",
				"sub": "793023",
				"no": "粤AL**49"
			}]
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [{
				"i": "1913645",
				"si": "793023",
				"t": "2",
				"lo": "113.3072222",
				"la": "23.0658333",
				"sub": "793023",
				"no": "粤AH**01"
			}],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [{
				"i": "1913945",
				"si": "793023",
				"t": "1",
				"lo": "113.2883333",
				"la": "23.0744444",
				"sub": "793023",
				"no": "粤AV**52"
			}],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [{
				"i": "1913803",
				"si": "793023",
				"t": "1",
				"lo": "113.2786111",
				"la": "23.0938889",
				"sub": "793023",
				"no": "粤AL**75"
			}],
			"bbl": []
		}, {
			"bl": [],
			"bbl": [{
				"i": "1913679",
				"si": "793023",
				"t": "1",
				"lo": "113.2783333",
				"la": "23.1019444",
				"sub": "793023",
				"no": "粤AD**57"
			}]
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [{
				"i": "1913946",
				"si": "793023",
				"t": "1",
				"lo": "113.2716667",
				"la": "23.1233333",
				"sub": "793023",
				"no": "粤AV**41"
			}],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}]
	}
	/* 静态测试数据2：实时公交位置信息，有短线 */


	/* 静态测试数据3：实时公交位置信息，有重叠 */
	var obj3={
		"retCode": 0,
		"retMsg": "Success",
		"retData": [{
			"bl": [],
			"bbl": [{
				"i": "1913946",
				"si": "793023",
				"t": "1",
				"lo": "113.3597222",
				"la": "23.0441667",
				"sub": "793023",
				"no": "粤AV**41"
			}]
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [{
				"i": "1913566",
				"si": "793023",
				"t": "1",
				"lo": "113.3669444",
				"la": "23.0461111",
				"sub": "793023",
				"no": "粤AD**15"
			}],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [{
				"i": "1913801",
				"si": "793023",
				"t": "1",
				"lo": "113.3513889",
				"la": "23.0586111",
				"sub": "793023",
				"no": "粤AM**48"
			}],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": [{
				"i": "1913953",
				"si": "793023",
				"t": "1",
				"lo": "113.3205556",
				"la": "23.0577778",
				"sub": "793023",
				"no": "粤AV**98"
			}]
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": [{
				"i": "1913850",
				"si": "793023",
				"t": "1",
				"lo": "113.3122222",
				"la": "23.0652778",
				"sub": "793023",
				"no": "粤AP**85"
			}]
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": [{
				"i": "1913761",
				"si": "793023",
				"t": "1",
				"lo": "113.2922222",
				"la": "23.0688889",
				"sub": "793023",
				"no": "粤AL**07"
			}]
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": [{
				"i": "1913847",
				"si": "793023",
				"t": "1",
				"lo": "113.2777778",
				"la": "23.0952778",
				"sub": "793023",
				"no": "粤AP**37"
			}, {
				"i": "1913943",
				"si": "793023",
				"t": "2",
				"lo": "113.2777778",
				"la": "23.0955556",
				"sub": "793023",
				"no": "粤AV**11"
			}]
		}, {
			"bl": [],
			"bbl": [{
				"i": "1913722",
				"si": "793023",
				"t": "1",
				"lo": "113.2783333",
				"la": "23.1016667",
				"sub": "793023",
				"no": "粤AL**01"
			}]
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": [{
				"i": "1913852",
				"si": "793023",
				"t": "1",
				"lo": "113.2769444",
				"la": "23.1211111",
				"sub": "793023",
				"no": "粤AP**83"
			}]
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": [{
				"i": "1913848",
				"si": "793023",
				"t": "1",
				"lo": "113.2677778",
				"la": "23.1225",
				"sub": "793023",
				"no": "粤AP**62"
			}]
		}, {
			"bl": [],
			"bbl": []
		}]
	}
	/* 静态测试数据3：实时公交位置信息，有重叠 */

	/*短线*/
	var obj4={
		"retCode": 0,
		"retMsg": "Success",
		"retData": [{
			"bl": [],
			"bbl": [{
				"i": "1913801",
				"si": "793023",
				"t": "1",
				"lo": "113.3597222",
				"la": "23.0441667",
				"sub": "793023",
				"no": "粤AM**48"
			}]
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": [{
				"i": "1913567",
				"si": "793023",
				"t": "1",
				"lo": "113.3677778",
				"la": "23.0466667",
				"sub": "793023",
				"no": "粤AD**90"
			}]
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": [{
				"i": "1913946",
				"si": "793023",
				"t": "1",
				"lo": "113.3430556",
				"la": "23.0488889",
				"sub": "793023",
				"no": "粤AV**41"
			}]
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [{
				"i": "1913850",
				"si": "793023",
				"t": "1",
				"lo": "113.3208333",
				"la": "23.0577778",
				"sub": "793023",
				"no": "粤AP**85"
			}],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": [{
				"i": "1913761",
				"si": "793023",
				"t": "1",
				"lo": "113.2922222",
				"la": "23.0691667",
				"sub": "793023",
				"no": "粤AL**07"
			}]
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": [{
				"i": "1913943",
				"si": "793023",
				"t": "1",
				"lo": "113.2780556",
				"la": "23.095",
				"sub": "793023",
				"no": "粤AV**11"
			}]
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": [{
				"i": "1913722",
				"si": "793023",
				"t": "1",
				"lo": "113.2772222",
				"la": "23.1205556",
				"sub": "793023",
				"no": "粤AL**01"
			}]
		}, {
			"bl": [],
			"bbl": [{
				"i": "1913566",
				"si": "793023",
				"t": "2",
				"lo": "113.2727778",
				"la": "23.1216667",
				"sub": "793023",
				"no": "粤AD**15"
			}]
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}, {
			"bl": [],
			"bbl": []
		}]
	}


	/* 等待信息数据1 */
	var obj10={
		"retCode": 0,
		"retMsg": "Success",
		"retData": {
			"id": "268489",
			"list": [{
				"count": 1,
				"time": 1
			}, {
				"count": 6,
				"time": 9
			}, {
				"count": -1,
				"time": -1
			}]
		}
	}
	/* 等待信息数据1 */

	/* 等待信息数据2 */
	var obj11={
		"retCode": 0,
		"retMsg": "Success",
		"retData": {
			"id": "203802",
			"list": [{
				"count": 2,
				"time": 6
			}, {
				"count": 2,
				"time": 6
			}, {
				"count": 6,
				"time": 13
			}]
		}
	}
	/* 等待信息数据2 */


	$("#bus_route_name").text((obj.retData).rn)		// 向页面插入路线名称
	var firstTime = ((obj.retData).ft).substr(0, 2) + ":" + ((obj.retData).ft).substr(2, 2)
	var lastTime = ((obj.retData).lt).substr(0, 2) + ":" + ((obj.retData).lt).substr(2, 2)
	$("#bus_route_time").text("首末班：" + firstTime + "-" + lastTime)	// 向页面插入首末班信息
	var lineObjArr = (obj.retData).l	// 路线信息数组
	var stations = []	// 站点名称数组
	$.each(lineObjArr, function(index, item){
		stations.push(item.n)	// 提取站点名称放到stations数组中
	})
	$("#bus_route_fromto").text(stations[0] + " → " + stations[(stations.length)-1])	// 向页面插入起点终点信息
	$.each(stations, function(index, item){		// 向页面插入全部公交站点
		$(".main").append('<div class="bus_station"><span id=station' + index + '>'+ item + '</span></div><div id=mark' + index + ' class="bus_mark"></div>')
	})
	var stationId = []	// 站点id数组
	$.each(lineObjArr, function(index, item){
		stationId.push(item.i)	// 提取站点id放到stations数组中
	})
	$.each(stationId, function(index, item){
		$("#station"+index).attr('data-sId', item)
	})
	


	/* 实时公交信息 */
	var bbl=[]		// 未进站公交
	var bl=[]		// 进站公交
	var cbbl={}		// 未进站重叠公交
	var cbl={}		// 进站重叠公交
	var dbbl=[]		// 未进站短线公交
	var dbl=[]		// 进站短线公交
	// var cdbbl={}		// 未进站重叠短线公交
	// var cdbl={}		// 进站重叠短线公交
	$.each(obj4.retData, function(index, item) {
		if((item.bbl).length) {											// 判断当前位置是否存在公交
			((item.bbl)[0].t == 1)?bbl.push(index):dbbl.push(index)		// t=1正常班次，t=2短线；将站点序号分别放入未进站正常公交数组bbl、短线公交数组dbbl
			if((item.bbl).length>1) {									// length>1则该位置存在2辆及以上公交
				cbbl[index] = (item.bbl).length
				// for (var i = 0; i < (item.bbl).length; i++) {			// 遍历公交数组，判断正常班次与短线班次，分别存储到对象中，key表位置，value表数量
					// ((item.bbl)[i].t == 1)?cbbl[index] = (item.bbl).length:cdbbl[index] = (item.bbl).length		// 例如：{18：2}表示第18个与第19个站点之间存在2辆公交
				// }
			}
		}
		if ((item.bl).length) {											// 判断当前站点是否存在公交
			((item.bl)[0].t == 1)?bl.push(index):dbl.push(index);		// t=1正常班次，t=2短线；将站点序号分别放入到站正常公交数组bl、短线公交数组dbl
			if((item.bl).length>1) {									// length>1则该位置存在2辆及以上公交
				cbl[index] = (item.bl).length
				// for (var i = 0; i < (item.bl).length; i++) {			// 遍历公交数组，判断正常班次与短线班次，分别存储到对象中，key表位置，value表数量
					// ((item.bl)[i].t == 1)?cbl[index] = (item.bl).length:cdbl[index] = (item.bl).length		// 例如：{18：2}表示第19个站点存在2辆公交
				// }
			}
		}
	})
	
	$.each(bbl, function(index, item){		// 标记未进站公交，插入图标
		$("#mark"+item).append('<img class="bus_icon" src="../images/icon_bus.png">')
	})
	$.each(bl, function(index, item){		// 标记进站公交，伪元素背景图片显示图标
		$('head').append('<style>#station' + item + ':after{content: "";background-image: url(./images/icon_bus.png);background-size: 25px 25px;position: absolute;width: 25px;height: 25px;transform: translateX(10px);}</style>');
	})
	$.each(dbbl, function(index, item){		// 短线未进站公交，插入图标
		$("#mark"+item).append('<img class="bus_icon" src="../images/icon_bus_d.png">')
	})
	$.each(dbl, function(index, item){		// 标记进站短线公交，伪元素背景图片显示图标
		$('head').append('<style>#station' + item + ':after{content: "";background-image: url(./images/icon_bus_d2.png);background-size: 25px 25px;position: absolute;width: 25px;height: 25px;transform: translateX(10px);}</style>');
	})
	if (!$.isEmptyObject(cbbl)) {			// 判断是否存在未进站重叠公交
		$.each(cbbl, function(key, value){	// 插入重叠数量的图标
			for (var i = 1; i < value; i++) {
				$("#mark"+key).append('<img class="bus_icon" src="../images/icon_bus.png">')
			}
		})
	}
	if (!$.isEmptyObject(cbl)) {			// 判断是否存在进站重叠公交
		$.each(cbl, function(key, value){	// 通过修改伪元素宽度以重复图标，标识重叠数量
			$('head').append('<style>#station' + key + ':after{content: "";width: ' + value*25 + 'px;}</style>');
		})
	}


	/* 等待信息 */
	$.each(obj11.retData.list, function(index, item){
		if (item.count != '-1') {
			$("#bus_wait_time"+index).text(item.time + "′")
			$("#bus_wait_stations"+index).text(item.count + "站")
		} else{
			$("#bus_wait_time"+index).text("")
			$("#bus_wait_stations"+index).text("")
			$("#bus_wait_time"+index).after("尚未发车")
		}
	})


/*	if-else展开代码
$.each(obj2.retData, function(index, item) {
	if((item.bbl).length) {
		if ((item.bbl)[0].t == 1) {
			bbl.push(index)
		} else{
			sbbl.push(index)
		}
		if((item.bbl).length>1) {		// 公交重叠判断
			for (var i = 0; i < (item.bbl).length; i++) {
				if ((item.bbl)[i].t == 1) {
					cbbl[index] = (item.bbl).length	// 保存重叠位置索引以及重叠数量
				} else{
					csbbl[index] = (item.bbl).length
				}
			}
		}
	}
	if ((item.bl).length) {
		if ((item.bl)[0].t == 1) {
			bl.push(index)
		} else{
			sbl.push(index)
		}
		if((item.bl).length>1) {
			for (var i = 0; i < (item.bl).length; i++) {
				if ((item.bl)[i].t == 1) {
					cbl[index] = (item.bl).length
				} else{
					csbl[index] = (item.bl).length
				}
			}
		}
	}
})
 */




// ready函数结尾 
})


