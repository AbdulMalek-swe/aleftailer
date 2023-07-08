import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import img from 'assets/image/BAG 2.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { useSelector } from 'react-redux';
import cartHook from 'hooks/cartHook';
const ProductDetails = () => {
    const user = useSelector(state=>state.reducer.user);
    const {result} = useLoaderData();
    const isLiked = user.wishlist.some(item=>item._id===result._id)
    const cart = useSelector(state=>state.reducer.cart)
    const {addToCartHandle} = cartHook()
    useEffect(()=>{
        localStorage.setItem("newcart",JSON.stringify(cart.items))
    },[cart.items])
    const [quantity,setQuantity] = useState(1)
      const addCart = e =>{
      
       const newItem = {...e,quantity:Number(quantity)};
       addToCartHandle(newItem)
      }
      console.log(quantity);
    return (
        <div className='mt-60 container-sk mb-7 '>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                <div>
                    <img src={img} alt='loading...' className='object-contain w-full' />
                </div>
                <div className='font-sans font-normal'>
                    <h1 className=' text-2xl '>{result?.name}</h1>
                    <p className='my-7 text-xs'>item No. {result?.skwNo}</p>
                    <h1 className='font-bold text-xl font-arial '> € {result?.price}</h1>
                    <p className='my-7 text-[18px]'> {result?.description} </p>
                        <div className='my-12 flex'>
                          <p className='text-xl mx-3'>Quantity</p>
                          <input type='number' className='py-2 w-1/4 outline' min="1" defaultValue={1} onChange={(e)=>{
                           setQuantity(e.target.value)
                          }}/>
                          <div className='mx-3'>
                            
                      
                            {
                                isLiked? <FavoriteSharpIcon className='  bg-white text-red-500' /> : <FavoriteSharpIcon className=' bg-gray-500 text-white' />
                            }
                            </div>
                        </div>
                    <div className='text-center mb-5'>
                        <button className='font-semibold font-sans text-xl w-full shadow-lg bg-black text-white rounded-lg py-4 text-center hover:bg-black8 flex items-center justify-center'>   <span className='mx-2 capitalize' onClick={()=>addCart(result)} > ADD TO CART  </span><ShoppingCartOutlinedIcon /></button>
                        <button className='font-semibold font-sans text-xl w-full shadow-lg bg-white8 text-black rounded-lg py-4 text-center hover:bg-black8 flex items-center justify-center my-5'>   <span className='mx-2 capitalize'> CHOOSE HARDWARE  </span> </button>
                        <button className='font-semibold font-sans text-xl w-full shadow-lg bg-white8 text-black rounded-lg py-4 text-center hover:bg-black8 flex items-center justify-center'>   <span className='mx-2 capitalize'> CHOOSE STARP </span> </button>
                        <div className='font-sans grid grid-cols-2 text-xl my-7'>
                            <div className='font-semibold text-left'>
                              <h2>Available:</h2> 
                              <h2 className='my-7'>SKU:</h2> 
                              <h2>Categories:</h2> 
                            </div>
                            <div className='font-normal text-left'>
                                <p className='text-[#00FF00]'>{result?.available}</p>
                                <p className='my-7'> {result?.skwNo}</p>
                                <p>{result?.category}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;