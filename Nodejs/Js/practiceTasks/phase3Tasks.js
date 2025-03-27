// Write a pure function that returns a new array with doubled numbers.

const arr = [1,2,3,4];
const doubledNumbers= arr=>arr.map(num=>num*2);
const arr2=doubledNumbers(arr);
console.log(arr2);

//Implement a function that takes another function as an argument and applies it to an array.
const doubledNumbers1 = num => num*2 ;
const applyfunction = (arr,func)=>arr.map(func);
const doubled = applyfunction(arr,doubledNumbers1);
console.log(doubled);

//Implement a recursive function for calculating factorial.

function calculateFactorial(num){
    if(num===0) return 1;
    let factorial=num*calculateFactorial(num-1);
    return factorial;
}
console.log(calculateFactorial(3));

//Use closures to create a counter function.

function closure(){
    let count=0;
    return{
        increment:()=>console.log(++count),
        decrement:()=>console.log(--count),
        reset:()=>{
            count=0;
            console.log("count resets to 0");
        },
        getCount: () => count

    }
    
}

const callClosure=closure();
callClosure.increment();
callClosure.increment();
callClosure.decrement();
console.log(callClosure.getCount());