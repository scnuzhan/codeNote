//  函数formatDate用于将日期对象转换成指定格式的字符串，语法如下：
//  	var str = formatDate(date, pattern);
//  	其中pattern的全格式为"yyyy-MM-dd HH:mm:ss"
//  使用范例如下：
//  	var date = new Date(2001, 8, 11, 8, 26, 8);
//  	formatDate(date, "yyyy");		返回值： "2001"
//  	formatDate(date, "yyyy-MM-dd");	    返回值： "2001-09-11"
//  	formatDate(date, "yyyy-MM-dd HH");		返回值： "2001-09-11 08"
//  	formatDate(date, "yyyy-MM-dd HH:mm:ss");    返回值： "2001-09-11 08:26:08"



function formatDate (date, str) {
	var year, month, day, hour, minute, second
	year = date.getFullYear()
	month = date.getMonth() + 1
	day = date.getDate()
	hour = date.getHours()
	minute = date.getMinutes()
	second = date.getSeconds()
	if (str === "yyyy") {
		return year
	}
	if (str === "yyyy-MM-dd") {
		return year + '-' + (month>9?month:'0'+month) + '-' + (day>9?day:'0'+day)
	}
	if (str ===  "yyyy-MM-dd HH") {
		return year + '-' + (month>9?month:'0'+month) + '-' + (day>9?day:'0'+day) + ' ' + (hour>9?hour:'0'+hour)
	}
	if (str ===  "yyyy-MM-dd HH:mm:ss") {
		return year + '-' + (month>9?month:'0'+month) + '-' + (day>9?day:'0'+day) + ' ' + (hour>9?hour:'0'+hour) + ':' + (minute>9?minute:'0'+minute) + ':' + (second>9?second:'0'+second)
	}
}