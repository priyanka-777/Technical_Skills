// Index types (`[key: string]: type`)

// This defines a type for a person object
type Person = {
    nme: string;
    skilllevel: "beginner" | "intermediate" | "advanced" | "master";
  };
  
  // Using the type
  const person: Person = {
    nme: "Priya",
    skilllevel: "beginner",
  };
  
  // Pass only allowed skill levels to this function
  printSkillLevel(person.skilllevel);
  
  // This function takes only valid skill levels defined in the Person type
  function printSkillLevel(skilllevel: Person["skilllevel"]) {
    console.log("Skill Level:", skilllevel); //Skill Level: beginner
  }
  
  // --- Index Types ---
  
  // Grouping people by name (key = string from Person.nme)
  type PeopleGroupByName = {
    [index: Person["nme"]]: Person[];
    // equivalent to [key: string]: Person[] but more type-safe
  };
  
  // Grouping people by skill level
  // index is restricted to only the values in the skilllevel union type
  type PeopleGroupBySkillLevel = {
    [index in Person["skilllevel"]]: Person[];
  };
  
  // --- typeof and keyof usage ---
  
  const arr = ["string", 1, true];
  
  // Get type of the entire array
  type Ar = typeof arr; // (string | number | boolean)[]
  
  // Get type of individual array elements
  type A = typeof arr[number]; // string | number | boolean
  
  // Object example
  const p = {
    name: "Priya",
    age: 21,
    skilllevel: "beginner",
  };
  
  // Get type of all values in object `p`
  type PValueTypes = (typeof p)[keyof typeof p];
  // Result: string | number
  
  // Explanation:
  // typeof p -> { name: string; age: number; skilllevel: string }
  // keyof typeof p -> "name" | "age" | "skilllevel"
  // (typeof p)[keyof typeof p] -> p["name"] | p["age"] | p["skilllevel"]
  