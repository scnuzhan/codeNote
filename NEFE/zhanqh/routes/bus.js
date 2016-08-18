/* GET 公交查询 */
/* 路由级中间件 */

var express = require('express');
var router = express.Router();
var getByName = require('../query/getByName');

// body-parser 解析post请求参数
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var routeName; // 查询数据，路线名称，对象


router.get('/', function(req, res) {
	res.sendfile('./views/bus.html');
});
router.post('/search', urlencodedParser, _cal, function(req, res, next){
	getByName.getByName(routeName).then(function(routeDetail){
		// console.log(routeDetail);
		res.send(JSON.stringify(routeDetail));
	})


});

function _cal(req, res, next){
	// 生成查询对象数据
	routeName = {
		name: req.body.name
	};
	next();
}



module.exports = router;