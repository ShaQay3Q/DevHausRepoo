// Exercise: Calculator

// Write a function called 'calculator()'
// The function prompts the user to enter two numbers and then an operation.
// The operation can be plus (+), minus (-), division (/) or multiplication (*)
// It then performs the selected operation on the two numbers using a switch statement.
// The result is displayed to the user using the alert function.

// Hint: You need to use parseFloat to convert a string to a number.

function summation(dig1, dig2){
    return dig1 + dig2;
}

function substration(dig1, dig2){
    return dig1 - dig2;
}

function multiplication(dig1, dig2){
    return dig1 * dig2;
}

function division(dig1, dig2){
    if (dig2 != 0){
        return Math.round(dig1 / dig2);
    } else {
        return undefined;
    }
}

function printIt(dig1, dig2, op){
    return `${dig1} ${op} ${dig2} = `;
}

// alert("please enter 2 nombers and a math operator (+-*/):");
// let dig1 = prompt("first number:");
// while (dig1 === ""){
//     dig1 = prompt("first number:");
// }
// let dig2 = prompt("second number:");
// while (dig2 === ""){
//     dig2 = prompt("second number:");
// }
// const mathOp = ["+", "-", "*", "/"];
// let op = prompt("math operator:");

// while (!mathOp.includes(op)){
//     op = prompt("enter a valid math operator (+-*/):");
// }

function calculator(){
    alert("please enter 2 nombers and a math operator (+-*/):");
    let dig1 = parseFloat(prompt("first number:"));
    while (dig1 === ""){
        dig1 = parseFloat(prompt("first number:"));
    }
    let dig2 = parseFloat(prompt("second number:"));
    while (dig2 === ""){
        dig2 = parseFloat(prompt("second number:"));
    }
    const mathOp = ["+", "-", "*", "/"];
    let op = prompt("math operator:");

    while (!mathOp.includes(op)){
        op = prompt("enter a valid math operator (+-*/):");
    }

    
    switch(op){
        case "+":
            return document.write(`${dig1} ${op} ${dig2} = ${summation(dig1, dig2)}`);
        case "-":
            return document.write(`${printIt(dig1, dig2, op)} = ${substration(dig1, dig2)}`);
        case "*":
            return document.write(`${printIt(dig1, dig2, op)} = ${multiplication(dig1, dig2)}`);
        case "/":
            return document.write(`${printIt(dig1, dig2, op)} = ${division(dig1, dig2)}`);
    }

}

// calculator();

const txt = document.getElementById("test");
txt.innerHTML = "Hello, World!";