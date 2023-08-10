import { Backdrop, CircularProgress } from '@mui/material';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import axios from 'apiService/axios';
import React, { useEffect, useState } from 'react';

const PayPalPayment = ({ handleClose, order, address }) => {
  const [paymentIntent, setPaymentIntent] = useState(null);
  const [loading, setLoader] = useState(false)
  useEffect(() => {
    axios.post("/paypal/intent", { id: "34" })
      .then(res => {

        setPaymentIntent(res.data)
        setLoader(true)
      })
  }, [])
  const options = {
    clientId: paymentIntent?.clientId,
    currency: paymentIntent?.currency,
    intent: paymentIntent?.intent
  }
  const createOrder = async (data) => {
    // Order is created on the server and the order id is returned
    console.log(data);
    return axios
      .post("/my-server/create-paypal-order", {
        cart: order,
        address
      })
      .then((response) => response.data.id);
  };

  const onApprove = async (data) => {
    // Capture the order on the server using the order ID
    console.log(data);
    return axios
      .post("/my-server/capture-paypal-order", {
        orderID: data.orderID,
      })
      .then((response) => response.data);
  };

  return (
    <>
      {
        loading ?
          <div className=" lg:p-20 md:p-10 p-5  mt-10 bg-white lg:w-2/3 xl:w-2/5 md:w-4/5 w-full border rounded-lg   mx-auto py-10 overflow-y-scroll">
            <h4 className="text-primary2 font-bold font-display text-center md:text-2xl text-xl lg:text-3xl   pb-5   ">
              Pay for
            </h4>

            <div  >
              <PayPalScriptProvider options={options}  >
                <PayPalButtons
                  createOrder={(data) => createOrder(data)}
                  onApprove={(data) => onApprove(data)}
                />
              </PayPalScriptProvider>
            </div>
            <button onClick={handleClose} className="text-white bg-black w-full text-center mt-3 rounded px-5 py-3">cancel</button>
            <div className="mt-2 flex justify-end items-center">

            </div>
          </div> : <Backdrop
            sx={{ color: '#D4A934', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}

          >
            <CircularProgress color="inherit" />
          </Backdrop>
      }


    </>

  );
};

export default PayPalPayment;