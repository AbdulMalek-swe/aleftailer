import { Modal } from '@mui/material';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import axios from 'apiService/axios';
import { ErrorMessage, Field, Formik } from 'formik';
import PayPalPayment from 'pages/Payment/paypal/PayPalPayment';
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import countryList from 'react-select-country-list';
import Select from 'react-select';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const Order = () => {
    const [toggler, setToggler] = useState(false)
    const user = useSelector(state => state.reducer.user)
    const [order, setOrder] = useState([])
    const [address, setAddress] = useState({})
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
        console.log(values);
    //     // setLoader(true)
    //     setAddress(values)

    //     try {
    //         // const res = await axios.post(
    //         //     `/user/register`, values);
    //         // const { status, data } = res;
    //         // console.log("submit data ", res);
    //         // if (status === 200) {
    //         //     // setLoader(false)
    //         //     // toast.dismiss(loading);
    //         //     toast.success(data?.message);
    //         // }
    //     } catch (error) {
    //         // toast.dismiss(loading)
    //         toast.error(error?.response?.data?.error);
    //         // setLoader(false) 
    //     }
    };
    const totalPrice = order.reduce((accumulator, currentProduct) => accumulator + currentProduct.price * currentProduct.quantity, 0);
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        if (toggler) {
            setOpen(true)
        }

    }, [toggler])

    const handleClose = () => {
        setToggler(false)
        setOpen(false)
    };

    return (
        <div className='mt-44 container-sk mb-24'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-x-6 place-content-center items-center '>
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
                                        {totalPrice + (totalPrice * 24) / 100}
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div className='flex justify-center'>

                        <button className=' mt-5 w-full bg-black text-white px-5 py-2' onClick={() => setToggler(true)}>place order</button>

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
                        <PayPalPayment order={order} address={address} handleClose={handleClose} />

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

    const [country, setCountry] = useState('Greece');
    const [region, setRegion] = useState('');

    const selectCountry = (val) => {
        setCountry(val);
        setRegion(''); // Reset the selected region when changing the country
    };
 
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
                            fullname: "",
                            streetAddress: "",
                            aptBuildingHouse: "",
                            city: "",
                            region:region || "",
                            country:country||""
                        }}
                        validate={(values) => {
                            
                            const error = {};
                            if (!values.fullname) {
                                error.fullname = "Please enter your   name.";
                            }
                            else if (!values.streetAddress) {
                                error.streetAddress = "Please street address.";
                            }
                            else if (!values.aptBuildingHouse) {
                                error.aptBuildingHouse = "Please enter your apt buildin...";
                            }
                            else if (!values.city) {
                                error.aptBuildingHouse = "Please enter your city name";
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


                        }) => (
                            <form onSubmit={handleSubmit} className=' w-full'  >
                                <div className="mb-4  ">
                                    <label htmlFor="fullname" className="block text-xl font-normal text-black leading-4">
                                        Full Name<span className="text-red-500">*</span>
                                    </label>
                                    <Field
                                        type="text"
                                        id="fullname"
                                        name="fullname"
                                        placeholder="Full Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}

                                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    <ErrorMessage name="fullname" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="mb-4 w-full">
                                    <label htmlFor="streetAddress" className="block text-xl font-normal text-black leading-4">
                                        streetAddress <span className="text-red-500">*</span>
                                    </label>
                                    <Field
                                        type="text"
                                        id="streetAddress"
                                        name="streetAddress"
                                        placeholder="Street Address"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    <ErrorMessage name="streetAddress" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="aptBuildingHouse" className="block text-xl font-normal text-black leading-4">
                                        Apt..house..road<span className="text-red-500">*</span>
                                    </label>
                                    <Field
                                        type="text"
                                        id="aptBuildingHouse"
                                        name="aptBuildingHouse"
                                        placeholder="Apt..house..road"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    <ErrorMessage name="aptBuildingHouse" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="city" className="block text-xl font-normal text-black leading-4">
                                    city <span className="text-red-500">*</span>
                                    </label>
                                    <Field
                                        type="text"
                                        id="city"
                                        name="city"
                                        placeholder="city"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    <ErrorMessage name="city" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="region" className="block text-xl font-normal text-black leading-4">
                                       state <span className="text-red-500">*</span>
                                    </label>
                                    <RegionDropdown
                                        country={country}
                                        value={region}
                                        onChange={(val) => setRegion(val)} 
                                        onBlur={handleBlur}
                                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="country" className="block text-xl font-normal text-black leading-4">
                                        Country <span className="text-red-500">*</span>
                                    </label>
                                    <CountryDropdown
                                        value={country}
                                        onChange={(val) => selectCountry(val)}
                                        onBlur={handleBlur}
                                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    />
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