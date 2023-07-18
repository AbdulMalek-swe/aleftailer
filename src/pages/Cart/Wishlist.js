import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import img1 from 'assets/image/BAG 2.png'
import cartHook from 'hooks/cartHook';
import { likeUpdates } from 'hooks/likeUpdate';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
 

const Wishlist = () => {
    const user = useSelector(state => state.reducer.user)
    const cart = useSelector(state => state.reducer.cart)
    const { addToCartHandle, removeFromCartHandle } = cartHook()
    useEffect(() => {
        localStorage.setItem("newcart", JSON.stringify(cart.items))
    }, [cart.items])

    return (
        <div className='mt-52 mb-7 container-sk'>
            <h1 className='text-center shadow-lg py-5 text-6xl font-sans font-bold uppercase leading-10 rounded-lg'>wishlist</h1>
            <hr className='h-[1px] bg-gray-300 my-7' />
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-7'  >
                {user?.wishlist?.map(item => <div className='  relative text-black dark:text-white bg-white drop-shadow-md mx-2' >
                    <div className='relative'>
                        <img src={item.productImage[0]} alt="loading" className='w-full h-96 ' />
                         <button className='absolute bottom-0 right-0 bg-[#00000033]  w-8 h-8' onClick={() => likeUpdates(item._id,user)} >
                                    { user.wishlist.some(items=>items._id===item._id) ? <FavoriteSharpIcon className='  text-red-500' /> : <FavoriteSharpIcon className='  text-white'  text-4xl/>}
                                </button>
                    </div>
                    <p className='absolute top-0 left-0 bg-orange2 w-40 h-48 px-2' style={{ clipPath: 'polygon(29% 0, 38% 6%, 29% 12%, 0 12%, 0 0)' }}>Sale!</p>
                    <h1 className='text-center text-black mt-8 text-base font-arial'>  {item.name}</h1>
                    <p className='text-center text-[15px] my-5 text-black'>€ {item.price}</p>

                    <div className='flex justify-around pb-5 px-2 tex'>
                        <button className='bg-black text-white rounded px-4 py-2 capitalize' onClick={() => addToCartHandle(item)}>add to cart </button>
                        <button className='bg-black text-white rounded px-4 py-2 capitalize' onClick={() => removeFromCartHandle(item._id)}>remove from cart </button>

                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Wishlist;