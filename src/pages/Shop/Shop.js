import React, { useEffect, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import axios from 'apiService/axios';
import { useSelector } from 'react-redux';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { Link  } from 'react-router-dom';
import {   Drawer,  Pagination,   Slider,   Toolbar  } from '@mui/material';
import { likeUpdates } from 'hooks/likeUpdate';
import cartHook from 'hooks/cartHook';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
 
import { FaCartPlus } from 'react-icons/fa';
 import {BiSolidShoppingBags} from 'react-icons/bi';
 import FilterListIcon from '@mui/icons-material/FilterList';
import { useTranslation } from 'react-i18next';
const drawerWidth = 240;
function Shop(props) {
  const {t} = useTranslation()
  const { window } = props;
  
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container = window !== undefined ? () => window().document.body : undefined;
  const sortingFunction = (a,b)=>b.price-a.price
    const [product, setProduct] = useState([])
    const [category,setCategory] = useState('')
    const [color, setColor] = useState('')
    const [price, setPrice] = useState({price1:'',price2:''})
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(null);
    const [page, setPage] = useState(localStorage.getItem('pageNumber')? parseInt(localStorage.getItem('pageNumber')):0)
    const [currentPage, setCurrentPage] = useState(localStorage.getItem('pageNumber')? JSON.parse(localStorage.getItem('pageNumber')):1);
    const user = useSelector(state => state.reducer.user);
    const { addToCartHandle  } = cartHook()
    const handleColorChange = (event) => {
        setColor(event.target.value);
    };
    async function producteFetch() {
        axios.get(`/product/all?price1=${price.price1}&price2=${price.price2}&color=${color}&category=${category}&page=${page}`)
            .then(res => {
                const { data } = res;
                setTotal(data.page)
                setCount(data.totalCount)
                    setProduct(res.data.result)
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    useEffect(() => {
        producteFetch()

    }, [color, price, page,category,user?.email])

    const likeUpdate = (id) => {
        console.log(id);
        likeUpdates(id,user)
         
    }
    useEffect(() => {
        axios.post('/banner', { bannerFirstHeader: 'abdudl', bannerSecondHeader: 'thiisd ', discount: 1 })
            .then(res => {
                console.log(res);
            })
    }, [])
    const handlePageChange = (event, page) => {
        setPage(page - 1)
        setCurrentPage(page);
    };
     useEffect(()=>{
       localStorage.setItem('pagenumber', page.toString())
     },[page ])
   

  return (
    <Box sx={{ display: 'flex'  }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow:'0px 0px 0px 0px rgb(0,0,0,0)',
          mt:{sm:'132px',lg:'155px',xs:"124px"},
           background:"white",zIndex:1 
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' },background:'red' }}
          >
            {/* <MenuIcon  sx={{ color:'black' }} /> */}
         
            <div>
            <FilterListIcon sx={{ color:'black' }}/>  
            <span className='text-black mx-2'>filter</span>
            </div>
          </IconButton>
          <div className='flex justify-between   w-full'>
                           <div className='flex justify-center items-center gap-x-4'>
               <h2 className='font-sans font-normal text-base text-black7'>  {t("shop.color")}</h2>
                         <FormControl className='w-40'
                            >
                                <NativeSelect
                                    value={color}
                                    onChange={handleColorChange}
                                    defaultValue=''
                                    inputProps={{
                                        name: 'age',
                                        id: 'uncontrolled-native',
                                    }}
                                >
                                  
                                    <option value='' className='font-sans font-normal text-xs pl-5 pt-5'>All</option>
                                    <option value='black'  className='font-sans font-normal text-xs pl-5 pt-5' >Black</option>
                                    <option value='white'   className='font-sans font-normal text-xs pl-5 pt-5' >White</option>
                                    <option value='blue'  className='font-sans font-normal text-xs pl-5 pt-5'>Blue</option>
                                    <option value='red'  className='font-sans font-normal text-xs pl-5 pt-5'>Red</option>
                                    <option value='green'  className='font-sans font-normal text-xs pl-5 pt-5'>Green</option>
                                    <option value='yellow'  className='font-sans font-normal text-xs pl-5 pt-5'>Yellow</option>
                                   
                                </NativeSelect>
                            </FormControl>
                           </div>
                            <div className='flex items-center gap-x-4'>
                            <h2 className='font-sans font-normal text-base text-black7'>  {t("shop.show1")} {currentPage * 10 - 9}–{currentPage * 10}   {t("shop.show2")} {count}</h2>

                        </div>
                        </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } ,  }}
        aria-label="mailbox folders"
        
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth ,mt:{sm:'124px',lg:'155px',xs:"124px"},zIndex:-1 }, 
          }}
        >
            <PriceRange product={product} setPrice={setPrice} t={t}/> 
          <CategoryField product={product} setCategory={setCategory} count={count}/>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,mt:{sm:'124px',lg:'155px'},  },
           
          }}
          open
        >
           <PriceRange product={product} setPrice={setPrice} t={t}/> 
          <CategoryField product={product} setCategory={setCategory} count={count}/>
         
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
          
        <div className='mt-36'>
                    <div className='grid lg:grid-cols-3 grid-cols-2  gap-4'  >
                    </div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-4 mt-5'  >
                        {product.sort(sortingFunction).map(item =>  <div className='  relative text-black dark:text-white bg-white   mx-2 alif-cart' key={item._id}>
                            <div className='relative'  >
                                <img src={item?.productImage[0]} alt="loading" className='w-full h-72 z-10' />
                               <Link to= {user.email?'/shop':'/login'}>
                               <button className='absolute bottom-0 right-0 bg-[#00000033]  w-8 h-8' onClick={() => likeUpdate(item._id)} >
                                    { user.wishlist.some(items=>items._id===item._id) ? <FavoriteSharpIcon className='  text-red-500' /> : <FavoriteSharpIcon className='  text-white'  text-4xl/>}
                                </button>
                               </Link>
                            </div>
                            <p className='absolute top-0 left-0 bg-orange2 w-40 h-48 px-2' style={{ clipPath: 'polygon(29% 0, 38% 6%, 29% 12%, 0 12%, 0 0)' }}>Sale!</p>
                          <div className='mx-2'>
                          <Link to={`/product/${item?._id}`} className='mt-5 text-black hover:underline hover:text-red-600 '>
                <h1 className='mt-5'>  {item.name} {item.offerCategory}</h1>
                            </Link>
                            <p className=' text-[15px] mb-1 text-red-600'>€ {item.offerPrice}</p>
                            <p className=' text-[15px] mb-1 text-black  '> <span className='line-through text-gray-400  '>€ {item.price} </span>
                            <span className='ml-12'> -10%</span>
                            </p>
                          </div>
                            
                            <div className=' mx-2 mb-5 font-arial  text-base font-bold  '>
                           <Link to={`/order/${item._id}`}>
                           <button className='bg-black text-white px-3 py-2 rounded hover:underline text-center w-full flex items-center justify-center gap-x-2'    ><BiSolidShoppingBags/> <span>BUY NOW</span></button>
                           </Link>

                            <button className='bg-black text-white px-3 py-2 rounded hover:underline text-center w-full flex items-center justify-center gap-x-2 my-2'    onClick={()=>addToCartHandle(item)}><FaCartPlus/> <span>ADD TO CART</span></button>
                            </div>
                           
                        </div>  )}

                    </div>
                    <div className='flex justify-center my-4'>
                        <div className="text-center py-4">
                            <Pagination
                                variant="outlined"
                                count={total}
                                color="primary"
                                page={currentPage} 
                                onChange={handlePageChange}
                            />
                        </div>
                    </div>
                </div>
      </Box>
    </Box>
  );
}

Shop.propTypes = {
  window: PropTypes.func,
};

export default Shop;


export const CategoryField = ({product,setCategory,count}) => {
    return (
        <>
      
            <div className='alif-cart-btn mx-3 mt-4'>
            <h1 className='ml-3 font-sans font-semibold text-xl mt-5'>CATEGORIES</h1>
            <p className='mt-2 mb-1 mr-4 ml-3 border-b-4 border-dotted flex justify-between capitalize'>
                <button   className='text-black  font-normal capitalize' onClick={()=>setCategory('')}>All </button>
                <span className='text-gray-400 font-medium'> ({count}) </span>
            </p>
             {
                ['shoulder','clutches','handbags','pouch','buckets','pouches','vegan'].map(items=> <p className='mt-2 mb-1 mr-4 ml-3 border-b-4 border-dotted flex justify-between capitalize'>
                <button   className='text-black  font-normal capitalize' onClick={()=>setCategory( items)}>{ items}</button>
                <span className='text-gray-400 font-medium'> ({ product.filter(item=>item.category===items).length})</span>
            </p> 
            )
             }
            
            </div>
        </>
    )
}
export const PriceRange = ({product,setPrice,t})=>{
function valuetext(value) {
  return `${value}°C`;
}
const minDistance = 10;
const highestPrice = Math.max(...product.map(product => product.price));
  const [value1, setValue1] = React.useState([0, 10]);
  const handleChange1 = (event, newValue, activeThumb) => {
    setPrice({price1:newValue[0],price2:newValue[1]})
    console.log(newValue);
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };
  
  return (
  <div className='alif-cart-btn mx-4 px-4 py-3 font-arail'>
    <h1 className='text-2xl text-semibold py-2 px-4'>   {t("shop.pricerange")}</h1>
     <Slider
       getAriaLabel={() => 'Minimum distance shift'}
       value={value1}
       onChange={handleChange1}
       valueLabelDisplay="auto"
       getAriaValueText={valuetext}
       disableSwap
       max={1000}
     />
     <div className='flex justify-between text-black '>
        <div className='border-2 px-4 py-2'>{value1[0]}</div>
        <div className='border-2 px-4 py-2'>{value1[1]}  </div>
     </div>
  </div>
  );
}
 