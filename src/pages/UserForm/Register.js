import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';


import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import { ErrorMessage, Field,   Formik } from 'formik';
 
import axios from 'apiService/axios';
const Register = () => {
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
    console.log(values, 'ee');
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("firstName", values.first_name);
    formData.append("lastName", values.last_name);
    formData.append("password", values.password);
    formData.append("confirmPassword", values.confirmPassword);
    formData.append("contactNumber", values.phoneNumber);
    // const loading = toast.loading("Please wait a moment...");
    try {
      const res = await axios.post(
        `/user/signup/`,
       {
        email:values.email,
        firstName:values.first_name,
        lastName:values.last_name,
        password:values.password,
        confirmPassword:values.confirmPassword,
        contactNumber:values.phoneNumber
       }
      );
      // console.log(res);
      console.log(res);
      const { status, data } = res;
      console.log("submit data ", res);
      if (status === 200) {
        // toast.dismiss(loading);
        toast.success(data?.message);
        setCookie("token", data?.access_token, {
          path: "/",
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
        <div class="h-screen md:flex">
          <div class="flex items-center justify-center   py-10 md:w-1/2 h-full    ">
            <div className='flex justify-center'>
              {/* register field code here using formik */}
              <div className=' mr-20 ml-20 lg:ml-20 lg:mr-20 md:ml-8 md:mr-8 '>
                <div className='text-center'>
                  <h1 className='mb-9 font-bold font-4xl'>CREATE ACCOUNT</h1>
                  <p className='font-xl text-left mb-7'>By creating an account with our store, you will be able to move through the checkout process faster, view and track your orders in your account and more.</p>
                </div>
                <Formik
                  enableReinitialize
                  initialValues={{
                    first_name: "",
                    last_name: "",
                    phoneNumber: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                  }}
                  validate={(values) => {
                    console.log(values);
                    const error = {};
                    if (!values.first_name) {
                      error.first_name = "Please enter your fast name.";
                    }
                    else if (!values.last_name) {
                      error.last_name = "Please enter your last name.";
                    }
                    else if (!values.phoneNumber) {
                      error.phoneNumber = "Please enter your phone number";
                    }

                    else if (!values.email) {
                      error.email = "Please enter your email";
                    }

                    else if (!values.password) {
                      error.password = "Please enter password";
                    }
                    else if (values.password.length < 6) {
                      error.password = "minimum six character ";
                    }
                    else if (!values.confirmPassword) {
                      error.confirmPassword = "Please enter confirm password";
                    }

                    else if (values.password != values.confirmPassword) {
                      error.confirmPassword = "password mistch match";
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
                        <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                          First Name<span className="text-red-500">*</span>
                        </label>
                        <Field
                          type="text"
                          id="first_name"
                          name="first_name"
                          placeholder="Fast Name"
                          onChange={handleChange}
                          onBlur={handleBlur}

                          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <ErrorMessage name="first_name" component="div" className="text-red-500 text-sm mt-1" />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                          Last Name<span className="text-red-500">*</span>
                        </label>
                        <Field
                          type="text"
                          id="last_name"
                          name="last_name"
                          placeholder="Last Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <ErrorMessage name="last_name" component="div" className="text-red-500 text-sm mt-1" />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                          Phone Number<span className="text-red-500">*</span>
                        </label>
                        <Field
                          type="text"
                          id="phoneNumber"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm mt-1" />
                      </div>
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
                          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                      </div>
                      {/* confirm password  */}
                      <div className="mb-4">
                        <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">
                          Confirm Password<span className="text-red-500">*</span>
                        </label>
                        <Field
                          type="password"
                          id="confirm_password"
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
                      </div>

                      <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 w-full">
                        Create Account
                      </button>


                    </form>
                  )}
                </Formik>

                <div class=" rounded-xl text-black8 text-center   bg-white flex justify-between">
                  <p className='text-black8'>Already Have An Account?</p>
                  <Link to="/login" class="font-medium text-indigo-500 hover:underline">Log-in</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-signImg    bg-cover   bg-no-repeat bg-static  h-screen w-1/2 ">
            <div className="w-full h-full   bg-white8 text-left ">
              <div className="mr-20 ml-20 lg:ml-20 lg:mr-20 md:ml-8 md:mr-8 flex items-center    h-full">
                <div>
                  <div className='flex items-center   mb-4'>
                    <div className="border-t border-gray-600 w-5"></div>
                    <div className='mx-2.5'> Fast and easy check out  </div>
                  </div>
                  <div className='flex items-center   mb-4'>
                    <div className="border-t border-gray-600 w-5"></div>
                    <div className='mx-2.5'> Easy access to your order history and status</div>
                  </div>
                  <div className='flex items-center   mb-4'>
                    <div className="border-t border-gray-600 w-5"></div>
                    <div className='mx-2.5'> Even faster checkout for future purchases</div>
                  </div>
                  <div className='flex items-center   mb-4'>
                    <div className="border-t border-gray-600 w-5"></div>
                    <div className='mx-2.5'>  Receive our FREE e-newsletter with exclusive discounts and offers</div>
                  </div>
                  <div className='flex items-center   mb-4'>
                    <div className="border-t border-gray-600 w-5"></div>
                    <div className='mx-2.5'> You can easily unsubscribe at any time</div>
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

export default Register;