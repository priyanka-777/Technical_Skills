// union means (|) - Either this or that.

let value : string |number;
value = "hello"
value= 2
// value= true throws error

type Success = {
    status:"success",
    data:string
}
type Failure={
    status:"failure",
    message:string
}
type Response = Success | Failure ;
function handleResponse(res: Response) {
    if (res.status === "success") {
      console.log(res.data);       // Safe: TS knows it's Success
    } else {
      console.log(res.message);    // Safe: TS knows it's Error
    }
  }
handleResponse({status:"success",data:"fetched the data from api"});
  type UnionType = string | number | boolean;
  function processValue(value: UnionType) {
      if (typeof value === "string") {
          console.log("String value:", value);
      } else if (typeof value === "number") {
          console.log("Number value:", value);
      } else if (typeof value === "boolean") {
          console.log("Boolean value:", value);
      }
  }
  processValue("Hello");
  processValue(42);   
  processValue(true);

  // Intersection(&)-"Must be both."

type Person = { name: string };
type Employee = { employeeId: number };

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Priya",
  employeeId: 1001,
};
