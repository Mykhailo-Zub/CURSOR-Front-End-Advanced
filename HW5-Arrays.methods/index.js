// 1

const getRandomArray = (length, min, max) => {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        randomArray[i] = Math.round((max - min) * Math.random() + min);
    }
    return randomArray;
}

console.log(getRandomArray(15, 1, 100));

// 2

const modaCount = (arr) => {
    let newArr = [...arr];
    let numbers = [];
    let answer = [];
    do {
        if (numbers.length !== 0) {
            newArr = [...numbers]
            numbers = [];
        } for (let i = newArr.length - 1; i >= 0 ; i--) {
        if (newArr[i - 1] === undefined) {
        } else if (newArr[i] === newArr[i - 1]) {
            numbers.push(newArr[i]);
        }}}
    while (numbers.length > 2);
    if (numbers.length === 1) {
        answer = [...numbers];
    } else if (numbers[0] === numbers[1]) {
        answer = [numbers[0]]
    } else {
        answer = [`This row of numbers is multimodal`];
    }
     return answer;
}

const getModa = (...numbers) => {
    let filteredNumbers = numbers.sort((a, b) => a - b).filter((item) => (item ^ 0) === item);
    let answer = modaCount(filteredNumbers);
    return answer;   
}

console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 3

const getAverage = (...numbers) => {
    numbers = numbers.filter((item) => (item ^ 0) === item);
    const answer = numbers.reduce((acc, number) => acc + parseInt(number)) / numbers.length;
    return answer;
}

console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 4

const getMedian = (...numbers) => {
    numbers = numbers.filter((item) => (item ^ 0) === item);
    console.log(numbers);
    numbers.sort((a, b) => a - b).map((item) => parseInt(item));
    let answer = [];
    numbers.length % 2 === 0 
    ? answer = (numbers[(numbers.length / 2)] + numbers[((numbers.length / 2) - 1)]) / 2
    : answer = numbers[Math.floor(numbers.length / 2)]
    
    return answer;
}

console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 5

const filterEvenNumbers = (...numbers) => {
    numbers = numbers.filter((number) => number % 2 !== 0);
    return numbers;
}

console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));

//6

const countPositiveNumbers = (...numbers) => {
    numbers = numbers.filter((number) => number > 0);
    return numbers.length;
}

console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

// 7

const getDividedByFive = (...numbers) => {
    numbers = numbers.filter((number) => number % 5 === 0);
    return numbers;
}

console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 8

const replaceBadWords = (string) => {
    const badWords = ['shit', 'fuck'];
        for (let i = 0; i < badWords.length; i++) {
        if (string.includes(badWords[i])) {
            string = string.replace(badWords[i], '****');
        }} return string;
    }

console.log(replaceBadWords("It's bullshit!"));
 
// 9

const divideByThree = (word) => {
    word = word.toLowerCase();
    const syllables = [];
    console.log(word);
    for (let i = 0, j = 0; i < (word.length / 3); i++) {
        if (word[j + 2] === undefined) {
            if (word[j + 1] === undefined) {
                syllables[i] = [word[j]];
                break;
            } syllables[i] = [word[j] + word[j + 1]];
            j += 2;
            break;
        } syllables[i] = [word[j] + word[j + 1] + word[j + 2]];
        j += 3;
    } return syllables;
}

console.log(divideByThree("Commander"));

const results = `
<p>1. Get random array: ${getRandomArray(15, 1, 100)}</p>
<p>2. Get moda:  ${getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</p>
<p>3. Get average: ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</p>
<p>4. Get median: ${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</p>
<p>5. Filter even numbers: ${filterEvenNumbers(1, 2, 3, 4, 5, 6)}</p>
<p>6. Count positive numbers: ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}</p>
<p>7. Get divided by five: ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</p>
<p>8. Replace bad words: ${replaceBadWords("Are you fucking kidding?")}</p>
<p>9. Divide by three: ${divideByThree("Commander")}</p>
<p>10. Generate combinations: <span class="undone">Function is not ready</span></p>`;

document.querySelector('.results').innerHTML = results;