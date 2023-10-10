 import { useLoaderData } from "react-router-dom";
 
 import ServiceCard from "./ServiceCard";

const Services = () => {
    const services = useLoaderData()
    return (
        <div className="mt-4">
            <h2 className="text-4xl text-center mb-2">Wedding Details</h2>
             
            <ServiceCard services={services}></ServiceCard>
        </div>
    );
};

export default Services;