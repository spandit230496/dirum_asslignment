import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import wishlist from './wishlist.css'

const ImageCard = ({image_card}) => {
  return (
    <div className='card' >
    <div className='wishlist' style={{ backgroundImage: `url(${image_card.url})`, backgroundSize: 'cover' ,borderRadius:"0.5rem"}}>        
        <FavoriteBorderOutlinedIcon className='fab' fontSize='large'/>
       

        

        <button><span><ShoppingCartOutlinedIcon /></span>ADD TO CART</button>
        
    </div>
    

    <div className=' card_details'>
    <h1>{image_card.description}</h1>
    <h2>{image_card.artist}</h2>
    <h3>{image_card.price}</h3>
    </div>
    </div>
  )
}

export default ImageCard