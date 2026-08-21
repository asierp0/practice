
// Pick<T, Key> - Omit<T, Key> - Partial<T> 

//the question is...

type Course = {
    id: number,
    title: string,
    instructor: string,
    lessons: [],
    //syllabus: {}
}

type Lesson = {
    id: number,
    title: string,
    course: Course
    pages: number[]
}

type newCourse = Pick<Course, "title" | "instructor">

type newLesson = Omit<Lesson, "id">

type partialCourse = Partial<Course>

//updates with partial

const course: Course = {
    id: 1,
    title: "MA-111",
    instructor: "Dr. Smith",
    lessons: []
}

const updatedCourse: Partial<Course> = {
    title: "ANT101"
};

const newCourse: Course = {
    ...course,
    ...updatedCourse
}

console.log(course);
console.log(newCourse);

