/*==================================
    LARGEST NUMBER ALGORITHM
==================================*/


// normal FOR loop
function findLargestNumber(arrNumber){
    let largest = 0
    if (arrNumber.length === 0) return null; //returns null. Else it would have return "undefined"
    for (let i = 0; i < arrNumber.length; i++){
        if (arrNumber[i] > largest){
            largest = arrNumber[i];
        }
    }
    return largest;
}

const arrlist = [1, 5, 87, 2, 5, 76, 98, 100, 2, 54, 7];

console.log(findLargestNumber(arrlist));


// practicing FOR ... OF loop
function findLagrestNo(arrNumber){
    let largest = 0;
    if (arrNumber.length === 0){
        return console.log(`the list is empty`);
    }
    for (let number of arrNumber){
        // console.log(number);
        if (number > largest){
            largest = number;
        }
    }
    return largest
}

console.log(findLagrestNo(arrlist));


// WHILE loop
function findLargest(arrNumber){
    let largest = 0;
    let i = 0;
    if (arrNumber.length === 0){
        return console.log(`the list is empty`);
    }
    while (i < arrNumber.length){
        if (arrNumber[i] > largest){
            largest = arrNumber[i];
        }
        i++;
    }
    return largest;
}

console.log(findLargest(arrlist));
