class BudgetStudent extends Student {
    constructor(university, course, fullName, allMarks) {
        super(university, course, fullName, allMarks);
        setInterval(() => this.getScholarship(), 10000);
    }

    getScholarship() {
        if (this.getAverageMark() >= 4 && !this.expelled) {
            console.log("You received UAH 1,400 scholarships");
        } else {
            console.log("You study too bad or expelled");
        }
    }
}
