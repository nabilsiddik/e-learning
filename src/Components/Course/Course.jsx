import React, { useContext } from 'react'
import { PropTypes } from 'prop-types';
import { courseContext } from '../../Contexts/CourseContext/CourseContext';
import { Link } from 'react-router-dom';
import { shopContext } from '../../Contexts/ShopContext/ShopContext';

const Course = ({course}) => {

  const {shortenText, allCourses, setAllCourses} = useContext(courseContext)
  const {setCart, handleEnrollButton} = useContext(shopContext)
  const {thumbnail_url, title, regular_price, discounted_price, short_desc, id, isOnCart} = course


  return (
    <div id='Course'>
        <div className="card lg:card-compact bg-base-100 w-full shadow-xl">
            <figure>
                <Link className='w-full' to={`/single-product/${id}`}>
                    <img className='w-full'
                    src={thumbnail_url}
                    alt="Shoes" />
                </Link>
            </figure>
            <div className="card-body px-50 min-h-[230px]">
                <Link to={`/single-product/${id}`}>
                    <h2 className="card-title text-xl">{title}</h2>
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
                <div className="card-actions justify-end">
                    <button onClick={()=> handleEnrollButton(allCourses, setAllCourses, setCart, id)} className="w-full btn btn-warning">{isOnCart ? 'Enrolled' : 'Enroll Now'}</button>
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
