//The || operator returns the first truthy value.

/*The following are the only six values that are considered to be falsy values in JavaScript.

false
undefined
null
""(empty string)
NaN
0 */

const value1 = 1;
const value2 = 23;
const result2 = value1 || value2; 
console.log(result2); // 1

const value3 = 0;
const value4 = 23;
const value5 = "Hello";
const result1 = value3 || value4 || value5; 
console.log(result1); // 23

//The issue with the || operator is that it doesn’t distinguish between false , 0 , an empty string "", NaN , null and undefined . They all are considered as falsy values.

/* 
In the expression x ?? y,

If x is either null or undefined then only result will be y.
If x is not null or undefined then the result will be x. */

let result = undefined ?? "Hello";
console.log(result); // Hello

result = null ?? true; 
console.log(result); // true

result = false ?? true;
console.log(result); // false

result = 45 ?? true; 
console.log(result); // 45

result = "" ?? true; 
console.log(result); // ""

result = NaN ?? true; 
console.log(result); // NaN

result = 4 > 5 ?? true; 
console.log(result); // false because 4 > 5 evaluates to false

result = 4 < 5 ?? true;
console.log(result); // true because 4 < 5 evaluates to true

result = [1, 2, 3] ?? true;
console.log(result); // [1, 2, 3]