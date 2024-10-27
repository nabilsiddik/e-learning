import React, { useContext } from 'react'
import { courseContext } from '../../Contexts/CourseContext/CourseContext';
import DisplayCourses from '../../Components/DisplayCourses/DisplayCourses';

const Home = () => {

  const { allCourses } = useContext(courseContext)

  return (
    <div id='home_page' className='py-5'>
      <div className="container">
        <h2 className='font-bold text-2xl mb-5'>All Courses</h2>

        <div className="display_all_courses">
          <DisplayCourses mapFrom={allCourses}/>
        </div>
      </div>
    </div>
  )
}

export default Home
