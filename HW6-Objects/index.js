const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

function getCurrentStudent() {
    let currentStudent = prompt(`Please choose student by number: 1. Tanya; 2. Victor; 3. Anton.`);
    return currentStudent - 1;
}  

let currentStudent = getCurrentStudent();
 



// 1

const getSubjects = (arr, studentIndex) => {
    let subjects = Object.keys(arr[studentIndex].subjects);
    return subjects.map((subject) => subject[0].toUpperCase() + subject.slice(1).toLowerCase().replace('_', ' ')); 
}

// 2

const getAverageMark = (arr, studentIndex) => {
    const allMarks = Object.values(arr[studentIndex].subjects).flat();
    const answer = Math.round((allMarks.reduce((acc, number) => acc + parseInt(number), 0) / allMarks.length) * 100) / 100;
    return answer;
}


// 3

const getStudentInfo = (arr, studentIndex) => {
    const {course, name} = arr[studentIndex];
    return {course, name, averageMark: getAverageMark(arr, studentIndex)};
}

console.log(getStudentInfo(students, currentStudent));

// 4

const getStudentsName = (arr) => arr.map((item) => item.name).sort();

// 5

const getBestStudent = (arr) => {
    const maxMark = Math.max(...arr.map((item, i) => getAverageMark(arr, i)));
    const bestStudent = arr.find((item, i) => getAverageMark(arr, i) === maxMark)
    return bestStudent.name;
}


// 6

const calculateWordLetters = (word) => {
    word = prompt(`Enter the word`);
    word = word.split('').sort().join('');
    let answer = {};
    let key = '';
    for (let i = word.length - 1, j = 1; i >= 0 ; i--) {
        if (word[i - 1] === undefined) {
            if (word[i] === key) {
                continue;
            }
            key = word[i];
            answer[key] = 1;
        } else if (word[i] === word[i - 1]) {
            j += 1;
            key = word[i];
            answer[key] = j;
        } else if (word[i] === key) {
            j = 1;
            continue;
        } else {
            j = 1;
            key = word[i];
            answer[key] = j;
        }} 
        return answer;
}

console.log(calculateWordLetters());
    
    
const results = `
<p>1. Get student's subjects: ${getSubjects(students, currentStudent)}</p>
<p>2. Get student's average mark:  ${getAverageMark(students, currentStudent)}</p>
<p>3. Get student info: <span class="red">Answer in console</span></p>
<p>4. Get students name: ${getStudentsName(students)}</p>
<p>5. Get the best student: ${getBestStudent(students)}</p>
<p>6. Calculate letters in the word: <span class="red">Answer in console</span></p>`;

document.querySelector('.results').innerHTML = results;