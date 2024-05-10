/**
Exercise 3
Rewrite the code below to use array destructuring instead of assigning each value to a variable.
*/
console.log("EXERCISE 3");

let person = [12, "Chris", "Owen"];

// let firstName = person[1];
// let lastName = person[2];
// let age = person[0];

let [age, firstName, lastName] = person;

console.log(`Person - Age: ${age}, Name: ${firstName} ${lastName}`);