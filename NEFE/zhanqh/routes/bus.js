/* GET 公交查询 */
/* 路由级中间件 */

var express = require('express');
var router = express.Router();
var getByName = require('../controllers/getByName');
var getByRouteIdAndDirection = require('../controllers/getByRouteIdAndDirection');
var getByRouteAndDirection = require('../controllers/getByRouteAndDirection');

// body-parser 解析post请求参数
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var queryData; // 查询数据，对象


// 首页
router.get('/', function(req, res) {
	res.sendfile('./views/bus.html');
});

/* getByName */
router.post('/getByName', urlencodedParser, _cal0, function(req, res, next){
	getByName.getByName(queryData).then(function(data){
		// console.log(data);
		res.send(JSON.stringify(data));
	})
});

function _cal0(req, res, next){
	// 生成查询对象数据
	queryData = {
		name: req.body.name
	};
	next();
}
/* getByName */


/* routeStation_getByRouteIdAndDirection */
router.post('/routeStation/getByRouteIdAndDirection', urlencodedParser, _cal1, function(req, res, next){
	getByRouteIdAndDirection.getByRouteIdAndDirection(queryData).then(function(data){
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
	next();
}
/* routeStation_getByRouteIdAndDirection */


/* runbus_getByRouteAndDirection */
router.post('/runbus/getByRouteAndDirection', urlencodedParser, _cal2, function(req, res, next){
	getByRouteAndDirection.getByRouteAndDirection(queryData).then(function(data){
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
	next();
}
/* runbus_getByRouteAndDirection */



module.exports = router;