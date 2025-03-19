
// Functions - can be declared in 3 ways 
// 1. function declaration , 2. function expression , 3.arrow functions

// 1. function declaration means declaring a Function using function kerword giving a name to the function

function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Priya")); // Output: Hello, Priya!

// 2. function expression means we will declare a variable and add the anonymos function to it , means we dont add any name for function, 
// we can use variable name only to access the function.

const greet1 = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet1("Priya")); // Output: Hello, Priya!

// 3. arrow functions - here we dont even use function keyword , we will directly pass the parameters if any

const greet2 = (name) => `Hello, ${name}!`;
console.log(greet2("Priya")); // Output: Hello, Priya! OR
const hey = () => "hai";
console.log(hey());

