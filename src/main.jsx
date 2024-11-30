import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CourseContext } from './Contexts/CourseContext/CourseContext.jsx'
import { ShopContext } from './Contexts/ShopContext/ShopContext.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layouts/MainLayout/MainLayout.jsx'
import Home from './Pages/Home/Home.jsx'
import CoursePage from './Pages/CoursePage/CoursePage';
import CategoryPage from './Pages/Category/CategoryPage';
import Contact from './Pages/Contact/Contact';
import CartPage from './Pages/CartPage/CartPage';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import VideoPage from './Pages/VideoPage/VideoPage';
import AdminDashboard from './Dashboards/AdminDashboard/AdminDashboard.jsx'
import InstructorDashboard from './Dashboards/InstructorDashboard/InstructorDashboard.jsx'
import AddCourse from './Components/AddCourse/AddCourse.jsx'
import AllCoursesOfInstructor from './Components/AllCoursesOfInstructor/AllCoursesOfInstructor.jsx'
import UpdatePage from './Pages/UpdatePage/UpdatePage.jsx'
import RegistrationPage from './Pages/RegistrationPage/RegistrationPage.jsx'
import AuthContext from './Contexts/AuthContex/AuthContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: ()=> fetch('http://localhost:5000/courses')
      },
      {
        path: '/registration',
        element: <RegistrationPage/>
      },
      {
        path: '/courses',
        element: <CoursePage/>,
        loader: () => fetch('http://localhost:5000/courses') 
      },
      {
        path: '/cart',
        element: <CartPage/>
      },
      {
        path: '/category/:categoryName',
        element: <CategoryPage/>
      },
      {
        path: '/single-product/:productId',
        element: <SingleProduct/>
      },
      {
        path: '/video/:videoTitle/:videoId',
        element: <VideoPage/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/update-course/:id',
        element: <UpdatePage/>,
        loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
      },
      {
        path: '/instructor-dashboard',
        element: <InstructorDashboard/>,
        children: [
          {
            path: '/instructor-dashboard/add-course',
            element: <AddCourse/>
          },
          {
            path: '/instructor-dashboard/all-course',
            element: <AllCoursesOfInstructor/>,
            loader: () => fetch('http://localhost:5000/courses')
          },
        ]
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContext>
    <CourseContext>
    <ShopContext>
      <RouterProvider router = {router}></RouterProvider>
    </ShopContext>
  </CourseContext>
  </AuthContext>,
)
