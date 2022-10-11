import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import logo from "./images/logoWeb.png";

const bar = (
    <header className='navbar'>
        <nav>
            <ul>
                <li className="item0">
                    <img src={logo} alt="image failed" width="80" height="60"/>
                </li>
                <li className="item1">
                    <Link to="/">Home</Link>
                </li>
                <li className="item1">
                    <Link to="/appointments">Appointments</Link>
                </li>
                <li className="item1">
                    <Link to="/contactus">Contacts Us</Link>
                </li>
                <li className="item1">
                    <Link to="/about">About</Link>
                </li>
                <li className="item1">
                    <Link to="/signin">Sign In</Link>
                </li>
                <li className="item1">
                    <Link to="/overview">Overview</Link>
                </li>
                <li className="item1">
                    <Link to="/photos">Photos</Link>
                </li>
            </ul>
        </nav>
    </header>
);

function NavigationBar() {
    return bar
}

export default NavigationBar;
