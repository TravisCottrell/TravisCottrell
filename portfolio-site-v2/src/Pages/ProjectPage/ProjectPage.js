import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { portfolioList } from "../../Components/Project Section/PortfolioList";
import "./ProjectPage.css";

const ProjectPage = () => {
    const { id } = useParams();
    const [project] = useState(portfolioList[id]);

    return (
        <div className="project-container">
            {project.images.map((image) => (
                <img className="project-img" src={image} alt={project.name} />
            ))}
        </div>
    );
};

export default ProjectPage;
