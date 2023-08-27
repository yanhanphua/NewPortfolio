import React from "react";
import Separator from "../../common/separator";
import { ProjectData } from "../../data/projects";
import ProjectCard from "./project-card";
import "./projects.css";
function Projects() {
  const data = ProjectData;
  const testing = [
    "./image/SteamGamesEDA.png",
    "./image/NutritionAppImage.png",
    "./image/NutritionAppImage.png",
  ];
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Projects</label>
      <div>
        {data.map((project, i) => {
          return <ProjectCard project={project} images={testing[i]} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
