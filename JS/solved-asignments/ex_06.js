/**
Exercise 6
Using Array Destructuring get all of the names from this Nested Array
Hint: https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers
*/
console.log("EXERCISE 6");

const moreStudents = ["Chris", ["Ahmad", "Antigoni"], ["Toby", "Sam"]];

// Write your code here
const [student1, [student2, student3], [student4, student5]] = moreStudents;

console.log(student1, student2, student3, student4, student5);