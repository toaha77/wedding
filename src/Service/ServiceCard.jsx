/* eslint-disable react/prop-types */
import { useEffect } from "react";
  import Aos from  "aos"
 import 'aos/dist/aos.css'
import Service from "./Service";
const ServiceCard = ({services}) => {
    
  useEffect(()=>{
    Aos.init()
  }, [])
  return (
    
    <div 
    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 container mx-auto"  data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500"
     >
     {
        services.map(service => <Service key={service.id} service={service}></Service>)
     }
    </div>
  );
};

export default ServiceCard;
