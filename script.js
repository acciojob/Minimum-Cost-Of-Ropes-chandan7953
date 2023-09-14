function calculateMinCost() {
  //your code here

	let str = document.getElementById("rope-lengths").value;
	const arr = str.split(",").map((x) => Number(x))
	let res = 0;
	while(arr.length > 1){
	   arr.sort((a,b) => b-a);
		let x = arr.pop();
		let y = arr.pop();
		let sum = x + y;
		if(arr.length != 0){
			res += sum;
		}
		arr.push(sum)
	}

	res += arr.pop()
	
  document.getElementById("result").innerHTML = res; 
  
}  
