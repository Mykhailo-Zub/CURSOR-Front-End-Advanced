class Student {
    constructor(university, course, fullName, allMarks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = allMarks;
        this.expelled = false;
    }

    getInfo() {
        return (
            "Студент " +
            this.course +
            "го курсу, " +
            this.university +
            ", " +
            this.fullName
        );
    }

    get mark() {
        return this.expelled ? null : this.marks;
    }

    set mark(mark) {
        if (this.expelled) {
            return console.log("Unable to add mark, student expelled!");
        }
        this.marks.push(mark);
    }

    getAverageMark() {
        if (this.expelled) {
            return null;
        }
        return (
            this.marks.reduce((acc, item) => (acc = acc + item), 0) /
            this.marks.length
        );
    }

    toExpel() {
        if (this.expelled) {
            return console.log("This student has already been expelled!");
        }
        this.expelled = true;
    }

    toRecover() {
        if (!this.expelled) {
            return console.log("This student isn't expelled!");
        }
        this.expelled = false;
    }
}
