import React, { useEffect, useState } from 'react';
import img from 'assets/image/BAG 4.png'
import img1 from 'assets/new.svg'
import { Button1 } from 'componants/Common/Button/Button';
import axios from 'apiService/axios';

const VeganProduct = () => {
  const [vegan,setVegan] = useState([])
  useEffect(()=>{
    axios.get('/vegan')
    .then(res=>{
      setVegan(res?.data?.result)
    })
  },[])
  console.log(vegan);
  return (
    <>
      <div className='container-sk py-7'>

        <div className='mx-'>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-x-4 items-center'>
            <div>
              <h1 className='text-center mb-10 font-arial text-4xl uppercase py-7'>Vegan Products</h1>
              <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five </p>
              <div className='text-center py-7'>
                <Button1 />
              </div>
            </div>
            <div>
              <img src={img} alt='loading' className='w-full h-96' />
            </div>
          </div>
        </div>
        <div className='py-7'>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-x-6'>
        {
          vegan.map((item,index)=><ProductsCard key={index} item={item}/>)
        }
         

      </div>
    </div>
        
        <Leather/>
      </div>
   
    </>

  );
};

export default VeganProduct;

export const ProductsCard = ({item}) => {
  return (
  
        <div className='flex justify-center'>
          <div className='rounded-lg shadow-md text-center p-4'>
            <div className='flex justify-center'>
              <img src={item?.veganImage} alt='loading...' className='h-8 w-8 rounded-full ' />
            </div>
            <h1 className='mb-3 font-arial text-2xl uppercase py-1 font-bold'>{item?.veganHeader} </h1>
            <p className='font-arial text-justify leading-5'> {item?.veganDescrition}</p>
          </div>
        </div>
       
  )
}

export const Leather = () => {
  return (
   
      <div className='relative flex justify-center items-center w-full py-7'>
        <img src={img1} alt='loading' className='w-full border-1' />
        <div className='absolute grid grid-cols-2 gap-x-2 '>
          <div></div>
          <div>
            <h1 className='my-2 font-arial text-2xl uppercase text-left'>The new generation of leather</h1>
            <button className='bg-black text-white px-3 py-1 rounded'>Learn More</button>
          </div>
        </div>
      </div>
 
  )
}