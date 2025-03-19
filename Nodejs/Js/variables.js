// var , let and const

// var means function scoped and can re-declare and update the values.

var tester = "hey hi";
function newFunction() {
    var hello = "hello";
}
console.log(hello); // error: hello is not defined

// re-declare
var greeter = "hey hi";
var greeter = "say Hello instead";

// update

var hello = "hello";
hello= "hi";

// let is block scoped means {} and cant re-declare only can update

let greeting = "say Hi";
let times = 4;
if (times > 3) {
     let hello = "say Hello instead";
     console.log(hello);// "say Hello instead"
 }
console.log(hello) // hello is not defined , but in var type we can access the variable from if block

// const means constant values , we can't re-declare and update them

const greeting1 = "say Hi";
greeting1 = "say Hello instead";// error: Assignment to constant variable.