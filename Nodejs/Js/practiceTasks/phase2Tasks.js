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

// Use Promise to fetch fake API data and handle the response.

const fetchData = new Promise((resolve,reject)=>{
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response=>{
            if(!response.ok){
                 throw new Error("network error");
            }
            return response.json();
        })
        .then(result=>resolve(result))
        .catch(error=>reject(error));
})
fetchData
    .then(result=>console.log("fetched data:",result))
    .catch(error=>console.log("error message:",error));

// or using async and await
// this is working fast and giving response than upper promise
const fetchData1 = async()=>{
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if(!response.ok){
            throw new Error("Network error !")
        }
        const data= await response.json();
        console.log("fetched data 1:",data);
    }
    catch(error){
        console.log("error message:", error);
    }
}
fetchData1();