import React, { useState } from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { RiWhatsappFill } from 'react-icons/ri';
import { AiFillTwitterCircle, AiOutlineMail } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'
import { FiPhoneCall } from 'react-icons/fi'

import axios from 'apiService/axios';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
const Contact = () => {
    const {t} = useTranslation()
const [contact,setContact] = useState({})
const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [message,setMessage] = useState('')
const handleName = e =>{
setName(e.target.value)
setContact({  ...contact,name: e.target.value})
}
const handleEmail = e =>{
setEmail(e.target.value)
setContact({  ...contact,email:e.target.value,message:''})
}
const handleMessage = e =>{
setMessage(e.target.value)
setContact({  ...contact,message:e.target.value})
}
const handleSubmit = (e) =>{
axios.post("/contact",contact)
.then(res=>{
console.log(res);
toast.success(res.data.message)
setContact({})
})
.catch(err=>{
toast.error(err?.response?.data?.message)
})
setName('');
setEmail('');
setMessage('')
setContact({})
e.preventDefault()
}

return (
<div className='bg-contact bg-cover bg-no-repeat '>
<div className='container-sk pt-52 pb-20'>
    <div className='grid lg:grid-cols-2 grid-cols-1 gap-6'>
        <div>
            <form className="space-y-" onSubmit={handleSubmit} action=''>
                <div className='my-5'>
                    <CustomeLabel name={t('contact.name')} />
                    <input
                        placeholder='Your  Name'
                        type="text"
                        id="first_name"
                        name="first_name"
                        className={`block w-full px-5 py-3 mt-2 text-white placeholder-white bg-white8 shadow-lg rounded-lg   `}
                        value={name}
                        onChange={handleName}
                    />
                </div>
                <div className='my-5'>
                    <CustomeLabel name={t('contact.email')} />
                    <input
                        placeholder='Enter Email   '
                        type="email"
                        id="first_name"
                        name="first_name"
                        className={`block w-full px-5 py-3 mt-2 text-white placeholder-white bg-white8 shadow-lg rounded-lg   `}
                        
                        value={email}
                        onChange={handleEmail}

                    />

                </div>
                <div className='my-5'>
                    <CustomeLabel name={t('contact.message')} />
                    <textarea
                        rows={3}
                        placeholder='Description'
                        type="text"
                        id="first_name"
                        name="first_name"
                        className={`block w-full px-5 py-3 mt-2 text-white placeholder-white bg-white8 shadow-lg rounded-lg `}
                        value={message}
    onChange={handleMessage}
                    />

                </div>
                <div className='' type="submit">
                    <button className='text-xl font-bold font-noto text-center bg-[#FAEFB4] rounded-2xl py-4 hover:bg-red000 cursor-pointer w-full'>Submit</button>
                </div>
            </form>
        </div>
        <div className='grid grid-cols-3 justify-center   text-white mt-7 uppercase '>
            <div className='col-span-2 grid grid-cols-2 gap-6'>
                <div className='font-normal text-white text-center'>
                    <h1 className='font-semibold text-xl mb-7'> {t('contact.contact')}</h1>
                    <p className='mb-7 text-xs'>Contact us for a quote. Help
                        or join the team</p>
                    <div className='flex  justify-center gap-x-2'>
                        <div className=''>
                            <RiWhatsappFill className=' rounded-full   text-2xl text-white  ' />
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
                </div>
                <div className='font-normal text-white text-center'>
                    <div className='  mb-5 text-3xl flex justify-center'>
                        <CiLocationOn />
                    </div>
                    <h1 className='font-semibold text-xl mb-7 uppercase'> {t('contact.address')}</h1>
                    <p className='mb-7 text-xs'> {t('contact.addressdetails')} </p>
                    <div className='flex  justify-center gap-x-2'>

                    </div>
                </div>
                <div className='font-normal text-white text-center'>
                    <div className='  mb-5 text-3xl flex justify-center'>
                        <AiOutlineMail />
                    </div>
                    <h1 className='font-semibold text-xl mb-7'> {t('contact.mail')}</h1>
                    <p className='mb-7 text-xs'>alefatelierbeta@gmail.com</p>
                    <div className='flex  justify-center gap-x-2'>

                    </div>
                </div>
                <div className='font-normal text-white text-center'>
                    <div className='  mb-5 text-3xl flex justify-center'>
                        <FiPhoneCall />
                    </div>
                    <h1 className='font-semibold text-xl mb-7 uppercase'> {t('contact.call')}</h1>
                    <p className='mb-7 text-xs'> +(30) 6947-885132 <br />
                        +(30) 211-7406647             </p>
                    <div className='flex  justify-center gap-x-2'>

                    </div>
                </div>
            </div>
            <div className=' flex items-center justify-center'>
                <div className='font-normal text-white text-center'>
                    <div className='  mb-5 text-3xl flex justify-center'>
                        <CiLocationOn />
                    </div>
                    <h1 className='font-semibold text-xl mb-7 uppercase'> {t('contact.shedule')} </h1>
                    <p className='mb-7 text-xs'>
                        Mon:12:00-21.00<br/>
                        Tu:12:00-21.00<br/>
                        Wed:12:00-21.00<br/>
                        Th:12:00-21.00<br/>
                        Fri:12:00-21.00<br/>
                        Sat:10:00-15.00 </p>
                    <div className='flex  justify-center gap-x-2'>

                    </div>
                </div>
            </div>
        </div>

    </div>
    <div className='mt-52  '>
<iframe width="100%" height="100%" className="  inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.1858736222644!2d88.32363647459844!3d24.823316346744367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fba7ca108e72f9%3A0xeec7a6739a3ff211!2sRohanpur%20Pourashava!5e0!3m2!1sen!2sbd!4v1685129134333!5m2!1sen!2sbd"

></iframe>
    
</div>
</div>

</div>
);
};

export default Contact;


export const CustomeLabel = ({ name }) => {
return (
<label className="flex mb-2 text-sm text-slate-300 capitalize">

{name}

<span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" className="bi bi-asterisk text-red-700" viewBox="0 0 16 16">
    <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
</svg></span>
</label>
)

}