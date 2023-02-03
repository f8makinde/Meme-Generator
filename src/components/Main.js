import React from 'react'

export default function Main(){
    return(
        <main>
            <input type="text" className='main-input' placeholder="Top text" required/>
            <input type="text" className='main-input' placeholder="Bottom text" required/>
            <button className='main-btn'>Get a new meme image 🖼</button>
        </main>
    )
}