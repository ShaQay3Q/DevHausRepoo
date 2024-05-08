// 1. Task: Adding even numbers

// Given is an array with numbers
// Add up only the numbers that are EVEN
// Save the result in a variable called 'result'
const numbers = [32, 12, 2, 33, 21, 20, 34, 54];

function isEven(int){
    return int % 2===0;
}

function addTwoNumers(int1, int2){
    return int1 + int2;
}

// YOUR SOLUTION (using a WHILE loop) //
// ... //

function sumUpEvens(arrOfNumbers){
    let i = 0;
    let sum = 0;
    while (i < arrOfNumbers.length){
        if (isEven(arrOfNumbers[i])){
            sum = addTwoNumers(sum, arrOfNumbers[i]);
        }
        i++
    }
    return sum;
}

// YOUR SOLUTION (using a FOR loop) //
// ... //

function sumOfEvenNumbers(arrOfNumbers){
    let sum = 0;
    for (let i = 0; i < arrOfNumbers.length; i++){
        if (isEven(arrOfNumbers[i])){
            sum = addTwoNumers(sum, arrOfNumbers[i]);
        }
    }
    return sum;
}

console.log(sumOfEvenNumbers(numbers));
console.log(sumUpEvens(numbers));


