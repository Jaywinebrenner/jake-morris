import React from 'react';
import { NavLink, useLocation } from 'react-router-dom'; 

function Navigation() {
    const location = useLocation(); 
    const isHomePage = location.pathname === '/';

    return (
        <section className={`navigation ${isHomePage ? 'home-page' : ''}`}>
            <div className='container'>

                <NavLink exact to="/" className="img-link-wrapper" activeClassName="active">
                    HOME
                </NavLink>
                <NavLink to="/about" className="img-link-wrapper" activeClassName="active">
                    ABOUT
                </NavLink>
                <NavLink to="/work" className="img-link-wrapper" activeClassName="active">
                    WORK
                </NavLink>
                <NavLink to="/services" className="img-link-wrapper" activeClassName="active">
                    I WILL DRUM 4 U
                </NavLink>
                {/* <NavLink to="/contact" className="img-link-wrapper" activeClassName="active">
                    CONTACT
                </NavLink> */}
            </div>
        </section>
    );
}

export default Navigation;
