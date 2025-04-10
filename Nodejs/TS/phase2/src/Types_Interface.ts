/*Both type and interface can be used to describe the shape of data, 
especially objects. Most of the time, they behave similarly — but there are key differences.*/

// using type
type User = {
    name: string;
    age: number;
  };

  // using interface
interface Users{
    name: string;
    age: number;
}

// extending 
// interface uses extend keyword
interface employee extends Users{
    emyplyeeId:number;
}
const employee1:employee={
    name:"abc",
    age:21,
    emyplyeeId:12345
}
console.log(employee1)

// type uses intersection '&'
type employees =User & {
    employeeId:number
} // same as above example

//type works with primitive aliases, tuples, and more:

type Age = number;
type RGB = [number, number, number];
// interface only works with object-like structures