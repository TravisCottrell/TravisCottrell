import React from "react";
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
                        <a className="footer-nav-item" href={id}>
                            {name}
                        </a>
                    ))}
                </div>
                <div className="footer-socials">
                    <a className="footer-social-icon" href="#">
                        <FaYoutube />
                    </a>
                    <a className="footer-social-icon" href="#">
                        <FaGithub />
                    </a>
                    <a className="footer-social-icon" href="#">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
            <div className="footer-logo-container">{Logo}</div>
            <h6>Copyright</h6>
        </div>
    );
};

export default FooterNav;
