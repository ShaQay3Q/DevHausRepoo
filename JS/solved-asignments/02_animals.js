// 1. Task: Animal origins

// Given are two arrays: animals and origins
// The array 'animals' contains names of animals
// The array 'origins' contains the origins of these animals
// Given is also a string called 'origin'

const animals = ["lion",    "zebra",    "elephant", "bear",     "fox",      "kiwi"]
const origins = ["africa",  "africa",   "africa",   "europe",   "europe",   "australia" ]
const origin = "europe"

// Log all animals from that origin in the console
// Hint: use a for-loop and an if-statement


// YOUR SOLUTION //
function animalsInEurop(listAnimals, listOrigins, origin){
    for (let i = 0; i < listAnimals.length; i++){
        if (listOrigins[i] == origin){
            console.log(listAnimals[i]);
        }
    }
}

animalsInEurop(animals, origins, origin);
console.log("\n");

// 2. Task: Function

// Write a function that takes one argument: a string representing the name of a continent
// The function does the same as the loop above:
// It logs all animals from that origin in the console


function sortByContinent(listAnimals, listOrigins, origin){
    for (let i = 0; i < listAnimals.length; i++){
        if (listOrigins[i] == origin){
            console.log(listAnimals[i]);
        }
    }
}

sortByContinent(animals, origins, "africa");

// YOUR SOLUTION //
// ... //