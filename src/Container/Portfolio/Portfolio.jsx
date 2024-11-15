import React from "react";
import "./Portfolio.css";
import projectImage from "../../assets/Media/project.jpg"; 
import { IoDocumentTextOutline } from "react-icons/io5";

const Portfolio = () => {
  const allProjects = [
    {
      Image: projectImage,
      Title: "Project 1",
      Detailed: <IoDocumentTextOutline />,
    },
    {
      Image: projectImage,
      Title: "Project 2",
      Detailed: <IoDocumentTextOutline />,
    },
    {
      Image: projectImage,
      Title: "Project 2",
      Detailed: <IoDocumentTextOutline />,
    },
    {
      Image: projectImage,
      Title: "Project 2",
      Detailed: <IoDocumentTextOutline />,
    },
    {
      Image: projectImage,
      Title: "Project 2",
      Detailed: <IoDocumentTextOutline />,
    },
    {
      Image: projectImage,
      Title: "Project 2",
      Detailed: <IoDocumentTextOutline />,
    },
  ];

  return (
    <>
      <div className="Portfolio-Main">
        
        <h1 className="Portfolio-Main-h1">Portfolio</h1>
        <div className="all-projects">
          {allProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img
                  src={project.Image}
                  alt={project.Title}
                  className="project-image"
                />
                <span className="PM-Img-Detailed">{project.Detailed}</span>
              </div>
              <h2 className="Pm-project-title" >{project.Title}</h2>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default Portfolio;
