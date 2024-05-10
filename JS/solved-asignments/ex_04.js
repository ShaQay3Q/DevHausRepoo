/**
Exercise 4
Rewrite the code below to use array destructuring instead of assigning each value to a variable.
Make sure not to have unused variables.
Hint: https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers
*/
console.log("EXERCISE 4");

let person = ["Chris", 12, "Owen"];

// let firstName = person[0];
// let lastName = person[2];

let [firstName, age, lastName] = person;

console.log(`Name: ${firstName} ${lastName}`);