import React from "react";
import { Link } from "react-router-dom";
import PortfolioProjects from "./PortfolioCards/PortfolioProjects";
import "./Portfolio.css";

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="portfolio-container">
                <h2>Some of my Projects</h2>
                <div className="projects-section">
                    <PortfolioProjects items={4} />
                </div>
                <Link to="portfolio" className="portfolio-button">
                    See More Projects
                </Link>
            </div>
        </div>
    );
};

export default Portfolio;
