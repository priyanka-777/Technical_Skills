// Create a simple fetch API call and display the data.

const fetchData = async()=>{
    try{
        let fetchedData = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if(!fetchedData.ok){
            throw new Error("network issue !")
        }
        let data = await fetchedData.json();
        console.log("fetched data : ",data);
    }
    catch(e){
        console.log("throwed error is :", e);
    }
}
fetchData();

//Implement a debounce function.
function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);  // Clears the previous timer if function is called again
        timer = setTimeout(() => func(...args), delay); // Sets a new timer
    };
}
const log = () => {
    console.log("Logging...");
}

const debouncedLog = debounce(log, 5000);
debouncedLog();

