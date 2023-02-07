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
        .then(data => setAllMeme(data.data.memes))

    }, [])

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    function handleChange(event){
      const {name, value} = event.target
      setMeme(prevMeme => ({
        ...prevMeme,
        [name] : value
      }))
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
             onChange={handleChange}
             className="form--input"
             placeholder='bottom-text'
             required
             /> 

            <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
        </div>
        <div className='meme'>
           <img src={meme.randomImage} className="meme--image" alt="meme-img" />
           <h2 className='meme--text top'>{meme.topText}</h2>
           <h2 className='meme--text bottom'>{meme.bottomText}</h2>
        </div>
    </main>
  )
}