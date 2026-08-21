"use strict";
// Pick<T, Key> - Omit<T, Key> - Partial<T> 
Object.defineProperty(exports, "__esModule", { value: true });
//updates with partial
const course = {
    id: 1,
    title: "MA-111",
    instructor: "Dr. Smith",
    lessons: []
};
const updatedCourse = {
    title: "ANT101"
};
const newCourse = {
    ...course,
    ...updatedCourse
};
console.log(course);
console.log(newCourse);
//merge with original
//# sourceMappingURL=index.js.map