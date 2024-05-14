const countElement = document.getElementById("count");
console.log(countElement);

const [decrement, increment, reset] = document.getElementsByTagName("button");

let count = 0;

decrement.addEventListener("click", () => {
    if (count > 0){ 
        count--;
        countElement.innerText = count;
    }
    
})

increment.addEventListener("click", () => {
    count++;
    countElement.innerText = count;
})

reset.addEventListener("click", () => {
    count = 0;
    countElement.innerText = count;
})