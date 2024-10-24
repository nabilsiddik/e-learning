import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Layouts/Header/Header'
import Home from './Pages/Home/Home'

function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
