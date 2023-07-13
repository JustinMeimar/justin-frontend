import AboutBase from "./AboutBase.js";
import AboutMeInfo from "./AboutMeContent.js";

function AboutMePage() {
  
  const aboutMeContext = () => {
    return (
      <AboutMeInfo/>
    );
  }

  const aboutMeTitle = () => {
    return (
      <div> &#128034; About Me </div>
    );
  }
  
  const aboutMeSubtitle = () => {
    return (
      <div> Some stuff about me </div>
    );
  }

  return (
    <AboutBase 
      title={aboutMeTitle()} 
      subtitle={aboutMeSubtitle()}
      content={aboutMeContext()}  
    />
  );
}

export default AboutMePage;