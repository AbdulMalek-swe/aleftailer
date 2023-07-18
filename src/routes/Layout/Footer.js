import React from 'react';
import img from 'assets/image/demo.svg'
import { Link } from 'react-router-dom';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import { BsMessenger} from 'react-icons/bs';
 import {AiFillTwitterCircle} from 'react-icons/ai'
const Footer = () => {
    return (
        <div className='bg-black z-100' style={{zIndex:9999}}>
            <div className='container-sk'>
                <div className='grid grid-cols-2'>
                    <div>
                        <img src={img} alt='loading...' />
                    </div>
                    <div className='text-white'>
                        <div className='text-center'>
                            <h1 className='font-bold font-arial italic text-base'>SUBSCRIBE TO OUR NEWSLETTER</h1>
                            <p className='font-italianno text-xl '>Get Notified For Our Promotions</p>
                        </div>
                        <div className='flex justify-between border-b-2 px-5 pb-3 mt-5'>
                            <input placeholder='Enter Your Email Here' className='border-0 bg-transparent text-gray-500 placeholder-gray-500 outline-none' />
                            <p className='text-gray-500'>SUBSCRIBE</p>
                        </div>
                    </div>
                </div>
                <div className='mt-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 text-white justify-center  place-content-center gap-3'>
                    <div className=' mx-auto'>
                        <h2 className='text-2xl font-arial font-normal'>WE CREATE BAGS TO CARRY OUR WORLDS</h2>
                        <Link to="/">
                            <button className='mt-5 text-3xl font-arial font-semibold '>Home</button>
                        </Link> <br />
                        <Link to="/">
                            <button className='mt-5 text-3xl font-arial font-semibold '>Shop</button>
                        </Link> <br />
                        <Link to="/">
                            <button className='mt-5 text-3xl font-arial font-semibold '>Made To Order</button>
                        </Link> <br />
                        <Link to="/">
                            <button className='mt-5 text-3xl font-arial font-semibold '>Inside Alef</button>
                        </Link>
                    </div>
                    <div className='text-left'>
                        <h2 className='text-3xl font-arial font-semibold'> SERVICES</h2>
                        <button className='mt-5 text-2xl font-arial font-normal '>Contact Us</button> <br />
                        <button className='mt-5 text-2xl font-arial font-normal text-left'>Book an Appointment</button> <br />
                        <button className='mt-5 text-2xl font-arial font-normal '>Payment Methods </button> <br />
                        <button className='mt-5 text-2xl font-arial font-normal '>Orders and Shipping</button> <br />
                        <button className='mt-5 text-2xl font-arial font-normal '>Return and Refunds</button> <br />
                        <button className='mt-5 text-2xl font-arial font-normal '>Track YOUR oRDER</button> <br />
                        <button className='mt-5 text-2xl font-arial font-normal '>Return Form</button> <br />
                        <button className='mt-5 text-2xl font-arial font-normal '>FAQ</button> <br />
                    </div>
                    <div className=' mx-auto'>
                        <h2 className='text-3xl font-arial font-semibold'>LEGAL & PRIVACY</h2>
                        <button className='mt-5 text-2xl font-arial font-normal '>Privacy Policies</button> <br />
                        <button className='mt-5 text-2xl font-arial font-normal '>Cookie Policy</button> <br />
                        <button className='mt-5 text-2xl font-arial font-normal '>Terms & Conditions</button> <br />
                    </div>
                    <div className=' mx-auto'>
                        <h2 className='text-3xl font-arial font-semibold'>STORE</h2>
                        <button className='mt-5 text-2xl font-arial font-normal '> Greece,Athens</button> <br />
                        <button className='mt-5 text-2xl font-arial font-normal '> Kolokotroni 9</button> <br />
                        <button className='mt-5 text-2xl font-arial font-normal '> Chalandri 152 33</button> <br />
                        <h2 className='text-3xl font-arial font-semibold mt-7'>SOCIAL</h2>
                        <div className='flex justify-around'>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='-mb-1'>...</p>
                                <p className='rounded-full'>  <BsMessenger className=' rounded-full   text-2xl' /></p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='-mb-1'>...</p>
                                <p className='rounded-full'><SendRoundedIcon className=' rounded-full   text-2xl' /></p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='-mb-1'>...</p>
                                <p className='rounded-full'><FacebookRoundedIcon className=' rounded-full   text-2xl' /></p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='-mb-1'>...</p>
                                <p className='rounded-full'> <AiFillTwitterCircle className=' rounded-full   text-2xl' /></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    
                    <div className=' text-white flex justify-between mx-7 font-arial text-2xl font-bold pb-12'>
                       <h4>  2023. All rights reserved.</h4>
                       <h4>ZWIWI</h4>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;