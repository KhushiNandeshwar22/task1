const degreeInput = document.querySelector("#degree");
const tempTypeselect = document.querySelector("#temp-type");
const convertbutton = document.querySelector("#convert-button");
const resultText = document.querySelector(".temp h3");

let result = degreeInput.ariaValueMax;

function convertTemperature() {
    const inputvalue = parseFloat(degreeInput.value)
    if (tempTypeselect.value === "fahrenheit") {
        result = (inputvalue * 9) / 5 + 32;
        resultText.innertext = 'your Result is $(result.tofFixed(2)} F';
    } else if (tempTypeselect.value === "kalvin") {
        result = inputvalue + 273.15;
        resultText.innertext = 'your Result is ${result.tofixed(2)} k';
    } else {
        resultText.innerText = 'your Result is ${inputvalue} °C';
    }
}

function handleconversion() {
    const inputvalue = parseFloat(degreeInput.value);
    if (lisNaN(inputvalue)){
        convertTemperature();
    } else {
        resultText.innertext = "please Enter A valid number";
    }
} 

convertbutton.addEventListener("click",handleconversion);