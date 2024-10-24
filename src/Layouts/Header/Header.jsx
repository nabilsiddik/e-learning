import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Components/Logo/Logo'
import SearchCourse from '../../Components/SearchCourse/SearchCourse'
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header id='header' className='border-b'>
        <div className="container flex items-center justify-between h-[70px] py-2">
            <div className="logo_and_serach flex items-center gap-5">
                <Logo width = {'100px'}/>
                <SearchCourse placeholder='Search course...'/>
            </div>
            
            <nav className="menu">
                <ul className='flex items-center gap-5'>
                    <Link>Home</Link>
                    <Link>Courses</Link>
                </ul>
            </nav>
            <div className="accounts">
                <div className='flex items-center gap-2'>
                    <FaRegUserCircle className='text-xl' />
                    <p>Nabil Siddik</p>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
