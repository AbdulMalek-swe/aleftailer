import React, { useEffect, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
 
import   { Button2 } from 'componants/Common/Button/Button';
import axios from 'apiService/axios';
import { useSelector } from 'react-redux';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { getUser } from 'hooks/ProfileGet';
import { Link, useNavigate } from 'react-router-dom';
import {   Drawer, List, Pagination,   Toolbar } from '@mui/material';
const Shop = () => {
    const [product, setProduct] = useState([])
    const [category,setCategory] = useState('')
    const [color, setColor] = useState('')
    const [price, setPrice] = useState(null)
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(null);
    const [page, setPage] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const user = useSelector(state => state.reducer.user);
    const [d,setD] = useState(null)
    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            //   setScrollPosition(position);
            const scrollHeight = document.documentElement.scrollHeight;
            // Change the navbar color based on the scroll position
            if (position > scrollHeight-1500) {
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
    const handleColorChange = (event) => {
        setColor(event.target.value);
    };
    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };
 
    async function producteFetch() {
        axios.get(`/product/all?email=${user?.email}&price=${price}&category=${category}&page=${page}`)
            .then(res => {
                const { data } = res;
                setTotal(data.page)
                setCount(data.totalCount)
                const result = data.result.filter(item => item.color == color)
                console.log(result);
                if (color) {
                    setProduct(result)
                }
                else {
                    setProduct(res.data.result)
                }
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    useEffect(() => {
        producteFetch()

    }, [color, price, page,category,user?.email])

    const likeUpdate = (id) => {
        if (!user.email) {
            navigate('/login')
        }
        else if (user.email) {
            axios.patch(`/product/like-update/${id}`, { userId: user.id })
                .then(res => {
                    console.log(res);
                    getUser()
                    producteFetch()
                })
                .catch(error => {
                    console.log(error);
                })
        }
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
   console.log(category);
    return (
        <div className='mt-52 mx-5'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-3'>
                <div className='  '>
                    <div className='border-r-2 mt-4 font-sans md:block hidden -z-10'>
                        <Drawer
                            sx={{
                                width: '30%',
                                flexShrink: 0,
                               
                                '& .MuiDrawer-paper': {
                                    width: '30%',
                                    boxSizing: 'border-box',
                                    marginTop: '156px',
                                    marginLeft:"10px",
                                     zIndex:d,
                                   
                                },
                            }}
                            variant="permanent"
                            anchor="left"
                            
                        >
                            <Toolbar />
                            <List  >
                                
                            </List>
                            <CategoryField product={product} setCategory={setCategory}/>
                        </Drawer>
                    </div>
                    <div className='border-r-2 mt-4 font-sans md:hidden block'>
                      <CategoryField product={product} setCategory={setCategory}/>
                    </div>
                </div>
                <div className='col-span-2'>
                    <div className='grid lg:grid-cols-3 grid-cols-2  gap-4'  >
                        <div className='flex items-center gap-x-4 '>
                            <h2 className='font-sans font-normal text-base text-black7'>Color</h2>
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
                        <div className='flex items-center gap-x-4 '>
                            <h2 className='font-sans font-normal text-base text-black7'>Price Range</h2>
                            <FormControl className='w-40' >
                                <NativeSelect
                                    value={price}
                                    onChange={handlePriceChange}
                                    defaultValue=''
                                    inputProps={{
                                        name: 'age',
                                        id: 'uncontrolled-native',
                                    }}

                                >
                                    <option value=''  className='font-sans font-normal text-xs pl-5 pt-5'>All</option>
                                    <option value={300}  className='font-sans font-normal text-xs pl-5 pt-5'>Up to 300€</option>
                                    <option value={500}  className='font-sans font-normal text-xs pl-5 pt-5'>From 300€ - 500€</option>
                                    <option value={501}  className='font-sans font-normal text-xs pl-5 pt-5'>Over 500€</option>
                                </NativeSelect>
                            </FormControl>
                         
                        </div>  <div className='flex items-center gap-x-4 '>
                            <h2 className='font-sans font-normal text-base text-black7'>Showing {currentPage * 10 - 9}–{currentPage * 10} of {count}</h2>

                        </div>
                    </div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'  >
                        {product.map(item => <div className='  relative text-black dark:text-white bg-white drop-shadow-md mx-2' >
                            <div className='relative'>
                                <img src={item.productImage} alt="loading" className='w-full h-96 ' />
                                <button className='absolute bottom-0 right-0' onClick={() => likeUpdate(item._id)} >
                                    { user.wishlist.some(items=>items._id===item._id) ? <FavoriteSharpIcon className='  bg-white text-red-500' /> : <FavoriteSharpIcon className=' bg-gray-500 text-white' />}
                                </button>
                            </div>
                            <p className='absolute top-0 left-0 bg-orange2 w-40 h-48 px-2' style={{ clipPath: 'polygon(29% 0, 38% 6%, 29% 12%, 0 12%, 0 0)' }}>Sale!</p>
                            <h1 className='text-center text-black mt-8 text-base font-arial'>  {item.name}</h1>
                            <p className='text-center text-[15px] my-5 text-black'>€ {item.price}</p>

                            <div className='flex justify-around pb-5 px-2'>
                                {/* <Button></Button> */}
                                <Link to={`/product/${item?._id}`} className='text-black'>
                                    details
                                </Link>
                                <Button2></Button2>
                            </div>
                        </div>)}

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
            </div>

        </div>
    );
};

export default Shop;

export const CategoryField = ({product,setCategory}) => {
    return (
        <>
            <h1 className='font-sans font-semibold text-xl '>CATEGORIES</h1>
            <p className='mt-4 mb-6 mr-4 border-b-4 border-dotted flex justify-between'>
                <button   className='text-black  font-normal' onClick={()=>setCategory('')}>All</button>
                <span className='text-gray-400 font-medium'>({product.length})</span>
            </p>
            <p className='mt-4 mb-6 mr-4 border-b-4 border-dotted flex justify-between'>
                <button   className='text-black  font-normal' onClick={()=>setCategory('shoulder')}>Shoulder bag</button>
                <span className='text-gray-400 font-medium'>({product.filter(item=>item.category==='shoulder').length})</span>
            </p>
            <p className='mt-4 mb-6 mr-4 border-b-4 border-dotted flex justify-between'>
                <span className='text-black font-normal'>Clutches</span>
                <span className='text-gray-400 font-medium'>(10)</span>
            </p>
            <p className='mt-4 mb-6 mr-4 border-b-4 border-dotted flex justify-between'>
                <span className='text-black font-normal'>Handbags</span>
                <span className='text-gray-400 font-medium'>(10)</span>
            </p>
            <p className='mt-4 mb-6 mr-4 border-b-4 border-dotted flex justify-between'>
                <span className='text-black font-normal'>Pouch Bags</span>
                <span className='text-gray-400 font-medium'>(10)</span>
            </p>
            <p className='mt-4 mb-6 mr-4 border-b-4 border-dotted flex justify-between'>
                <span className='text-black font-normal'>Buckets</span>
                <span className='text-gray-400 font-medium'>(10)</span>
            </p>
            <p className='mt-4 mb-6 mr-4 border-b-4 border-dotted flex justify-between'>
                <span className='text-black font-normal'>Pouches</span>
                <span className='text-gray-400 font-medium'>(10)</span>
            </p>
            <p className='mt-4 mb-6 mr-4 border-b-4 border-dotted flex justify-between'>
             
                <span className='text-black font-normal'>Vegan Product</span>
                <span className='text-gray-400 font-medium'>(10)</span>
            </p>
        </>
    )
}

