import { useLoaderData, useParams } from "react-router-dom";
   import { useEffect, useState } from "react";
 import ServiceDetailsCard from "./ServiceDetailsCard";
 

const ServiceDetail = () => {
    const [service, setService] = useState({})
    const {id} = useParams()
   const services = useLoaderData()

   useEffect(()=>{
        const serviceCard = services?.find(service => service.id == id)
            setService(serviceCard)
   }, [id, services])

   return (
    <div className="container mx-auto">
   <ServiceDetailsCard service={service}></ServiceDetailsCard>
 
    </div>
  );
};

export default ServiceDetail;
