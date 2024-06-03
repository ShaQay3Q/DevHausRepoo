// TASK 1

interface Task {
    name: string,
    dueDate: string,
    isCompleted: boolean
}

// npm install <package>  install <package> n to create a new task
function createTask(taskName: string, taskDueDate: string): Task {
    return {name: taskName,
        dueDate: taskDueDate,
        isCompleted: false
    };
}

const task1 = createTask("Buy groceries", "2024-05-20");
const task2 = createTask("Call Bob", "2024-05-20"); // Potential issue with null dueDate

console.log(task1); // { name: 'Buy groceries', dueDate: '2024-05-20', isCompleted: false }
console.log(task2); // { name: 'Call Bob', dueDate: null, isCompleted: false }


// TASK 2

// Function to complete a task
function completeTask(task: Task) {
    task.isCompleted = true;
}
  
completeTask(task1);
console.log(task1); // { name: 'Buy groceries', dueDate: '2024-05-20', isCompleted: true }

// completeTask("This is not a task object"); // No error, but incorrect usage


// TASK 3

// Function to display tasks

function displayTasks(tasks: Task[]) {
    tasks.forEach(task => {
      console.log(`${task.name} - Due: ${task.dueDate} - isCompleted: ${task.isCompleted}`);
    });
}
  
const tasks: Task[] = [task1, task2];
displayTasks(tasks); // Will cause issues because of the incorrect element in the array
 