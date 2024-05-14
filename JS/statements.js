/*=============================
    IF STATEMENTS
=============================*/

// Write a function called "checkAge()" that takes one argument:
// - age: a Number
// The function checks if you are an adult, a teenager or a child
// It returns the string "adult", "teenager" or "child" depending on your age
// If the age is above 100, it returns the string "not valid"

function ageCheck(age){
    let message;

    if (age>100){
        message = "not valid";
    } else if (age >= 18){
        message = "adult";
    } else if(age >= 13){
        message = "teenager";
    } else{
        message = "child";
    }

    return message;
}

function checkAge(age){
    if (age < 13) return "child";
    else if (age <18) return "teenager";
    else if (age < 101) return "adult";
    else return "not valid";
}


console.log(ageCheck(107));
console.log(checkAge(26));

const category = checkAge(15);

function getDrinks(category){
    switch (category){
        case "child":
            return "juice";
        case "teenager":
            return "not beer!";
        case "adult":
            return "milk";
        // case "not valid":
        //     return "CHEERS!";
        default:
            return "granny?!";
    }
}

console.log(getDrinks(ageCheck(14)));
console.log(getDrinks(checkAge(109)));


let drink = getDrinks(16);
let food = drink == "milk" ? "cookies" : "tofu";
console.log(food);

drink = getDrinks(106);
food = drink == "milk" ? "cookies" : drink == "beer" ? "tofu" : "air!"
console.log(food);