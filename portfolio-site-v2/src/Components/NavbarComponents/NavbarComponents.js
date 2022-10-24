import "./NavbarComponents.css";
import { Link } from "react-router-dom";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

export const socialIcons = [<FaYoutube />, <FaGithub />, <FaLinkedin />];

export const Logo = (
    <Link to="/" className="logo">
        Travis Cottrell
    </Link>
);

export const navItems = [
    {
        name: "Home",
        id: "/",
    },
    {
        name: "About",
        id: "about",
    },
    {
        name: "Portfolio",
        id: "portfolio",
    },
];
