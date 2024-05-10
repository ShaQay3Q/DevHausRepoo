/**
Exercise 5
Using Array Destructuring get the last name from the array.
Hint: https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers
*/
console.log("EXERCISE 5");

const students = ["Christina", "Jon", "Alexandare"];

// Write your code here
const [, , lastName] = students;

console.log(lastName);