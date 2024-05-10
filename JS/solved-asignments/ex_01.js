/**
Exercise 1
Rewrite the code below to use array destructuring instead of assigning each value to a variable.
*/
console.log("EXERCISE 1");

let item = ["Egg", 0.25, 12];

// let itemName = item[0];
// let price = item[1];
// let quantity = item[2];

let [itemName, price, quantity] = item;

console.log(`Item: ${itemName}, Quantity: ${quantity}, Price: ${price}`);