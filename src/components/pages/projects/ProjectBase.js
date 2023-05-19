import { React } from 'react';
import { useNavigate } from "react-router-dom";
import "./css/ProjectBase.css";

function ProjectBase({title, subtitle, content}) {

  const ProjectTitle = () => {
    return (
      <div className="project_base_title_container">
        <div className="project_base_title">
            {title}
        </div>
        <div className="project_base_subtitle">
            {subtitle}
        </div>
      </div> 
    );
  }
  
  function ProjectContent() {
    return (
        <div className="project_base_content">
            {content}
        </div>
    );
  }

  return (
    <div>
        <ProjectTitle />
        <ProjectContent /> 
    </div>
  );
}

export default ProjectBase;