"use strict";
// Interfaces
Object.defineProperty(exports, "__esModule", { value: true });
//objects
const instructor = {
    id: 1,
    name: "Dr. Jones",
    age: 40,
    subject: "Anthropology",
};
const lesson1 = {
    id: 1,
    title: "Intro to Anthro",
    pageNumbers: [1, 6]
};
const lesson2 = {
    id: 2,
    title: "Cultural Anthopology",
    pageNumbers: [7, 14]
};
const student1 = {
    id: 1,
    name: "Tim Short",
    age: 21,
    isEnrolled: true,
    major: "PolySci",
    gpa: 3.5,
};
const student2 = {
    id: 2,
    name: "Sarah Smith",
    age: 19,
    isEnrolled: true,
    major: "Linguistics",
    gpa: 3.7,
};
const course = {
    id: 101,
    title: "Anthropology for Beginners",
    instructor: instructor,
    textBook: "Discovering Anthropology",
    lessons: [lesson1, lesson2],
    students: [student1, student2]
};
function createCourseSummary(course) {
    return { title: course.title, instructor: course.instructor, studentCount: course.students.length };
}
const courseSum1 = createCourseSummary(course);
console.log("=== COURSE SUMMARY ===");
console.log(courseSum1);
//updating course data.
const courseUpdate = {
    title: "Anthropology 101"
};
console.log("=== COURSE UPDATE ===");
console.log(courseUpdate);
const updatedCourse = {
    ...course,
    ...courseUpdate
};
const courseSum2 = createCourseSummary(updatedCourse);
console.log("=== COURSE SUMMARY WITH UPDATE ===");
console.log(courseSum2);
function findById(items, id) {
    for (const item of items) {
        if (item.id === id) {
            return {
                status: "Success",
                message: `Item with ID ${item.id} located`,
                data: { ...item }
            };
        }
    }
    return {
        status: "Failure",
        message: "No item with that ID could be located",
        data: null
    };
}
const findStudent = findById(course.students, 1);
const findLesson = findById(course.lessons, 4);
console.log("=== FIND BY ID - STUDENT ===");
console.log(findStudent);
console.log("=== FIND BY ID - LESSON ===");
console.log(findLesson);
// record
const studentRecords = {
    1: true,
    2: false
};
console.log("=== RECORD EX ===");
console.log(studentRecords);
// readonly
const lockedCourse = {
    ...course
};
console.log("=== READ ONLY EX ===");
console.log(lockedCourse);
function createStudentSummary(student) {
    let standing = studentRecords[student.id];
    if (standing === undefined) {
        standing = false;
    }
    return {
        name: student.name,
        age: student.age,
        major: student.major,
        gpa: student.gpa,
        inGoodStanding: standing
    };
}
console.log("==== STUDENT SUMMARY ====");
const studentSum1 = createStudentSummary(student1);
console.log(studentSum1);
function getLastItem(arr) {
    const lastItem = arr[arr.length - 1];
    return lastItem;
}
const lastStudent = getLastItem(course.students);
const lastLesson = getLastItem(course.lessons);
console.log("LAST STUDENT IN STUDENTS ARRAY");
console.log(lastStudent);
console.log("LAST LESSON IN LESSONS ARRAY");
console.log(lastLesson);
const lookUpStudent = {
    1: student1,
    2: student2
};
const lookUpLesson = {
    1: lesson1,
    2: lesson2
};
console.log("=== GENERIC LOOK UP TABLE - STUDENT ===");
console.log(lookUpStudent[2]);
console.log("=== GENERIC LOOK UP TABLE - STUDENT ===");
console.log(lookUpLesson[1]);
//# sourceMappingURL=index.js.map