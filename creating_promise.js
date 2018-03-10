
//Creating a promise

var isMomHappy=false;

//promise
var willGetNewPhone=new Promise(
      function(resolve,reject){
      	if(isMomHappy){
		   var phone={
			   brand:'samsung',
			   colore:'black'
		   };
	
	        resolve(phone);  //fulfilled
	    }
	     else{
		    var reason=new Error('Mom is not happy'); 
		reject('reason');  //reject
     }
    }
);