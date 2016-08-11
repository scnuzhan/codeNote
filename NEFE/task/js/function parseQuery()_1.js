/*
 *  url查询参数解析函数parseQuery
 *  语法:
 *  	var obj = parseQuery(query)
 *  	query是被解析的查询参数，函数返回解析后的对象。
 *  范例：
 *  	var jerry = parseQuery("name=jerry&age=1");
 *  	jerry; 	返回值：{name: " jerry ", age: "1"}
 *  	
 *  	var tom = parseQuery("name= tom &age=12&gender&");
 *  	tom; 	返回值：{name: "tom", age: "12", gender: ""}
 */


function parseQuery(query){
	var params = (query.replace(/&/g, '\"\,\"')).replace(/=/g, '\":\"')
	if (params.slice(-1) == '\"') {
		params = params.slice(0,-2) + ':\"'
	};
	return JSON.parse('{\"' + params + '\"}')
}