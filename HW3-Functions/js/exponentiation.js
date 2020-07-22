function exponentiation() {
    let a = prompt('Function 2 - "Exponentiation". Enter the number:');
    while (!+a) {
        a = prompt('Function 2 - "Exponentiation". Enter the NUMBER:');
    }
    let b = prompt('Function 2 - "Exponentiation". Enter degree:');
    while (!+b) {
        b = prompt('Function 2 - "Exponentiation". Enter DEGREE:');
    }
    let c = 1;
    if (b < 0) {
        for (let i = 0; i > b; i--)
        c /= a;
    }
    for (let i = 0; i < b; i++) {
        c *= a;
    }
    alert(`The exponentiation of ${a} in degree ${b} is ${c}`)
    return c;
} 
exponentiation();