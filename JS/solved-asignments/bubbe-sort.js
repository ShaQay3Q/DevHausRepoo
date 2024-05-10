// let bubbleSortArr = [4, 5, 3, 8, 1];

function swap(arr, i){
    let temp = arr[i-1];
    arr[i-1] = arr[i];
    arr[i] = temp;
    return arr;
}

console.log(`${swap([4, 5, 3, 8, 1], 2)}`);


let bubbleSortArr = [4, 5, 3, 8, 1];

function bubbleSort(arrNumbers) {
    // 1. create a var 'n' to be the length of array
    let l = arrNumbers.length;
    // 2. create a var 'swapped' and set it to true
    let swapped = true;
    // 3. while-loop
    if (l === 0) return null;
    while (swapped){
        swapped = false;
        for (let i = 0; i < l; i++){
            if (arrNumbers[i-1] > arrNumbers[i]){
                // swap(arrNumbers, i);
                swap(arrNumbers, i);
                swapped = true;
            }
        }
    }
    return arrNumbers
}
    // 3.1. for-loop
    // 3.1.1 if-statement
    // 3.1.2 swap if necessary
    // 3.1.3 set 'swapped' to true

let arrangedArr = bubbleSort(bubbleSortArr);
console.log(`${arrangedArr}`);
