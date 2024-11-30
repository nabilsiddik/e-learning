import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const InstructorDashboard = () => {

  return (
    <div id='admin_dashboard_content' className='py-10'>
      <div className="container">
      <h1 className='font-bold text-3xl text-center mb-10'>Welcome to Instructor Dashboard</h1>
      
        <div className="instructor_actions flex justify-center mb-10">
            <ul className='flex items-center gap-5'>
                <li><Link to='/instructor-dashboard/add-course'><button className='btn btn-success text-white'>Add Course</button></Link></li>
                <li><Link to='/instructor-dashboard/all-course'><button className='btn btn-success text-white'>All Courses</button></Link></li>
            </ul>
        </div>

        <Outlet/>
        
      </div>
    </div>
  )
}

export default InstructorDashboard