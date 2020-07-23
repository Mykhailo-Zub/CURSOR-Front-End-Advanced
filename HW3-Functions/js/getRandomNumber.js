function getRandomNumber() {
    let firstNumber = +prompt('Function 5 - "Get random number". Enter the first number:');
    while (!+firstNumber) {
        firstNumber = +prompt('Function 5 - "Get random number". Enter the first NUMBER:');
    }
    let secondNumber = +prompt('Function 5 - "Get random number". Enter the second number:');
    while (!+secondNumber) {
        secondNumber = +prompt('Function 5 - "Get random number". Enter the second NUMBER:');
    }
    let random = Math.random();
    let result = 0;
    if (firstNumber === secondNumber) {
        result = firstNumber; 
    } else if (firstNumber < secondNumber) {
        result = Math.round((secondNumber - firstNumber) * random) + firstNumber; 
    } else {
        result = Math.round((firstNumber - secondNumber) * random) + secondNumber;
    }
    alert(`The random number from ${firstNumber} to ${secondNumber} is ${result}`)
    return result;
}

