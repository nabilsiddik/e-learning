import React from 'react'
import { MdDelete } from "react-icons/md";


const CourseItemList = ({course}) => {

const {_id, title, thumbnailUrl, description, regularPrice, discountedPrice, category} = course

  return (
    <div id='course_item_list' className='bg-success py-3 px-4 rounded-lg mb-3 text-white flex items-center justify-between'>
      <div className="flex items-center gap-5">
        <div className="course_thumbnail">
            <img className='w-[120px] rounded-lg' src={thumbnailUrl} alt="course thumbnail" />
        </div>
        <div>
            <h3 className='font-bold text-lg'>{title}</h3>
            <p>Category: {category}</p>
            <p>Description: {description}</p>
            <div className="flex items-center gap-4">
                <p className="regular_price">Discounted Price: ${discountedPrice}</p>
                <p className="regular_price">Regular Price: <del>${regularPrice}</del></p>
            </div>
        </div>
      </div>

      <div className="delete_course text-2xl text-red-600 cursor-pointer">
        <MdDelete />
      </div>
    </div>
  )
}

export default CourseItemList
