// 1. get elements by ID
// 1.1 todoInput
// 1.2 taskButton
// 1.3 todoList

// 2. create Event Listener for adding tasks
// - listen for click on taskButton
// - get input from todoInput
// - create a new 'li' element
// - append new 'li' element to todoList

// 3. create Event Listener for completing tasks


let toDoIput = document.getElementById("todoinput");
let btn = document.getElementById("add-btn");
let list = document.getElementById("todolist");

btn.addEventListener("click", () => {

    const newItem = toDoIput.value.trim();

    if (toDoIput === ""){
        alert("Empty");
        return
    }
    else {
        const newTask = document.createElement("li");
        newTask.innerHTML = newItem;
        list.appendChild(newTask);


    }

})

