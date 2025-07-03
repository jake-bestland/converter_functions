// Temp converters
function KtoC(tempInK) {
    let tempInC = (tempInK - 273.15);
    return tempInC;
}

function CtoK(tempInC) {
    let tempInK = (tempInC+ 273.15);
    return tempInK;
}

function FtoK(tempInF) {
    let tempInK = ((tempInF - 32) * (5 / 9) + 273.15);
    return tempInK;
}

function KtoF(tempInK) {
    let tempInF = ((tempInK - 273.15) * (9 / 5) + 32);
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