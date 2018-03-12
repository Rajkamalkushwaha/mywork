//Create promise and return set Time loop
function callAfter2Second(x){
    return new Promise(resolve=>{
    setTimeout(()=>{
       resolve(x);
	     },3000);
	});
}

//call promise and return value with await expression in use a variable
async function add1(x){
     var a=await callAfter2Second(40);
     var b=await callAfter2Second(50);
       return x+a+b;
}

add1(10).then(result=>{
	document.write(result)});//return value after 6 second

//call promise and return value with await expression in use return
async function add2(x){
	var c=callAfter2Second(50);
	var d=callAfter2Second(40);
	 return x+await c+await d;
	}

add2(10).then(result=>{
	document.write(result)});//return value after 3 second