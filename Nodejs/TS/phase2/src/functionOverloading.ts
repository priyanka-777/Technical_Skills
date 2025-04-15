/* Function overloads let you define multiple call signatures for a single function — so that it behaves differently based on input types or argument count.*/

function getPerson(person:string):string;
function getPerson(person:string,age:number):string;

function getPerson(person:string,age?:number):string{
    if(age!==undefined){
        return  `Hello ${person}, you are ${age} years old.`;
    }
    return `hello ${person}`
}

console.log(getPerson("Priya"));
console.log(getPerson("Priya",21));

// another example
function log(): void;
function log(message: string): void;
function log(message?: string): void {
  if (message) console.log(message);
  else console.log("No message");
}
