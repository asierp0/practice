
import type { Course } from "../data/courses"

type CourseCardProps = Omit<Course, "id"> & {featured?: boolean} & {selectCourse: () => void};

export default function CourseCard({ title, description, duration, level, featured, selectCourse}: CourseCardProps){

    return(
        <div className="course-card">
            <h3>{title}</h3>
            {featured && <p>Featured Course</p>}
            <p><span className="card-headings">Description:</span> {description}</p>
            <p><span className="card-headings">Duration:</span> {duration}</p>
            <p><span className="card-headings">Level:</span> {level}</p>
            <button onClick={() => {selectCourse()}}>View Details</button>
        </div>
    )
} 