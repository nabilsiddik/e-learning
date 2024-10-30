import React, { useContext } from 'react'
import { PropTypes } from 'prop-types';
import { courseContext } from '../../Contexts/CourseContext/CourseContext';
import { Link } from 'react-router-dom';
import { shopContext } from '../../Contexts/ShopContext/ShopContext';

const Course = ({course}) => {

  const {shortenText, allCourses, setAllCourses} = useContext(courseContext)
  const {cart, setCart} = useContext(shopContext)
  const {thumbnail_url, title, regular_price, discounted_price, short_desc, id, isOnCart} = course

  const handleEnrollButton = (id) => {
    allCourses.map((courseItem) => {
        if(courseItem.id === id){
            if(!courseItem.isOnCart){
                setCart((prevCarItems) => [...prevCarItems, courseItem])
            }else{
                alert('Item Already In cart')
            }  
        }
    })
        
    setAllCourses((prevItems) => 
        prevItems.map((item) => 
            item.id === id ? {...item, isOnCart: true} : item
        )
    )
  }

  return (
    <div id='Course'>
        <div class="card lg:card-compact bg-base-100 w-full shadow-xl">
            <figure>
                <Link className='w-full' to={`/single-product/${id}`}>
                    <img className='w-full'
                    src={thumbnail_url}
                    alt="Shoes" />
                </Link>
            </figure>
            <div class="card-body px-50 min-h-[230px]">
                <Link to={`/single-product/${id}`}>
                    <h2 class="card-title text-xl">{title}</h2>
                </Link>
                <p>{shortenText(short_desc, 50)}</p>
                <div className="prices flex items-center gap-3">
                    <span className="discounted_price font-bold">
                        ${discounted_price}
                    </span>
                    <span className="regular_price font-bold">
                        <del>${regular_price}</del>
                    </span>
                </div>
                <div class="card-actions justify-end">
                    <button onClick={()=> handleEnrollButton(id)} class="w-full btn btn-warning">{isOnCart ? 'Enrolled' : 'Enroll Now'}</button>
                </div>
            </div>
        </div>
    </div>
  )
}


Course.propTypes = {
    course: PropTypes.object.isRequired
}

export default Course
