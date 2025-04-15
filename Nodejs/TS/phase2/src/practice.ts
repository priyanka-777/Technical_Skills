// Implement a generic function for an API response type.

type ApiResponse<T>= 
    | {success:true,data:T}
    | {success:false,error:string}

function createResponse<T>(data:T|null, error?:string):ApiResponse<T>{
    if(data !=null){
        return {success:true,data}
    }
    else{
        return {success:false,error:error??"unknown error"}
    }
}

type Users = { id: number; name: string };

const user: Users = { id: 1, name: "Priyanka" };

const successRes = createResponse(user);
//    ^ ApiResponse<User> with data
console.log(successRes);

const errorRes = createResponse<User>(null, "User not found");
//    ^ ApiResponse<User> with error

//Create a function that only accepts specific object keys using keyof.
type Person={
    name:string
    id:number
    isWorking:boolean
    email:string
}

function getKey(person:Person, key:keyof Person ){
    return person[key]
}
const person1:Person={
    name:"priya",
    id:123,
    isWorking:true,
    email:"priya@gmail.com"
}
console.log(getKey(person1,"name")); // priya
console.log(getKey(person1,"id")) //123

// Define a union type for a User | Admin and differentiate them using a discriminated union.

type User ={
    type:"user",
    name:string,
    id:number
}
type Admin={
    type:"admin",
    name:string,
    id:number,
    permissions:string[]
}
type Persons=User|Admin

function describePerson(person:Persons){
    if(person.type==="admin"){
        console.log(`👮‍♀️ Admin: ${person.name} with permissions: ${person.permissions.join(", ")}`);
  } else {
    console.log(`👤 User: ${person.name}`);
  }
}

const u: User = { type: "user", id: 1, name: "Priyanka" };
const a: Admin = { type: "admin", id: 2, name: "abc", permissions: ["read", "write"] };

describePerson(u); // 👤 User: Priyanka
describePerson(a); // 👮‍♀️ Admin: abc with permissions: read, write

// Build a generic Stack<T> class that supports push/pop operations.

class Stack<T>{
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }
}
const numberStack = new Stack<number>();

numberStack.push(10);
numberStack.push(20);
numberStack.push(30);

console.log(numberStack.pop());    // 30
console.log(numberStack.peek());   // 20
console.log(numberStack.size());   // 2
console.log(numberStack.isEmpty()); // false

const stringStack = new Stack<string>();

stringStack.push("Priyanka");
stringStack.push("Grishmi");

console.log(stringStack.pop()); // Grishmi

