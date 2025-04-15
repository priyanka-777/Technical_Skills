type Todo={
    title:string
    priority:"High"|"Normal"|"Low"// |"super Low"
    isComplete:boolean
    description?:string
    dueDate:Date|string
}
function extendTodo(todo:Todo){
    if(typeof todo.dueDate === "string"){ // only allows primitive data types to check
        console.log(todo.dueDate)
    }
    else{
        console.log(todo.dueDate.getDate)
    }
    // here based on if else condition , inside console also categorixzing the type of dueDate as string in if statement
    // and Date in else statement instead of showing string|Date
}
// here we cant check if dueDate is Date or not in if condition using typeOf

// so we can use instanceOf here

function extendTodoWithInstance(todo:Todo){
    if(todo.dueDate instanceof Date){
        console.log(todo.dueDate) // Date type here
    }else{
        console.log(todo.dueDate) // string type here
    }
}
// we can use switch case for checking priority instead of if else 
function extendTodoWithSwitch(todo:Todo){
    switch (todo.priority){
        case "High":
            console.log(todo.priority) // take type as High
            break
        case "Normal":
            console.log(todo.priority) // take type as Normal
            break
        case "Low":
            console.log(todo.priority) // take type as Low
            break
        default :
            console.log(todo.priority) // this is type of never before adding "super Low"
            //  by mistake if you have another string in priority for example "superLow" and missed writing code
            //then this never will help you and show the error 
            // const a : never=todo.priority // here it is showing error since we have added "super Low"
            // return a
    }
}
