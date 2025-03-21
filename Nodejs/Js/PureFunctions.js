//Pure functions take some input and give a fixed output. Also, they cause no side effects in the outside world.

// example for pure function 
const add = (a, b) => a + b;
console.log(add(4,5));

// example for impure function

let total = 0;
function addToTotal(num) {
    total += num;  // Modifies external state (side effect)
}
addToTotal(4);
console.log(total);

// pure functions in JS

// 1.Map

const nums = [1, 2, 3];
const doubled = nums.map(num => num * 2); // Returns a new array
console.log(doubled); // [2, 4, 6] OR

const double = x => 2 * x;  
[1, 2, 3].map(double);  
// [2, 4, 6]

// 2. filter

const filterEven = x => x%2 === 0;  
const filtered=[1, 2, 3,4].filter(filterEven);  
console.log(filtered);
// [2,4]

// 3.reduce reduces the array to a single value.

const sum = nums.reduce((acc, num) => acc + num,0);
console.log(sum); // 6

