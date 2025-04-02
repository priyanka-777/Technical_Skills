// A recursive function is a function that calls itself somewhere within the body of the function.

// example

function recursion(){
    // some body

    recursion() // call again same function in it.
}

// Every time you write a recursive function, three elements must be present. They are:
/*1. The function definition.
2. The base condition.
3. The recursive call.*/

// if we dont write base condition , thyen there can be possibility of infinite function call
/*
function doSomething(action) {
    console.log(`I am ${action}.`)
    doSomething(action)
  }
  
  doSomething("running")
  */

// example for recursive function

function tasks(n){
    if(n===0){
        console.log("task completed");
        return;
    }
    console.log(`doing task ${n}`);
    tasks(n-1);
}
tasks(3);

// factorial of a number 

function findFactorial(num){
    if(num===0) return 1;
    let factorial=num*findFactorial(num-1);
    return factorial;
}
console.log(findFactorial(5));