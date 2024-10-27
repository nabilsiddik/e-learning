import React, { useContext } from 'react'
import { PropTypes } from 'prop-types';
import { courseContext } from '../../Contexts/CourseContext/CourseContext';

const Course = ({course}) => {

  const {shortenText} = useContext(courseContext)

  const {thumbnail_url, title, regular_price, discounted_price, short_desc} = course

  return (
    <div id='Course'>
        <div class="card lg:card-compact bg-base-100 w-full shadow-xl">
            <figure>
                <img className='w-full'
                src={thumbnail_url}
                alt="Shoes" />
            </figure>
            <div class="card-body px-50 min-h-[230px]">
                <h2 class="card-title text-xl">{title}</h2>
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
                <button class="w-full btn btn-warning">Enrol Now</button>
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
