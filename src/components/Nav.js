import React from 'react'
import navLogo from '../image/Troll Face.png'

export default function Nav(){
    return (
        <nav>
            <img src={navLogo} alt='nav-logo' className='nav-img'/>
            <h2 className='nav-bold'>Meme Generator</h2>
            <h3 className='nav-light'>React Course</h3>
        </nav>
    )
}