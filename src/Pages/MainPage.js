import React from 'react'
import CircularImage from '../Componets/circular_image_slider/CircularImage'
import Features from '../Componets/Features/Features'
import ImageSlider from '../Componets/imageSlider/ImageSlider'
import {data} from '../assets/data'
import {image} from '../assets/image'
import grid_image from '../assets/pexels-pixabay-302304.jpg'
import {image_card} from '../assets/image_card'
import ImageCard from '../Componets/ImageCard/ImageCard'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import maincss from '../Pages/mainpage.css'



const MainPageView = () => {
  return (
    <div >

    <ImageSlider />
    
    <div className='main'>
     <div className='features'>
    {
        image.map((item)=>{
            return(
            <CircularImage data={item}/>
            )
        })
    }
    </div>

    <div className='features'>
     {
        data.map((item)=>{
            return(
            <Features features={item}/>
            )
        })
     }

    </div>

    <div className='best_seller_main'>
    <h1>Best Seller</h1>

    <p style={{textDecoration:"underline"}}>Buy best seller art online for your living room,dining room,kitchen,bedroom,office,lobby and more</p>
    
    <div>
    <div  className='best_seller'>
    {
        image_card.map((item)=>{
            return(

                <ImageCard image_card={item}/>
            )
        })
    }
    </div>
    </div>
    <div>
        <h3 className='view_more'>View All <ArrowCircleRightIcon fontSize='large' style={{color:"green"}}/> </h3>
    </div>

    </div>

{/* <!---------------------------------------------> */}
    <div className="new_arrival_main">
    <h1 style={{textDecoration:"underline"}}>New Arrival</h1>
     

    <div className='new_arrival'>
    {
        image_card.map((item)=>{
            return(

                <ImageCard image_card={item}/>
            )
        })
    }
    </div>
    <div>
    <h3 className='view_more'>View All <ArrowCircleRightIcon fontSize='large' style={{color:"green"}}/> </h3>
    </div>
    
    </div>
    {/* ======================================================================================================== */}

   
    
    <div className="grid-container">
  
    <div className="image" style={{ backgroundImage: `url(${grid_image})` }}>
    <h2>PRICE BELOW 20000</h2>
    </div>
    <div className="image" style={{ backgroundImage: `url(${grid_image})` }}>

    <h2>PRICE BELOW 15000</h2>
    </div>
    
  
</div>

</div>



    </div>

  )
}

export default MainPageView