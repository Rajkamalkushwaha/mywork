//ES7 - Async Await make the syntax look prettier

const isMomHappy=true;

//Create promise

const WillIGetNewMobile=new Promise(
     (resolve,reject)=>{
          if(isMomHappy){
	     const phone={
			 color:'black',
			 brand:'samsung'
			 };
         resolve(phone);			 
		  }
		else{
			const reason=new Error("Mom is not happy"); 
		      reject(reason);
		}
	}
   );		
	
//2nd Promise

async function showFriend(phone){
  
  return new Promise((resolve,reject)=>{
	
	var message='I get new mobile' +phone.color+ '' +phone.brand+ 'phone';
	
	resolve(message);
   });
 };
	
//call promise

async function askMom(){
	try{
	console.log('Before asking mom');
	let phone=await WillIGetNewMobile;
	let message=await showFriend(phone);
	console.log(message);
	console.log('After asking mom');
	}
	catch(error){
		console.log(error.message);
	}
}

(async()=>{
await askMom();
})();
		