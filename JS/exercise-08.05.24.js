const user = [
    {
        firstName: "john",
        lastName: "doe",
        age: 55,
        hobbies: ["sport", "coding", "cooking"],
    },
    {
        firstName: "mery",
        lastName: "jane",
        age: 77,
        hobbies: ["reading", "bingo"],
    },
    {
        firstName: "pete",
        lastName: "parker",
        age: 35,
        hobbies: ["hanging around", "spider stuff"],
    }
]

console.log(user);
console.log("\n");
console.log(user[1]);
console.log("\n");
console.log(user[1].age);
console.log("\n");
console.log(user[2].hobbies[1]);
console.log("\n");


function add(no1, no2){
    return no1 + no2;
}

const result1 = add(4, 5);
const result2 = add(10, 23);
const total = add(result1, result2);
console.log(total);
console.log("\n");



/*================================
    EXERCISE
=================================*/

//1. write a function which is adding up two numbers and returning its value
function addition(n1, n2){
    return n1 + n2;
}

//2. write a function which is  substracting two numbers and returning its value
function substraction(n1, n2){
    return n1 - n2;
}

//3. write a function which is  multiplying two numbers and returning its value
// 4. write also a console log inside your multiplying function 
// which is log the two parameters and the result
function multipication(n1, n2){
    console.log(`${n1}, ${n2}, ${n1*n2}`);
    return n1 * n2;
}

// 5. make a additon function call with 5 and 6
const res1 = addition(5, 6);
console.log(res1);

//6. make a substraction call and substract 3 from the result of your additon
const res2 = substraction(res1, 3);
console.log(res2);

//7. multiply the addition result and the substraction
const res3 = multipication(res1, res2);

//8. console log the endresult of multiply outside of the function
console.log(res3);

