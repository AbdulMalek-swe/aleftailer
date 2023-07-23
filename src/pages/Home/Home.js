import HeroSection from 'componants/HeroSection/HeroSection';
import TopSell from 'pages/Selling/TopSell';
import React from 'react';
 import Homes from 'componants/Home/Home.js'
import Footer from 'routes/Layout/Footer';
import { ProductsCard } from 'componants/Home/VeganProduct';

const Home = () => {

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
 