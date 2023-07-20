 
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
 
import axios from "apiService/axios";
 
import React, { useEffect, useState } from "react";
import CheckoutForm from "./CheckOuteForm";
import { useSelector } from "react-redux";
 
export default  function Stripe({order,address,handleClose}) {
  console.log(order);
    const cart = useSelector(state=>state.reducer.cart)
    console.log(cart.items);
    const c = cart.items
  const [paymentIntent, setPaymentIntent] = useState(null);
  useEffect(() => {
    axios
      .post(`/payment-method/get-payment-intent`, { payment_type: "subscription" ,order,address})
      .then((response) => {
        console.log(response,'please give me the error');
        //  console.log("payment intent data",response?.data);
        setPaymentIntent(response?.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);

  const stripePromise = loadStripe(paymentIntent?.publish_key);

  const appearance = {
    theme: "light",
    labels: "floating",
  };

  const options = {
    clientSecret: paymentIntent?.client_secret,
    appearance,
  };
  
  let d = Promise.reject(stripePromise)
  // console.log(d);
  return (
    <div className="mt-52"> 
      <Elements stripe={stripePromise} options={options}>
       <CheckoutForm amount={paymentIntent?.amount} handleClose={handleClose} />
      
    </Elements>
    </div>
  );
}