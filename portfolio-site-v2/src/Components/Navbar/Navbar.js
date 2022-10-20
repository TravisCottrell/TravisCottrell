import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

import {
    Logo,
    navItems,
    socialIcons,
} from "../NavbarComponents/NavbarComponents";

import "./Navbar.css";

const Navbar = () => {
    const [navMenu, setNavMenu] = useState(false);

    const hamburger = (
        <a
            href="#"
            className="hamburger-container"
            onClick={() => setNavMenu(!navMenu)}
        >
            <div className={navMenu ? "close-hamburger" : "hamburger"}>
                <span className="ham-span"></span>
                <span className="ham-span"></span>
                <span className="ham-span"></span>
            </div>
        </a>
    );

    const dropdown = (
        <div className="show-nav-items">
            <div className="dropdown-close hamburger-container">
                {hamburger}
            </div>

            {navItems.map(({ name, id }) => (
                <Link
                    key={id}
                    to={id}
                    className="nav-item"
                    onClick={() => setNavMenu(false)}
                >
                    {name}
                </Link>
            ))}
        </div>
    );

    return (
        <div className="navbar">
            <div className="nav-icon-container">
                <FaYoutube className="nav-icon" />
                <FaGithub className="nav-icon" />
                <FaLinkedin className="nav-icon" />
                {socialIcons.map((icon) => {
                    <a className="nav-icon" href="#">
                        {icon}
                    </a>;
                })}
            </div>
            <div className="logo-container">{Logo}</div>
            {hamburger}
            {navMenu && dropdown}
        </div>
    );
};

export default Navbar;
