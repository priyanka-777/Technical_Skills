// - Arrays (`number[]`, `string[]`, `Array<T>`)

let scores:number[]=[1,2,3,4,5]; // Array of numbers
scores.push(5); 
// scores.push("hello"); // ❌ Error: Argument of type 'string' is not assignable to type 'number'
console.log(scores); // [1,2,3,4,5,5]

let names:string[]=["a",'b','c']; // Array of strings
names.push("hey");
console.log(names); // ['a','b','c','hey']

let booleans:boolean[]=[true,false,false]; // Array os booleans
booleans.push(true);
console.log(booleans); //[ true, false, false, true ]

let mixedArray: (number | string)[] = [1, "two", 3, "four"];
mixedArray.push("hello");
mixedArray.push(5);
console.log(mixedArray); // Output: [1, "two", 3, "four",'hello',5]
// mixedArray.push(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

let arrayOfArrays: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]; // Array of arrays (2D array)

let arrayOfObjects: { name: string; age: number }[] = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
]; // Array of objects with properties

let arrayOfTuples: [string, number][] = [
    ['Alice', 25],
    ['Bob', 30],
    ['Charlie', 35],
]; // Array of tuples (string and number)

let arrayOfAny: any[] = [1, 'a', true, { name: 'Alice' }, [1, 2, 3]]; // Array of any type - it is not recomended to use

// Array<T> is a generic type that can be used to create arrays of any type

let arrayOfGenericNumber: Array<number> = [1, 2, 3, 4, 5]; // Array of numbers using generic type
let arrayOfGenericString: Array<string> = ['a', 'b', 'c', 'd', 'e']; // Array of strings using generic type
let arrayOfGenericBoolean: Array<boolean> = [true, false, true, false]; // Array of booleans using generic type
let arrayOfGenericMixed: Array<number | string> = [1, 'a', 2, 'b', 3, 'c']; // Array of mixed types (number and string) using generic type
let arrayOfGenericAny: Array<any> = [1, 'a', true, { name: 'Alice' }, [1, 2, 3]]; // Array of any type using generic type

type Person = {
  name: string;
  age: number;
};
let arrayOfGenericObjects: Array<Person> = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
]; // Array of objects with properties using generic type 

arrayOfGenericObjects.push({ name: 'David', age: 40 }); // Adding an object to the array
// arrayOfGenericObjects.push({ name: 'Eve', age: '30' }); // Error: Argument of type '{ name: string; age: string; }' is not assignable to parameter of type 'Person'.

// any type
let a;
a= 1;
a="hello";
// likewise we can assign any type of data to this varaible ,so it is advised better not to use any type.


