// 1. get elements by ID
// const todoInput = document.getElementById('todoInput'); // 1.1 todoInput
const taskButton = document.getElementById('taskButton'); // 1.2 taskButton
const todoForm = document.getElementById('todoForm'); // 1.3 todoList
// const deadline = document.getElementById('deadline');

// create ID

// let id = parseInt(localStorage.getItem("id"));
   
// if (id === null) {
//     id = 0;
//     localStorage.setItem("id", id);
// }

// let todoItems = JSON.parse(localStorage.getItem("todoItems"));

// if (todoItems === null){
// //    todoItems = {};
//     localStorage.setItem("totoItems", JSON.stringify(todoItems));
// }

function saveTask(item, deadline) {
    // read todos from localStorage
    const todosFromLS = localStorage.getItem("todos")
    let todos = JSON.parse(todosFromLS)
    console.log("before adding", todos)
    // check if we have todos already saved
    if(!todos) {
        todos = []
    }
    // update todos
    const lastItem = todos[todos.length - 1]
    // console.log("lastItem", lastItem)
    let id = !lastItem ? 1 : lastItem.id + 1
    // console.log("id", id)

    todos.push({id, item, deadline})
    // console.log("after adding", todos)
    // write them back to localStorage
    localStorage.setItem("todos", JSON.stringify(todos))
}

function displayTask(item, deadline){
    //CreatHTML FUNCTION 
    const newTask = document.createElement('tr');
    newTask.innerHTML = `
    <th></th>
    <td><input type="checkbox" class="mt-0 from-check-input"></td>
    <td><span>${item}</span><td>
    <td><date>${deadline}</date></td>
    <td><button class="removeBtn btn btn-outline-danger">Remove</button></td>`;
    todoList.appendChild(newTask);
}

const todos = JSON.parse(localStorage.getItem("todos"))

// Optional Chaining
// if (todos?.length)

// if (Boolean(todos))
if (!!todos){
    for (const todo of todos){
        displayTask(todo.item, todo.deadline);
    }
}

// 2. create Event Listener for adding tasks
function addTask(event) {
    event.preventDefault();
    const newItem = todoInput.value.trim();
    const newDeadline = deadline.value;

    if (newItem === "" || newDeadline === "") {
        alert("Enter a task and a deadline!");
        return;
    }

    displayTask(newItem, newDeadline);

    todoInput.value = '';
    deadline.value = '';

    saveTask(newItem, newDeadline);
}

todoForm.addEventListener('submit', addTask);

todoInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
})


// 3. create Event Listener for completing tasks

todoList.addEventListener('click', (event) => {
    // check if target it the checkbox
    if (event.target.type === 'checkbox') {
        // get text element next to it
        const todoText = event.target.parentElement.nextElementSibling;
        // toggle completed
        todoText.classList.toggle('completed');
    }
    // check if target is the button
    if (event.target.classList.contains("removeBtn")) {
        event.target.parentElement.parentElement.remove();
    }
})