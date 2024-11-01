import React, { useContext, useState } from 'react'
import DisplayCourses from '../../Components/DisplayCourses/DisplayCourses'
import { courseContext } from '../../Contexts/CourseContext/CourseContext'
import Sidebar from '../../Layouts/Sidebar/Sidebar'

const CoursePage = () => {

    const {allCourses} = useContext(courseContext)
    const [filteredCourses, setFilteredCourses] = useState(allCourses)

  return (
    <div id='course_page' className='py-5'>
      <div className="container">
        <div className="page_contianer flex gap-5">
            <div className="sidebar w-[30%]">
                <Sidebar filteredCourses={filteredCourses} setFilteredCourses={setFilteredCourses}/>
            </div>
            <div className="display_all_courses w-[70%]">
                <DisplayCourses mapFrom={filteredCourses}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CoursePage
