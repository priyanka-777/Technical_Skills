const counter=document.getElementById("count");
const increment=document.getElementById("increment");
const decrement=document.getElementById("decrement");
const reset=document.getElementById("reset");
let count=0;

increment.addEventListener("click",()=>{
    count++;
    updateCounter();
});
decrement.addEventListener("click",()=>{
    count--;
    updateCounter();
})
reset.addEventListener("click",()=>{
    count=0;
    updateCounter();
})
function updateCounter(){
    counter.textContent=count;
}