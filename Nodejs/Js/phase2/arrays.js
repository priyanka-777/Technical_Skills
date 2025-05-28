// Array is an set of heterogenous elements can be accesed using index.

//declaring an array
const arr=[1,2,3];
console.log(arr);

// or 

const arr1=new Array(1,2,3);
console.log(arr1);
console.log(arr1[1]);

//iterating over array
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// we can add elements into array by using push-to add element at end and unShift- to add element at start
arr.push(4);
arr.unshift(6);
console.log(arr);

// removing elements from array by using pop- to remove from last and shift-to remove from first

arr.pop();
console.log(arr);
arr.shift();
console.log(arr);

// slice operator - to create copy of an array without effecting original one, we can use spread operator also.
const arr2=arr1.slice();
console.log(arr1===arr2);

const arr3=[...arr1];

// destructing- we can add default value while declaring itself, if we dont provide value it will take default value
let [one,two,three=3]=[1,2];
console.log(one); 

//Array methods
//The concat() method merges one or more arrays and returns a merged array.- array.concat(arr1, arr2,..,..,..,arrN);
console.log(arr1.concat(arr2)); // [ 1, 2, 3, 1, 2, 3 ]

//The join() method joins all the elements of the array using a separator and returns a string. The default separator used for joining is comma(,).
console.log(arr1.join('')); // 123

//The fill() method fills an array with a static value. You can change all the elements to a static value or change a few selected items. Note that the fill() method changes the original array.
console.log(arr1.fill("hey")); // [ 'hey', 'hey', 'hey' ]
console.log(arr2.fill("hey",2,3)); // [ 1, 2, 'hey' ]

//includes() method. If the element is found, the method returns true, and false otherwise.

console.log(arr.includes(2)); // returns true

//index method- It returns the index of the first occurrence of an element in the array. If an element is not found, the indexOf() method returns -1.

console.log(arr2.indexOf(2)); // returns 1

//There is another method lastIndexOf() that helps you find the index of the last occurrence of an element in the array. 

//the reverse() method reverses the elements' positions in the array so that the last element goes into the first position and the first one to the last.

console.log(arr2.reverse()); // ['hey',2,1]

// sort() to sort the elements
console.log(arr2.sort()); // [ 1, 2, 'hey' ]

// array methods-filter , map, reduce ,  some -returns true/false if atleast one element pases the condition, every- returns true if all elements passes the condition.
