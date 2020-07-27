const students = ["Саша", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


function getPairs(arr) {
    let innerArr = [...arr];
    let newArr = [];
    let pairs = [];
    let girls = ["Олена", "Іра", "Світлана"];
    let boys = ["Саша", "Ігор", "Олексій"];
    let deletedGirls = [];
    let deletedBoys = [];
    let n = 0;
    for (let i = 0; i < innerArr.length; i++) {
        for (let o = 0; o < boys.length; o++) {
            if (boys[o] === innerArr[i]) {
            for (let p = 0, y = o + 1; p < girls.length; p++) {
                if (girls[p] === innerArr[y]) {
                    newArr.push(boys[o], girls[p]);
                    pairs[n] = [...newArr.slice(', ')];
                    newArr.splice(0, 2);
                    deletedGirls = girls.splice(p, 1);
                    deletedBoys = boys.splice(p, 1);
                    o--;
                    n++;
                    break;
                } else {
                    y++;
                    p--;
                }
            }
        }
        
    }
} return pairs;
}

console.log(getPairs(students));

function projectForWork(arr1, arr2) {
    let innerArr1 = [...arr1];
    let innerArr2 = [...arr2];
    let studentWithTheme = [];
    let newArr = [];
    let help = innerArr1.slice('');
    let help1;
    let help2 = [];
    for (let i = 0; i < arr2.length; i++) {
        newArr.push(help[i][0], ' і ',help[i][1]);
        help1 = newArr.join('');
        help2 = help1.split();
        studentWithTheme[i] = [...help2, innerArr2[i]];
        newArr.splice(0, 3);    
    }
    return studentWithTheme;
}

 console.log(projectForWork(getPairs(students), themes));

 function individualMarks(arr1, arr2) {
    let innerArr1 = [...arr1];
    let innerArr2 = [...arr2];
    let individualMarks = [];
    let newArr = [];
    let help = innerArr1.slice('');
    for (let i = 0; i < arr2.length; i++) {
        newArr.push(help[i]);
        individualMarks[i] = [...newArr, innerArr2[i]];
        newArr.splice(0, 1);    
    }
    return individualMarks;
}

console.log(individualMarks(students, marks));

function pairWithMarks(arr1, arr2) {
    let innerArr1 = [...arr1];
    let innerArr2 = [...arr2];
    let pairWithMarks = [];
    let newArr = [];
    let help = innerArr1.slice('');
    let help1;
    let help2 = [];
    let randomMark;
    for (let i = 0; i < arr2.length; i++) {
        do randomMark = Math.ceil(Math.random() * 10);
        while (randomMark > 5); 
        newArr.push(help[i][0], ' і ',help[i][1]);
        help1 = newArr.join('');
        help2 = help1.split();
        randomMark = randomMark.toString();
        pairWithMarks[i] = [...help2, innerArr2[i], ...randomMark];
        newArr.splice(0, 3);
       
}
    return pairWithMarks;
}

 console.log(pairWithMarks(getPairs(students), themes));

 const results = `
<p>Students: ${students}</p>
<p>Themes: ${themes}</p>
<p>Marks: ${marks}</p>
<p>Pairs of students: ${getPairs(students)}</p>
<p>Students with their themes: ${projectForWork(getPairs(students), themes)}</p>
<p>Individual marks: ${individualMarks(students, marks)}</p>
<p>Pairs of students with random marks:${pairWithMarks(getPairs(students), themes)}</p>`;

document.querySelector('.results').innerHTML = results;