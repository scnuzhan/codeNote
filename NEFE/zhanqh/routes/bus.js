/* GET 公交查询 */
/* 路由级中间件 */

var express = require('express');
var router = express.Router();
var xxt_bus = require('../controllers/xxt_bus');

// body-parser 解析post请求参数
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var queryData; // 查询数据，obj
var path; // post请求路径，string


// 首页
router.get('/', function(req, res) {
	res.sendfile('./views/bus.html');
});


/* 首页搜索路由 getByName */
router.post('/getByName', urlencodedParser, _cal0, function(req, res, next){
	xxt_bus.xxt_bus(queryData, path).then(function(data){
		// console.log(data);
		res.send(JSON.stringify(data));
	})
});

function _cal0(req, res, next){
	// 生成查询对象数据
	queryData = {
		name: req.body.name
	};
	// 设置post请求路径
	path = '/xxt_api/bus/getByName'
	next();
}
/* getByName */


/* 首页搜索结果列表点击跳转路由处理，获取get请求url参数 */
router.get('/rs', function(req, res) {
	console.log(req.query.routeId);
	res.send('测试query获取get请求url参数')
});


/* routeStation_getByRouteIdAndDirection */
router.post('/routeStation/getByRouteIdAndDirection', urlencodedParser, _cal1, function(req, res, next){
	xxt_bus.xxt_bus(queryData, path).then(function(data){
		// console.log(data);
		res.send(JSON.stringify(data));
	})
});

function _cal1(req, res, next){
	// 生成查询对象数据
	queryData = {
		routeId: req.body.routeId,
		direction: req.body.direction
	};
	// 设置post请求路径
	path = '/xxt_api/bus/routeStation/getByRouteIdAndDirection'
	next();
}
/* routeStation_getByRouteIdAndDirection */


/* runbus_getByRouteAndDirection */
router.post('/runbus/getByRouteAndDirection', urlencodedParser, _cal2, function(req, res, next){
	xxt_bus.xxt_bus(queryData, path).then(function(data){
		// console.log(data);
		res.send(JSON.stringify(data));
	})
});

function _cal2(req, res, next){
	// 生成查询对象数据
	queryData = {
		routeId: req.body.routeId,
		direction: req.body.direction
	};
	// 设置post请求路径
	path = '/xxt_api/bus/runbus/getByRouteAndDirection'
	next();
}
/* runbus_getByRouteAndDirection */


/* info_waitTime */
router.post('/info/waitTime', urlencodedParser, _cal3, function(req, res, next){
	xxt_bus.xxt_bus(queryData, path).then(function(data){
		// console.log(data);
		res.send(JSON.stringify(data));
	})
});

function _cal3(req, res, next){
	// 生成查询对象数据
	queryData = {
		num: 3,
		routeStationId: req.body.routeStationId
	};
	// 设置post请求路径
	path = '/xxt_api/bus/info/waitTime'
	next();
}
/* info_waitTime */



module.exports = router;