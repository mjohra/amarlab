import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;