let sugarPrice = 15.678;
let vinePrice = 123.965;
let meetPrice = 90.2345;

let maxPrice = Math.max(sugarPrice, vinePrice, meetPrice);

console.log(maxPrice);

let minPrice = Math.min(sugarPrice, vinePrice, meetPrice);

console.log(minPrice);

let summOfProducts = sugarPrice + vinePrice + meetPrice;

console.log(summOfProducts);

let summToInteger = Math.floor(sugarPrice) + Math.floor(vinePrice) + Math.floor(meetPrice);

console.log(summToInteger);

let summTo100 = Math.round(Math.round(summOfProducts)/100) * 100;

console.log(summTo100);

let isEven;

if (summOfProducts % 2) {
    isEven = true; 
    console.log(isEven);
} else {
    isEven = false;
    console.log(isEven);
}

let summOfChangeFromSugar = 500 - sugarPrice;
let summOfChangeFromVine = 500 - vinePrice;
let summOfChangeFromMeet = 500 - meetPrice;

console.log(summOfChangeFromSugar);
console.log(summOfChangeFromVine);
console.log(summOfChangeFromMeet);

let averagePrice = Math.round(summOfProducts / 3 * 100) / 100;

console.log(averagePrice);

let discount = Math.round(Math.random() * 100) / 100;

console.log(discount);

let summWithDiscount = Math.round((summOfProducts - (summOfProducts * discount)) * 100) / 100;

console.log(summWithDiscount);

let profitAll = summOfProducts / 2 - (summOfProducts - summWithDiscount);

console.log (profitAll);

let results = `
    <p>Max price: ${maxPrice}</p>
    <p>Min price: ${minPrice}</p>
    <p>Summ of all products: ${summOfProducts}</p>
    <p>Summ to integer: ${summToInteger}</p>
    <p>Summ to hundreds: ${summTo100}</p>
    <p>Summ of all products even? ${isEven}</p>
    <p>Change from 500 for sugar: ${summOfChangeFromSugar}</p>
    <p>Change from 500 for vine: ${summOfChangeFromVine}</p>
    <p>Change from 500 for meet: ${summOfChangeFromMeet}</p>
    <p>Avarage price: ${averagePrice}</p>
    <p>Discount: ${Math.round(discount * 100)}%</p>
    <p>Summ with discount: ${summWithDiscount}</p>
    <p>Profit: ${profitAll}</p>
`;

document.getElementById("results").innerHTML = results;