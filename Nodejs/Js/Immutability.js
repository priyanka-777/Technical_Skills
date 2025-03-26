// datatypes are two types 
// 1 . primitive type - uses stack and stores in it, they are immutable
// 2. reference data types - uses heap to store while stack stores the referenceid for each type from heap.

let arr1 =[1,2,3]
let arr2 = arr1;
arr1.push(4);
console.log(arr2); // [1,2,3,4] - because we are refering to same array in heap

// to avoid this we need to use spread operator for objects we need to use object.assign 

let object1={
    "name":"priya",
    "age":"20"
}
let object2 = Object.assign({},object1); // Object.assign(target, source)

//To prevent object mutability, you can use the Object.preventExtensions(), Object.seal(), and Object.freeze() methods.

// even if we use const on object declaration , still we can alter them.

//Immutability ensures that functions do not have side effects—meaning they do not alter the state of variables or objects outside their scope. 

//1.Avoid mutations in functions, means return new copy instead of editing original one.
// use spread operator

function addItemToArray(arr, item) {
    // Return a new array instead of mutating the original one
    return [...arr, item]; // used spread operator here
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


