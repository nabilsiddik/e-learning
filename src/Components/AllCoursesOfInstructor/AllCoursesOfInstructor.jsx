import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CourseItemList from '../CourseItemList/CourseItemList'

const AllCoursesOfInstructor = () => {

    const allCoursesOfInstructor = useLoaderData()

    return (
        <div id='all_courses_of_isntructor' className='w-11/12 mx-auto'>
            <div className="container">
                {allCoursesOfInstructor.length > 0 && allCoursesOfInstructor.map((course) => {
                    return <CourseItemList key={course._id} course={course} />
                })}
            </div>
        </div>
    )
}

export default AllCoursesOfInstructor
