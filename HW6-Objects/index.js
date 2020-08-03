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
    let correctSubjects = [];
    let i = 0;
    subjects.map((subject) => {
        subject = subject[0].toUpperCase() + subject.slice(1);
        subject = subject.replace('_', ' ');
        correctSubjects[i] = subject;
        i++;
    }); 
    return correctSubjects;
}


// 2

const getAverage = (numbers) => {
    numbers = numbers.filter((item) => (item ^ 0) === item);
    const answer = numbers.reduce((acc, number) => acc + parseInt(number)) / numbers.length;
    return answer;
}

const getAverageMark = (arr, studentIndex) => {
    let marks = Object.values(arr[studentIndex].subjects);
    let allMarks = [...marks[0], ...marks[1], ...marks[2]];
    let averageMark = Math.round(getAverage(allMarks) * 100) / 100;
    return averageMark;
}


// 3

const getStudentInfo = (arr, studentIndex) => {
    const studentInfo = {};
    studentInfo.course = arr[studentIndex].course;
    studentInfo.name = arr[studentIndex].name;
    studentInfo.averageMark = getAverageMark(arr, studentIndex);
    return studentInfo;
}

console.log(getStudentInfo(students, currentStudent));

// 4

const getStudentsName = (arr) => {
    let studentsName = [];
    studentsName = [arr[0].name, arr[1].name, arr[2].name];
    studentsName = studentsName.sort();
    return studentsName;
}


// 5

const getBestStudent = (arr) => {
    let bestStudent = [];
    if (getAverageMark(students, 0) > getAverageMark(students, 1)) {
        if (getAverageMark(students, 0) > getAverageMark(students, 2)){
            bestStudent = arr[0].name;
        } else {bestStudent = arr[2].name};
    } else if (getAverageMark(students, 1) > getAverageMark(students, 2)) {
        bestStudent = arr[1].name;
    } else {bestStudent = arr[2].name};
    return bestStudent;
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