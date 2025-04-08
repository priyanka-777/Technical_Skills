//Set up a simple TypeScript project.

// created simple ts project using tsc --init and added HelloWorld.ts program

//  Create functions with explicitly defined types.

function add(a:number,b:number):number{
    return a+b;
}
console.log(add(4,3));
export function greet(name: string): string {
    return `Hello, ${name}!`;
  }

//optional parameters
export function welcome(name: string, age?: number): string {
    return age
      ? `Welcome, ${name}. You are ${age} years old.`
      : `Welcome, ${name}.`;
  }
  
  export function repeat(message: string, times: number = 3): string {
    return message.repeat(times);
  }
// arrow functions with types
export const multiply = (a: number, b: number): number => a * b;

export const isEven: (num: number) => boolean = (num) => num % 2 === 0;
// imported these functions in main.js

//Define an object type using both type and interface.
type Users={
    name:string,
    age:number,
    isMarried?:boolean
}

interface Person{
    name:string,
    age:number,
    isMarried?:boolean
}
const user1:Users={
    name:"abc",
    age:21
}
const person1:Person={
    name:"def",
    age:9,
    isMarried:false
}
console.log(user1);
console.log(person1);

//Write a function that calculates the area of a rectangle using TypeScript.
 function calculateArea(height:number,width:number):number{
    return height*width;
 }
 const area=(calculateArea(4,3));
 console.log(`Area of given rectangle is ${area}` );

 // using arrow funxtions
 const calculateRectangleArea = (length: number, width: number): number => {
    return length * width;
  };
  
  //Create an array of user objects with specific types and iterate over them.
//create user type
  type User={
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  }
// create array of users
const users:User[]=[
    { id: 1, name: "Priyanka", email: "priyanka@example.com", isActive: true },
    { id: 2, name: "Ravi", email: "ravi@example.com", isActive: false },
    { id: 3, name: "Ayesha", email: "ayesha@example.com", isActive: true },
]
// iterate over them
users.forEach((user) => {
    console.log(`${user.name} (${user.email}) - Active: ${user.isActive}`);
  });