import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";

 
const MainLayout = () => {
    return (
        <div className=" ">
           <Header></Header>
           <Outlet></Outlet> 
           <Footer></Footer>
           <Toaster></Toaster>
        </div>
    );
};

export default MainLayout;