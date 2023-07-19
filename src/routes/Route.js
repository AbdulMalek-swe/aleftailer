 
import AppLayout from "./Layout/AppLayout";
 
import Register from "pages/UserForm/Register";
import Login from "pages/UserForm/Login";
import Shop from "pages/Shop/Shop";
import InsiderAlif from "pages/Insider/InsiderAlif";
import Contact from "pages/Contact/Contact";
import PublicRoute from "./PublicRoutes/PublicRoute";
import Wishlist from "pages/Cart/Wishlist";
import Cart from "pages/Cart/Cart";
import ProductDetails from "pages/ProductDetails/ProductDetails";
import MakeOrder from "pages/MakeToOrder/MakeOrder/MakeOrder";
import Appointment from "pages/MakeToOrder/Appointment/Appointment";
import Stripe from "pages/Payment/StripeForm";
import Order from "pages/PlaceOrder/Order";
 
const { createBrowserRouter } = require("react-router-dom");
const route = createBrowserRouter([
     {
       path:"/",
       element:<AppLayout/>,
       children:[
          {
               path:"/register",
               element: <PublicRoute> <Register/></PublicRoute>
          },
          {
               path:"/login",
               element: <PublicRoute> <Login/></PublicRoute>
          },
          {
               path:"/shop",
               element:<Shop/>
          },
          {
               path:"/product/:id",
               element:<ProductDetails/>,
               loader: async ({ params }) => {
                    const data = await fetch(`http://localhost:5000/api/v1/product/${params.id}`);
  const res = await data.json();
  console.log(res);
  return res;
                  },
          },
          {
               path:"/make-order",
               element:<MakeOrder/>
          },
          
          {
               path:"/insider-alif",
               element:<InsiderAlif/>
          },
          {
               path:"/wishlist",
               element:<Wishlist/>
          },
          {
               path:"/my-cart",
               element:<Cart/>
          },
          {
               path:"/contact",
               element:<Contact/>
          },
          {
               path:"/appointment",
               element:<Appointment/>
          },{
               path:"/order",
               element:<Order/>
          },
          {
               path:"/order/:id",
               element:<Order/>
          },
          {
               path:"/payment",
               element:<Stripe/>
          }
          
       ]
     },
     
])
export default route;