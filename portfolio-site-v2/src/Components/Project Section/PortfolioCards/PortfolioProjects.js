import React from "react";
import { FaGithub } from "react-icons/fa";
import { portfolioList } from "../PortfolioList";
import "./PortfolioProjects.css";

const PortfolioProjects = ({ items }) => {
    const limit = items ? items : portfolioList.length;
    return (
        <div>
            <div className="projects-container">
                {portfolioList
                    .slice(0, limit)
                    .map(({ name, img, link, tech, githubLink }) => (
                        <div className="project-card">
                            <a
                                className="project-img-container"
                                href={link}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <img className="project-img" src={img} alt="" />
                            </a>
                            <div className="product-card-title">
                                <h3>{name}</h3>
                                <div className="product-card-item-container">
                                    {tech.map((item) => (
                                        <p className="product-card-item">
                                            -{item}
                                        </p>
                                    ))}
                                    <a
                                        className="title-icon"
                                        href={githubLink}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <FaGithub />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default PortfolioProjects;
