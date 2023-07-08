import React from 'react';
import Carousel from 'react-multi-carousel';
import img1 from 'assets/image/BAG 4.png'
import Button, { Button1, Button2 } from 'componants/Common/Button/Button';
const TopSell = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2500 },
      items: 5, partialVisibilityGutter: 30
    },
    desktop: {
      breakpoint: { max: 2500, min: 1200 },
      items: 4, partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: { max: 1200, min: 600 },
      items: 2, partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,

      partialVisibilityGutter: 30
    }

  };
  return (
    <div className='container-sk mt-12'>
      <h1 className='text-center mb-10 font-arial text-4xl'>TOP SELLING</h1>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
         
        containerclassName="container-with-dots"
        dotListclassName=""
        draggable
        focusOnSelect={false}
        infinite
        itemclassName="pb-10"
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderclassName=""
        slidesToSlide={1}
        swipeable
        responsive={responsive} 
        className="pb-7"
        >
        {
          [img1, img1, img1, img1].map(item => <div className=''  >
            <div className=' text-black dark:text-white bg-white drop-shadow-md mx-2' >
              <img src={`${item}`} alt="loading" className='w-full h-96 ' />
              <h1 className='text-center text-black mt-8 text-base font-arial'>Curve  Crossbody  Bag In White</h1>
              <p className='text-center text-[15px] my-5 text-black'>€ 229.00</p>
              <div className='flex justify-around pb-5 px-2'>
                <Button></Button>
                <Button2></Button2>
              </div>
            </div>
          </div>)
        }
      </Carousel>
    </div>
  );
};

export default TopSell;