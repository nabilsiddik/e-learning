import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Components/Logo/Logo'
import SearchCourse from '../../Components/SearchCourse/SearchCourse'
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { shopContext } from '../../Contexts/ShopContext/ShopContext';


const Header = () => {

    const {cart} = useContext(shopContext)

  return (
    <header id='header' className='border-b'>
        <div className="container lg:flex items-center justify-between py-5">
            <div className="logo_and_serach flex items-center gap-5">
                <Logo width = {'100px'}/>
                <SearchCourse placeholder='Search course...'/>
            </div>
            
            <nav className="menu">
                <ul className='flex items-center gap-5 text-lg'>
                    <Link to='/'>Home</Link>
                    <Link to='/courses'>Course</Link>
                    
                    <div className="relative group">
                        <div className='relative hover: cursor-pointer'> Categories</div>
                        <div className="drop_down">
                                <div className='flex flex-col bg-warning w-[220px] py-5 absolute top-full left-[50%] right-[50%] translate-x-[-50%] z-10 rounded-lg gap-2 font-bold hidden group-hover:flex'>
                                    <Link to='/category/web-development' className='bg-yellow-400 py-2 text-center px-2'>Web Development</Link>
                                    <Link to='/category/app-development' className='bg-yellow-400 py-2 text-center px-2'>App Development</Link>
                                    <Link to='/category/graphic-designt' className='bg-yellow-400 py-2 text-center px-2'>Graphic Design</Link>
                                    <Link to='/category/digital-marketing' className='bg-yellow-400 py-2 text-center px-2'>Digital Marketing</Link>
                                </div>
                        </div>
                    </div>

                    <Link to={'/contact'}>contact</Link>
                </ul>
            </nav>
            <div className="icons flex items-center gap-3">
                <div className='flex items-center gap-2'>
                    <FaRegUserCircle className='text-xl' />
                    <p>Nabil Siddik</p>
                </div>
                <Link to='/cart'>
                    <div className='relative'>
                        <MdOutlineShoppingCart className='text-2xl' />
                        <div className="cart_count absolute w-[26px] h-[26px] bg-yellow-500 font-bold rounded-full flex items-center justify-center top-[-23px] right-[-20px] text-sm">{cart.length}</div>
                    </div>
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Header
