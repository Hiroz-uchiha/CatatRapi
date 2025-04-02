import React from 'react'
import "./tailwindcss/output.css"
import Todolist from './Halaman/Todolist/Todolist'
import Login from './Halaman/Authorization/Login/Login'
import Register from './Halaman/Authorization/Register/Register'
import TambahGambar from './Halaman/TambahGambar/TambahGambar'
import Button from './Halaman/Todolist/Button'

const App = () => {
  return (
    <div>
      {/* <Todolist /> */}
      {/* <Login/> */}
      {/* <Register/> */}
      <TambahGambar />
    </div>
  )
}

export default App
