// Function to convert Kelvin to Celsius
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

// Function to convert Kelvin to Fahrenheit
function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9 / 5 + 32;
}

// Function to convert Celsius to Kelvin
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Function to convert Fahrenheit to Kelvin
function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9 + 273.15;
}

function convertTemperature() {
    let conversionType = document.getElementById("conversionType").value;
    let temperature = parseFloat(document.getElementById("temperature").value);
    let result = '';

    if (isNaN(temperature)) {
        result = 'Please enter a valid temperature.';
    } else {
        switch (conversionType) {
            case 'kelvin':
                result = `Celsius: ${kelvinToCelsius(temperature).toFixed(2)}<br>Fahrenheit: ${kelvinToFahrenheit(temperature).toFixed(2)}`;
                break;
            case 'celsius':
                result = `Kelvin: ${celsiusToKelvin(temperature).toFixed(2)}<br>Fahrenheit: ${celsiusToFahrenheit(temperature).toFixed(2)}`;
                break;
            case 'fahrenheit':
                result = `Celsius: ${fahrenheitToCelsius(temperature).toFixed(2)}<br>Kelvin: ${fahrenheitToKelvin(temperature).toFixed(2)}`;
                break;
            default:
                result = 'Invalid choice. Please select a valid conversion type.';
                break;
        }
    }

    document.getElementById("results").innerHTML = result;
}
