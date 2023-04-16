import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div  className='py-5 px-2 bg-green-100 mb-5'>
            <ul className='flex space-x-3 justify-center'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Log-In</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </div>
    );
};

export default Header;