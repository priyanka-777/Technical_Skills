//Immutability ensures that functions do not have side effects—meaning they do not alter the state of variables or objects outside their scope. 

//1.Avoid mutations in functions, means return new copy instead of editing original one.
// use spread operator

function addItemToArray(arr, item) {
    // Return a new array instead of mutating the original one
    return [...arr, item];
}

const originalArray = [1, 2, 3];
const newArray = addItemToArray(originalArray, 4);

console.log(originalArray); // [1, 2, 3]
console.log(newArray); // [1, 2, 3, 4]

// 2. avoid side effects - stop changing the value of variable out of the scope.

let count = 0;

function incrementCounter(value) {
    return value + 1;
}

const newCount = incrementCounter(count);

console.log(count); // 0
console.log(newCount); // 1

// example for creating side effects

let sideCount=0;
const getid=()=>{
    ++sideCount;
}
console.log(sideCount);
getid();
getid();
console.log("sideCount="+sideCount);

// use const type varibles- so it will trow an error if we try to edit the variable value

// Using map(), filter(), reduce() Instead of Mutating Method - stop using loops and control statements


