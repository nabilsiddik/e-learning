import React, { useContext, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../Components/Logo/Logo'
import SearchCourse from '../../Components/SearchCourse/SearchCourse'
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { shopContext } from '../../Contexts/ShopContext/ShopContext';
import { authContext } from './../../Contexts/AuthContex/AuthContext';
import './header.css'
import Swal from 'sweetalert2';
import { courseContext } from '../../Contexts/CourseContext/CourseContext';

const Header = () => {

    const { cart } = useContext(shopContext)
    const { user, userSignOut } = useContext(authContext)
    const {cartProducts} = useContext(courseContext)

    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                Swal.fire({
                    position: "center center",
                    icon: "success",
                    title: "You are loged Out",
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Error While sign out!",
                    footer: `${error.code}. ${error.message}`
                })
            })
    }

    return (
        <header id='header' className='border-b'>
            <div className="container lg:flex items-center justify-between py-5">
                <div className="logo_and_serach flex items-center gap-5">
                    <Logo width={'100px'} />
                    <SearchCourse placeholder='Search course...' />
                </div>

                <nav className="menu">
                    <ul className='flex items-center gap-5 text-lg'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/courses'>Course</NavLink>

                        <div className="relative group">
                            <div className='relative hover: cursor-pointer'> Categories</div>
                            <div className="drop_down">
                                <div className='flex flex-col bg-warning w-[220px] py-5 absolute top-full left-[50%] right-[50%] translate-x-[-50%] z-10 rounded-lg gap-2 font-bold hidden group-hover:flex'>
                                    <NavLink to='/category/web-development' className='bg-yellow-400 py-2 text-center px-2'>Web Development</NavLink>
                                    <NavLink to='/category/app-development' className='bg-yellow-400 py-2 text-center px-2'>App Development</NavLink>
                                    <NavLink to='/category/graphic-designt' className='bg-yellow-400 py-2 text-center px-2'>Graphic Design</NavLink>
                                    <NavLink to='/category/digital-marketing' className='bg-yellow-400 py-2 text-center px-2'>Digital Marketing</NavLink>
                                </div>
                            </div>
                        </div>

                        {user?.email && <NavLink to={'/admin-dashboard'}>Dashboard</NavLink>}
                        {user?.email && <NavLink to={'/profile'}>Profile</NavLink>}

                    </ul>
                </nav>
                <div className="icons flex items-center gap-3">
                    {user?.email && <button onClick={handleSignOut} className='btn bg-yellow-500 font-bold text-lg'>Log Out</button>}
                    {!user?.email && <NavLink className='btn bg-yellow-500 font-bold text-lg' to={'/login'}>Login</NavLink>}

                    {user?.email &&
                        <div className="tooltip tooltip-bottom" data-tip={user?.email && user.displayName}>
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                                    <img src={user.photoURL} alt="" />
                                </div>
                            </div>
                        </div>
                    }

                    <img src="https://ibb.co.com/QQVqH6J" alt="" />
                    

                    <Link to='/cart'>
                        <div className='relative'>
                            <MdOutlineShoppingCart className='text-2xl' />
                            <div className="cart_count absolute w-[26px] h-[26px] bg-yellow-500 font-bold rounded-full flex items-center justify-center top-[-23px] right-[-20px] text-sm">{cartProducts.length}</div>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
