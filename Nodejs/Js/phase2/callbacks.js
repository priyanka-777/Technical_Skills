// callback functions - A callback function is a function that is passed as an argument to another function, to be “called back” at a later time.
//  A function that accepts other functions as arguments is called a higher-order function, which contains the logic for when the callback function gets executed.

function hello(name,callback){
    var message="My name is "+name;
    callback(message);
}

function printName(str){
    console.log(str);
}

hello("priyanka",printName);

// mainly we use callback functions while we are fetching api response ,after api fetch we need to perform some task.

function serverRequest(query, callback){
    setTimeout(function(){  // callback inside an call back function
      var response = query + "full!";
      callback(response);
    },5000);
  }
  
  function getResults(results){
    console.log("Response from the server: " + results);
  }
  
  serverRequest("The glass is half ", getResults);
  