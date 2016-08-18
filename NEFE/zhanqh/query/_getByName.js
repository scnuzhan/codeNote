var http = require('http')
var querystring = require('querystring')
var base = require('./base')


/* 通过路线名查找 */
function getByName(queryData){
	var route;
	callback(queryData);
	return route;
}

function callback(data){
	var params = base.createBase(data)

	var postData = querystring.stringify(params)

	var options = {
		hostname: 'nxxtapi.gzyyjt.net',
		port: '9009',
		path: '/xxt_api/bus/getByName',
		method: 'post',
		headers: {
		    'Content-Type': 'application/x-www-form-urlencoded',
		    'Content-Length': postData.length
		  }
	}

	var req = http.request(options, function(res) {
	  console.log('STATUS: ' + res.statusCode);
	  // console.log('HEADERS: ' + JSON.stringify(res.headers));
	  res.setEncoding('utf8');
	  res.on('data', function (chunk) {
	  	route = chunk;
	    console.log('BODY: ' + chunk);
	  });
	});

	req.on('error', function(e) {
	  console.log('problem with request: ' + e.message);
	});

	// write data to request body
	req.write(postData);
	req.end();
}


exports.getByName = getByName;