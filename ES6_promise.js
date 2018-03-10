//ES6 / ES2015 - Modern browsers, NodeJs v6

const isMomHappy=true;

//Create promise

const willIGetNewPhone=new Promise(
    (resolve,reject)=>{
	    if(isMomHappy){
			const phone={
				color:'black',
				brand:'samsung'
				};
			resolve(phone);
		}else{
		const reason=new Error('mom is not happy');
		reject(reason);
         }
    }
);
//Creating show promise
const showFriend=function(phone){
	
	const message='I get new mobile' +phone.color+ ' ' +phone.brand+ 'phone';
    return Promise.resolve(message);
	};

	
	//call promises
	
	const askMom=function(){
		willIGetNewPhone
		.then(showFriend)
		.then(fulfilled=>console.log(fulfilled))
		.catch(error=>console.log(error.message));
	};
	askMom();


	
	