let userName = prompt("enter your name:");

console.log(`Hey ${userName}!`);

// We wanna ask 3 questions
// 1st: provide an adjective
// 2nd: provide a verb that doesn't end in -ing
// 3rd: provide a noun
// Alert the user that we put in all the information and will construct the sentence
// print the sentence to the screen


alert("Hello! Let me make a sentence with your entered words!");

let adj = prompt("enter an adjective:");
let verb = prompt("enter a verb:");
while (verb.endsWith("ing")){
    verb = prompt("verb cannot end in -ing:");
};
let noun = prompt("enter a noun:");

document.write(`I ${verb} a/an ${adj} ${noun}.
A ${adj} ${noun} ${verb}s`);
