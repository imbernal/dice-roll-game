//Test 1
var arr = [1,2,3,4,5,6,7,8,9];

var evenArr = [];

evenArr.push(arr.map(item=>{
	if (item%2==0)
		return item;
}));

console.log(evenArr);