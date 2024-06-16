import React from 'react'
import Button from './Button'

const buttonList = ["All", "Movies", "Movie Musicals", "Bollywood Music", "Mantras", "Motivation", "Kapil Sharma", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Virat Kohli", "Cooking", "News", "Valentines"];

const ButtonsList = () => {
  return (
    <div className='flex'>
      {buttonList.map(buttonName => <Button key={buttonName} name={buttonName}/>) }
    </div>
  )
}

export default ButtonsList