
//How to work promises
//Specified counter variable that value is 0
var promiseCount = 0;

function myFunction(){
let myCounter=++promiseCount;    //Make new variable that store counter value with increment 

let demo = document.getElementById('demo');
   demo.insertAdjacentHTML('beforeend',myCounter+') Started (<small>Sync code started</small>)<br/>');//Parse the html and xml in a specifies pattern DOM tree

//Create new promise   
  let p1=new Promise(
   (resolve,reject)=>{
      demo.insertAdjacentHTML('beforeend',myCounter+')Promise Started<small>ASync code started</small>)<br/>'); 
		  window.setTimeout(
		     function(){                  //callback function
	     	   resolve(myCounter);	  
	         },Math.random() * 2000 + 1000);	   
	   
     }
  );
   //promise call
   p1.then                                       //If resolve fulfilled
       (function(val){
	      demo.insertAdjacentHTML('beforeend',val+')Promise fulfilled (<small>Sync code Terminated</small>)<br/>');
   })
    .catch(                     
	(reason)=>{
	   
	  console.demo('not working('+reason+')here.'); //specifies the error or rejected  
   });


  demo.insertAdjacentHTML('beforeend',myCounter+')Promise made(<small>Sync code terminated</small>)<br/>');
  
}if("Promise" in window){         //I personally like to check the promise    
	
	let btn=document.getElementById("btn");
	
    	btn.addEventListener("click",myFunction);
	
}else{
	demo=document.getElementById('demo');
	demo.innerHTML='your code not running that time your browser not support<code>Promise<code> this time';
  }




