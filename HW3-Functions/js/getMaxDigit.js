function getMaxDigit() {
    let a = prompt('Function 1 - "Get max digit". Enter an integer:');
    while (!+a) {
        a = prompt('Function 1 - "Get max digit". Enter an INTEGER:');
    }
    let b = String(a);
    while (b.length > 20) {
        a = prompt('Function 1 - "Get max digit". Enter a number with less than 20 digits:');
        b = String(a);
    } 
    let c = b.split('');
    let x = Math.max(...c);
    alert(`The max digit of ${a} is ${x}`)
    return x;
}
getMaxDigit();