import React, { useContext } from 'react'
import { courseContext } from '../../Contexts/CourseContext/CourseContext';
import DisplayCourses from '../../Components/DisplayCourses/DisplayCourses';
import { useLoaderData } from 'react-router-dom';
import Slider from '../../Components/Slider/Slider';

const Home = () => {

  const { allCourses } = useContext(courseContext)
  const courses = useLoaderData()

  return (
    <div id='home_page' className='py-5'>
      <Slider/>
      <div className="container">
        <h2 className='font-bold text-2xl mb-5'>All Courses</h2>
        <div className="display_all_courses">
          <DisplayCourses mapFrom={courses}/>
        </div>
      </div>
    </div>
  )
}

export default Home
