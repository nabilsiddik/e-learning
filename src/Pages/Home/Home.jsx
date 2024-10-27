import React, { useContext } from 'react'
import { courseContext } from '../../Contexts/CourseContext/CourseContext';
import Course from '../../Components/Course/Course';

const Home = () => {

  const { allCourses } = useContext(courseContext)

  return (
    <div id='home_page' className='py-5'>
      <div className="container">
        <h2 className='font-bold text-2xl mb-5'>All Courses</h2>

        <div className="display_all_courses grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {allCourses.length > 0 && allCourses.map((course, index) => {
            return <Course key={index} course={course} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
