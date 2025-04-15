/*A type predicate is a function that returns a boolean but also tells TypeScript what type a value is if the return value is true.
 Syntax:
function isDog(animal: Animal): animal is Dog
Here, animal is Dog is the type predicate — it's how we tell TypeScript, “If this function returns true, you can safely treat animal as a Dog.
*/

type Dog = { kind: "dog"; bark: () => void };
type Cat = { kind: "cat"; meow: () => void };

type Animal = Dog | Cat;

// Type predicate function
function isDog(animal: Animal): animal is Dog {
  return animal.kind === "dog";
}

// Usage
function makeSound(animal: Animal) {
  if (isDog(animal)) {
    animal.bark(); // ✅ TypeScript knows this is a Dog
  } else {
    animal.meow(); // ✅ TypeScript knows this is a Cat
  }
}

