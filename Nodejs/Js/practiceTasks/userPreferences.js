//Save and retrieve user preferences in localStorage

function saveUserPreferences(){
    const user={
        name:"john",
        fontSize:"16px",
        color:"white"

    };
    localStorage.setItem("userPreferences",JSON.stringify(user));
    console.log("User preferences are saved successfully !")
}

saveUserPreferences();

function retrivePreferences(){
    const storedPreferences = localStorage.getItem("userPreferences");

    // Check if preferences exist
    if (storedPreferences) {
        return JSON.parse(storedPreferences);  // Convert back to an object
    } else {
        return {};  // Return an empty object if no preferences are saved
    }
}
const userprefers = retrivePreferences();
console.log("retrived data :",userprefers);