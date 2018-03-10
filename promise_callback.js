//Promises: Callback

function addAsync(num1,num2,callback){
	
	return $.getJSON('http://www.example.com',{
		
	num1: num1,
    num2: num2	
		
	},callback);

}
	
addAsync(1,2, success=>{
    const result=success;
  
});
