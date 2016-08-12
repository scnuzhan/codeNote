Function.prototype.bin = function(obj){ 
    var fn = this
	return function () {
		return fn.apply(obj, arguments)
	}
}

// function move(x, y) {
//     this.x += x;
//     this.y += y;
// }
// var point = {x:1, y:2};
// var pointmove = move.bin(point, 2, 2);
// pointmove(); // {x:3, y:4}

// function move(x, y) {
//     this.x += x;
//     this.y += y;
// }
// var point = {x:1, y:2};
// var pointmove = bin(move,point, 2, 2);
// pointmove(); // {x:3, y:4}


// function ar () {
// 	console.log(arguments)
// }