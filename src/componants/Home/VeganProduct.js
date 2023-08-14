import React, { useEffect, useRef, useState } from 'react';
import img1 from 'assets/new.svg'
import { Button1 } from 'componants/Common/Button/Button';
import axios from 'apiService/axios';
import { Link, useNavigate } from 'react-router-dom';

const VeganProduct = () => {
  const [vegan, setVegan] = useState([])
  useEffect(() => {
    axios.get('/vegan')
      .then(res => {
        setVegan(res?.data?.result)
      })
  }, [])

  return (
    <>
      <div className='container-sk py-7'>

        <div className='mx-'>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-x-4 items-center'>
            <div>
              <h1 className='text-center mb-10 font-arial text-2xl uppercase py-7 xl:text-4xl lg:text-3xl  '>{vegan[0]?.veganHeader}</h1>
              <p className='text-justify xl:text-xl md:text-base text-sm'> {vegan[0]?.veganDescription} </p>
              <div className='text-center py-7'>
                <Link to="/shop">
                  <Button1 />
                </Link>

              </div>
            </div>
            <div>
              <img src={vegan[0]?.veganImage} alt='loading' className='rounded-xl w-full xl:h-96 lg:h-72 md:h-52 h-40' />
            </div>
          </div>
        </div>
        <div className='py-7'>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-x-6'>
            {/* {
          vegan.slice(1,4).map((item,index)=><ProductsCard key={index} item={item}/>)
        }
          */}

          </div>

        </div>

        <Leather />
      </div>

    </>

  );
};

export default VeganProduct;

export const ProductsCard = ({ item }) => {
  const [vegan, setVegan] = useState([])
  useEffect(() => {
    axios.get('/vegan')
      .then(res => {
        setVegan(res?.data?.result)
      })
  }, [])
  return (
    <div className='container-sk' >
      <div className='grid md:grid-cols-3 grid-cols-1 gap-x-6 mt-7'>
        {
          vegan.slice(1, 4).map((item, index) => <div className='flex justify-center' key={item._id}>
            <div className='rounded-lg text-center p-4 alif-cart-btn'>
              <div className='flex justify-center'>
                <img src={item?.veganImage} alt='loading...' className='h-8 w-8 rounded-full ' />
              </div>
              <h1 className='mb-3 font-arial xl:text-3xl lg:text-2xl text-xl uppercase py-1 font-bold'>{item?.veganHeader} </h1>
              <p className='font-arial text-justify leading-5 xl:text-xl md:text-base text-sm'> {item?.veganDescription}</p>
            </div>
          </div>)
        }

      </div>
    </div>
  )
}

export const Leather = () => {

  return (
    <div>
      <div className='grid md:grid-cols-2 grid-cols-1 items-center gap-5 py-7'>
        <div>
          <img src={img1} alt='loading' className='rounded-xl w-full xl:h-96 lg:h-72 md:h-52 h-40' />
        </div>

        <div>
          <h1 className='my-2 font-arial uppercase text-left text-xl md:text-2xl lg:text-3xl xl:text-5xl'>The new generation of leather</h1>
          <button className='bg-black text-white px-3 py-1 rounded' >Learn More</button>

        </div>
      </div>
      <div className='relative flex justify-center items-center w-full py-7'>
        <img src={img1} alt='loading' className='w-full object-contain' />
        <div className='absolute grid grid-cols-2 gap-x-2 '>
          <div></div>
          <div>
            <Link to="/insider-alif">
              <button className='md:ml-20 bg-black text-white px-5 py-3 rounded'>Visit Our Site</button>
            </Link>

          </div>
        </div>
      </div>

    </div>


  )
}