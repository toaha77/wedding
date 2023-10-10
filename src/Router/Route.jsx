import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
 import Home from "../Home/Home";
 import ErrorPage from "../Error/ErrorPage";
  import Login from "../Login/Login";
import Gallery from "../Gallery/Gallery";
import Register from "../Login/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ServiceDetails from "../ServiceDetails/ServiceDetail";
import Service from "../Service/Service";
import Contact from "../Contact/Contact";

 
const myCreatedRoute = createBrowserRouter([
         {
            path : '/',
            element: <MainLayout></MainLayout>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                 path : '/',
                 element: <Home></Home>,
                 loader: ()=> fetch('/data.json')
                },
                {
                    path : '/service',
                    element :   <Service></Service>,
                    loader: ()=> fetch('/data.json')
                   
                
                },
                 {
                    path: '/contact',
                    element: <PrivateRoute><Contact></Contact></PrivateRoute>
                 },
                {
                 path : '/gallery',
                 element: <PrivateRoute>
                    <Gallery></Gallery>
                 </PrivateRoute>,
                 loader: ()=> fetch('/gallery.json')
                },

                {
                  path: '/events/:id',
                  element: <PrivateRoute>
                     <ServiceDetails></ServiceDetails>
                  </PrivateRoute>,
                  loader : ()=> fetch('/data.json')  
                  
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
            ]
         } 
         

])
     

export default myCreatedRoute;