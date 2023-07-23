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
                <img src={homeOrder.madeImage} className='md:h-80 h-48 w-full  ' alt='loading...' />
            </div>
            <div className='mx-20 my-5'>
                <div className='font-hel' dangerouslySetInnerHTML={{ __html: homeOrder.description }}  ></div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
                {[1, 2, 3].map((item, index) => <img src={homeOrder.madeImage} className='object-contain' alt='loading...' key={index} />)}

            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 items-center gap-y-6 md:gap-y-0'>

                <div className='  h-full flex flex-col justify-center rounded-tl-[100px] rounded-br-[100px] -mt-2 -ml-1  md:p-0 p-7'>
                    <h1 className='font-sans font-semibold text-3xl mb-8 mx-5 text-center'> {details?.title} </h1>
                    <div className='leading-7 text-xl font-arial mx-5' dangerouslySetInnerHTML={{ __html: details?.description }}  ></div>
                </div>
                <div className='my-auto'>
                    <img src={details?.image} alt='loading...' className='w-full h-full my-auto' />
                </div>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 items-center gap-y-6 md:gap-y-0 my-7' >
                <div className='my-auto'>
                    <img src={appointment?.image} alt='loading...' className='w-full h-full my-auto' />
                </div>
                <div className='  h-full flex flex-col justify-center rounded-tl-[100px] rounded-br-[100px] -mt-2 -ml-1  md:p-0 p-7'>
                    <h1 className='font-sans font-semibold text-3xl mb-5 mx-5'> {appointment?.title}</h1>
                    <div className='leading-7 text-xl font-arial mx-5' dangerouslySetInnerHTML={{ __html: appointment?.description }}  ></div>
                    <div className='text-center mt-7'>
                        <Link to="/appointment"> <button className='capitalize bg-black text-white px-5 py-3 rounded hover:underline'>Book Now</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default MakeOrder;