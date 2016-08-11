/* 
 *  type函数用于识别标准类型和内置对象类型，语法如下：
 *  	var t = type(obj);
 *  	
 *  typeof(1) // t==="number"
 *  typeof(new Number(1)) // t==="number"
 *  typeof("abc") // t==="string"
 *  typeof(new String("abc")) // t==="string"
 *  typeof(true) // t==="boolean"
 *  typeof(undefined) // t==="undefined"
 *  typeof(null) // t==="null"
 *  typeof({}) // t==="object"
 *  typeof([]) // t==="array"
 *  typeof(new Date) // t==="date"
 *  typeof(/\d/) // t==="regexp"
 *  typeof(function(){}) // t==="function"
*/

function type (obj) {
	toString = Object.prototype.toString
	var objtype = ((toString.call(obj)).slice(1, -1)).split(" ")
	return (((toString.call(obj)).slice(1, -1)).split(" ")).pop()
}