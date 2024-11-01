import React, { createContext, useEffect, useState } from 'react'
import { allCourseData } from '../../Data/allCourseData'

const courseContext = createContext(null)

const CourseContext = (props) => {

    const [isLogedIn, setIsLogedIn] = useState(true)
    const [allCourses, setAllCourses] = useState(allCourseData)

    // Short a text
    const shortenText = (text, numOfChar) => {
        return text.length > numOfChar ? text.substring(0, numOfChar) + '...' : text
    }

    // Get product using ID
    const getCourseUsingId = (productsToLoop, productIdToFind) => {
      const currentProduct = productsToLoop.find((productItem) => productItem.id === Number(productIdToFind))
      return currentProduct
    }


    const contextValue = {
        allCourses,
        setAllCourses,
        shortenText,
        getCourseUsingId,
        isLogedIn,
        setIsLogedIn,
    }

  return (
    <courseContext.Provider value={contextValue}>
      {props.children}
    </courseContext.Provider>
  )
}

export {CourseContext, courseContext}
