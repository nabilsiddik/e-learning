import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { CiStopwatch } from "react-icons/ci";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineQuiz } from "react-icons/md";
import { GrNotes } from "react-icons/gr";



const EnrolCard = ({currentCourse}) => {

    const [playVideo, setPlayVideo] = useState(false)
    const {title,thumbnail_url, discounted_price, regular_price, course_modules: { enrolled, watch_time, total_video, total_quize, total_notes, video_lectures } = {}} = currentCourse 
    
    const handleIntroVideo = () => {
        setPlayVideo(true)
    }

  return (
    <div id='enroll_card' className='border-4 border-white bg-white text-black rounded-md shadow-xl'>
       <div className="promoVideo relative">

            {playVideo ? 
                <iframe className='w-full h-[250px]' src="https://www.youtube.com/embed/AmI7PHx_iRY?si=9vM9Q26gFf8Kq-H6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            :
                <div>
                    <div className="thumbnail_image">
                        <img className='w-full' src={thumbnail_url} alt="thumbnail image" />
                    </div>
                    <div onClick={handleIntroVideo} className='play_icon absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full text-red-600 cursor-pointer'>
                        <FaPlay  />
                    </div>
                </div>
            }


       </div>

       <div className="body px-3">
        <div className="price flex item-center gap-2 mt-5 mb-1">
                <span className="discounted_price font-bold text-xl">
                    ${discounted_price}
                </span>
                <span className="discounted_price text-lg">
                    <del>${regular_price}</del>
                </span>
        </div>
        <h3 className='font-bold text-lg mb-4'>{title}</h3>
        <button className='btn btn-success text-white w-full font-bold text-lg'>Enroll Course</button>

        <div className="course_have my-8">
            <h3 className='font-bold text-lg mb-2'>This Course Has</h3>
            <ul className='flex flex-col gap-2'>
                <li className='flex items-center gap-4 text-lg'>
                    <span><MdOutlinePayment /></span>
                    <span>Total Enrolled {enrolled}</span>
                </li>
                <li className='flex items-center gap-4 text-lg'>
                    <span><CiStopwatch /></span>
                    <span>Time Required {watch_time}</span>
                </li>
                <li className='flex items-center gap-4 text-lg'>
                    <span><IoVideocamOutline /></span>
                    <span>{video_lectures} Video Lectures</span>
                </li>
                <li className='flex items-center gap-4 text-lg'>
                    <span><MdOutlineQuiz /></span>
                    <span>{total_quize} Quiz</span>
                </li>
                <li className='flex items-center gap-4 text-lg'>
                    <span><GrNotes /></span>
                    <span>{total_notes} Notes</span>
                </li>
            </ul>
        </div>
       </div>
    </div>
  )
}

export default EnrolCard
