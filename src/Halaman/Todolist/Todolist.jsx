import React from 'react'
import Button from './Button'
import Inputan from './Inputan'
import AddItem from '../TambahGambar/AddItem'

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
            <AddItem />
            {data.map((item,index) => (
                <div className='p-2 flex container mx-auto w-8/12 mt-3 shadow-md' key={index}>
                    <Inputan title={item.title} status={item.status} />
                    <Button/>
                </div>
            ))}
        </div>
    )
}

export default Todolist
