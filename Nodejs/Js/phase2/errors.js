
// we can use nested try blocks - try block inside another try .
//Note that try/catch can be written in three different ways: try...catch, try...finally, try...catch...finally)
// finally block will execute always whatever try / catch executes.
try { 
    try { 
    throw new Error('inner catch error');
    } /*catch(e){ //comment this catch out
    console.log(e) 
    } */finally { 
    console.log('finally'); 
    } 
    throw new Error("outer catch error") 
    } catch (ex) { 
    console.log(ex);
    }
