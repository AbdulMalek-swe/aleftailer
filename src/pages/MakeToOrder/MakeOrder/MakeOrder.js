import React from 'react';
import youtube from 'assets/image/youtube.svg'
import emails from 'assets/image/e-mail-global-communications-connection-social-networking-concept.jpg'
import filter from 'assets/image/flirtatious-woman-beret-blouse-trousers-holding-red-bag-pink-background.jpg'
import { Link } from 'react-router-dom';
const MakeOrder = () => {
    return (
        <div className='mt-48 container-sk'>
            <div>
                <img src={youtube} className='object-contain' alt='loading...' />
            </div>
            <div className='mx-20 my-7'>
                <p>loarem impus</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
                <img src={youtube} className='object-contain' alt='loading...' />
                <img src={youtube} className='object-contain' alt='loading...' />
                <img src={youtube} className='object-contain' alt='loading...' />
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 items-center gap-y-6 md:gap-y-0'>

                <div className='  h-full flex flex-col justify-center rounded-tl-[100px] rounded-br-[100px] -mt-2 -ml-1  md:p-0 p-7'>
                    <h1 className='font-sans font-semibold text-3xl mb-5 mx-5'>Handmade </h1>
                    <p className='leading-7 text-xl font-arial mx-5'>Our products are handmade and therefore, unique. <br />
                        That makes ALEF collection literally limited edition.<br />
                        Our bags are made exclusively in ALEF atelier that’s based in Athens.<br />
                        We make our bags with love and joy so you can have a unique product.</p>


                </div>
                <div className='my-auto'>
                    <img src={filter} alt='loading...' className='w-full h-full my-auto' />
                </div>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 items-center gap-y-6 md:gap-y-0 my-7' >
                <div className='my-auto'>
                    <img src={emails} alt='loading...' className='w-full h-full my-auto' />
                </div>
                <div className='  h-full flex flex-col justify-center rounded-tl-[100px] rounded-br-[100px] -mt-2 -ml-1  md:p-0 p-7'>
                    <h1 className='font-sans font-semibold text-3xl mb-5 mx-5'>Handmade </h1>
                    <p className='leading-7 text-xl font-arial mx-5'>Our products are handmade and therefore, unique. <br />
                        That makes ALEF collection literally limited edition.<br />
                        Our bags are made exclusively in ALEF atelier that’s based in Athens.<br />
                        We make our bags with love and joy so you can have a unique product.</p>
                        <div className='text-center mt-7'>
                            <Link to="/appointment"> <button className='capitalize bg-black text-white px-5 py-3 rounded hover:underline'>Book Now</button></Link>
                           
                        </div>
                </div>
            </div>

        </div>
    );
};


export default MakeOrder;