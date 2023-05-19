import { React } from 'react';
import { useNavigate } from "react-router-dom";
import "./css/AboutBase.css";

function AboutBase({title, subtitle, content}) {

  const AboutTitle = () => {
    return (
      <div className="about_title_container">
        <div className="about_title">
            {title}
        </div>
        <div className="about_subtitle">
            {subtitle}
        </div>
      </div> 
    );
  }
  
  function AboutContent() {
    return (
        <div className="about_content_container">
            {content}
        </div>
    );
  }

  return (
    <div>
        <AboutTitle />
        <AboutContent /> 
    </div>
  );
}

export default AboutBase;


