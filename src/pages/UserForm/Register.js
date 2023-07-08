import React, {   useState } from 'react';

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ErrorMessage, Field,   Formik } from 'formik';
 
import axios from 'apiService/axios';
import Spinner from 'componants/Common/Spinner/Spinner';
const Register = () => {
  const [loader, setLoader] = useState(false);
  const Registerapi = async (values) => {
    setLoader(true)
    const loading = toast.loading("Please wait a moment...");
    try {
      const res = await axios.post(
        `/user/register`,values);
      const { status, data } = res;
      console.log("submit data ", res);
      if (status === 200) {
        setLoader(false)
        toast.dismiss(loading);
        toast.success(data?.message);
      }
    } catch (error) {
        toast.dismiss(loading)
        toast.error(error?.response?.data?.error);
        setLoader(false) 
    }
  };
  return (
    <>
      {
        loader && <div className='flex items-center justify-center h-screen'>
            <Spinner/>
           </div>
      }
      {
        !loader &&
        <div className="h-scree md:flex md:mt-[156px]">
       
          <div className="flex items-center justify-center    md:w-1/2 h-full    ">
            <div className='flex justify-center'>
              {/* register field code here using formik */}
              <div className=' mr-20 ml-20 lg:ml-20 lg:mr-20 md:ml-8 md:mr-8 '>
                <div className='text-center'>
                  <h1 className='mb-4 font-bold font-5xl font-sans text-black leading-10'>CREATE ACCOUNT</h1>
                  <p className='font-2xl text-left mb-4 font-arial text-black font-normal leading-5'>By creating an account with our store, you will be able to move through the checkout process faster, view and track your orders in your account and more.</p>
                </div>
                <Formik
                  enableReinitialize
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    contactNumber: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
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
                      <div className="mb-4">
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
                      <div className="mb-4">
                        <label htmlFor="password" className="block text-xl font-normal text-black leading-4">
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
                        <label htmlFor="confirm_password" className="block text-xl font-normal text-black leading-4">
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

                      <button type="submit" className="bg-black text-white py-2 px-4 rounded-md hover:bg-black8 w-full text-base font-arial font-bold">
                        Create Account
                      </button>


                    </form>
                  )}
                </Formik>

                <div className=" rounded-xl text-black8 text-center   bg-white flex justify-between">
                  <p className='text-black8'>Already Have An Account?</p>
                  <Link to="/login" className="font-medium text-black hover:underline font-arial text-base">Log-in</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-signImg lg:block hidden   bg-cover   bg-no-repeat bg-static  h-screen w-1/2  ">
            <div className="w-full h-full   bg-white8 text-left ">
              <div className="mr-20 ml-20 lg:ml-20 lg:mr-20 md:ml-8 md:mr-8 flex items-center    h-full">
                <div className='font-normal text-black font-sans text-3xl'>
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