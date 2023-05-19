import { React } from 'react';
import { useNavigate } from "react-router-dom";
import './css/AboutMePage.css'

function AboutMePage() {

  const AboutMeTitle = () => {
    return (
      <div className="projects_page_title_container">
        <div className="projects_page_title">
           &#129313; About Me
        </div>
        <div className="projects_page_subtitle">
          Some stuff about me
        </div>
      </div> 
    );
  }
  
  function AboutMeContent() {
    return (
        <div></div>
    );
  }

  return (
    <div className="about_me_container">
      <AboutMeTitle />
      <AboutMeContent />
    </div>
  );
}

export default AboutMePage;

