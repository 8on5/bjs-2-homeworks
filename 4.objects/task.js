function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    ('marks' in this) ? this.marks.push(...marks) : console.log('Студент отчислен. Добавление невозможно.');
}

Student.prototype.getAverage = function () {
    if (!('marks' in this) || (this.marks.length === 0)) {
        return 0;
    } else {
        return Math.round((this.marks.reduce((sum, mark) => sum + mark) / this.marks.length) * 100) / 100;
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
