/* eslint-disable react/prop-types */
 import toast from "react-hot-toast";
import { Link } from "react-router-dom";

 
 
const Service = ({service}) => {

     const {id, image, title, text} =  service 
    return (
        <div>
           
             <div data-aos="fade-right" className="card  bg-base-100 shadow-xl">
  <figure><img src={image} className="w-full h-56" alt=" " /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p> {text} </p>
    <div className="card-actions justify-end">
      <Link to={`/events/${id}`}><button  className="btn bg-pink-500">Book Here</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Service;