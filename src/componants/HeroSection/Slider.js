import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import { Button1 } from 'componants/Common/Button/Button';
import axios from 'apiService/axios';
import { Link } from 'react-router-dom';
const Slider = () => {
  const [banner,setBanner] = useState([])
  useEffect(()=>{
    axios.get("/banner")
    .then(res=>{
      console.log(res);
      setBanner(res.data.result)
    })
  },[])
  return (
    <div className=' container-sk mt-[156px]'>
     <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=" w-full"
          containerclassName="containe"
          dotListclassName=""
          draggable
          focusOnSelect={false}
          infinite
          itemclassName=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 1
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 1
            }
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          sliderclassName=""
          slidesToSlide={1}
          swipeable
        
        >
    {
        banner.map(item=>
          <div className='mx-3' >
            <img
              src={item?.bannerImage}
              alt='loading'
              style={{
                display: 'block',
                margin: 'auto',
                width: '100%'
              }}
              className='h-96'
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className='text-center'>
                <p className="text-white font-italianno text-xl font-normal capitalize">{item.bannerFirstHeader} </p>
                <h1 className="text-white  font-black font-arial text-7xl capitalize"> {item.bannerSecondHeader}</h1>
                <p className='text-orange text-xl italic font-bold font-arial'> Sale Up to {item.discount}% off</p>
                <div>
                  <Link to="/shop">
                  <Button1 />
                  </Link>
                   
                </div>
              </div>
            </div>
          </div>)}
        </Carousel>
      
     
    </div>
  );
};

export default Slider;