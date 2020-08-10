// 1

const ostapBender = new Student(
    "Вища Школа Психотерапії м.Одеса",
    1,
    "Остап Бендер",
    [5, 4, 4, 5]
);

console.log(ostapBender);

// 2

console.log(ostapBender.getInfo());

// 3

console.log(ostapBender.mark);

// 4

ostapBender.mark = 5;
console.log(ostapBender.mark);

// 5

console.log(ostapBender.getAverageMark());

// 6

ostapBender.toExpel();
ostapBender.mark = 5;
console.log(ostapBender.mark);

// 7

ostapBender.toRecover();
console.log(ostapBender.mark);

// Advanced

const johnSmith = new BudgetStudent(
    "Вища Школа Психотерапії м.Одеса",
    1,
    "John Smith",
    [5, 4, 4, 3]
);

const results = `
    <p>Student info: ${ostapBender.getInfo()} </p>
    <p>Student's marks: ${ostapBender.mark} </p>
    <p>Student's average mark: ${ostapBender.getAverageMark()}</p>
    <p><span>Other ansvers in console</span></p>`;

document.querySelector(".results").innerHTML = results;
