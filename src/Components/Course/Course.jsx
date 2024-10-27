import React from 'react'
import { PropTypes } from 'prop-types';

const Course = ({course}) => {
  const {thumbnail_url, title, regular_price, discounted_price} = course
  return (
    <div id='Course'>
        <div class="card bg-base-100 w-full shadow-xl">
            <figure>
                <img className='w-full'
                src={thumbnail_url}
                alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
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
