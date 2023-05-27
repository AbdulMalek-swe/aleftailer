 
import Home from "pages/HOme/Home";
import AppLayout from "./Layout/AppLayout";

 
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