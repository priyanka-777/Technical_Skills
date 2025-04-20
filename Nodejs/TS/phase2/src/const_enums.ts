// `as const` and enums


// `as const` is used to create a readonly array or object
const nums = ["1", "2", '3'] as const
// nums.push("4")-error
// here nums is a readonly array of strings


// here skilllevels is a readonly array of strings
// and the values are "beginner", "intermediate", "advanced", "master"
const skilllevels = ["beginner", "intermediate", "advanced", "master"] as const


// here person is a type with name and skilllevel properties
// name is a string and skilllevel is a union of the values of the skilllevels array
// and the values are "beginner", "intermediate", "advanced", "master"
type Person ={
    name: string;
    skilllevel: typeof skilllevels[number]; // number is used to loop in for every element from index 0
}


skilllevels.forEach((level) => {
    console.log(level)
})

// alternate of readonly
const color = {
    primary: "#000",
    secondary: "#fff",
  };
  
type Colors = typeof color;
// Colors.primary is of type string
  
const color1 = {
    primary: "#000",
    secondary: "#fff",
  } as const;
  
type Colors1 = typeof color1;
// Colors.primary is of type '#000' (a string literal) 

const test :Colors1={
    primary:"#000",
    secondary:"#fff"
    // cant assign any other values expect these two #000 and #fff
}

const person = {
    name: "Priya",
    age: 28,
    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
} as const

// enums are a way to define a set of named constants
// not recommended to use enums in typescript
enum Status {
    Success = "SUCCESS",
    Error = "ERROR",
    Loading = "LOADING"
  }
  
  function handle(status: Status) {
    if (status === Status.Success) {
      console.log("All good!");
    }
  }
handle(Status.Success);

// enum in objects

enum Role {
    Admin = "admin",
    User = "user"
  }
  
  type User = {
    name: string;
    role: Role;
  };
  
  const u: User = {
    name: "Priyanka",
    role: Role.Admin,
  };
console.log(u);  