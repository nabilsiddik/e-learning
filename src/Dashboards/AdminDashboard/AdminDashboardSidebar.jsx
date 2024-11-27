import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminDashboardSidebar = () => {
  return (
    <div id='admin_dashboard_sidebar'>
      <nav>
        <ul className='flex flex-col gap-3 bg-yellow-400 py-3'>
            <NavLink className='px-3 font-bold'>Instructors</NavLink>
            <NavLink className='px-3 font-bold'>Students</NavLink>
            <NavLink className='px-3 font-bold'>Analytics</NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default AdminDashboardSidebar
