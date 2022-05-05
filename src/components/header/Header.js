import React from 'react';
import bgHeader from '../../asserts/imgages/bgHeader.jpg';

import './header.css';
const Header = () => {
    return (
        <div className="headerComponent">
            <img src={bgHeader} className="headerImg" alt="image" />
            <div className="headerText">
                <span className="myText">--------- MY ---------</span>
                <span className="blogText">Blog</span>
            </div>
        </div>
    );
};

export default Header;