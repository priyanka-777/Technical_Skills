//promises declaration
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