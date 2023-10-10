import { useEffect } from "react";
import Aos from  "aos"
import 'aos/dist/aos.css'
 
const GalleryCards = ({galleries}) => {
    useEffect(()=>{
        Aos.init()
      }, [])
    const {id ,image} = galleries
    return (
        <div  data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
            <img src={image} className="w-96 h-96" alt="" />
        </div>
    );
};

export default GalleryCards;