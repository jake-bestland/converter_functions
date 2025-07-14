// Temp converters
function FtoC(tempInF) {
    let tempInC = (tempInF -32) * (5 / 9);
    return tempInC
}

function FtoK(tempInF) {
    let tempInK = ((tempInF - 32) * (5 / 9) + 273.15);
    return tempInK;
}

function KtoC(tempInK) {
    let tempInC = (tempInK - 273.15);
    return tempInC;
}

function KtoF(tempInK) {
    let tempInF = ((tempInK - 273.15) * (9 / 5) + 32);
    return tempInF;
}

function CtoK(tempInC) {
    let tempInK = (tempInC+ 273.15);
    return tempInK;
}

function CtoF(tempInC) {
    let tempInF = ((tempInC * (9 / 5)) + 32);
    return tempInF;
}



// Length converters
function inchToCm(inch) {
    let cm = (inch * 2.54);
    return cm;
}

function CmToInch(cm) {
    let inch = (cm / 2.54);
    return inch;
}

function MToKm(miles) {
    let km = (miles * 1.60934);
    return km;
}

function KmToM(km) {
    let miles = (km / 1.60934);
    return miles;
}

// Defining Dropdown boxes
const tempDropdown = document.getElementById("tempDropdown");
const lengthDropdown = document.getElementById("lengthDropdown");
const convertedTempDropdown = document.getElementById("convertedTempDropdown");
const convertedLengthDropdown = document.getElementById("convertedLengthDropdown");

// Defining Input boxes
const tempInputToConvert = document.getElementById("temp-number-to-convert");
const convertedTempInput = document.getElementById("temp-converted-number");
const lengthInputToConvert = document.getElementById("length-number-to-convert");
const convertedLengthInput = document.getElementById("length-converted-number");

const selectedTempValue = tempDropdown.value;
const selectedTempText = tempDropdown.textContent;
let convertedTempValue = convertedTempDropdown.value;
let convertedTempText = convertedTempDropdown.textContent;

const selectedLengthValue = lengthDropdown.value;
const selectedLengthText = lengthDropdown.textContent;
let convertedLengthValue = convertedLengthDropdown.value;
let convertedLengthText = convertedLengthDropdown.textContent;


let tempOptions = ["Fahrenheidt", "Celcius", "Kelvin"]
for (let i = 0; i < tempOptions.length; i++) {
    let opt = tempOptions[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    tempDropdown.appendChild(el);
    let el2 = document.createElement("option");
    el2.textContent = opt;
    el2.value = opt;
    convertedTempDropdown.appendChild(el2);
    
}

let lengthOptions = ["Inch", "Centimeter", "Mile", "Kilometer"]
for (let i = 0; i < lengthOptions.length; i++) {
    let opt = lengthOptions[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    lengthDropdown.appendChild(el);
    let el2 = document.createElement("option");
    el2.textContent = opt;
    el2.value = opt;
    convertedLengthDropdown.appendChild(el2);
}

tempDropdown.addEventListener("change", function(event) {
    console.log("Selected value:", event.target.value);
});

convertedTempDropdown.addEventListener("change", function(event) {
    console.log("Selected value:", event.target.value);
});

lengthDropdown.addEventListener("change", function(event) {
    console.log("Selected value:", event.target.value);
});

convertedLengthDropdown.addEventListener("change", function(event) {
    console.log("Selected value:", event.target.value);
});