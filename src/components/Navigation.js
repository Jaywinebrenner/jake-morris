import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const linkClass = ({ isActive }) =>
    `img-link-wrapper${isActive ? " active" : ""}`;

  return (
    <section className={`navigation ${isHomePage ? "home-page" : ""}`}>
      <div className="container">
        <NavLink to="/" end className={linkClass}>
          HOME
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          ABOUT
        </NavLink>
        <NavLink to="/work" className={linkClass}>
          WORK
        </NavLink>
        <NavLink to="/services" className={linkClass}>
          I WILL DRUM 4 U
        </NavLink>
        <NavLink to="/upcoming-shows" className={linkClass}>
          UPCOMING SHOWS
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          CONTACT
        </NavLink>
      </div>
    </section>
  );
}