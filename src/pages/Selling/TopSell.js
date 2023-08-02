import React from 'react';
import Carousel from 'react-multi-carousel';
import axios from 'apiService/axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { useNavigate } from 'react-router-dom';
import { likeUpdates } from 'hooks/likeUpdate';
import cartHook from 'hooks/cartHook';
import { FaCartPlus } from 'react-icons/fa';
import { BiSolidShoppingBags } from 'react-icons/bi';

const TopSell = () => {

  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  const [product, setProduct] = useState([])

  const user = useSelector(state => state.reducer.user);
  const [d, setD] = useState(null)
  const { addToCartHandle } = cartHook()
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      //   setScrollPosition(position);
      const scrollHeight = document.documentElement.scrollHeight;
      // Change the navbar color based on the scroll position
      if (position > scrollHeight - 1500) {
        setD('-1')
      } else {
        setD('2')
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const sortingFunction = (a, b) => b.prodcutSell - a.productSell

  async function producteFetch() {
    axios.get(`/product/all`)
      .then(res => {
        console.log(res.data.result);
        const result = res.data.result.slice(0, 15)
        console.log(result);
        setProduct(result)
      })
      .catch(error => {
        console.log(error.message);
      })
  }
  useEffect(() => {
    producteFetch()
  }, [])
  const likeUpdate = (id) => {
    console.log(id);
    likeUpdates(id, user)
  }


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2001 },
      items: 5, partialVisibilityGutter: 30
    },
    wideDesktop: {
      breakpoint: { max: 2000, min: 1401 },
      items: 4,
      partialVisibilityGutter: 30,
    },
    desktop: {
      breakpoint: { max: 1400, min: 901 },
      items: 3, partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: { max: 900, min: 577 },
      items: 2, partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
      partialVisibilityGutter: 30
    }

  };

  return (
    <div className='container-sk mt-12'>
      <h1 className='text-center mb-10 font-arial text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>TOP SELLING</h1>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={2000}
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
        autoPlay
      >

        {product.sort(sortingFunction).map(item =>
          <div className='  relative text-black dark:text-white bg-white   mx-2 alif-cart' key={item._id}>
            <div className='relative'  >
              <img src={item?.productImage[0]} alt="loading" className='object-cover w-full lg:h-52 md:h-40 h-32' />
              <Link to={user.email ? '/' : '/login'}>
                <button className='absolute bottom-0 right-0 bg-[#00000033]  w-8 h-8' onClick={() => likeUpdate(item._id)} >
                  {user.wishlist.some(items => items._id === item._id) ? <FavoriteSharpIcon className='  text-red-500' /> : <FavoriteSharpIcon className='  text-white' text-4xl />}
                </button>
              </Link>
            </div>
            <p className='absolute top-0 left-0 bg-orange2 w-40 h-48 px-2' style={{ clipPath: 'polygon(29% 0, 38% 6%, 29% 12%, 0 12%, 0 0)' }}> -{item.offerRate}%</p>
            <div className='mx-2 px-5'>
              <Link to={`/product/${item?._id}`} className='mt-5 text-black hover:underline hover:text-red-600 '>
                <h1 className='mt-5'>  {item.name} {item.offerCategory}</h1>
              </Link>
              <p className=' text-[15px] mb-1 text-red-600'>€ {item.offerPrice}</p>
              <p className=' text-[15px] mb-1 text-black  '> <span className='line-through text-gray-400  '>€ {item.price} </span>
                <span className='ml-12'> -10%</span>
              </p>
            </div>

            <div className=' mx-2 mb-5 font-arial  text-base font-bold px-5 pb-3'>
              <Link to={`/order/${item._id}`}>
                <button className='bg-black text-white px-3 py-2 rounded hover:underline text-center w-full flex items-center justify-center gap-x-2'    ><BiSolidShoppingBags /> <span>BUY NOW</span></button>
              </Link>

              <button className='bg-black text-white px-3 py-2 rounded hover:underline text-center w-full flex items-center justify-center gap-x-2 my-2' onClick={() => addToCartHandle(item)}><FaCartPlus /> <span>ADD TO CART</span></button>
            </div>

          </div>
        )}

      </Carousel>
    </div>
  );
};

export default TopSell;