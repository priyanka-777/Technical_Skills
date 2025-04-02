// async/await- to simplify promises without using resolve, reject and then we are using async and await.
//if we need a nested .then means code will be complicated to avoid that we use async and await.

// async is used in promise declaration like below- we dont need to use any Promise keyword , we can add async before function declaration , so it will take function as promise automatically.


const sayHello = async function () {
    return 'Hello';
  };
  
  console.log(sayHello());  // will log the promise .- to use the result we need to use .then() again

function getProduct(a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(a * b);
    }, 1000);
  });
}

getProduct(2, 4)
  .then(function (result) {
    getProduct(result, 2)
      .then(function (finalResult) {
        console.log('final_result', finalResult);
      })
      .catch(function (error) {
        console.log(error);
      });
  })
  .catch(function (error) {
    console.log(error);
  });

  //to get 2*4 and again that result 8*2 =16 so here code is complicated to avoid that we use await
  // await must be used inside async function only.
  // we must use try and catch blocks when using await , because if promise rejects it will go to catch block.
  const printResult=async()=>{
    try{
      let result=await getProduct(2,4);
      let finalresult=await getProduct(result,2);
      console.log(`final result is ${finalresult}`);
    }catch(err){
      console.log(err);
    }
  }
// here if one promise rejects then it will stop executing other promises and flow will go to catch block
  printResult();

  