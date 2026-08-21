// Interfaces

interface Person{
    id: number
    name: string;
    age: number;
}

interface Student extends Person{
    isEnrolled: boolean;
    major: string
    gpa: number;
    
}

interface Instructor extends Person{
    subject: string;
}

interface Course{
    id: number;
    title: string;
    instructor: Instructor;
    textBook: string;
    lessons: Lesson[];
    students: Student[]
}

interface Lesson{
    id: number;
    title: string;
    pageNumbers: number[];
}

type InGoodStanding = true | false

//objects

const instructor: Instructor = {
    id: 1,
    name: "Dr. Jones",
    age: 40,
    subject: "Anthropology",
}

const lesson1: Lesson = {
    id: 1,
    title: "Intro to Anthro",
    pageNumbers: [1, 6]
}

const lesson2: Lesson = {
    id: 2,
    title: "Cultural Anthropology",
    pageNumbers: [7, 14]
}

const student1: Student = {
    id: 1,
    name: "Tim Short",
    age: 21,
    isEnrolled: true,
    major: "PolySci",
    gpa: 3.5,
   
}

const student2: Student = {
    id: 2,
    name: "Sarah Smith",
    age: 19,
    isEnrolled: true,
    major: "Linguistics",
    gpa: 3.7,
   
}

const course: Course = {
    id: 101,
    title: "Anthropology for Beginners",
    instructor: instructor,
    textBook: "Discovering Anthropology",
    lessons: [lesson1, lesson2],
    students: [student1, student2]
}


//course summary
type CourseSummary = Pick<Course, "title" | "instructor"> & {studentCount: number}

function createCourseSummary (course: Course): CourseSummary {
    return {title: course.title, instructor: course.instructor, studentCount: course.students.length};
}

const courseSum1 = createCourseSummary(course);

console.log("=== COURSE SUMMARY ===");
console.log(courseSum1);

//updating course data.

const courseUpdate: Partial<Course> = {
    title: "Anthropology 101"
}
console.log("=== COURSE UPDATE ===");
console.log(courseUpdate);

const updatedCourse: Course = {
    ...course,
    ...courseUpdate
}

const courseSum2 = createCourseSummary(updatedCourse)

console.log("=== COURSE SUMMARY WITH UPDATE ===");
console.log(courseSum2);


// reusable response

type ApiResponse<T> = {
    status: "Success" | "Failure",
    message: string,
    data: T | null 
}

function findById<T extends {id: number}>(items: T[], id: number): ApiResponse<T> {

    for (const item of items){

        if(item.id === id){
            return {
                    status: "Success",
                    message: `Item with ID ${item.id} located`, 
                    data: item
                }
        }
    }

    return {
            status: "Failure",
            message: "No item with that ID could be located",
            data:  null
        }
}

const findStudent = findById(course.students, 1)
const findLesson = findById(course.lessons, 4)

console.log("=== FIND BY ID - STUDENT ===");
console.log(findStudent);
console.log("=== FIND BY ID - LESSON ===");
console.log(findLesson);


// record

const studentRecords: Record<Student['id'], InGoodStanding> = {
    1: true,
    2: false
} 

console.log("=== RECORD EX ===");
console.log(studentRecords);

// readonly

const lockedCourse: Readonly<Course> = {
    ...course
}

console.log("=== READ ONLY EX ===");
console.log(lockedCourse);

//lockedCourse.title = "new title";


//student summary

type StudentSummary = Pick<Student, "name" | "age" | "major"| "gpa"> & {inGoodStanding: InGoodStanding}


function createStudentSummary(student: Student): StudentSummary {

    let standing = studentRecords[student.id]

    if(standing === undefined ){
        standing = false
    }

    return {
        name: student.name,
        age: student.age,
        major: student.major,
        gpa: student.gpa,
        inGoodStanding: standing
    }
}

console.log("==== STUDENT SUMMARY ====")
const studentSum1 = createStudentSummary(student1)

console.log(studentSum1);

function getLastItem<T> (arr: T[]): T | undefined {

    const lastItem = arr[arr.length -1];

    return lastItem;

}

const lastStudent = getLastItem(course.students);
const lastLesson = getLastItem(course.lessons);

console.log("=== LAST STUDENT IN STUDENTS ARRAY ===");
console.log(lastStudent);
console.log("=== LAST LESSON IN LESSONS ARRAY ===");
console.log(lastLesson);

// 2nd generic type example

type LookUpTable<T> = Record<number, T>

const lookUpStudent: LookUpTable<Student> = {
    1: student1,
    2: student2
}

const lookUpLesson: LookUpTable<Lesson> = {
    1: lesson1,
    2: lesson2
}

console.log("=== GENERIC LOOK UP TABLE - STUDENT ===");
console.log(lookUpStudent[2])
console.log("=== GENERIC LOOK UP TABLE - LESSON ===");
console.log(lookUpLesson[1])