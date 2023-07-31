import { Modal } from '@mui/material';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import axios from 'apiService/axios';
import { ErrorMessage, Field, Formik } from 'formik';
import Stripe from 'pages/Payment/StripeForm';
import PayPalPayment from 'pages/Payment/paypal/PayPalPayment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Order = () => {
    const [toggler,setToggler] = useState(false)
    const user = useSelector(state => state.reducer.user)
    const [order, setOrder] = useState([])
    const [address,setAddress] = useState({})
    const getProduct = JSON.parse(localStorage.getItem("checkCart"));
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            axios.get(`/product/${id}`)
                .then(res => {
                    console.log(res.data.result);
                    setOrder([{ ...res?.data?.result, quantity: 1 }])
                })
        }
        else if (!id) {
            setOrder(getProduct)
        }
    }, [])

    const Registerapi = async (values) => {
        // setLoader(true)
        setAddress(values)
     
        try {
            // const res = await axios.post(
            //     `/user/register`, values);
            // const { status, data } = res;
            // console.log("submit data ", res);
            // if (status === 200) {
            //     // setLoader(false)
            //     // toast.dismiss(loading);
            //     toast.success(data?.message);
            // }
        } catch (error) {
            // toast.dismiss(loading)
            toast.error(error?.response?.data?.error);
            // setLoader(false) 
        }
    };
    const totalPrice = order.reduce((accumulator, currentProduct) => accumulator + currentProduct.price*currentProduct.quantity, 0);
    const [open, setOpen] = React.useState(false);
    useEffect(()=>{
        if(toggler){
            setOpen(true)
        }
        
    },[toggler])
   
  const handleClose = () => {
    setToggler(false)
    setOpen(false)};
       
    return (
        <div className='mt-44 container-sk'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-x-6'>
                <div>
                    <CustomerInfo Registerapi={Registerapi} user={user} />
                </div>
                <div className='flex   flex-col justify-center'>
                    <div className='flex items-center capitalize'>
                        <table class="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr class="bg-gray-100">
                                    <th class="px-4 py-2 text-left">Product Name</th>
                                    <th class="px-4 py-2 text-left">Price</th>
                                    <th class="px-4 py-2 text-left">Total</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    order.map((item, index) => <tr className='border'>
                                        <td class="px-4 py-2"> {item?.name} </td>
                                        <td class="px-4 py-2"> {item?.price} x {item?.quantity}</td>
                                        <td class="px-4 py-2"> {item?.price * item?.quantity}    </td>
                                    </tr>)
                                }
                                <tr className='border'>
                                    <td class="px-4 py-2">  </td>
                                    <td class="px-4 py-2">
                                        Subtotal  </td>
                                    <td class="px-4 py-2 text-red-500">
                                        {totalPrice}
                                    </td>
                                </tr>
                                <tr className='border'>
                                    <td class="px-4 py-2">  </td>
                                    <td class="px-4 py-2">
                                         total (includes vat)  </td>
                                    <td class="px-4 py-2 text-red-500">
                                        {totalPrice*12/8}
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div className='flex justify-center'>
                      
                           <button className=' mt-5 w-full bg-black text-white px-5 py-2' onClick={()=>setToggler(true)}>place order</button> :   <button className=' mt-5 w-full bg-black text-white px-5 py-2' onClick={()=>{
                            toast.error("please fill the address fild")
                        }}>place order</button>
                       
                    </div>
                </div>
            </div>
               {
                 toggler && <Modal
                 open={open}
               
                 aria-labelledby="modal-modal-title"
                 aria-describedby="modal-modal-description"
                 className='overflow-y-scroll'
               >
                  <div >
               
                
                   <PayPalPayment order={order} address={address} handleClose={handleClose}/>
                
                 <div  >
                 
                 </div>
                  </div>
               </Modal>
                
            }
        </div>
    );
};

export default Order;

export const CustomerInfo = ({ Registerapi, user }) => {
    console.log(user);
    return (
        <>
            <div className='flex justify-center  '>
                {/* register field code here using formik */}
                <div className=' w-full'>
                    <div className='text-center'>
                        <h1 className='mb-4 font-bold font-5xl font-sans text-black leading-10'>Customer Information</h1>
                    </div>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            firstName: user?.first_name || "",
                            lastName: user?.last_name || "",
                            contactNumber: user?.contactNumber || "",
                            email: user?.email || "",
                            address: ""
                        }}
                        validate={(values) => {
                            const error = {};
                            if (!values.firstName) {
                                error.firstName = "Please enter your fast name.";
                            }
                            else if (!values.lastName) {
                                error.lastName = "Please enter your last name.";
                            }
                            else if (!values.contactNumber) {
                                error.contactNumber = "Please enter your phone number";
                            }

                            else if (!values.email) {
                                error.email = "Please enter your email";
                            }

                            else if (!values.address) {
                                error.address = "Please enter confirm password";
                            }

                            return error;
                        }}
                        onSubmit={(values, { resetForm }) => {
                            Registerapi(values);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,

                            /* and other goodies */
                        }) => (
                            <form onSubmit={handleSubmit} className=' w-full'  >
                                <div className="mb-4  ">
                                    <label htmlFor="firstName" className="block text-xl font-normal text-black leading-4">
                                        First Name<span className="text-red-500">*</span>
                                    </label>
                                    <Field
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="Fast Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}

                                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="mb-4 w-full">
                                    <label htmlFor="lastName" className="block text-xl font-normal text-black leading-4">
                                        Last Name<span className="text-red-500">*</span>
                                    </label>
                                    <Field
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Last Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="contactNumber" className="block text-xl font-normal text-black leading-4">
                                        Phone Number<span className="text-red-500">*</span>
                                    </label>
                                    <Field
                                        type="text"
                                        id="contactNumber"
                                        name="contactNumber"
                                        placeholder="Phone Number"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    <ErrorMessage name="contactNumber" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-xl font-normal text-black leading-4">
                                        Email<span className="text-red-500">*</span>
                                    </label>
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                {/* password code  */}

                                {/* confirm password  */}
                                <div className="mb-4">
                                    <label htmlFor="address" className="block text-xl font-normal text-black leading-4">
                                        Address <span className="text-red-500">*</span>
                                    </label>
                                    <Field
                                        type="text"
                                        id="address"
                                        name="address"
                                        placeholder="Address"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    <ErrorMessage name="address" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <button type="submit" className="bg-black text-white py-2 px-4 rounded-md hover:bg-black8 w-full text-base font-arial font-bold">
                                    Submit
                                </button>
                            </form>
                        )}
                    </Formik>


                </div>
            </div>
        </>
    )
}