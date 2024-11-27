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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/courses',
        element: <CoursePage/>
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
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <CourseContext>
    <ShopContext>
      <RouterProvider router = {router}></RouterProvider>
    </ShopContext>
  </CourseContext>,
)
