import Header from './components/Header'
import Footer from './components/Footer'
import './styles/App.css'
import { courses, type Course } from './data/courses'
import { CourseList } from './components/CourseList'
import { useState } from 'react'



function App() {

  const [searchValue, setSearchValue] = useState("");
  const [level, setLevel] = useState("All Levels");
  const [selectedCourse, setSelectedCourse] = useState({});

  const dashTitle:string = "Course Dashboard";
  const userName:string = "Aaron";
  const numCourses:number = courses.length;

  
  const filteredCourses = courses.filter((course) => level !== "All Levels" ?
  course.title.toLowerCase().startsWith(searchValue) && course.level === level :
  course.title.toLowerCase().startsWith(searchValue));

    function selectCourse(course: Course){
      setSelectedCourse(course);
    }
  

  return (
    
    <div className="main-container">
      <Header />
      <div className='header'>
        <p>{dashTitle}</p>
        <p>{userName}</p>
        <p>{numCourses}
        </p>
        <p>{numCourses > 0 ? "There are courses available" : "There are no courses available"}</p>
      </div>
      <input type='text' value={searchValue} onChange={(e)=> setSearchValue(e.target.value)}/>
      <select name="select" value={level} onChange={(e) => setLevel(e.target.value)}>
        <option>All Levels</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
      <div className='course-list-container'>
          <CourseList courses={filteredCourses} selectCourse={selectCourse} />
      </div>
      <Footer />
    </div>
  )
}
   
export default App
