import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Header.css';

/**
const containerStyle = {
    fontSize: '14px'
}
*/

const Header = () => {
    return(
        <div className="Header">
        <Link to="/">
            <img style={{width:'50px'}} src={logo} alt="logo" className="Header-Logo" />
        </Link>
            
        </div>
    );
}

export default Header;