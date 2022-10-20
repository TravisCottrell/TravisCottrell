import React from "react";
import PortfolioProjects from "../../Components/section 1/PortfolioCards/PortfolioProjects";
import "./PortfolioPage.css";
const PortfolioPage = () => {
    return (
        <div className="pp-container">
            <h1>Take a look at some of the projects I have completed</h1>
            <PortfolioProjects />
        </div>
    );
};

export default PortfolioPage;
