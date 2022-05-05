import React from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';

import './home.css';

const Home = () => {
    return (
        <div className="homeContainer">
            <Navbar />
            <Header />
            <div className="pageContainer">
                <Posts />
                <Sidebar />
            </div>
        </div>
    );
};

export default Home;