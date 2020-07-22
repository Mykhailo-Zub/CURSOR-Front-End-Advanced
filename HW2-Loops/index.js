let firstInt;

do {
    firstInt = parseInt(prompt(`Enter a first integer`));
}   while (!Number.isInteger(firstInt));

let secondInt;

do {
    secondInt = parseInt(prompt(`Enter a second integer`));
}   while (!Number.isInteger(secondInt));

const skipEven = confirm('Skip even numbers?');

let sum = 0;
let x = 0;

if (firstInt <= secondInt) {
    for (x = firstInt; x <= secondInt; x++) {
        if (skipEven && x % 2 === 0) {
                continue;  
            }
            sum += x;
        }      
} else 
    for (x = secondInt; x <= firstInt; x++) {
        if (skipEven && x % 2 === 0) {
            continue;  
        }
        sum += x;
    }        

const results = `
<p>The first number is <span>${firstInt}</span></p>
<p>The second number is <span>${secondInt}</span></p>
<p>Skip even is <span>${skipEven}</span></p>
<p>Sum of numbers between the first and the second number is <span>${sum}</span></p>`;

document.querySelector('.results').innerHTML = results;