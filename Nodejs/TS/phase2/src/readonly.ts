// readonly 
// The readonly keyword in TypeScript is used to prevent reassignment to a property after it's been initialized.

type User = {
    readonly id: number;
    name: string;
  };
  
  const user: User = {
    id: 1,
    name: "Priyanka"
  };
  
  user.name = "priya";   // ✅ Allowed
  // user.id = 2;     // will throw error

  // with arrays
const numbers :readonly number[]=[1,2,3,4]
// numbers.push(5) will throw error

// it is same as const but we can use as const only on js code but not on typescript code like type and all 
// so we use readonly on them

type todo={
  title:string,
  completed:boolean
}

type FinalTodo = Readonly<todo>

const todo ={
  name:"sdf",
  completed:false
} as const

type test = typeof todo