import React from 'react';
import img from 'assets/image/insider1.svg'
import img1 from 'assets/image/insider2.svg'
import img2 from 'assets/image/insider4.svg'
import img3 from 'assets/image/insider4.svg'
import img4 from 'assets/image/insider6.svg'
const InsiderAlif = () => {
    return (
        <div>
            <div className='bg-insiderAlif bg-cover bg-no-repeat h-[600px] flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='text-7xl uppercase'>Welcome to ALEf</h2>
                    <h4 className='font-sans text-sm uppercase'>WE CREATE BAGS TO CARRY OUR WORLDS</h4>
                </div>
            </div>
            <div className='container-sk'>
                <p className='py-7 text-2xl font-arail leading-7'>
                    <strong>Aleph</strong> is the Phoenician letter that led to the first letter of the Greek alphabet “Alpha”.
                    As a word it symbolizes the beginning of the creation as well as the starting point of human culture. <br />
                    Our primary focus is on the creation of handmade bags and accessories, using several high quality eco friendly and materials with different textures.<br />
                    Our philosophy is based on finding the roots of human creativity in products made purely by handed are inspired by the past to create unique and timeless products.</p>
            </div>
            <Handemade />
            <div className='my-7'>
                <img src={img1} alt='loading...' className='w-full' />
            </div>
            <Materials />
            <Brands />
            <Donations />
        </div>
    );
};

export default InsiderAlif;

export const Handemade = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 items-center gap-y-6 md:gap-y-0'>
            <div className='my-auto'>
                <img src={img} alt='loading...' className='w-full h-full my-auto' />
            </div>
            <div className='bg-[#F0F0F0] h-full flex flex-col justify-center rounded-tl-[100px] rounded-br-[100px] -mt-2 -ml-1  md:p-0 p-7'>
                <h1 className='font-sans font-semibold text-3xl mb-5 mx-5'>Handmade </h1>
                <p className='leading-7 text-xl font-arial mx-5'>Our products are handmade and therefore, unique. <br />
                    That makes ALEF collection literally limited edition.<br />
                    Our bags are made exclusively in ALEF atelier that’s based in Athens.<br />
                    We make our bags with love and joy so you can have a unique product.</p>
            </div>
        </div>
    )
}

export const Materials = () => {
    return (

        <div className='bg-[#F0F0F0] h-full flex flex-col justify-center rounded-tr-[100px] rounded-bl-[100px] -mt-2 -ml-1 py-7 my-7'>
            <div className='container-sk text-center'>
                <h1 className='uppercase font-sans font-semibold text-3xl mb-5 mx-5 mt-5'> Materials </h1>
                <p className='leading-7 text-xl font-hel mx-5 text-left'>The collection of fabrics is based on sustainability and durability ensuring they are of the highest possible quality and produced in an environmentally friendly way.<br />
                    Our top priority is to create the best product possible and at the same time be part of the solution for a sustainable green planet..</p>
                <h1 className='uppercase font-sans font-semibold text-3xl mb-5 mx-5 mt-5  md:py-0 py-5'> The Golden Ratio </h1>
                <p className='leading-7 text-xl font-hel mx-5 text-left  md:py-0 py-5'>Our collection, The Golden Ratio, is made from Italian fabric with leather fibers, skilled by excellent technical performances.
                    Leather fibers are a waste product of leather production. <br />
                    In that way, we use all accessible recourses in order to ensure sustainability. <br />
                    It is an advanced leather collection with refined characteristics.<br />
                    It has flame retardant features, is water repellent, easy to clean, sun proofed and has high resistance properties, guarantee an everlasting quality.
                    Designed and manufactured in Italy.</p>
            </div>
        </div>

    )
}

export const Brands = () => {
    return (
        <div className='  grid md:grid-cols-2 grid-cols-1 items-center gap-y-6 md:gap-y-0'>
            <div className='my-auto'>
                <img src={img2} alt='loading...' className='w-full h-full my-auto' />
            </div>
            <div className='bg-[#F0F0F0] h-full flex flex-col justify-center rounded-tr-[100px] rounded-bl-[100px]  -ml-1  md:p-0 p-5'>
                <h1 className='font-sans font-semibold text-3xl mb-5 mx-5'>Behind the brand </h1>
                <p className='leading-7 text-xl font-arial mx-5  md:p-0 p-5'>ALEF brand was born in July of 2020, during a difficult season of humanity, from Krisana Alefantinou.<br />
                    We felt that through the insecurity and fear that was all around us at the time, we needed to place our focus in regeneration and consequently in creation.<br />
                    Krisana studied Industrial Design and Theatre in Greece.<br />
                    Those two paths and her insurmountable need to create, led her to design women’s bags with minimal design.</p>
            </div>
        </div>
    )
}

export const Donations = () => {
    return (
        <div className='bg-insiderAlif1 bg-cover bg-no-repeat h-[600px] my-7 '>
           
            <div className='container-sk'>
            <h1  className='uppercase font-sans text-3xl font-semibold text-white pt-7 pb-10'>Our Donations</h1>
                <div className='mx-7'>
                    <div className='flex items-center '><img src={img4} alt='laoding' />

                        <h1 className='font-sans text-3xl font-black text-white uppercase my-7'>anima</h1></div>
                    <p className='uppercase text-black text-2xl font-semibold mb-7'>OUR WORLD NEEDS MORE CARING.</p>
                    <p className='font-arial text-xl leading-7'>With that in mind, we choose to donate every year, in different foundation, 2% of our online sales.<br />
                        That way, we can spread the love that you so openly give us.For 2023, we chose to donate to ANIMA organization.<br />
                        ANIMA is a foundation that cares and protects the wild life that resides in urban environments and often get injured. Anima count exclusively on donations and subscribers.<br />
                        Having seen up close their efforts and from our deep appreciation of all people that consist Anima, we would like to contribute in the way we can.<br />
                        Every life is important and we can help to find its path.Meet ANIMA through their official page wild-anima.gr</p>
                </div>
            </div>
        </div>
    )
}