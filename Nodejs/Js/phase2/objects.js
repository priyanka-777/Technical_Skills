
//object declaration- stored as key-value pairs and can be of any data type

const object1 = {
    user: "alex",
    nationality: "Nigeria",
    profession: "Software Enginneer",
    myBio() {
        console.log(`My name is ${this.user}. I'm a ${this.profession} from ${this.nationality}`)
    }
}
console.log(object1.user); //Alex 
console.log(object1.nationality); //Nigeria 
console.log(object1.profession); //Software Engineer 
object1.myBio();


let objectZ = {
    name: "Ade", 
    Pronuon: "he",
    age: 60
};

//accessing object properties-can do using dot or []
console.group(objectZ.name);
console.log(objectZ["age"]); // we need to give property or key in string

// iterating over object
for(let property in objectZ) {
    console.log(`${property}: ${objectZ[property]}`)
}

