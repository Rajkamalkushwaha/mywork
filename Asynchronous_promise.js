//Asynchronous promise

var isMomHappy=true;

//Create Promises
var willIGetNewPhone=new Promise(function (resolve,reset){
     if(isMomHappy){
	var phone={
       color:'black',
	   band:'samsung'       
       };
	resolve(phone);
  }else{
   var erro=new Error("Mom is not happy");
     reset(erro);
  }
});
//make 2nd promises
var showFriend=function(phone){
	return new Promise(function(resolve,reject){     //fulfilled 
     var message='Hey friend, I have a new' + phone.color+' '+phone.brand+'phone';
		
     resolve(message);
     }
   )
};
//call promise 
var askMom=function(){
      console.log('before ask mom');
	  willIGetNewPhone
	  .then(showFriend)
       .then(function(fulfilled){
	   console.log(fulfilled);
	   
	   })
	   .catch(function(error){
	   console.log(error.message);
	   });
   console.log('After ask Mom');
};

askMom();




//output
//before ask mom
//after ask mom 
//hyy friend i have new samsung phone
