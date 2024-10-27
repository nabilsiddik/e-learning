import React, { createContext, useEffect, useState } from 'react'
import { allCourseData } from '../../Data/allCourseData'

const courseContext = createContext(null)

const CourseContext = (props) => {

    const [allCourses, setAllCourses] = useState(allCourseData)

    // Short a text
    const shortenText = (text, numOfChar) => {
        return text.length > numOfChar ? text.substring(0, numOfChar) + '...' : text
    }

    const contextValue = {
        allCourses,
        setAllCourses,
        shortenText
    }

  return (
    <courseContext.Provider value={contextValue}>
      {props.children}
    </courseContext.Provider>
  )
}

export {CourseContext, courseContext}
