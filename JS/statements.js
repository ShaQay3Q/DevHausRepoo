/*=============================
    IF STATEMENTS
=============================*/

// Write a function called "checkAge()" that takes one argument:
// - age: a Number
// The function checks if you are an adult, a teenager or a child
// It returns the string "adult", "teenager" or "child" depending on your age
// If the age is above 100, it returns the string "not valid"

function ageCheck(age){
    if (age>100){
        message = "not valid";
    } else if (age >= 18){
        message = "adult";
    } else if(age >= 13){
        message = "teen";
    } else{
        message = "child";
    }
    return message;
}

console.log(ageCheck(107));