import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CourseContext } from './Contexts/CourseContext/CourseContext.jsx'
import { ShopContext } from './Contexts/ShopContext/ShopContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CourseContext>
    <ShopContext>
      <App />
    </ShopContext>
  </CourseContext>,
)
