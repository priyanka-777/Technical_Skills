// object declaration

const object1 : {name:string;age:number}={
    name:"priya",
    age:21
}
//This is fine for simple one-time use, but not reusable.

//use type to declare the object .
type User={
    name:string,
    age:number;
    ismarried?:boolean // we can also add optional parameter which means we can give or not give that parameter while initilizing the object.
}
const user1:User={
    name:"dev",
    age:20
}
console.log(user1);
const user2:User={
    name:"abc",
    age:20
} // likewise we can reuse the type in different objects


// declaring objects using interface
interface Person {
    name:string,
    age:number
}
const user3:Person={
    name:"def",
    age:20
}
//  generally how we send objects in functions
function printUser1(user:Person):void{
    console.log(`${user.name} is ${user.age} years old`);
}
printUser1(user3);

// destructuring objects

function printUser({name,age}:{name:string,age:number}):void{
    console.log(`${name} is ${age} years old`);
}
printUser({name:"priya",age:26});
printUser(user1);


