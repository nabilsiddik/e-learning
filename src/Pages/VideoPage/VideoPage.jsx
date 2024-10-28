import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { courseContext } from '../../Contexts/CourseContext/CourseContext'

const VideoPage = () => {

    const {allCourses} = useContext(courseContext)
    const {videoId} = useParams()

    const currentCourse = allCourses.flatMap((course) => 
        course.modules.flatMap((module) => module.videos)
    ).find(video => video.video_id === parseInt(videoId))

  return (
    <div id='video_page' className='py-5'>
      <div className="container">
        <div className="video_frame aspect-w-16 aspect-h-9">
        <iframe className='w-full h-[598px]' src={currentCourse.video_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default VideoPage
