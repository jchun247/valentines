import { useState } from 'react'
import './App.css'

export default function App() {

  const [text, setText] = useState('Will you be my Valentine Alessandra?')
  const [picture, setPicture] = useState('/milk_mocha_valentines_1.png')
  const [counter, setCounter] = useState(0)
  const [showButton, setshowButton] = useState(true)

  const noBtnPicList = [
    '/sad_cat_with_gun.png',
    '/sad-cat.gif',
    '/milk-and-mocha-cry.gif',
    '/milk-mocha-sad-1.png',
    '/milk-mocha-sad-2.png'
  ]

  const noBtnText = [
    'Are you sure??',
    'Please say yes :(',
    'Pretty please :(',
    'I will be so sad if you don\'t say yes',
    'You\'re breaking my heart'
  ]

  const handleYesBtn = () => {
    setPicture('/milk_mocha_valentines_2.png')
    setText('Yay, I love you <3')
    setshowButton(false)
  }

  const handleNoBtn = () => {
    setCounter(counter+1)
    const pictureIndex = counter % noBtnPicList.length
    const textIndex = counter % noBtnText.length
    setPicture(noBtnPicList[pictureIndex])
    setText(noBtnText[textIndex])
  }

  return (
    <>
      <div>
        <img src={picture} className="logo" alt="valentines header"/>
      </div>
      <h1>{text}</h1>
      <div className="btnGroup">
        {showButton && 
        <button className="yesBtn" onClick={() => handleYesBtn()}>
          Yes
        </button>
        }
        {showButton &&
        <button className="noBtn" onClick={() => handleNoBtn()}>
          No
        </button>
        }
      </div>
    </>
  )
}

