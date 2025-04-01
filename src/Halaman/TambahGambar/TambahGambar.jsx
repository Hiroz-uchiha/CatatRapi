import React from 'react'
import Content from './Content'
import AddItem from './AddItem'
import gambar1 from "../../Assets/Login.png"
import gambar2 from  "../../Assets/Login1.png"


const TambahGambar = () => {
    const gambar = [
        {
            id : 1,
            url : gambar1,
            judul : "Gambar Pertama",
            isi : "Ini adalah contoh gambar pertama lorem  ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. "
        },
        {
            id : 2,
            url : gambar2,
            judul : "Gambar Kedua",
            isi : "Ini adalah contoh gambar kedua lorem  ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. "
        },
        {
            id : 3,
            url : gambar2,
            judul : "Gambar Ketiga",
            isi : "Ini adalah contoh gambar kedua lorem  ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. "
        },
        {
            id : 4,
            url : gambar1,
            judul : "Gambar Keempat",
            isi : "Ini adalah contoh gambar kedua lorem  ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. "
        },
    ]

    return (
        <div>
            <AddItem/>

            {gambar.map((item,index) => (
                <div key={index}>
                    <Content id={item.id} url={item.url} judul={item.judul} isi={item.isi}  />
                </div>
            ))}
           {/* <Content /> */}
        </div>
  )
}

export default TambahGambar
