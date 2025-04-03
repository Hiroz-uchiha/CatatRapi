import React from 'react'
import logoLogin from "../../../Assets/Login1.png"
import {useNavigate} from "react-router-dom";
import axios from "axios"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigasi = useNavigate();

  const login = async() => {
    try{
      //1. Kirim permintaan post untuk login
      const res = await axios.post("http://localhost:3001/user/login",{email,password});
      const token = res.data.token 

      // 2.Simpan token di localstorage
      localStorage.setItem('token-kedua', token)

      //3. Set header untuk permintaan berikutnya
      const config = {
        headers :{
          'token-kedua' : token
        }
      }

      //4. Kirim permintaan get dengan header yang berisi token
      const response = await axios.get("http://localhost:3001/todo/todo", config)

      // Navigasi ke halaman selanjutnya
      navigasi("/")

    }catch(err){
      alert("err.response.data.message")
    }
  }

  const Register = () => {
    navigasi("/register")
  }

  return (
    <div className=' w-full flex container h-screen '>
        <div className=' w-1/2 flex flex-col items-center justify-center space-y-3 bg-gray-700'>
            <h1 className=' text-3xl text-white'>Login</h1>
            <input type="email" className=' rounded-sm p-1 w-96 outline-none' placeholder='Email' onChange={e => setEmail(e.target.value)} />
            <input type="text" className=' rounded-sm p-1 w-96 outline-none' placeholder='Password' onChange={e => setPassword(e.target.value)}/>
            <button className=' bg-green-200 p-2 px-3' onClick={login}></button>
            <div className=' flex'>
                <p className=' text-white mr-1'>Belum punya akun?</p>
                <button className='text-green-200' onClick={Register}>Register</button>
            </div>
        </div>
        <div className=' w-3/6'>
            <img src={logoLogin} alt="Logo" className='h-full w-full' />
        </div>

    </div>
  )
}

export default Login
