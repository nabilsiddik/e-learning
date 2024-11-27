import React, { useContext } from 'react'
import { PropTypes } from 'prop-types';
import { courseContext } from '../../Contexts/CourseContext/CourseContext';
import { Link } from 'react-router-dom';
import { shopContext } from '../../Contexts/ShopContext/ShopContext';

const Course = ({course}) => {

  const {shortenText, allCourses, setAllCourses} = useContext(courseContext)
  const {setCart, handleEnrollButton} = useContext(shopContext)
  const {_id, title, thumbnailUrl, description, price, category} = course


  return (
    <div id='Course'>
        <div className="card lg:card-compact bg-base-100 w-full shadow-xl">
            <figure>
                <Link className='w-full' to={`/single-product/${_id}`}>
                    <img className='w-full'
                    src={thumbnailUrl}
                    alt="Shoes" />
                </Link>
            </figure>
            <div className="card-body px-50 min-h-[230px]">
                <Link to={`/single-product/${_id}`}>
                    <h2 className="card-title text-xl">{title}</h2>
                </Link>
                <p>{shortenText(description, 50)}</p>
                <div className="prices flex items-center gap-3">
                    <span className="discounted_price font-bold">
                        ${price}
                    </span>
                    <span className="regular_price font-bold">
                        <del>100</del>
                    </span>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={()=> handleEnrollButton(allCourses, setAllCourses, setCart, _id)} className="w-full btn btn-warning">Enroll Now</button>
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
