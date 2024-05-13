// Javascript: Exercise

// Define a JavaScript function named temperatureConverter().
// The function takes two arguments: a temperature value and a unit (celsius or fahrenheit).
// Convert the entered temperature to the other unit (if Celsius, convert to Fahrenheit, and vice versa).
// Return the converted temperature.

function temperatureConverter01(degree, unit){
    if (unit === "celsius" || unit === "c"){
        degree = (degree * 9/5) + 32;
        
    } else if (unit === "fahrenheit" || unit === "f"){
        degree = (degree - 32) * 5/9;
    } else {
        return console.log("enter either celsius or c, or fahrenheit or f");
    }
    return console.log(`${degree} ${unit}`);
}

temperatureConverter01(0, "f");

function fahrenheitToCelsiusConv(degree){
    return degree = (32*degree * 9/5) + 32;
}

function celsiusToFahrenheitConv(degree){
    return degree = (degree - 32) * 5/9;
}

function temperatureConverter02(degree, unit){
    switch (unit){
        case "f":
            return fahrenheitToCelsiusConv(degree); 
        case "c":
            return celsiusToFahrenheitConv(degree);
        default:
            return "enter either celsius or c, or fahrenheit or f";
    }
}

console.log(`${temperatureConverter02(0, "f")}`);
