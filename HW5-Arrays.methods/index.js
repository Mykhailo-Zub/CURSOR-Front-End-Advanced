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

// const getModa = (...numbers) => {
//     console.log(numbers);
//     let modaCount = numbers.sort((a, b) => a - b).map((item) => parseInt(item));
//     const number = [];
//     const count = [];
//     for (let i = modaCount.length - 1, k = 0; i > 0; i--) {
//         debugger;
//         for (let y = 0; y <= number.length; y++) {
//             if (modaCount[i] === number[y]) {
//             count[y] = count[y] + 1;
//             modaCount = modaCount.slice(0, i);
//             i--;
//             break;
//             }
//         for (let j = i - 1; j >= 0; j--) {       
//             if (modaCount[i] === modaCount[j]) {
//                 number[k] = modaCount[i];
//                 count[k] = 1;
//                 k++;
//                 modaCount = modaCount.slice(0, i);
//                 i--;
//                 } else  {
                    
//             }
//         }
//     } 
    
// }console.log(count);
//  return number;
// }

// console.log(getModa(1,5,7,3,5,4,1,1,7));

// 3

const getAverage = (...numbers) => {
    numbers = numbers.filter((item) => (item !== isNaN && item !== undefined && typeof(item) === 'number'));
    const answer = numbers.reduce((acc, number) => acc + parseInt(number)) / numbers.length;
    return answer;
}

console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 4

const getMedian = (...numbers) => {
    numbers = numbers.filter((item) => (item !== isNaN && item !== undefined && typeof(item) === 'number'));
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
<p>2. Get moda: <span class="undone">Function is not ready</span></p>
<p>3. Get average: ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</p>
<p>4. Get median: ${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</p>
<p>5. Filter even numbers: ${filterEvenNumbers(1, 2, 3, 4, 5, 6)}</p>
<p>6. Count positive numbers: ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}</p>
<p>7. Get divided by five: ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</p>
<p>8. Replace bad words: ${replaceBadWords("Are you fucking kidding?")}</p>
<p>9. Divide by three: ${divideByThree("Commander")}</p>
<p>10. Generate combinations: <span class="undone">Function is not ready</span></p>`;

document.querySelector('.results').innerHTML = results;