import SimpleImageSlider from "react-simple-image-slider";
import Features from "../Features/Features";
import {data} from "../../assets/data";
import imagecss from "../imageSlider/image.css"
import duck from '../../assets/pexels-pixabay-162140.jpg'
import rabbit from '../../assets/pexels-pixabay-47547.jpg'
import tiger from  '../../assets/pexels-pixabay-302304.jpg'

const images = [
    { url: duck },
    { url: rabbit },
    { url: tiger },
    
  ];

  const ImageSlider = () => {
    return (
      <div>
        <SimpleImageSlider
          width={1690}
          height={800}
          images={images}
          showBullets={true}
          showNavs={true}
        />
          
      </div>
    );
    }
export default ImageSlider