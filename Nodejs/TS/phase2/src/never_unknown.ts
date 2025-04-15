/*
The never type represents values that never occur.

It is typically used when:

A function never returns (like throwing an error)

A function runs infinitely

You're handling impossible cases in exhaustive switch statements */

// function that  throws
function throwError(message: string): never {
    throw new Error(message);
  }

// infinite loop
function throwError1(message: string): never {
    throw new Error(message);
  }
//exhaustive checks
type Shape = "circle" | "square";

function getArea(shape: Shape): number {
  switch (shape) {
    case "circle":
      return 3.14;
    case "square":
      return 4;
    default:
      // Ensures we've handled all cases
      const _exhaustiveCheck: never = shape; // ❌ Error if new case is added and not handled
      return _exhaustiveCheck;
  }
}

/* The unknown type represents a value whose type is not known yet.

It's like any, but safer — you can’t do anything with it until you narrow or assert the type. */

function func(data:unknown){
    if(data!=null && typeof data === "object" && "name" in data && data.name === "string"){
        console.log(data.name.length);
    }
}
// we use this for type-safety
