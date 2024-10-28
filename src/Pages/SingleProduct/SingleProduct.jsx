import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { courseContext } from '../../Contexts/CourseContext/CourseContext';
import EnrolCard from '../../Components/EnrollCard/EnrolCard';
import { allCourseData } from './../../Data/allCourseData';
import CourseModules from '../../Components/CourseModules/CourseModules';

const SingleProduct = () => {

    const {productId} = useParams()
    const {allCourses, getCourseUsingId} = useContext(courseContext)
    const {title, short_desc} = getCourseUsingId(allCourses, productId)    

  return (
    <div id='single_product_page'>
      <div className="page_header text-white py-10 bg-gradient-to-r from-[#03010F] to-[#0D234F]">
        <div className="container">
            <div className="page_header max-h-[300px] flex gap-10">
                <div className='w-[70%]'>
                    <h1 className='font-bold text-4xl mb-4'>{title}</h1>
                    <p>{short_desc}</p>
                </div>
                <div className='w-[40%]'>
                    <EnrolCard currentCourse = {getCourseUsingId(allCourses, productId)}/>
                </div>
            </div>
        </div>
      </div>

      <div className="container">
        <div className="page_body mt-5">
            <div className="left w-[60%]">
                <CourseModules/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
