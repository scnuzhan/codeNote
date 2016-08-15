function getElementsByClassName = function(element, names) {
    //如果浏览器支持getElementsByClassName()就直接返回
    if(document.getElementsByClassName){
        return document.getElementsByClassName(names)
    }
    //此数组用于保存遍历后得到的class元素
    var elements = new Array();
  
    for (var i = 0; i < element.length; i++) {
        var child = element[i];
        var classNames = child.names.split(' ');            //分割多个class元素
        for (var j = 0; j < classNames.length; j++) {
            if (classNames[j] == names) {
                elements.push(child);
                break;
            }
        }
    }
    return elements;
};

function getCookies() { 
  var cookie={};
  var all= document.cookie;
  if(all=="")
    return cookie;
  var list =all.split(";");
      for(var i=0;i<list.length;i++){
        var item =list[i];
        var p=item.indexOf("=");
        var name=item.substring(0,p);
        name=decodeURLComponent(name);
        var value=item.substring(p+1);
        value=decodeURLComponent(value);
        cookie[name]=value;
      }
  return cookie;
}



function fadeout(element){
    var val = 1;  
    var timer = null; 
    timer = setInterval(function() { 
        setOpacity(element, val);
        val -= 0.1;
        if(val<0){clearInterval(timer);} 
    }, 100);    
     
    function setOpacity(element,value){
        element.filters ? element.style.filter ='alpha(opacity='+100*value+')' : element.style.opacity =value;
    }
}