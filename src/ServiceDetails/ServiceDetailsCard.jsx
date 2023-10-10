/* eslint-disable react/prop-types */
import toast from "react-hot-toast";

 
const ServiceDetailsCard = ({service}) => {
  const handleBook = () =>{
    toast.success("Booked  successfully")
  }
    const {id, image, title, text, price} =  service 
    return (
      <div className="hero  mb-4">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="w-[500px] h-[300px]  rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6">{text}</p>
      <p>{price}</p>
      <button onClick={handleBook} className="btn bg-pink-500 mt-4"> Book Now</button>
    </div>
  </div>
</div>
         
    );
};

export default ServiceDetailsCard;