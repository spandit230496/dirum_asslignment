import React from 'react'
import features from '../Features/features.css'

const Features = ({features}) => {
  return (
    <div >
        {features.icon}
        <div >
            <h2>{features.heading}</h2>
            <h3>{features.description}</h3>
        </div>
    </div>
  )
}

export default Features