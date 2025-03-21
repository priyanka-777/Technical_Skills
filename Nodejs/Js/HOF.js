// High Order Functions 

// HOFs can accept functions as arguments and even return functions as results.

// function as an argument 

function higherOrderFunction(callback) {
    // Performing some operations
    console.log("Executing the higher order function...");
  
    // Calling the callback function
    callback();
  }
  
  // Callback function to be passed to the higher order function
  function callbackFunction() {
    console.log("Executing the callback function...");
  }
  
  // Calling the higher order function with the callback function as argument
  higherOrderFunction(callbackFunction);

  // Returning functions 

  // Higher Order Function that returns a function
function createGreeter(greeting) {
    // Returning a new function
    return function(name) {
      console.log(`${greeting}, ${name}!`);
    };
  }
  
  // Creating a greeter function with a specific greeting
  const greetHello = createGreeter("Hello");
  greetHello("John"); // Output: Hello, John!
  
  // Creating another greeter function with a different greeting
  const greetGoodbye = createGreeter("Goodbye");
  greetGoodbye("Alice"); // Output: Goodbye, Alice!

  // Abstraction by HOF

  // Higher Order Function for performing a specified operation on each element of an array
function performOperationOnArray(array, operation) {
    return array.map(operation);
  }
  
  // Callback function for doubling each element of an array
  function double(number) {
    return number * 2;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = performOperationOnArray(numbers, double);
  console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

  //code reusability - to apply filter meethod in functions instead pf creating it everytime we can create a function to take the array and condition to apply in filter.

  // Example: HOF for filtering elements based on a condition
function filterArray(array, condition) {
    return array.filter(condition);
  }
  
  const numbers1 = [1, 2, 3, 4, 5];
  
  // Using filterArray to filter even numbers
  const evenNumbers = filterArray(numbers1, num => num % 2 === 0);
  console.log(evenNumbers); // Output: [2, 4]

  // flexibility 

  // Example: HOF for creating a multiplier function
function createMultiplier(factor) {
    console.log(factor);
    return function(number) {
      return number * factor;
    };
  }
  
  const double1 = createMultiplier(2);
  console.log(double1(5)); // Output: 10

  // there are some functions in HOF - map() , filetr(), reduce(), forEach() , .some(), .every(), .find(), .flatMap()
  // here these are all pure functions except forEach - because it wont create new array .

  // 1.map()

  // Example 1: Doubling each number in an array
const numbers2 = [1, 2, 3, 4, 5];
const doubledNumbers2 = numbers2.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Example 2: Converting an array of strings to uppercase
const words = ["hello", "world", "javascript"];
const uppercaseWords = words.map(word => word.toUpperCase());
console.log(uppercaseWords); // Output: ["HELLO", "WORLD", "JAVASCRIPT"]

//2.filter()

// Example 1: Filtering even numbers from an array
const numbers3 = [1, 2, 3, 4, 5];
const evenNumbers3 = numbers3.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Example 2: Filtering words longer than 5 characters
const words1 = ["apple", "banana", "grape", "kiwi", "orange"];
const longWords = words1.filter(word => word.length > 5);
console.log(longWords); // Output: ["banana", "orange"]

// 3.reduce()
// Example 1: Finding the sum of numbers in an array
const numbers4 = [1, 2, 3, 4, 5];
const sum = numbers4.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15

// Example 2: Finding the average of numbers in an array
const numbers5 = [10, 20, 30, 40, 50];
const average = numbers5.reduce((acc, num, index, array) => {
  acc += num;
  if (index === array.length - 1) {
    return acc / array.length;
  } else {
    return acc;
  }
}, 0);
console.log(average); // Output: 30

// 4.forEach()

// Example 1: Logging each element of an array
const numbers6 = [1, 2, 3, 4, 5];
numbers6.forEach(num => console.log(num));

// Example 2: Capitalizing and logging each word of an array
const words5 = ["hello", "world", "javascript"];
words5.forEach(word => console.log(word.toUpperCase()));

// usage
/*Use map() for transforming elements in an array.
Use filter() for selecting elements based on a condition.
Use reduce() for aggregating values into a single result.
Use forEach() for performing side effects without returning a new array.*/ 