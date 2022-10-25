import project1 from "../../images/pathfinding.png";

import project2_1 from "../../images/AICarImages/gen7.png";
import project2GIF from "../../images/AICarImages/GifMaker_20221025125334816.gif";
import project2_2 from "../../images/AICarImages/gen1.png";
import project2_3 from "../../images/AICarImages/gen5.png";

import project3_1 from "../../images/dataTrackerImages/table.png";
import project3_2 from "../../images/dataTrackerImages/graph.png";
import project3_3 from "../../images/dataTrackerImages/Home.png";
import project3_4 from "../../images/dataTrackerImages/Reloading.png";

import project4_1 from "../../images/imageSearchImages/HomePage.png";
import project4_2 from "../../images/imageSearchImages/AdvancedSearch.png";
import project4_3 from "../../images/imageSearchImages/CityPage.png";
import project4_4 from "../../images/imageSearchImages/CountryPage.png";
import project4_5 from "../../images/imageSearchImages/ImageFilterPage.png";
import project4_6 from "../../images/imageSearchImages/Post_UserList.png";
import project4_7 from "../../images/imageSearchImages/PostPage.png";

import project5 from "../../images/pathfinding1.png";

import project6_1 from "../../images/KMeansImages/graph.png";
import project6_2 from "../../images/KMeansImages/console.png";

import project7 from "../../images/LinearRegression_pics/graph.png";

import project8 from "../../images/HMM.png";

export const portfolioList = [
    {
        name: "Pathfinding App",
        img: project1,
        link: "https://traviscottrell.github.io/Function-Pathfinding-App/",
        tech: ["React", "Javascript", "CSS"],
        githubLink:
            "https://github.com/TravisCottrell/Function-Pathfinding-App",
    },
    {
        name: "AI Cars",
        img: project2_1,
        images: [project2GIF, project2_1, project2_2, project2_3],
        link: "/project",
        tech: ["Python", "Genetic", "Neural Network"],
        githubLink: "https://github.com/TravisCottrell/AI_car",
    },
    {
        name: "Reloading Data",
        img: project3_1,
        images: [project3_1, project3_2, project3_3, project3_4],
        link: "/project",
        tech: ["Django", "Python", "Javascript", "REST", "Bootstrap"],
        githubLink: "https://github.com/TravisCottrell/reloadingdata",
    },
    {
        name: "Image Search Web app",
        img: project4_1,
        images: [
            project4_1,
            project4_2,
            project4_3,
            project4_4,
            project4_5,
            project4_6,
            project4_7,
        ],
        link: "/project",
        tech: ["XAMPP", "PHP", "Javascript", "Bootstrap", "MySQL"],

        githubLink: "https://github.com/TravisCottrell/Image-Search-Website",
    },
    {
        name: "Pathfinding App V1",
        img: project5,
        images: [project5],
        link: "/project",
        tech: ["React", "Javascript", "CSS"],
        githubLink: "https://github.com/TravisCottrell/Class-Pathfinding-App",
    },
    {
        name: "Kmeans Algorithm",
        img: project6_1,
        images: [project6_1, project6_2],
        link: "/project",
        tech: ["Python", "Numpy", "Matplot"],
        githubLink:
            "https://github.com/TravisCottrell/Algorithms/tree/master/Kmeans_Clustering",
    },
    {
        name: "Linear Regression Algorithm",
        img: project7,
        images: [project7],
        link: "/project",
        tech: ["Python", "Matplot"],
        githubLink:
            "https://github.com/TravisCottrell/Algorithms/tree/master/Linear_Regression",
    },
    {
        name: "Hidden Markov Model",
        img: project8,
        images: [project8],
        link: "/project",
        tech: ["Python", "Numpy"],
        githubLink:
            "https://github.com/TravisCottrell/Algorithms/tree/master/Hidden_Markov_Model",
    },
];
