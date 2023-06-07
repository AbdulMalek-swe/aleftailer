 
 
 
import Home from "pages/Home/Home";
import AppLayout from "./Layout/AppLayout";
import HeroSection from "pages/HeroSection/HeroSection";

 
const { createBrowserRouter } = require("react-router-dom");
 
const route = createBrowserRouter([
     {
       path:"/",
       element:<AppLayout/>,
       children:[
           
          {
               path:"/",
               element:<Home/>
          }
       ]
     }
])
export default route;