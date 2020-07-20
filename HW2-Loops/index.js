let n = '';

do {
        n = parseInt(prompt(`Enter a first integer`));
}   while (!Number.isInteger(n));

let m = '';

do {
        m = parseInt(prompt(`Enter a second integer`));
}   while (!Number.isInteger(m));

const skipEven = confirm('Skip even numbers?');

let sum = 0;
let x = 0;

if (n <= m) {
    for (x = n; x <= m; x++) {
        if (skipEven) {
            if (x % 2 === 0) {
                sum = sum;  
            }
            else sum = sum + x;
        }
        else sum = sum + x;        
    }
 
} else 
    for (x = m; x <= n; x++) {
        if (skipEven) {
            if (x % 2 === 0) {
                sum = sum;  
            }
            else sum = sum + x;
        }
        else sum = sum + x;        
    }

const results = `
<p>The first number is <span>${n}</span></p>
<p>The second number is <span>${m}</span></p>
<p>Skip even is <span>${skipEven}</span></p>
<p>Sum of numbers between the first and the second number is <span>${sum}</span></p>`;

document.querySelector('.results').innerHTML = results;