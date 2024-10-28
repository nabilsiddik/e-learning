import React from 'react'
import CourseModule from '../CourseModule/CourseModule'

const CourseModules = ({currentCourse}) => {

    const {modules} = currentCourse

  return (
    <div id='course_modules'>
        {modules && modules.map((moduleItem, index) => {
            return <CourseModule key={moduleItem.id} moduleItem = {moduleItem}/>
        })}
    </div>
  )
}

export default CourseModules
