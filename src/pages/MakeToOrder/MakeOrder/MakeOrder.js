import React, { useEffect, useState } from 'react';

import emails from 'assets/image/e-mail-global-communications-connection-social-networking-concept.jpg'
import filter from 'assets/image/flirtatious-woman-beret-blouse-trousers-holding-red-bag-pink-background.jpg'
import { Link } from 'react-router-dom';
import axios from 'apiService/axios';

const MakeOrder = () => {
    const [homeOrder, setHomeOrder] = useState({})
    const [details, setMadeDetails] = useState({})
    const [appointment, setMadeAppointment] = useState({})
    useEffect(() => {
        axios.get('/made-order')
            .then(res => {
                
                setHomeOrder(...res.data.result)
            })
    }, [])

    useEffect(() => {
        axios.get('/made-details')
            .then(res => {
                console.log(res.data);
                setMadeDetails(...res.data.result)
            })
    }, [])

    useEffect(() => {
        axios.get('/made-appointment')
            .then(res => {
                
                setMadeAppointment(...res.data.result)
            })
    }, [])
    return (
        <div className='mt-48 container-sk'>
            <div className=' '>
                <img src={homeOrder.madeImage} className=' object-cover lg:h-96 md:h-72 sm:52 h-44 w-full' alt='loading...' />
            </div>
            <div className='mx-20 my-5'>
                <div className='font-hel' dangerouslySetInnerHTML={{ __html: homeOrder.description }}  ></div>

            </div>
            <div className='grid grid-cols-3  gap-6 mb-16'>
                {[1, 2, 3].map((item, index) => <img src={homeOrder.madeImage} className='object-contain' alt='loading...' key={index} />)}

            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 items-center lg:gap-6 gap-4 '>

                <div className='  h-full flex flex-col justify-center rounded-tl-[100px] rounded-br-[100px]   md:p-0 p-7'>
                    <h1 className='font-sans font-semibold text-3xl mb-8 mx-5 text-center'> {details?.title} </h1>
                    <div className='leading-7 text-sm md:text-base xl:text-lg font-arial mx-5' dangerouslySetInnerHTML={{ __html: details?.description }}  ></div>
                </div>
                <div className='my-auto'>
                    <img src={details?.image} alt='loading...' className='rounded-xl w-full xl:h-96 lg:h-72 md:h-52 h-40' />
                </div>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 items-center lg:gap-6 gap-4   my-10' >
                <div className='my-auto md:order-1 order-2'>
                    <img src={appointment?.image} alt='loading...' className='rounded-xl w-full xl:h-96 lg:h-72 md:h-52 h-40' />
                </div>
                <div className='  h-full flex flex-col justify-center rounded-tl-[100px] rounded-br-[100px]    md:p-0   gap-6 md:order-2 order-1'>
                    <h1 className='font-sans font-semibold xl:text-3xl lg:text-2xl text-xl mx-5'> {appointment?.title}</h1>
                    <div className='text-sm md:text-base xl:text-lg font-arial mx-5' dangerouslySetInnerHTML={{ __html: appointment?.description }}  ></div>
                    <div className='text-center '>
                        <Link to="/appointment"> <button className='capitalize bg-black text-white px-5 py-3 rounded hover:underline'>Book Now</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default MakeOrder;