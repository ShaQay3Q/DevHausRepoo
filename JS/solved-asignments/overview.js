function sumTwoNumbers(int1, int2){
    return int1 + int2;
}

function isOdd(int){
        return int % 2 === 1;
}

function addOddNumbers(arrOfNumbers){
    let sum = 0;
    for (let int of arrOfNumbers){
        if(isOdd(int)){
            sum = sumTwoNumbers(sum, int);
        }
    }
    return sum;
}

const arr1 = [1, 3, 4, 7, 11, 34, 6, 7, 9, 43, 65, 23, 65];
const arr2 =[3, 4, 1, 23, 423];

console.log(`${addOddNumbers(arr1)}`);
console.log(`${addOddNumbers(arr2)}`);