function getRandomNumber() {
    let a = +prompt('Function 5 - "Get random number". Enter the first number:');
    while (!+a) {
        a = +prompt('Function 5 - "Get random number". Enter the first NUMBER:');
    }
    let b = +prompt('Function 5 - "Get random number". Enter the second number:');
    while (!+b) {
        b = +prompt('Function 5 - "Get random number". Enter the second NUMBER:');
    }
    let c = Math.random();
    console.log(c);
    let result = 0;
    if (a === b) {
        result = a; 
    } else if (a < b) {
        result = Math.round((b - a) * c) + a; 
    } else {
        result = Math.round((a - b) * c) + b;
    }
    console.log(result);
}

getRandomNumber();