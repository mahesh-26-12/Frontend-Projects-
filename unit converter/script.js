let inputValue = document.querySelector('#inputValue');
let unitType = document.querySelector('#unitType');
let convertBtn = document.querySelector('#convertBtn');
let resultSpan = document.querySelector('#result');

convertBtn.addEventListener('click',()=>{
    let value = parseFloat(inputValue.value);
    let type = unitType.value;
    let result;

    if (isNaN(value)){
        resultSpan.textContent = 'Please enter a valid number';
        return;

    }

    switch(type){
        case "cmToInch":
            result = (value/2.54).toFixed(2) + " in";
            break;
        case "inchToCm":
            result = (value*2.54).toFixed(2) + " cm";
            break;
        case "kgToLb":
            result = (value*2.20462).toFixed(2) + " lb";
            break;
        case "lbToKg":
            result = (value/2.20462).toFixed(2) + " kg";
            break;
        case "kmToMile":
            result = (value*0.621371).toFixed(2) + "miles";
            break;
        case "mileToKm":
            result = (value/0.621371).toFixed(2) + " km";
            break;
        default:
            result = "Invalid conversion";
    }
    resultSpan.textContent = result;
})