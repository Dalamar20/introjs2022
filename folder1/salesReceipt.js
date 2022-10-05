const subtotal = 17.24;
const taxRate = 0.07

function calculateSalesTax(subtotal, taxRate) {
    return subtotal * taxRate
};

const taxTotal = calculateSalesTax(subtotal, taxRate);

function calculateTotal(subtotal, taxTotal) {
    return subtotal + taxTotal
};

/*function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}*/

const total = calculateTotal(subtotal, taxTotal)
//console.log(total.toFixed(2));