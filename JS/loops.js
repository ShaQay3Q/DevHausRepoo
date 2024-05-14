/*=========================
    FOR
========================*/

const myPets = ["cat", "dog", "monkey", "donkey", "chicken", "hamster", "crow"];

for (let i = 0; i < myPets.length; i++){
    console.log(`my pets are: ${myPets[i]}`);
}

// FOR OF loop

for (let animal of myPets){
    console.log(`${animal}`);
}

const myInfo = {
    fistName: "Anna",
    lastName: "Schmidt",
};
// FOR IN loop
for (let item in myInfo){
    console.log
}

// WHILE loop

let i = 0;

while (i < 10){
    console.log(i);
    i++
}