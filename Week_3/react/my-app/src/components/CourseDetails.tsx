import type { Course } from "../data/courses"
type CourseDetailsProps = {
    course:Course
    clearDetails: () => void
    enroll: () => void
    isEnrolled: boolean
}

export function CourseDetails( {course, clearDetails, enroll, isEnrolled} : CourseDetailsProps ){
    
    return(
        <div>
            <div>
                <p>{course.title}</p>
                <p>{course.description}</p>
                <p>{course.duration}</p>
                <p>{course.level}</p>
                {isEnrolled && <p>You Have Enrolled in This Class</p>}
                <button onClick={() => clearDetails()}>Clear</button>
                <button disabled = {isEnrolled} onClick={() => enroll() }>Enroll</button>
            </div>
        </div>
    )

}