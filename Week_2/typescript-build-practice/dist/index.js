"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let studentName = "Aaron";
let student = {
    name: studentName,
    score: 95,
};
function displayStudent(name, score) {
    return `${name} scored ${score}%`;
}
const result = displayStudent(student.name, student.score);
console.log(result);
//# sourceMappingURL=index.js.map