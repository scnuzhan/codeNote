// routes/index.js 路由信息


// body-parser 解析post请求参数
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })


module.exports = function (app) {
  app.get('/', function (req, res) {
    res.send('Home Page');
  });
  app.get('/blog', function(req, res){
    res.send('my blog');
  });
  app.get('/bus', function(req, res){
    res.sendfile('./views/bus.html');
  });
  // 处理post请求
  app.post('/bus/search', urlencodedParser, function (req, res) {

     // 输出 JSON 格式
     response = {
         // first_name:req.body.first_name,
         route_name:req.body.name
     };
     console.log(response);
     res.send(JSON.stringify(response));
  });
};