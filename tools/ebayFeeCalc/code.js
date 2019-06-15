//All inputs
var inputAmountPaid = document.getElementById("inputAmountPaid");
var inputShippingPayment = document.getElementById("inputShippingPayment");
var inputShippingCost = document.getElementById("inputShippingCost");
var inputInitProductCost = document.getElementById("inputInitProductCost");
var inputButtonCalculate = document.getElementById("inputButtonCalculate");

var outputAmountPaid = document.getElementById("outputAmountPaid");
var outputShippingPayment = document.getElementById("outputShippingPayment");
var outputShippingCost = document.getElementById("outputShippingCost");
var outputPayPalFees = document.getElementById("outputPayPalFees");
var outputEbayFees = document.getElementById("outputEbayFees");
var outputInitProductCost = document.getElementById("outputInitProductCost");

var outputTotal = document.getElementById("outputTotal");

function roundDoubleDecimals(input) {
    return Math.ceil(input*100)/100;
}

function calculate() {
    outputAmountPaid.textContent = inputAmountPaid.value;
    
    outputShippingPayment.textContent = inputShippingPayment.value;
    
    outputShippingCost.textContent = inputShippingCost.value;
    
    outputPayPalFees.textContent = roundDoubleDecimals((parseInt(inputAmountPaid.value)+parseInt(inputShippingPayment.value))*.029+.3);
    
    outputEbayFees.textContent = roundDoubleDecimals((parseInt(inputAmountPaid.value)+parseInt(inputShippingPayment.value))*.1);
    
    outputInitProductCost.textContent = inputInitProductCost.value;
    
    outputTotal.textContent = roundDoubleDecimals(
        parseFloat(outputAmountPaid.textContent) + parseFloat(outputShippingPayment.textContent) - parseInt(outputShippingCost.textContent) - parseFloat(outputPayPalFees.textContent) - parseFloat(outputEbayFees.textContent) - parseFloat(outputInitProductCost.textContent));
}



inputButtonCalculate.addEventListener('click', function() {calculate()} );