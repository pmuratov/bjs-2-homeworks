function Student(name, gender, age) {
  (this.name = name), (this.gender = age), (this.age = age), (marks = []);
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty("marks")) {
    this[marks] = [...this[marks], marks];
  }
};

Student.prototype.getAverage = function () {
  if (!this.hasOwnProperty("marks") || !this.marks?.length) {
    return (
      this.marks.reduce((prev, mark) => prev + mark, 0) / this.marks.length
    );
  }
};

Student.prototype.exclude = function (reason) {
  (this.excluded = reason), delete this.subject, delete this.marks;
};
