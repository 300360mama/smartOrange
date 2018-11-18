//variant 1

function middle(){
	let i = 0;
	let count = 0;
	
	return function(num){
		i++;
		count = count+num;
		return count/i;
	}
}


let a = middle();
console.log(a(6));
console.log(a(4));
console.log(a(11));