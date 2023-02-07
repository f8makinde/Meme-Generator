import React from 'react'

export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMeme, setAllMeme] = React.useState([])


    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => data.data.meme)

    }, [])

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randomNumber].url
        setMeme(preMeme => ({
            ...preMeme,
            randomImage: url
        }))
    }
    function handleChange(event){

    }
  return(
    <main>
        <div className='form'>
            <input 
            type='text'
            placeholder='top-text'
            className="form--input"
            name='topText'
            value={meme.topText}
            onChange={handleChange}
            required

            />
            <input
             type='text'
             name='bottomText'
             value={meme.bottomText}
             className="form--input"
             placeholder='bottom-text'
             required
             /> 
            <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
        </div>
    </main>
  )
}