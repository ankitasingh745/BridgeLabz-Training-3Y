class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    const total = this.marks.reduce((sum, m) => sum + m, 0);
    return total / this.marks.length;
  }

  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 75) return "A";
    if (avg >= 60) return "B";
    if (avg >= 40) return "C";
    return "F";
  }
}

const students = [
  new Student("Aman", [90, 85, 80, 88]),
  new Student("Riya", [65, 70, 62, 68]),
  new Student("Karan", [30, 35, 28, 20]),
];

students.forEach((s) =>
  console.log(`${s.name}: Average = ${s.calculateAverage().toFixed(2)}, Grade = ${s.getGrade()}`)
);