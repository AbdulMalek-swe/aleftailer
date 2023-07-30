import React from 'react';



import { ErrorMessage, Field, Formik } from 'formik';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
const Profile = () => {
    const { t } = useTranslation()
    const user = useSelector(state => state.reducer.user)
    return (
        <>
        
            <div className='container-sk  h-screen flex justify-center items-center  '>
<div className=' md:w-96 w-full'>
    <h1 className='text-center font-800 font-arial text-5xl my-5'>Profile</h1>
    
<Formik
                    enableReinitialize
                    initialValues={{
                        firstName: user?.first_name || "",
                        lastName: user?.last_name || "",
                        contactNumber: user?.contactNumber || "",
                        email: user?.email || "",
                        password: "",
                        confirmPassword: ""
                    }}
                    validate={(values) => {

                        const error = {};
                       

                        return error;
                    }}
                    onSubmit={(values, { resetForm }) => {

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
                        <form onSubmit={handleSubmit} className='capitalize  '>
                            <div className="mb-4">
                                <label htmlFor="firstName" className="block text-xl font-normal text-black leading-4">
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
                                    readOnly
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="lastName" className="block text-xl font-normal text-black leading-4">
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
                                    readOnly
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="contactNumber" className="block text-xl font-normal text-black leading-4">
                                    {t('sign.phone')}<span className="text-red-500">*</span>
                                </label>
                                <Field
                                    type="text"
                                    id="contactNumber"
                                    name="contactNumber"
                                    placeholder="Phone Number"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    readOnly
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                <ErrorMessage name="contactNumber" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-xl font-normal text-black leading-4">
                                    {t('sign.email')}<span className="text-red-500">*</span>
                                </label>
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    readOnly
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                            </div>


                        </form>
                    )}
                </Formik>
</div>
            </div>



        </>
    );
};

export default Profile;