import React from 'react'
import {Link} from 'react-router-dom'

const bar = (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/appointments">Appointments</Link>
        </li>
        <li>
            <Link to="/contacts">Contacts</Link>
        </li>
    </ul>
);

function NavigationBar() {
    return bar
}

export default NavigationBar;
