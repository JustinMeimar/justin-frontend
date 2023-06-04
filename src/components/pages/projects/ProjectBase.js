import { React, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./css/ProjectBase.css";
import InfoModal from "../../InfoModal.js";
import InfoImage from "../../../static/info.png";

function ProjectBase({title, subtitle, content, modal_info}) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const InfoButton = () => {
    return (
        <div onClick={handleOpenModal} className="infoButton">
          <div className="project_base_info_image">
            <img src={InfoImage} alt="Menu" style={{width: "35px", height: "35px", color: "white"}}/>
          </div> 
        </div>
    );
  }

  const ProjectTitle = () => {
    return (
      <div className="project_base_title_container">
        <div className="project_base_title">
            {title}
        </div>
        <div className="project_base_subtitle">
            {subtitle}
        </div>
        <InfoButton/>
        <InfoModal isOpen={isModalOpen} onRequestClose={handleCloseModal} content={modal_info} />
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