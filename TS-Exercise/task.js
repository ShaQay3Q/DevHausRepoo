"use strict";
// TASK 1
// Function to create a new task
function createTask(taskName, taskDueDate) {
    return { name: taskName,
        dueDate: taskDueDate,
        completed: false
    };
}
const task1 = createTask("Buy groceries", "2024-05-20");
const task2 = createTask("Call Bob", "2024-05-20"); // Potential issue with null dueDate
console.log(task1); // { name: 'Buy groceries', dueDate: '2024-05-20', completed: false }
console.log(task2); // { name: 'Call Bob', dueDate: null, completed: false }
// TASK 2
// Function to complete a task
function completeTask(task) {
    task.completed = true;
}
completeTask(task1);
console.log(task1); // { name: 'Buy groceries', dueDate: '2024-05-20', completed: true }
// completeTask("This is not a task object"); // No error, but incorrect usage
// TASK 3
// Function to display tasks
function displayTasks(tasks) {
    tasks.forEach(task => {
        console.log(`${task.name} - Due: ${task.dueDate} - Completed: ${task.completed}`);
    });
}
const tasks = [task1, task2];
displayTasks(tasks); // Will cause issues because of the incorrect element in the array
