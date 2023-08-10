import React, {   useState } from 'react';

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ErrorMessage, Field,   Formik } from 'formik';
 
import axios from 'apiService/axios';
import Spinner from 'componants/Common/Spinner/Spinner';
import { useTranslation } from 'react-i18next';
const Register = () => {
  const {t} = useTranslation()
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
        <div className="h-scree flex  lg:mt-40 mt-32">
       
          <div className="flex items-center justify-center    md:w-1/2 h-full    ">
            <div className='flex justify-center'>
              {/* register field code here using formik */}
              <div className=' mr-20 ml-20 lg:ml-20 lg:mr-20 md:ml-8 md:mr-8 '>
                <div className='text-center'>
                  <h1 className='mb-4 font-bold font-5xl font-sans text-black leading-10 uppercase'> {t("sign.s1")}</h1>
                  <p className='font-2xl text-left mb-4 font-arial text-black font-normal leading-5'> {t('sign.s2')}</p>
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
                    <form onSubmit={handleSubmit}   className='capitalize'>
                      <div className="mb-4">
                        <label htmlFor="firstName" className="block lg:text-xl text-base font-normal text-black leading-4">
                          {t('sign.first')}
                          <span className="text-red-500">*</span>
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
                        <label htmlFor="lastName" className="block lg:text-xl text-base font-normal text-black leading-4">
                        {t('sign.last')}
                           <span className="text-red-500">*</span>
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
                        <label htmlFor="contactNumber" className="block lg:text-xl text-base font-normal text-black leading-4">
                        {t('sign.phone')}<span className="text-red-500">*</span>
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
                        <label htmlFor="email" className="block lg:text-xl text-base font-normal text-black leading-4">
                        {t('sign.email')}<span className="text-red-500">*</span>
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
                        <label htmlFor="password" className="block lg:text-xl text-base font-normal text-black leading-4">
                        {t('sign.pass')}<span className="text-red-500">*</span>
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
                        <label htmlFor="confirm_password" className="block lg:text-xl text-base font-normal text-black leading-4">
                        {t('sign.cpass')}<span className="text-red-500">*</span>
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

                      <button type="submit" className="bg-black text-white py-2 px-4 rounded-md hover:bg-black8 w-full  font-arial font-bold lg:text-xl text-base">
                        {t("sign.s1")}
                      </button>


                    </form>
                  )}
                </Formik>

                <div className=" rounded-xl text-black8 text-center   bg-white flex justify-between">
                  <p className='text-black8'>{t('sign.already')}</p>
                  <Link to="/login" className="font-medium text-black hover:underline font-arial text-base">  {t('sign.login1')}</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-signImg md:block hidden   bg-cover   bg-no-repeat bg-static  h-screen w-1/2  ">
            <div className="w-full h-full   bg-white8 text-left ">
              <div className="mr-20 ml-20 lg:ml-20 lg:mr-20 md:ml-8 md:mr-8 flex items-center    h-full">
                <div className='font-normal text-black font-sans xl:text-2xl lg:text-xl text-base'>
                  <div className='flex items-center   mb-4'>
                    <div className="border-t border-gray-600 w-5"></div>
                    <div className='mx-2.5'> {t('sign.l1')} </div>
                  </div>
                  <div className='flex items-center   mb-4'>
                    <div className="border-t border-gray-600 w-5"></div>
                    <div className='mx-2.5'> {t('sign.l2')}</div>
                  </div>
                  <div className='flex items-center   mb-4'>
                    <div className="border-t border-gray-600 w-5"></div>
                    <div className='mx-2.5'> {t('sign.l3')}</div>
                  </div>
                  <div className='flex items-center   mb-4'>
                    <div className="border-t border-gray-600 w-5"></div>
                    <div className='mx-2.5'>  {t('sign.l4')}</div>
                  </div>
                  <div className='flex items-center   mb-4'>
                    <div className="border-t border-gray-600 w-5"></div>
                    <div className='mx-2.5'> {t('sign.l5')}</div>
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