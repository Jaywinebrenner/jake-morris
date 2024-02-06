import React from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // Import NavLink and useLocation

function Navigation() {
    const location = useLocation(); // Get the current location

    return (
        <section className="navigation container">
            <NavLink exact to="/" className="img-link-wrapper" activeclassname="active">
                HOME
            </NavLink>
            <NavLink to="/about" className="img-link-wrapper" activeclassname="active">
                ABOUT
            </NavLink>
            <NavLink to="/work" className="img-link-wrapper" activeclassname="active">
                WORK
            </NavLink>
            <NavLink to="/contact" className="img-link-wrapper" activeclassname="active">
                CONTACT
            </NavLink>
        </section>
    );
}

export default Navigation;
