import React from "react";
import { Link } from "react-router-dom";
import {
    Logo,
    navItems,
    socialIcons,
} from "../NavbarComponents/NavbarComponents";

import "./FooterNav.css";

import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

const FooterNav = () => {
    return (
        <div className="footer-container">
            <div className="footer-nav-container">
                <div className="footer-navigation">
                    {navItems.map(({ name, id }) => (
                        <Link key={id} to={id} className="footer-nav-item">
                            {name}
                        </Link>
                    ))}
                </div>
                <div className="footer-socials">
                    <a
                        className="footer-social-icon"
                        href="https://github.com/TravisCottrell"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <FaGithub />
                    </a>
                    <a
                        className="footer-social-icon"
                        href="https://www.linkedin.com/in/travis-cottrell-131636212/"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FooterNav;
