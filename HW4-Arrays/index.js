const students = ["Саша", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
const girls = ["Олена", "Іра", "Світлана"];
const boys = ["Саша", "Ігор", "Олексій"];


// function getPairs(arr) {
//     let innerArr = [...arr];
//     let newArr = [];
//     let pairs = [];
//     let girls = ["Олена", "Іра", "Світлана"];
//     let boys = ["Саша", "Ігор", "Олексій"];
//     let deletedGirls = [];
//     let deletedBoys = [];
//     let n = 0;
//     for (let i = 0; i < innerArr.length; i++) {
//         for (let j = 0; j < boys.length; j++) {
//             if (boys[j] === innerArr[i]) {
//             for (let k = 0, y = j + 1; k < girls.length; k++) {
//                 if (girls[k] === innerArr[y]) {
//                     newArr.push(boys[j], girls[k]);
//                     pairs[n] = [...newArr.slice(', ')];
//                     newArr.splice(0, 2);
//                     deletedGirls = girls.splice(k, 1);
//                     deletedBoys = boys.splice(k, 1);
//                     j--;
//                     n++;
//                     break;
//                 } else {
//                     y++;
//                     k--;
//                 }
//             }
//         }
        
//     }
// } return pairs;
// }

const getPairs = (arr1, arr2) => arr1.map((student, index) => [`${student} і ${arr2[index]}`]);

console.log(getPairs(boys, girls));

// function projectForWork(arr1, arr2) {
//     let innerArr1 = [...arr1];
//     let innerArr2 = [...arr2];
//     let studentWithTheme = [];
//     let newArr = [];
//     let help = innerArr1.slice('');
//     let help1;
//     let help2 = [];
//     for (let i = 0; i < arr2.length; i++) {
//         newArr.push(`${help[i][0]} і ${help[i][1]}`);
//         help1 = newArr.join('');
//         help2 = help1.split();
//         studentWithTheme[i] = [...help2, innerArr2[i]];
//         newArr.splice(0, 3);    
//     }
//     return studentWithTheme;
// }

const projectForWork = (arr1, arr2) => arr1.map((students, index) => [...students, arr2[index]]);

console.log(projectForWork(getPairs(boys, girls), themes));

//  function individualMarks(arr1, arr2) {
//     let innerArr1 = [...arr1];
//     let innerArr2 = [...arr2];
//     let individualMarks = [];
//     let newArr = [];
//     let help = innerArr1.slice('');
//     for (let i = 0; i < arr2.length; i++) {
//         newArr.push(help[i]);
//         individualMarks[i] = [...newArr, innerArr2[i]];
//         newArr.splice(0, 1);    
//     }
//     return individualMarks;
// }

const individualMarks = (arr1, arr2) => arr1.map((student, index) => [student, arr2[index]])

console.log(individualMarks(students, marks));


// function pairWithMarks(arr1, arr2) {
//     let innerArr1 = [...arr1];
//     let innerArr2 = [...arr2];
//     let pairWithMarks = [];
//     let newArr = [];
//     let help = innerArr1.slice('');
//     let help1;
//     let help2 = [];
//     let randomMark;
//     for (let i = 0; i < arr2.length; i++) {
//         do randomMark = Math.ceil(Math.random() * 10);
//         while (randomMark > 5); 
//         newArr.push(help[i][0], ' і ',help[i][1]);
//         help1 = newArr.join('');
//         help2 = help1.split();
//         randomMark = randomMark.toString();
//         pairWithMarks[i] = [...help2, innerArr2[i], ...randomMark];
//         newArr.splice(0, 3);
       
// }
//     return pairWithMarks;
// }

const getRandomMark = (minMark, maxMark) => Math.round((maxMark - minMark) * Math.random() + minMark);

const pairWithMarks = (arr) => arr.map((pairs, index) => [...pairs, getRandomMark(1, 5)]);

console.log(pairWithMarks(projectForWork(getPairs(boys, girls), themes)));

const results = `
<p>Students: ${students}</p>
<p>Themes: ${themes}</p>
<p>Marks: ${marks}</p>
<p>Pairs of students: ${getPairs(boys, girls)}</p>
<p>Students with their themes: ${projectForWork(getPairs(boys, girls), themes)}</p>
<p>Individual marks: ${individualMarks(students, marks)}</p>
<p>Pairs of students with random marks:${pairWithMarks(getPairs(boys, girls), themes)}</p>`;

document.querySelector('.results').innerHTML = results;