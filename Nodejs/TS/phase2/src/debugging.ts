// Debugging
type Options={
    debug:boolean
    format:{
        tabs:boolean
        tabWidth:number
    }
}

function printNumber(num:number,options?:Options){
    console.log(num)
}

// @ts-ignore 
printNumber(3,{debug:false,format:{tabs:true,}}) // here type checking wont happen
// We can use 
// @ts-ignore 
// when we know TypeScript will show an error, 
// but we are intentionally leaving something that way,
// and we want to suppress the TypeScript error for that specific line.

console.log("hi")


///"I expect an error on the next line. If there's no error, then TypeScript should throw an error about that."
//So it's safer than @ts-ignore because it alerts you if the error you expected goes away (maybe due to code change, library update, etc.).
// @ts-expect-error
printNumber(3,{debug:false,format:{tabs:true,}})