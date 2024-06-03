// TASK 1
// npm install <package>  install <package> n to create a new task
function createTask(taskName, taskDueDate) {
    return { name: taskName,
        dueDate: taskDueDate,
        isCompleted: false
    };
}
var task1 = createTask("Buy groceries", "2024-05-20");
var task2 = createTask("Call Bob", "2024-05-20"); // Potential issue with null dueDate
console.log(task1); // { name: 'Buy groceries', dueDate: '2024-05-20', isCompleted: false }
console.log(task2); // { name: 'Call Bob', dueDate: null, isCompleted: false }
// TASK 2
// Function to complete a task
function completeTask(task) {
    task.isCompleted = true;
}
completeTask(task1);
console.log(task1); // { name: 'Buy groceries', dueDate: '2024-05-20', isCompleted: true }
// completeTask("This is not a task object"); // No error, but incorrect usage
// TASK 3
// Function to display tasks
function displayTasks(tasks) {
    tasks.forEach(function (task) {
        console.log("".concat(task.name, " - Due: ").concat(task.dueDate, " - isCompleted: ").concat(task.isCompleted));
    });
}
var tasks = [task1, task2];
displayTasks(tasks); // Will cause issues because of the incorrect element in the array
