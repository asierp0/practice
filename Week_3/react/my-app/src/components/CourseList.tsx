import type { Course } from "../data/courses"
import CourseCard from "./CourseCard"

type CourseListProps = {
            courses: Course[]
            selectCourse: (course: Course) => void
        }


export function CourseList({ courses, selectCourse }: CourseListProps){
    return(
        <>
            {courses.map((course) => {
            return(
                <div className="course-container" key={course.id}>
                    <CourseCard 
                        selectCourse = {() => {selectCourse(course)}}
                        featured = {course.level === "Advanced"}
                        title = {course.title}
                        description = {course.description}
                        duration = {course.duration}
                        level = {course.level} 
                    />
                </div>
            )})}
        </>

        
    )
}