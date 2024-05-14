// 1. Task: Supermarket

// You run a supermarket and need to track the items you have in store.

// Create a new object called 'stock' that contains information about all items in store
// The object should have the product items as the NAMES...
// ...and the number of items in stock as the VALUES

// You have the following items in stock:
// bananas: 24
// apples: 36
// bread: 18
// milk: 54

// YOUR SOLUTION //
const stock = [
    {
        productName: "bananas",
        productValue: 24,
    },
    {
        productName: "apples",
        productValue: 36,
    },
    {
        productName: "bread",
        productValue: 18,
    },
    {
        productName: "milk",
        productValue: 54,
    },
    
]

// for (let i = 0; i < stock.length; i++){
//     const stockItem = stock[i];
//     for (const prop in stockItem){
//         console.log(`${prop} = ${stockItem[prop]}`);
//     }
// }


// 2. Task: Selling items
// Given is an array called 'shopping_cart' representing the shopping cart of a customer
// the array contains more arrays in the form [ITEM, QUANTITY]
shopping_cart = [["bananas", 2], ["milk", 3]]

// Iterate over the array and substract the items from your stock


// YOUR SOLUTION //

function substract(int1, int2){
    return int1 - int2;
}

// console.log(substract(54, 3));

// function returnItem(stockItem, itemName){
//     for (const prop in stockItem){
//         if (stockItem[prop] === itemName){
//             return stockItem;
//         }
//     }
// }

function findItems(stockList, itemName){
    for (let i = 0; i < stockList.length; i++){
        const stockItem = stockList[i];
        // returnItem(stockItem, itemName);
        for (const prop in stockItem){
            if (stockItem[prop] === itemName){
                console.log(`${stockItem[prop]}. ${i}`);
                return stockItem;
            }
        }
    }
}

// function returnItem(stockItem, itemName){
//     for (const prop in stockItem){
//         if (stockItem[prop] === itemName){
//             console.log(`${stockItem[prop]}`);
//             return stockItem;
//         }
//     }
// }



findItems(stock, "milk");


function adjustStock(stockItem, amount){
    for (const prop in stockItem){
        if (prop === "productValue"){
            let res = substract(stockItem[prop], amount);
            console.log(`${res}`);
        }
    }
}

// adjustStock(findItems(stock, "bananas"), 2);


function adjustStockBasedOnShoppingCard(stockList, shoppingCard){
    for (let i = 0; i < shoppingCard.length; i++){
        // let item = shoppingCard[i][0];
        // let value = shoppingCard[i][1];
        adjustStock(findItems(stockList, shoppingCard[i][0]), shoppingCard[i][1]);
    }
}

// adjustStockBasedOnShoppingCard(stock, shopping_cart);







// 3. Task: Money must be funny!

// You need to keep track of your income.
// Create a new object called 'prices' that contains information about your prices
// The object should have the product items as the NAMES...
// ...and the prices of the items as the VALUES

// The prices of your items are the following:
// bananas: 0.3
// apples: 0.56
// bread: 1.29
// milk: 1.59

// YOUR SOLUTION //
const price = [
    {
        nameProduct: "bananas",
        valueProduct: 0.3,
    },
    {
        nameProduct: "apples",
        valueProduct: 0.56,
    },
    {
        nameProduct: "bread",
        valueProduct: 1.29,
    },
    {
        nameProduct: "milk",
        valueProduct: 1.59,
    },

]

// 4. Task: Cash Flow
// Given is another shopping cart of a customer
// Calculate the price for the shopping cart and save it in variable called 'price'
shopping_cart2 = [["bananas", 4], ["milk", 1], ["bread", 2]]



// YOUR SOLUTION //
function multipication(dig1, dig2){
    return dig1 * dig2;
}

findItems(price, "bread");

function itemSum(stockItem, amount){
    for (const prop in stockItem){
        if (prop === "valueProduct"){
            let res = multipication(stockItem[prop], amount);
            console.log(`${res}`);
            return res;
        }
    }
}

itemSum({nameProduct: "bananas", valueProduct: 0.3}, 4);

function totalSum(stockList, shoppingCard){
    let sum = 0;
    for (let i = 0; i < shoppingCard.length; i++){
        // let item = shoppingCard[i][0];
        // let value = shoppingCard[i][1];
        sum = itemSum(findItems(stockList, shoppingCard[i][0]), shoppingCard[i][1]) + sum;
    }
    return sum;
}

const costs = totalSum(price, shopping_cart2);

console.log(`total costs of shopping_car2 is: ${costs}`);



const inStock = [
    ["bananas", 24],
    ["apples", 36],
    ["bread", 18],
    ["milk", 54],
]

for (let item of inStock){
    let iName = item[0];
    let iQuantity = item[1];


    console.log(`${iName}, ${iQuantity}`);
    console.log(`${item}`);
}

const inStockPrice = [
    ["bananas", 0.3],
    ["apples", 0.56],
    ["bread", 1.29],
    ["milk", 1.59],
]

for (let item of inStock){
    let iName = item[0];
    let iQuantity = item[1];


}