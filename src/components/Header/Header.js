import React from 'react';
import './Header.css'
import logo from '../../images/images.jpg'

const Header = () => {
    return (
        <div>
            <div className='header'>
        <img src={logo} alt="" />
        <h2 className='header-text'>HEALTH-ACTIVE-CLUB</h2>
        
        </div>
            <h3 className='daily-active'>Daily Activities For People</h3>
        </div>
        
        
    );
};

export default Header;