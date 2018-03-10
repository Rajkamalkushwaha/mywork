
//chaining Promises
//create new promise
var isMomHappy=true;

//promise

var willIGetNewPhone=new Promise(function(resolve,reject){
            if(isMomHappy){
			var phone={
				color:'black',
				brand:'samsung'
			}	
			 resolve(phone);	
			}	
		else{
			var reason=new Error('Mom is not happy');

              reject(reason);

			}
         }
		);
     
//call Promise

var askMom=function(){
	willIGetNewPhone
	.then(function(fulfilled){
		console.log(fulfilled);  
     	}
    )
	.catch(function(error){
		console.log(error.message);
	}
	);
};
	askMom();

     //chaining
	//2nd Promise

var showFriend=function(phone){
	
	var message='Hey Friend I Get New Mobile' + phone.color + ' ' + phone.brand + 'phone';
	

   return Promise.resolve(message);  
	
};

//call the chain promise

var askFriend=function(){
      willIGetNewPhone
		.then(showFriend)// chain 
			.then(function(fulfilled){
				console.log(fulfilled);
     	     })
		   .catch(function(error){
			   
			  console.log(error.message);
		   });
  };
askFriend();