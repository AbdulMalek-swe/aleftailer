import React from 'react';
import Carousel from 'react-multi-carousel';
import img from 'assets/image/shoes-bags-close-up.jpg'
const Slider = () => {
    return (
      <div className=' '>
          <Carousel
         additionalTransfrom={0}
         arrows
         autoPlaySpeed={3000}
         centerMode={false}
         className=" w-full"
         containerClass="containe"
         dotListClass=""
         draggable
         focusOnSelect={false}
         infinite
         itemClass=""
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
          
         sliderClass=""
         slidesToSlide={1}
         swipeable
      >
        
        <div  >
          <img
            src={img}
            alt='loading'
            style={{
                display: 'block',
                height: '100%',
                margin: 'auto',
                width: '100%'
              }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
           <div>
           <p className="text-white text-2xl font-bold">Centered Text</p>
            <p className="text-white text-2xl font-bold">Centered Text</p>
           </div>
          </div>
        </div>    
      </Carousel>
      </div>
    );
};

export default Slider;