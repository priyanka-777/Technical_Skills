/* A discriminated union (also called tagged union) is a pattern where you combine:

A union of object types

Each type has a common property (the discriminator)

You use the discriminator to safely narrow the type

*/

type successResponse={
    status:"Success",
    data:string
}


type errorResponse={
    status:"Failure",
    message:string
}

type APIResponse=successResponse | errorResponse

function handleResponse(res:APIResponse){
    if(res.status==="Success"){
        console.log("Data:", res.data)
    }
    else{
        console.log("Error:",res.message)
    }
}

type Circle = {
    kind: "circle";
    radius: number;
  };
  
  type Square = {
    kind: "square";
    sideLength: number;
  };
  
  type Rectangle = {
    kind: "rectangle";
    width: number;
    height: number;
  };
  
  type Shape = Circle | Square | Rectangle;
  
function getArea(shape: Shape): number {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
  
      case "square":
        return shape.sideLength ** 2;
  
      case "rectangle":
        return shape.width * shape.height;
  
      default:
        // Exhaustiveness check!
        const _exhaustiveCheck: never = shape; // ✅ Error if a new shape is added and not handled
        return _exhaustiveCheck;
    }
  }
console.log(getArea({kind:"square",sideLength:4}))
//Always use a literal string property like "kind" or "type"