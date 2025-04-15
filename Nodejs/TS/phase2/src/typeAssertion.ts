/*as – classic type assertion

satisfies – newer, safer way to assert

These are used to tell TypeScript the type of a value when you're sure about it (even if the compiler isn’t).*/

// as
const value = "hello" as string;

const input = document.getElementById("myInput") as HTMLInputElement;
console.log(input.value); // TS now knows it's an input element

//  satisfies ensures an object matches a type — without changing its shape or widening types.

// same as keeping type person:Person , but we will use satisfy here 
const person={
    name:"abc",
    age:21
} satisfies {name:string,age:number}

const colors = {
    primary: "#ff0000",
    secondary: "#00ff00",
  } satisfies Record<string, string>;

type Todo={
    title:string,
    dueDate:Date|string,
    isComplete:boolean
}

const todo:Todo={
    title:"sdf",
    dueDate:new Date(),
    isComplete:true
}
// todo.dueDate.setDate(4) , throws error because dueDate can be string/Date , so cant apply this method here
//but if we use satisfies then any one type is there based on what data we assigned , it will take that type only

const todo1={
    title:"sdf",
    dueDate:new Date(),
    isComplete:true
} satisfies Todo

todo1.dueDate.setDate(4)