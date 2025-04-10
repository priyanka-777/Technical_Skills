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

