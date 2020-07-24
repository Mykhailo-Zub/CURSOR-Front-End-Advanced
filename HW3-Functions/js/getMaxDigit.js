function getMaxDigit() {
    let anyInt = prompt('Function 1 - "Get max digit". Enter an integer:');
    while (isNaN(anyInt)) {
        anyInt = prompt('Function 1 - "Get max digit". Enter an INTEGER:');
    }
    let anyString = String(anyInt);
    while (anyString.length > 20) {
        anyInt = prompt('Function 1 - "Get max digit". Enter a number with less than 20 digits:');
        anyString = String(anyInt);
    } 
    let anyArc = anyString.split('');
    let result = Math.max(...anyArc);
    alert(`The max digit of ${anyInt} is ${result}`)
    return result;
}