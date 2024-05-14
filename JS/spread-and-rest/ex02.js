const fruitsOne = ["Apple", "Orange", "Banana"];
const fruitsTwo = ["Pear", "Cherry", "Blueberry"];

// Concatenate two arrays into a new array
// Don't modify any of the original arrays
// Use the spread operator to achieve this

// ----------------------------------------------------------------------------------
// Your code
const combinedFruits = [...fruitsOne];
for (let index = 0; index < fruitsTwo.length; index++) {
  const fruit = fruitsTwo[index];
  combinedFruits.push(fruit);
}
// ----------------------------------------------------------------------------------

// Result
// ----------------------------------------------------------------------------------
console.log("FruitsOne array: ", fruitsOne);
console.log("FruitsTwo array: ", fruitsTwo);
console.log("Combined fruits array", combinedFruits);

// Don't worry about this section
// ----------------------------------------------------------------------------------
if (fruitsOne.length > 3 || fruitsTwo.length > 3) {
  console.error("\x1b[31m", "You modified the original arrays", "\x1b[0m");
}
if (combinedFruits.length < 6) {
  console.error(
    "\x1b[31m",
    "You didn't add anything to the combinedFruits array",
    "\x1b[0m"
  );
}
if (
  combinedFruits.length === 6 &&
  fruitsOne.length === 3 &&
  fruitsTwo.length === 3
) {
  console.log("\x1b[32m", "Congratulations, you got it right", "\x1b[0m");
}