import React from 'react'

const Button = ({className}) => {
  return (
        <div className={` w-1/5 flex justify-around ${className}`}>
            <button className=' bg-green-200 p-2'>Update</button>
            <button className=' bg-red-200 p-2'>Hapus</button>
          </div>
  )
}

export default Button
