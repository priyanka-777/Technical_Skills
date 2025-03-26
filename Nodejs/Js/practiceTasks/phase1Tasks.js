console.log("Hello World!");

let message="Hello World";
console.log(message);

// even or odd
function evenOrOdd(n){
    if(n%2==0){
        console.log(`Given number ${n} is even`);
    }
    else{
        console.log(`Given number ${n} is odd`);
    }
}
evenOrOdd(6);
evenOrOdd(9);
// or

const evenorodd = num=>num%2==0?"even":"odd";
console.log(evenorodd(6))

// string reverse 

function reverseString(string){
    console.log(string.split('').reverse().join(''));
}
reverseString("priya");

//or
const reverse=string=>string.split('').reverse().join('');
console.log(reverse("Hello Priya"));

// loop to print 1-100 fizzbuzz logic

for(let i=0;i<100;i++){
    if(i%3==0){
        console.log("FizzBuzz "+i);
    }
}