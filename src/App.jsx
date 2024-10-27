import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Layouts/Header/Header'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import CoursePage from './Pages/CoursePage/CoursePage'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-page' element={<CoursePage />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
