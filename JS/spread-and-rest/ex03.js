const fruits = ["Apple", "Orange", "Banana"];

// Create a new array from the fruits array with a new "Pear" added to the beginning
// Don't modify the original array
// Use the spread operator to achieve this

// ----------------------------------------------------------------------------------
// Your code
// const newFruits = [...fruits];
// newFruits.unshift("Pear");

const newFruits = ["pear", ...fruits];

// ----------------------------------------------------------------------------------

// Result
// ----------------------------------------------------------------------------------
console.log("Fruits array: ", fruits);
console.log("New fruits array: ", newFruits);

// Don't worry about this section
// ----------------------------------------------------------------------------------
if (fruits.length > 3) {
  console.error("\x1b[31m", "You modified the original array", "\x1b[0m");
}
if (newFruits.length < 4) {
  console.error(
    "\x1b[31m",
    "You didn't add anything to the newFruits array",
    "\x1b[0m"
  );
}

if (fruits.length === 3 && newFruits.length === 4 && newFruits[0] === "Pear") {
  console.log("\x1b[32m", "Congratulations, you got it right", "\x1b[0m");
}