//Asynchronous promise

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


//output
//before ask mom
//after ask mom 
//hyy friend i have new samsung phone