// in try and catch way we can use throw keyword 
// by using throw keyword we can throw the error whatever we want instead of js error.

let num =6
try { 
if(isNaN(num)) throw "Not a number !" 
else if (num>40) throw "enter number less than 40"
else if (num <= 30) throw "Greater than 30 " 
}catch(e){
console.log(e) ;
}