// record is same as index type

type Person={
    name:string,
    age:number
}
type PeopleGroupedByName={
    [index:string]:Person[]
}
// same as above one 
type PeopleGroupByNameWithRecord = Record<string,Person[]>

const group1: PeopleGroupByNameWithRecord = {
    Ramesh: [
      { name: "Ramesh", age: 40 }
    ],
    Suresh: [
      { name: "Suresh", age: 35 },
      { name: "Suresh", age: 36 }
    ]
  };

type Product = {
    name: string;
    price: number;
  };
  
  type ProductMap = Record<string, Product>;
  
  const products: ProductMap = {
    "p1": { name: "Phone", price: 699 },
    "p2": { name: "Laptop", price: 1299 },
  };
  