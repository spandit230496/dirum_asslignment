import React from 'react'
import logo from "../../assets/pexels-pixabay-47547.jpg"
import circular from '../circular_image_slider/circularimage.css'

const CircularImage = ({data}) => {
  return (
    <div className='circularimage'>
        <img src={logo} width={200}></img>
        <h2>{data.description}</h2>
    </div>
  )
}

export default CircularImage