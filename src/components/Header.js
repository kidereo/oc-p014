import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import WealthHealthEmblem from '../assets/wealth-health-emblem.jpg'

/**
 * A header component which also manipulates the add employee form.
 *
 * @returns {*}
 * @constructor
 */
const Header = () => {

    /**
     * Capture window dimensions on load and resize.
     */
    const [size, setSize] = useState({
        width: 0,
        height: 0
    });

    const updateSize = () =>
        setSize({
            width: window.innerWidth,
            height: window.innerHeight
        });

    useEffect(() => (window.onresize = updateSize), []);

    const breakpointMobile = 415;

    return (
        <div className='header'>
            <NavLink to="/" className="header-nav">
                <img src={WealthHealthEmblem} alt='WealthHealth' className='header-emblem'/>
                <h1 className='header-title'>WealthHealth | HRnet</h1>
            </NavLink>
            <NavLink to="/add-employee"
                     className={({isActive}) => isActive ? 'header-button_active' : 'header-button_inactive'}>
                <button className='header-button'>
                    {(size.width > breakpointMobile) ? `Add Employee` : `+`}
                </button>
            </NavLink>
        </div>
    )
};

export default Header;
