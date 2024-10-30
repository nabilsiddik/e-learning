import React, { createContext, useContext, useState } from 'react'
import { courseContext } from '../CourseContext/CourseContext'

const shopContext = createContext(null)

const ShopContext = (props) => {

    const [cart, setCart] = useState([])
    
    const contextValue = {
      cart,
      setCart
    }

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  )
}

export {shopContext, ShopContext}
