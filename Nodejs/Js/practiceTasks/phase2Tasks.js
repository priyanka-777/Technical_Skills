// create an object for book

const book={
    name:"Do Epic Shit",
    author:"Ankur",
    year:"1999"
};
console.log(book.name);
console.log(book["year"]);
for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}

// array method to filter out even numbers

let arr=[1,2,3,4,5,6];
const arr2=(arr)=>arr.filter(num=>num%2==0)
console.log(arr2(arr));

//captiliaze first letter of each word

const capitalizeWords = sentence => 
    sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

// Example usage:
console.log(capitalizeWords("hello world! this is javascript.")); 