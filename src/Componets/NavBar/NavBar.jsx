import React from 'react'
import logo from '../../assets/logo_and_bird.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import navcss from './nav.css'

const NavBar = () => {
  return (
    
    <div className='nav'>
     <h3>Worldwide Shipping* | Free Returns* | Handpicked Artworks</h3>

     <div className='nav_second_row'>
     <MenuOutlinedIcon fontSize='large' className="largeIcon"/>
     <img src={logo} alt="dirum" height={100} width={200}  />
     
     <div className='icons'>
       <FavoriteBorderIcon fontSize='large' className="largeIcon" />
       <WorkOutlineIcon  fontSize='large' className="largeIcon"/>
     </div>

      </div>

     <div className='input'>
     <SearchOutlinedIcon fontSize='large' className="largeIcon"/>
     <input type='text' placeholder='Search for artwork artist and many more'></input>
     </div>

    </div>
  
  
  )
}

export default NavBar