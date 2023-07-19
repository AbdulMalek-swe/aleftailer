import HeroSection from 'componants/HeroSection/HeroSection';
import TopSell from 'pages/Selling/TopSell';
import React from 'react';
 import Homes from 'componants/Home/Home.js'
import Footer from 'routes/Layout/Footer';

const Home = () => {

  return (
    <>
       <HeroSection/>
        <TopSell/>
        <Homes/>
        <Footer/>
    </>
  );


};

export default Home;
 