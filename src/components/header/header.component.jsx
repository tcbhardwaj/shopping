import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../assets/shopping-logo.png';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link to='/' className='logo-container' >
            <img src={logo} className='logo'/>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/shop' className='option'>CONTACT</Link>
        </div>
    </div>
);

export default Header;
