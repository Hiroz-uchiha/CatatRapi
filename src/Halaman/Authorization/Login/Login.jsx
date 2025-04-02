import React from 'react'
import logoLogin from "../../../Assets/Login1.png"

const Login = () => {
  return (
    <div className=' w-full flex container h-screen '>
        <div className=' w-1/2 flex flex-col items-center justify-center space-y-3 bg-gray-700'>
            <h1 className=' text-3xl text-white'>Login</h1>
            <input type="text" className=' rounded-sm p-1 w-96 outline-none' placeholder='Username' />
            <input type="text" className=' rounded-sm p-1 w-96 outline-none' placeholder='Password'/>
            <button className=' bg-green-200 p-2 px-3'>Login</button>
            <div className=' flex'>
                <p className=' text-white mr-1'>Belum punya akun?</p>
                <a href="" className=' text-green-200'>Register</a>
            </div>
        </div>
        <div className=' w-3/6'>
            <img src={logoLogin} alt="Logo" className='h-full w-full' />
        </div>

    </div>
  )
}

export default Login
