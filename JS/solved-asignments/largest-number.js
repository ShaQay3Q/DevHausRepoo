/*==================================
    LARGEST NUMBER ALGORITHM
==================================*/

function findLargestNumber(arrNumber){
    let largest = 0
    if (arrNumber.length === 0){
        return console.log(`the list is empty`);
    }
    for (let i = 0; i < arrNumber.length; i++){
        if (arrNumber[i] > largest){
            largest = arrNumber[i];
        }
    }
    return largest;
}

const arrlist = [1, 5, 87, 2, 5, 76, 98, 100, 2, 54, 7];

console.log(findLargestNumber(arrlist));

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