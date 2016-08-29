$(function () {
	var routeName
	$("#search_input").keydown(function(event){
		if(event.keyCode==13){ 
			routeName = $(this).val()
			$('#weui_cells').detach()

			// 生成节点
			var $weui_cells = $('<div class="weui_cells weui_cells_access" id="weui_cells"></div>')
			$('#search_bar').after($weui_cells)

			// 发起post请求
			// $.post(...)
			// getByName 根据线路或站点搜索
			$.post("/bus/getByName", {name: routeName}, function(data){
				var obj = JSON.parse(JSON.parse(data))	// JSON字符串中含有转义字符串，需调用两次JSON.parse()
				var routeArr = (obj.retData).route
				$.each(routeArr, function(index, item){
					var route_detail = '<a class="weui_cell" href="/bus/rs?routeId=' + item.i + '"><div class="weui_cell_bd weui_cell_primary"><p>' + item.n +'</p></div><div class="weui_cell_ft"><!-- + item.start + -- + item.end + --></div></a>'
					$('#weui_cells').append($(route_detail))
				})
			})
			
		/*	// 测试代码 
			console.log('post请求数据：' + JSON.stringify({name: routeName}))*/

		/*	// 模拟数据测试
			var obj = {
				"retCode": 0,
				"retMsg": "Success",
				"retData": {
					"station": [],
					"route": [{
						"i": "401",
						"n": "35路",
						"start": "大学城(科学中心)总站",
						"end": "文德路总站"
					}, {
						"i": "9211",
						"n": "南沙35路",
						"start": "东涌地铁站总站",
						"end": "大稳村水上绿道总站"
					}, {
						"i": "23",
						"n": "夜35",
						"start": "嘉禾（冶金研究所）总站",
						"end": "员村生活区（中山六院）总站"
					}]
				}
			}*/

		}

		

	})
}) 