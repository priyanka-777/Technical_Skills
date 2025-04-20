// keyof gives you a union of the keys in an object type.

type Person={
  name:string,
  age:number
}
type random = keyof Person
// randon type will have name | age

function getValue(obj: Person, key: keyof Person) {
  return obj[key];
}

const u: Person = { name: "Priya", age: 23 };
console.log(getValue(u, "name")); // "Priya"


// Use typeof in TypeScript to extract the type of a variable or object, so you can reuse it.

const user = {
    name: "Priyanka",
    age: 24,
  };
  
type User = typeof user;
// Same as:
  // type User = {
  //   name: string;
  //   age: number;
  // }
  
let people: (typeof user)[] = [
  {
      name: "priya",
      age: 21
  },
  {
      name: "dev",
      age: 25
  }
]
  
  