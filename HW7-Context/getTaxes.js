const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

function getTaxes(salary) {
    return this.tax * salary;
}

export function getUkraineTaxes() {
    console.log(getTaxes.call(ukraine, 1000));
}
