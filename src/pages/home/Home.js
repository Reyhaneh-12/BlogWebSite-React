import React from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';

import './home.css';

const Home = () => {
    return (
        <div className="homeContainer">
            <Navbar />
            <Header />
        </div>
    );
};

export default Home;