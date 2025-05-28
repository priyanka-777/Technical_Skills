function walk (){

    var dist = '1780 feet';
  
    function fly(){
      console.log('At '+dist);
    }
  
    return fly;
  }
  
  var flyFunc = walk(); //calling walk returns the fly function which is being assigned to flyFunc
  //you would expect that once the walk function above is run
  //you would think that JavaScript has gotten rid of the 'dist' var
  
  flyFunc(); //Logs out 'At 1780 feet'
  //but you still can use the function as above 
  //this is the power of closures

  // example 2 
  function outside(num) {
    var rememberedVar = num; // In this example, rememberedVar is the lexical environment that the closure 'remembers'
    return function inside() { // This is the function which the closure 'remembers'
      console.log(rememberedVar)
    }
  }
  
  var remember1 = outside(7); // remember1 is now a closure which contains rememberedVar = 7 in its lexical environment, and //the function 'inside'
  var remember2 = outside(9); // remember2 is now a closure which contains rememberedVar = 9 in its lexical environment, and //the function 'inside'
  
  remember1(); // This now executes the function 'inside' which console.logs(rememberedVar) => 7

  //Closures are useful because they let you ‘remember’ data and then let you operate on that data through returned functions