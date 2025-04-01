import React from 'react'
import Button from './Button'
import Inputan from './Inputan'

const Todolist = () => {
    const data = [ 
        {
            id : 1,
            title : 'Belajar React 1',
            status : false,
        },
        {
            id : 2,
            title : 'Belajar React 2',
            status : false,
        },
        {
            id : 3,
            title : 'Belajar React 3',
            status : false,
        },
    ]

    return (
        <div>
            {data.map((item,index) => (
                <div className=' bg-gray-200 p-2 flex container mx-auto w-8/12 mt-3' key={index}>
                    <Inputan title={item.title} status={item.status} />
                    <Button/>
                </div>
            ))}
        </div>
    )
}

export default Todolist
