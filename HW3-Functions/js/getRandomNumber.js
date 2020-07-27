function getRandomNumber() {
    let firstNumber = parseInt(prompt('Function 5 - "Get random number". Enter the first number:'));
    while (isNaN(firstNumber)) {
        firstNumber = parseInt(prompt('Function 5 - "Get random number". Enter the first NUMBER:'));
    }
    let secondNumber = parseInt(prompt('Function 5 - "Get random number". Enter the second number:'));
    while (isNaN(secondNumber)) {
        secondNumber = parseInt(prompt('Function 5 - "Get random number". Enter the second NUMBER:'));
    }
    let random = Math.random();
    let result = 0;
    if (firstNumber === secondNumber) {
        result = firstNumber; 
        result = firstNumber < secondNumber
        ? Math.round((secondNumber - firstNumber) * random) + firstNumber
        : Math.round((firstNumber - secondNumber) * random) + secondNumber;
    alert(`The random number from ${firstNumber} to ${secondNumber} is ${result}`)
    return result;
}

