import React from 'react'
import "./tailwindcss/output.css"
import Todolist from './Halaman/Todolist/Todolist'
import Login from './Halaman/Authorization/Login/Login'
import Register from './Halaman/Authorization/Register/Register'
import TambahGambar from './Halaman/TambahGambar/TambahGambar'
// import Button from './Halaman/Todolist/Button'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Halaman/Navbar'
import Beranda from './Halaman/Beranda/Beranda'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Beranda />} />
          <Route path='/todolist' element={<Todolist />} />
          <Route path='/gambar' element={<TambahGambar />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
