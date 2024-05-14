// Create a function that takes in n arguments of type number
// The function should return the sum of all the arguments provided
// BONUS: Check if all the arguments are numbers and console.log an error message and return NaN

// ----------------------------------------------------------------------------------
// Your code
function sum(...n) {
    let sum = 0;
    for (let i = 0; i < n.length; i++){
        let digit = parseFloat(n[i]);
        console.log(digit);
        sum = sum + digit;
        console.log(sum);
    }
    console.log("\n");
    return sum;
}
// ----------------------------------------------------------------------------------

// Result
// ----------------------------------------------------------------------------------
const resultOne = sum(1, 2, 3, 4, 5);
const resultTwo = sum(4, 3, 2, 1);
const bonusResult = sum(1, 2, "asd");

// Don't worry about this section
// ----------------------------------------------------------------------------------
if (resultOne !== 15) {
  console.error(
    "\x1b[31m",
    `Result One is not correct expected 15, got ${resultOne}`,
    "\x1b[0m"
  );
}
if (resultTwo !== 10) {
  console.error(
    "\x1b[31m",
    `Result One is not correct expected 10, got ${resultTwo}`,
    "\x1b[0m"
  );
}

if (bonusResult !== NaN) {
  console.error("\x1b[31m", `Expected NaN got ${bonusResult}`, "\x1b[0m");
}

if (resultOne === 15 && resultTwo === 10 && bonusResult === NaN) {    console.log("\n");
console.log("\n");

  console.log("\x1b[32m", "Congratulations, you got it right", "\x1b[0m");
}