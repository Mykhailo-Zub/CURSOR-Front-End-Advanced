function afterTaxes() {
    let salary = prompt('Function 4 - "Salary after taxes". Enter your salary:');
    while (!+salary) {
        salary = prompt('Function 4 - "Salary after taxes". Enter your SALARY:');
    }
    const taxes = 0.195;
    const salaryAfterTaxes = salary - salary * taxes;
    alert(`Your salary after taxes is ${salaryAfterTaxes}`)
    return salaryAfterTaxes;
}
