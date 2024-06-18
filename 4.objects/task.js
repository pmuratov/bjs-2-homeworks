function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty("marks")) {
    this.marks.push(...marks);
  }
};

Student.prototype.getAverage = function () {
  let averageGrade = 0;
  if (this.marks?.length) {
    averageGrade =
      this.marks.reduce((prev, mark) => prev + mark, 0) / this.marks.length;
  }
  return averageGrade;
};

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
};
