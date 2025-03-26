//promises declaration- to simplify function handling from callbacks we use promises
// will execute atfer 3 seconds and return promise instead of value.
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('this is the eventual value the promise will return');
    }, 300);
  });
  
  console.log(myPromise);

// without any function inside promise will directly resolve it.
const anotherPromise = Promise.resolve("this is the eventual value the promise will return")

console.log(anotherPromise);

// we use reject for failure cases


const promise1=new Promise((resolve,reject)=>{
    let a =false;
    setTimeout(()=>{
        return (a)?resolve("a is found"):reject("a is not found");
    },3000);
});

// we need to use then() to perform a task after resolving the promise
// and catch after rejectinig the promise

promise1
    .then(result => console.log(result))  // Handles resolve
    .catch(error => console.error(error)); // Handles reject
// after 3 seconds in myPromise , it will execute this
myPromise.then(message=>console.log(message));

// promise chaining -to avoid callback hell we can use this - we can attach multiple .then handlers in which result of previous .then handler is automatically passed to the next .then handler.

const promise2=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    let sum=4+5;
    !isNaN(sum)?resolve(sum):reject("Error: Not a number");
  },1000);
})

promise2.then(result=>{console.log("first .then message")
          return result})
        .then(result=>{console.log("second . then message")
                console.log(result)})
        .catch(result=>console.log(result));

// promise methods-All these methods are useful when you want to execute multiple asynchronous tasks at the same time when those tasks are not dependent on each other (which saves a lot of time).

  // promise.all()-This method is used to execute multiple asynchronous tasks simultaneously without having to wait for another task to finish.
  const promise11 = new Promise((resolve, reject) => resolve('promise1 success'));
const promise22 = new Promise((resolve, reject) => reject('promise2 failed'));
const promise33 = new Promise((resolve, reject) => resolve('promise3 success'));

//Promise.all needs an array of promises as its argument.

Promise.all([promise11, promise22, promise33])
  .then((result) => {
    console.log('resolved', result); // resolved ["promise1 success", "promise2 success", "promise3 success"]
  })
  .catch((error) => {
    console.log('rejected', error);
  });
// if any promise is rejected then it will display that error only in catch and other promises will execute normally without effecting

// Promise.allSettled method-This method is useful when you want to know the result of each task even though they are rejected.

const promise4 = new Promise((resolve, reject) => resolve('promise1 success'));
const promise5 = new Promise((resolve, reject) => resolve('promise2 success'));
const promise6 = new Promise((resolve, reject) => resolve('promise3 success'));

Promise.allSettled([promise4, promise22, promise6]).then((result) => {
  console.log('resolved', result);
});

/* output from `.then`:
resolved [
  {
    "status": "fulfilled",
    "value": "promise1 success"
  },
  {
    "status": "fulfilled",
    "value": "promise2 success"
  },
  {
    "status": "fulfilled",
    "value": "promise3 success"
  }
]
*/