import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Services from "../Service/Services";
 
 
const Home = () => {
  const services = useLoaderData()
    return (
        <div>
         
          <Banner></Banner>  
          <Services services={services}></Services>
        </div>
    );
};

export default Home;