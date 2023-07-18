import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
 
import { BsMessenger} from 'react-icons/bs';
 import {AiFillTwitterCircle} from 'react-icons/ai'
const Appointment = () => {
    return (
        <div className='  '>

<div className="h-screen md:flex md:mt-[156px] ">
                    <div className="bg-signImg    bg-cover   bg-no-repeat bg-static    items-center justify-center   py-10 md:w-1/2 h-full md:flex  hidden ">
                        
                    </div>
                    <div className="   h-screen  ">
                        <div className="w-full h-full  md:mx-10 ">
                            <div className="flex  mt-20 w-full  h-full mx-auto justify-center">
                            <div className='  ' >
             
             <div className='   '>
                 <h1 className='font-sans font-bold text-3xl mb-16 mx-5 text-center uppercase'> Book an Appointment </h1>
                 <h1 className='font-sans font-medium text-2xl mb-10 mx-5 text-center uppercase'> select appointment type</h1>
                 <div class="mb-4 ">
                     <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                     <input id="email" type="email" class="shadow-lg appearance-none     w-full py-2 px-3   leading-tight rounded-xl focus:outline-none focus:shadow-outline" placeholder="Enter Your Email Address" />
                 </div>

                 <div className=' flex justify-center items-center mb-7  mt-5'>
                     <div className='w-full ml-10 mr-2'> <hr className='  text-red-500 w-full   ' /></div>
                     <div>or</div>

                     <div className='w-full ml-2 mr-10'> <hr className='  text-red-500 w-full   ' /></div>
                 </div>
                 <div class="mb-4   ">
                     <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                     <input id="email" type="email" class="shadow-lg appearance-none     w-full py-2 px-3   leading-tight rounded-xl focus:outline-none focus:shadow-outline" placeholder="Enter Your Phone Number" />
                 </div>

                 <div className=' flex justify-center items-center mb-7 mt-5'>
                     <div className='w-full ml-10 mr-2'> <hr className='  text-red-500 w-full   ' /></div>
                     <div>or</div>

                     <div className='w-full ml-2 mr-10'> <hr className='  text-red-500 w-full   ' /></div>
                 </div>
                 <div className='flex  justify-center gap-x-2'>
                     <div className=''>
                         <BsMessenger className=' rounded-full   text-2xl' />
                     </div>
                     <div className=' '>

                         <SendRoundedIcon className=' rounded-full   text-2xl' />
                     </div>
                     <div className=' '>
                         <FacebookRoundedIcon className=' rounded-full   text-2xl' />
                     </div>
                     <div className=' '>
                         <AiFillTwitterCircle className=' rounded-full   text-2xl' />
                     </div>
                 </div>
                 <div className='text-center mt-7 mb-7'>
                         <button className='capitalize bg-black text-white px-5 py-3 rounded hover:underline'>Book Now</button> 
                        
                     </div>
             </div>
         </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default Appointment;