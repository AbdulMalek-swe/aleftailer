import React from 'react';
import img from 'assets/image/demo.svg'
import { Link } from 'react-router-dom';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { BsMessenger } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
const Footer = () => {
    const { t } = useTranslation();
    const user = useSelector(state => state.reducer.user)
    return (
        <div className='bg-black z-100' style={{ zIndex: 9999 }}>
            <div className='container-sk'>
                <div className='grid sm:grid-cols-2 grid-cols-1'>
                    <div className='sm:block hidden'>
                        {/* <img src={img} alt='loading...' /> */}
                    </div>
                    {
                        !user.isSubscribe && <div className='text-white'>
                            <div className='text-center'>
                                <h1 className='font-bold font-arial italic text-base'>{t('footerEmail.e1')}</h1>
                                <p className='font-italianno text-xl '>{t('footerEmail.e2')}</p>
                            </div>
                            <div className='flex justify-between border-b-2 px-5 pb-3 mt-5'>
                                <input placeholder={t('footerEmail.e3')}className='border-0 bg-transparent text-gray-500 placeholder-gray-500 outline-none' />
                                <p className='text-gray-500 uppercase'>{t('footerEmail.e4')}</p>
                            </div>
                        </div>}
                </div>
                <div className='mt-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 text-white md:justify-center  md:place-content-center gap-3'>
                    <div className='md:text-left text-center'>
                        <h2 className='text-lg md:text-xl lg:text-2xl font-arial font-semibold'>WE CREATE BAGS TO CARRY OUR WORLDS</h2>
                        {
                            ["/", "/shop", "/make-order", "/insider-alif", "/contact"].map((item, index) =>
                                <Link
                                    to={item}
                                    key={index}
                                >
                                    <button className='mt-5 text-base md:text-lg lg:text-xl xl:text-2xl font-arial font-normal text-left'>{t(`nav.${index}`)}</button>
                                    <br />

                                </Link>
                            )
                        }
                    </div>
                    <div className='md:text-left text-center'>
                        <h2 className='text-lg md:text-xl lg:text-2xl font-arial font-semibold'> {t('footerService.service')}  </h2>
                   {
                    ['Contact Us','Book an Appointment','Payment Methods','Orders and Shipping','Return and Refunds','Track YOUR oRDER','Return Form','FAQ'].map((item,index)=> <div key={index}>
                    <button className='mt-5 text-base md:text-lg lg:text-xl xl:text-2xl font-arial font-normal  capitalize'>{t(`footerService.items.${index}`)} </button><br/>
                    </div> 
                     )
                   }
                  
                    </div>
                    <div className=' md:text-left text-center'>
                        <h2 className='text-lg md:text-xl lg:text-2xl font-arial font-semibold'>LEGAL & PRIVACY</h2>
                        <button className='mt-5 text-base md:text-lg lg:text-xl xl:text-2xl font-arial font-normal '> {t("footerService.policy")}</button> <br />
                        <button className='mt-5 text-base md:text-lg lg:text-xl xl:text-2xl font-arial font-normal '>Cookie Policy</button> <br />
                        <button className='mt-5 text-base md:text-lg lg:text-xl xl:text-2xl font-arial font-normal '>{t("footerService.terms")}</button> <br />
                    </div>
                    <div className='md:text-left text-center'>
                        <h2 className='text-lg md:text-xl lg:text-2xl font-arial font-semibold'>{t("footerstore.store")}</h2>
                        <button className='mt-5 text-base md:text-lg lg:text-xl xl:text-2xl font-arial font-normal '> {t("footerstore.area1")}</button> <br />
                        <button className='mt-5 text-base md:text-lg lg:text-xl xl:text-2xl font-arial font-normal '> {t("footerstore.area2")}</button> <br />
                        <button className='mt-5 text-base md:text-lg lg:text-xl xl:text-2xl font-arial font-normal '> {t("footerstore.area3")}</button> <br />
                        <h2 className='text-lg md:text-xl lg:text-2xl font-arial font-semibold mt-7'>SOCIAL</h2>
                        <div className='flex justify-around'>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='-mb-1'>...</p>
                                <p className='rounded-full'>  <BsMessenger className=' rounded-full   text-base md:text-lg lg:text-xl xl:text-2xl' /></p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='-mb-1'>...</p>
                                <p className='rounded-full'><SendRoundedIcon className=' rounded-full   text-base md:text-lg lg:text-xl xl:text-2xl' /></p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='-mb-1'>...</p>
                                <p className='rounded-full'><FacebookRoundedIcon className=' rounded-full   text-base md:text-lg lg:text-xl xl:text-2xl' /></p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='-mb-1'>...</p>
                                <p className='rounded-full'> <AiFillTwitterCircle className=' rounded-full   text-base md:text-lg lg:text-xl xl:text-2xl' /></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-5 text-white flex justify-between  font-arial text-base md:text-lg lg:text-xl xl:text-2xl font-bold pb-5'>
                    <h4>  2023. All rights reserved.</h4>
                    <h4>ZWIWI</h4>
                </div>
            </div>

        </div>
    );
};

export default Footer;

export const MainFooter = () => {
    return (
        <div className='mt-32 fixed bottom-0 w-full bg-black z-50 pt-5 alif-main-footer' style={{ zIndex: 9999 }}>

            <div className=' text-white flex justify-between mx-7 font-arial text-base md:text-lg lg:text-xl xl:text-2xl font-bold pb-5'>
                <h4>  2023. All rights reserved.</h4>
                <h4>ZWIWI</h4>
            </div>
        </div>
    )
}