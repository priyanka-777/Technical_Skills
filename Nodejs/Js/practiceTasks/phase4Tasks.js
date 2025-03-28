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