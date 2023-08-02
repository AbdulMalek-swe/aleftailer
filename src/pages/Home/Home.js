import HeroSection from 'componants/HeroSection/HeroSection';
import TopSell from 'pages/Selling/TopSell';
import React, { useEffect } from 'react';
 import Homes from 'componants/Home/Home.js'
import { ProductsCard } from 'componants/Home/VeganProduct';

const Home = () => {
  useEffect(()=>{
    window.scroll(0,0)
  },[])
  return (
    <>
       <HeroSection/>
       <ProductsCard/>
        <TopSell/>
        <Homes/>
        
    </>
  );


};

export default Home;
 