var sum=0, arr=[1,2,3,4]
arr.forEach(function(item, index, array){
	sum += item
})

var sum=0,arr=[1,2,3,4]
for (var i = arr.length - 1; i >= 0; i--) {
	sum += arr[i]
}

var sum=0,arr=[1,2,3,4]
while(i=arr.shift()){
	sum += i
}

var sum=0,arr=[1,2,3,4]
while(i=arr.pop()){
	sum += i
}

var arr=[1,2,3,4]
arr.reduce(function(sum, item, index, array){
	return sum += item
})

var sum=0,arr=[1,2,3,4]
(function(){
	return arr.map(function(item, index, array){
		return sum += item
	})[arr.length-1]
})()