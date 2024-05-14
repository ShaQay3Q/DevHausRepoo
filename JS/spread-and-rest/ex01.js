const fruits = ["Apple", "Orange", "Banana"];

// Create a new array from the fruits array with a new fruit added to the beginning
// Don't modify the original array
// Use the spread operator to achieve this

// ----------------------------------------------------------------------------------
// Your code
const copiedFruits = ["Tomato", ...fruits];
// ----------------------------------------------------------------------------------

// Result
// ----------------------------------------------------------------------------------
console.log("Fruits array: ", fruits);
console.log("Copied fruits array: ", copiedFruits);

// Don't worry about this section
// ----------------------------------------------------------------------------------
if (fruits === copiedFruits) {
  console.error("\x1b[31m", "You didn't make a copy", "\x1b[0m");
}
if (fruits !== copiedFruits) {
  console.log("\x1b[32m", "Congratulations, you made a copy", "\x1b[0m");
}