import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';


import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import { ErrorMessage, Field, Formik } from 'formik';

import axios from 'apiService/axios';
const Login = () => {
    const [loader, setLoader] = useState(false);
    const [cookie, setCookie] = useCookies(["token"])
    const navigate = useNavigate()

    const token = cookie['token'];
    // useEffect(() => {
    //   if (token) {
    //     navigate("/dashboard")
    //   }
    // }, [navigate, token])

    // google login field 
    //   const login = useGoogleLogin({
    //     onSuccess: tokenResponse => {
    //       setCookie("token",tokenResponse.access_token,{maxAge:3600*24*3})
    //       navigate("/dashboard")
    //     }
    //   });
    const handleSubmit = async (values, { setSubmitting }) => {
        // console.log(values);
        alert('Wow, I won!');
        setSubmitting(false);
    };

    const Registerapi = async (values) => {
       
        // const loading = toast.loading("Please wait a moment...");
        try {
            const res = await axios.post(
                `/user/login/`,
                {
                    email: values.email,  
                    password: values.password,
                }
            );
            // console.log(res);
            console.log(res);
            const { status, data } = res;
            
            if (status === 200) {
                // toast.dismiss(loading);
                console.log(status,data);
                toast.success(data?.message);
                setCookie("token", data?.token, {
                    maxAge: 60 * 60 * 24 * 7, // 1 week
                });
                // navigate("/")
            }
        } catch (error) {


        }
    };
    return (
        <>
            {
                loader && <div className='flex items-center justify-center h-screen'> </div>
            }
            {
                !loader &&
                <div class="h-screen md:flex  ">
                    <div class="bg-signImg    bg-cover   bg-no-repeat bg-static    flex items-center justify-center   py-10 md:w-1/2 h-full    ">
                        <div className='  h-screen flex justify-center'>
                            {/* register field code here using formik */}
                            <div className=' mr-20 ml-20 lg:ml-20 lg:mr-20 md:ml-8 md:mr-8 '>
                                 
                            </div>
                        </div>
                    </div>
                    <div className="bg-signIm    bg-cover   bg-no-repeat bg-static  h-screen  ">
                        <div className="w-full h-full  mr-20 ml-20 lg:ml-20 lg:mr-20 md:ml-8 md:mr-8  ">
                            <div className="flex items-center  w-full  h-full">
                                <div>
                                <h1 className='mb-5 font-bold font-4xl text-center'>Log-in</h1>
                                <Formik
                                    enableReinitialize
                                    initialValues={{                                       
                                        email: "",
                                        password: "",  
                                    }}
                                    validate={(values) => { 
                                        const error = {};
                                        
                                       if (!values.email) {
                                            error.email = "Please enter your email";
                                        }

                                        else if (!values.password) {
                                            error.password = "Please enter password";
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
                                        <form onSubmit={handleSubmit}  >
                                            
                                            <div className="mb-4">
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                                            <div className="mb-4">
                                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                                    Password<span className="text-red-500">*</span>
                                                </label>
                                                <Field
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    placeholder="Password"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  "
                                                />
                                                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                                            </div>
                                            {/* confirm password  */}
                                             

                                            <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 w-full">
                                                Create Account
                                            </button>
                                        </form>
                                    )}
                                </Formik>
                                <div class=" rounded-xl text-black8 text-center   bg-white flex justify-between">
                                    <p className='text-black8'>Already Have no Account?</p>
                                    <Link to="/register" class="font-medium text-indigo-500 hover:underline">Register</Link>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Login;