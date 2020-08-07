const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1

function getTaxes(salary) {
    return this.tax * salary;
}

console.log(getTaxes.call(ukraine, 1000));

// 2

function getMiddleTaxes() {
    return this.tax * this.middleSalary;
}

console.log(getMiddleTaxes.call(latvia));

// 3

function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}

console.log(getTotalTaxes.call(litva));

// 4

function getMySalary(min, max) {
    return {
        salary: Math.round((max - min) * Math.random() + min),
        taxes: Math.round((max - min) * Math.random() + min) * this.tax,
        profit:
            Math.round((max - min) * Math.random() + min) -
            Math.round((max - min) * Math.random() + min) * this.tax,
    };
}

setInterval(() => console.log(getMySalary.call(ukraine, 1500, 2000)), 10000);

const results = `
    <p>Function 1 - Get my taxes: ${getTaxes.call(ukraine, 1000)}</p>
    <p>Function 2 - Get middle taxes: ${getMiddleTaxes.call(latvia)}</p>
    <p>Function 3 - Get total taxes: ${getTotalTaxes.call(litva)}</p>
    <p>Function 4 - Get my salary: <span>Ansver in console</span></p>`;

document.querySelector(".results").innerHTML = results;
