// 1. Task: Marathon Winners

// Given is an array called 'winners' with information about female NYC marathon winner
// Each entry in the array is another array in the form: [YEAR, NAME, COUNTRY, TIME]
// Given is also a string called 'country'

const winners = [[1971,   "Beth Bonner",     "United States", "2:55:22"],
                [1978,   "Grete Waitz",     "Norway",        "2:32:30"],
                [1975,   "Kim Merritt",     "United States", "2:46:14"],
                [1976,   "Miki Gorman",     "United States", "2:39:11"],
                [2015,   "Mary Keitany",    "Kenya",         "2:24:25"],
                [1981,   "Allison Roe",     "New Zealand",   "2:25:29"],
                [1983,   "Grete Waitz",     "Norway",        "2:27:00"],
                [1991,   "Liz McColgan",    "United Kingdom","2:29:32"],
                [2014,   "Mary Keitany",    "Kenya",         "2:25:07"],
                [1972,   "Nina Kuscsik",    "United States", "3:08:41"],
                [1973,   "Nina Kuscsik",    "United States", "2:57:07"],
                [1977,   "Miki Gorman",     "United States", "2:43:10"],
                [2016,   "Mary Keitany",    "Kenya",         "2:24:26"]];

const country = "United States";

// Log the winner names AND corresponding years from the country in the console

// YOUR SOLUTION //
function isFromState(stateName){
    return stateName === "United States";
}

function usWinnersYears(listWinners){
    for (let i = 0; i < listWinners.length; i++){
        let country = listWinners[i][2];
        if (country == "United States"){
            console.log(`${i}- winner of ${listWinners[i][0]}: ${listWinners[i][1]}`);
        }
    }
}

// usWinnersYears(winners);
console.log("\n");
// 2. Task: Function

// Write a function that takes on argument: a string representing the name of a country
// The function does the same as the loop above:
// It logs the winner names AND corresponding years from the country in the console

// YOUR SOLUTION //

function winnersFromCountry(listWinners, countryName){
    console.log(`${countryName}`);

    for (let i = 0; i < listWinners.length; i++){
        let country = listWinners[i][2];
        if (countryName === country){
            console.log(`${i}- winner of ${listWinners[i][0]}: ${listWinners[i][1]}`);
        } else if(countryName === country){
            console.log(`${i}- winner of ${listWinners[i][0]}: ${listWinners[i][1]}`);
        } else if(countryName === country){
            console.log(`${i}- winner of ${listWinners[i][0]}: ${listWinners[i][1]}`);
        } else if(countryName === country){
            console.log(`${i}- winner of ${listWinners[i][0]}: ${listWinners[i][1]}`);
        } else if(!(countryName===country)) {
            console.log("country not found!");
            break;
        }
    }
}

winnersFromCountry(winners, "Iran");

/*function winnersBasedOnCountries(listWinners, countryName){
    // let res = console.log(`${i}- winner of ${listWinners[i][0]}, ${listWinners[i][1]} is from ${country}`);
    for (let i = 0; i < listWinners.length; i++){

        if (countryName === "United States"){
            console.log(`${i}- winner of ${listWinners[i][0]}, ${listWinners[i][1]} is from ${listWinners[i][2]}`);
        } else if(countryName === "Kenya"){
            console.log(`${i}- winner of ${listWinners[i][0]}, ${listWinners[i][1]} is from ${listWinners[i][2]}`);
        } else if(countryName === "Norway"){
            console.log(`${i}- winner of ${listWinners[i][0]}, ${listWinners[i][1]} is from ${listWinners[i][2]}`);
        } else if (countryName === "New Zealand"){
            console.log(`${i}- winner of ${listWinners[i][0]}, ${listWinners[i][1]} is from ${listWinners[i][2]}`);
        } else {
            console.log("country not found!");
        }

        // const winner = listWinners[i];
        // switch (countryName){
        //     case "United States":
        //         console.log(`${i}- winner of ${listWinners[i][0]}, ${listWinners[i][1]} is from ${countryName}`);
        //         break;
        //     case "Norway":
        //          console.log(`${i}- winner of ${listWinners[i][0]}, ${listWinners[i][1]} is from ${countryName}`);
        //          break;
        //     case "Kenya":
        //         console.log(`${i}- winner of ${listWinners[i][0]}, ${listWinners[i][1]} is from ${countryName}`);
        //         break;
        //     case "New Zealand":
        //         console.log(`${i}- winner of ${listWinners[i][0]}, ${listWinners[i][1]} is from ${countryName}`);
        //         break;
        //     default:
        //         console.log("country not found!");
        //             break;
        // }
    }
}

winnersBasedOnCountries(winners, "Kenya");
*/