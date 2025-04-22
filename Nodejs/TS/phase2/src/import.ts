import {me,User} from "./user"
// if we only want to import from a file there is nothing except type then we need to use type keyword
// import type {User} from "./main"

// here date-fns module had already typescript for it that is the reason why bit is working
import { addDays } from "date-fns"

// if we download lodash then it will thro error because it doesnt have any built in types 
import {times} from "lodash" // will trow an error as no types there for this
//times()

//so try intsalling "npm i --save-dev @types/lodash" for installing types if someone has already added for this module
times(4,()=>{
    
})



function printUser(user:User){
    console.log(user.name)
}
printUser(me)

addDays(new Date(),3)