import Home from "pages/Home/Home";
import AppLayout from "./Layout/AppLayout";
import HeroSection from "pages/HeroSection/HeroSection";
import Register from "pages/UserForm/Register";
import Login from "pages/UserForm/Login";
const { createBrowserRouter } = require("react-router-dom");
const route = createBrowserRouter([
     {
       path:"/",
       element:<AppLayout/>,
       children:[
           
          {
               path:"/",
                
          },
          
       ]
     },
     {
          path:"/register",
          element:<Register/>
     },
     {
          path:"/login",
          element:<Login/>
     }
])
export default route;