function Person (name, age) {
	this.name = name
	this.age = age
	this.introduce = introduce
}

function introduce () {
	return "I am " + this.name +", I am " + this.age +" years old! "
}