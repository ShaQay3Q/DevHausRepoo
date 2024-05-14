const countElement = document.getElementById("count");
console.log(countElement);

const [decrement, increment, reset] = document.getElementsByTagName("button");

let count = 0;

decrement.addEventListener("click", () => {

    // if (count > 0){ 
    //     count--;
    //     countElement.innerText = count;
    // }

    if (count <=0 ) return
    count--;
    countElement.innerText = count;

    // if (count === 0) return;
    // count--;
    // countElement.innerText = count;

    // if (count) return
    // count--;
    // countElement.innerText = count;
    
})

increment.addEventListener("click", (event) => {
    //if you hold shiftkey when clicking add 10 to count
    // if (event.shiftKey === true)
    // if (event.shiftKey){
    //     count += 10;
    // } else {
    //     count++;
    // }
    //     countElement.innerText = count;


    //turnery expression
    count += event.shiftKey ? 10 : 1

})

reset.addEventListener("click", () => {
    count = 0;
    countElement.innerText = count;
})