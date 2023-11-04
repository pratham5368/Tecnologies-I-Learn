/*What is a Synchronous System?
In a synchronous system, tasks are completed one after another.

What is an Asynchronous System?
In this system, tasks are completed independently.
*/
// To Summarize Synchronous vs Asynchronous JS:
/*When three images are on a marathon, in a:

Synchronous system, three images are in the same lane. One can't overtake the other. The race is finished one by one. If image number 2 stops, the following image stops.*/
console.log(" I ");

console.log(" eat ");

console.log(" Ice Cream ");

//Asynchronous system, the three images are in different lanes. They'll finish the race on their own pace. Nobody stops for anybody:
console.log("I");

// This will be shown after 2 seconds

setTimeout(()=>{
  console.log("eat");
},2000)

console.log("Ice Cream")

//How Does Async / Await Work in JavaScript?


// Promises vs Async/Await in JavaScript
//Before async/await, to make a promise we wrote this:

function order(){
   return new Promise( (resolve, reject) =>{

    // Write code here
   } )
}

/*Promises in JS -> resolve or reject
We used resolve and reject in promises like this:
*/
function kitchen(){

  return new Promise ((resolve, reject)=>{
    if(true){
       resolve("promise is fulfilled")
    }

    else{
        reject("error caught here")
    }
  })
}

kitchen()  // run the code
.then()    // next step
.then()    // next step
.catch()   // error caught here
.finally() // end of the promise [optional]


/*Async / Await in JS -> try, catch
When we're using async/await, we use this format:
*/
//👇 Magical keyword
async function kitchen(){

   try{
// Let's create a fake problem      
      await abc;
   }

   catch(error){
      console.log("abc does not exist", error)
   }

   finally{
      console.log("Runs code anyways")
   }
}

kitchen()  // run the code

//How to Use JavaScript's Await Keyword

function toppings_choice (){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
  
        resolve( console.log("which topping would you love?") )
  
      },3000)
    })
  }

