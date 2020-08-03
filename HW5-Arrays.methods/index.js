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
        if (numbers.length) {
            newArr = [...numbers]
            numbers = [];
        } for (let i = newArr.length - 1; i >= 0 ; i--) {
        if (!newArr[i - 1]) {
        } else if (newArr[i] === newArr[i - 1]) {
            numbers.push(newArr[i]);
        } else {
            answer = [`This row of numbers is multimodal`];
        }}}
    while (numbers.length > 2);
    if (numbers.length === 1) {
        answer = [...numbers];
    } else if (numbers[0] === numbers[1] && numbers[0]) {
        answer = numbers[0];
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
    newNumbers = numbers.filter((item) => (item ^ 0) === item);
    const answer = newNumbers.reduce((acc, number) => acc + parseInt(number), 0) / newNumbers.length;
    return answer;
}

console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 4

const getMedian = (...numbers) => {
    newNumbers = numbers.filter((item) => (item ^ 0) === item);
    newNumbers.sort((a, b) => a - b).map((item) => parseInt(item));
    let answer = [];
    newNumbers.length % 2 === 0 
    ? answer = (newNumbers[(newNumbers.length / 2)] + newNumbers[((newNumbers.length / 2) - 1)]) / 2
    : answer = newNumbers[Math.floor(newNumbers.length / 2)]
    
    return answer;
}

console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 5

const filterEvenNumbers = (...numbers) => numbers.filter((number) => number % 2 !== 0);

console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));

//6

const countPositiveNumbers = (...numbers) => numbers.filter((number) => number > 0).length;

console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

// 7

const getDividedByFive = (...numbers) => numbers.filter((number) => number % 5 === 0);

console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 8

const replaceBadWords = (string) => {
    let newString = string;
    const badWords = ['shit', 'fuck'];
        for (let i = 0; i < badWords.length; i++) {
        while (newString.toLowerCase().includes(badWords[i])) {
            newString = newString.replace(new RegExp(`${badWords[i]}`, `ig`), '****');
        }} return newString;
    }

console.log(replaceBadWords("It's bullshit! Fuck."));
 
// 9

// const divideByThree = (word) => {
//     let newWord = word.toLowerCase();
//     while (newWord.includes(' ')) {
//         newWord = newWord.replace(' ', '');
//     }
//     const syllables = [];
//     for (let i = 0, j = 0; i < (newWord.length / 3); i++) {
//         if (!newWord[j + 2]) {
//             if (!newWord[j + 1]) {
//                 syllables[i] = [newWord[j]];
//                 break;
//             } syllables[i] = [newWord[j] + newWord[j + 1]];
//             j += 2;
//             break;
//         } syllables[i] = [newWord[j] + newWord[j + 1] + newWord[j + 2]];
//         j += 3;
//     } return syllables;
// }

// 9 (Max edition)

const divideByThree = (word, value) => word.toLowerCase().replace(/\s/g, '').split('').reduce((acc, el, i, arr) => {
        if (i % value === 0) {
            const tempArr = arr.slice(i, i + value).join('');
            acc.push(tempArr);
        } return acc
    },[]);

console.log(divideByThree("Commander", 3));

const results = `
<p>1. Get random array: ${getRandomArray(15, 1, 100)}</p>
<p>2. Get moda:  ${getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</p>
<p>3. Get average: ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</p>
<p>4. Get median: ${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</p>
<p>5. Filter even numbers: ${filterEvenNumbers(1, 2, 3, 4, 5, 6)}</p>
<p>6. Count positive numbers: ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}</p>
<p>7. Get divided by five: ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</p>
<p>8. Replace bad words: ${replaceBadWords("Are you fucking kidding? It's bullshit!")}</p>
<p>9. Divide by three: ${divideByThree("Commander", 3)}</p>
<p>10. Generate combinations: <span class="undone">Function is not ready</span></p>`;

document.querySelector('.results').innerHTML = results;