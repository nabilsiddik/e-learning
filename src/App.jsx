import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Layouts/Header/Header'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import CategoryPage from './Pages/Category/CategoryPage';
import SingleProduct from './Pages/SingleProduct/SingleProduct'
import VideoPage from './Pages/VideoPage/VideoPage';
import CartPage from './Pages/CartPage/CartPage'
import CoursePage from './Pages/CoursePage/CoursePage'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='courses' element={<CoursePage/>}/>
        <Route path='/single-product/:productId' element={<SingleProduct/>}/>
        <Route path='/category/:categoryName' element={<CategoryPage />} />
        <Route path='/video/:videoTitle/:videoId' element={<VideoPage/>} />

        <Route path='/cart' element={<CartPage />} />

        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
