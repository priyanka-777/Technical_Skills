/* Basic syntax:
function functionName(param1: Type1, param2: Type2): ReturnType {
  // function body
}
*/

function addNumbers(num1:number,num2:number):number{
    return num1+num2 ;
}
console.log(addNumbers(1,3));
// add(5, "3"); // ❌ Error: Argument of type 'string' is not assignable to type 'number'

//optional parameter in functions-if a parameter is not required, mark it as optional with a ?.

function greet(name:string,greeting?:string):string{ // we need to give optional parameter as last parameter in function declaration
    return `${greeting || "Hello"}, ${name}!`;
}
console.log(greet("priya"));
console.log(greet("priya","hey"));

//default parameters
function multiply(a: number, b: number = 2): number { // we need to give default parameters also at last in functions
    return a * b;
  }
  
console.log(multiply(5));  // 10
console.log(multiply(4,3)); // 12  

// function expressions with types

const add:(a:number,b:number)=>(number)=(a,b)=>{
    return a+b;
}
console.log(add(10,2));

// void type -The void type means a function does not return a value.

function message(message1:string):void{
    console.log(message1);
}
console.log(message("hey priya"))

// rest parameter in functions
function sumAll(...nums: number[]): number {
    return nums.reduce((acc, val) => acc + val, 0);
  }
  
  console.log(sumAll(1, 2, 3, 4)); // 10
  
// typing variables as functions

// basic function variable typing
let greeting:(name:string)=>void;

greeting=function(name){
  console.log(`Hello ${name}`);
}
greeting("Dev"); // Hello Dev

/*(name: string) → parameter type

=> void → return type*/

// function with multiple parameters

let add1: (a: number, b: number) => number;

add1 = (a, b) => a + b;

console.log(add1(5, 3)); // 8

// using type or interface

type MathOperation = (x: number, y: number) => number;

let multiply1: MathOperation = (x, y) => x * y;
let divide: MathOperation = (x, y) => x / y;
