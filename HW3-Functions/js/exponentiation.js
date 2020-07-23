function exponentiation() {
    let number = prompt('Function 2 - "Exponentiation". Enter the number:');
    while (!+number) {
        number = prompt('Function 2 - "Exponentiation". Enter the NUMBER:');
    }
    let degree = prompt('Function 2 - "Exponentiation". Enter degree:');
    while (!+degree) {
        degree = prompt('Function 2 - "Exponentiation". Enter DEGREE:');
    }
    let result = 1;
    if (degree < 0) {
        for (let i = 0; i > degree; i--)
        result /= number;
    }
    for (let i = 0; i < degree; i++) {
        result *= number;
    }
    alert(`The exponentiation of ${number} in degree ${degree} is ${result}`)
    return result;
} 
