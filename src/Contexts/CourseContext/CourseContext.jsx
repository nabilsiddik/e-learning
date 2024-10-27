import React, { createContext, useEffect, useState } from 'react'

const courseContext = createContext(null)

const CourseContext = (props) => {

    const [allCourses, setAllCourses] = useState([])

    // Fetch Data from API
    useEffect(() => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setAllCourses(data))
        .catch(err => console.log('Error while fetching Data'))
    }, [])

    const contextValue = {
        allCourses,
        setAllCourses
    }

  return (
    <courseContext.Provider value={contextValue}>
      {props.children}
    </courseContext.Provider>
  )
}

export {CourseContext, courseContext}
