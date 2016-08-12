function fibonacci (n) {
	var sum = 0, a = 0, b=1
	for (var i = 1; i < n; i++) {
		sum = a + b
		a = b
		b = sum 
	}
	return sum
}