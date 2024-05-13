// Javascript: Exercise

// Define a JavaScript function named temperatureConverter().
// The function takes two arguments: a temperature value and a unit (celsius or fahrenheit).
// Convert the entered temperature to the other unit (if Celsius, convert to Fahrenheit, and vice versa).
// Return the converted temperature.

function temperatureConverter01(degree, unit){
    if (unit === "celsius" || unit === "c"){
        degree = (degree * 9/5) + 32;
        
    } else if (unit === "fahrenheit" || unit === "f"){
        degree = Math.round((degree - 32) * 5/9);
    } else {
        return console.log("enter either celsius or c, or fahrenheit or f");
    }
    return console.log(`${degree} ${unit}`);
}

temperatureConverter01(0, "f");

function fahrenheitToCelsiusConv(degree){
    return Math.round((degree - 32) * 5/9);
}

function celsiusToFahrenheitConv(degree){
    return (degree * 9/5) + 32;
}

function temperatureConverter02(degree, unit){
    switch (unit){
        case "fahrenheit":
        case "f":
            return console.log(`${fahrenheitToCelsiusConv(degree)} ${unit}`);
        case "celsius":
        case "c":
            return console.log(`${celsiusToFahrenheitConv(degree)} ${unit}`); 
        default:
            return "enter either celsius or c, or fahrenheit or f";
    }
}

temperatureConverter02(76, "c");
