import AboutBase from "./AboutBase.js";
import AboutSiteInfo from "./AboutSiteContent.js";

function AboutSitePage() {
  
  const aboutSiteContext = () => {
    return (
      <AboutSiteInfo />
    );
  } 

  const aboutSiteTitle = () => {
    return (
      <div> &#128044; Welcome to my Page </div>
    );
  }
  
  const aboutSiteSubtitle = () => {
    return (
      <div></div>
    );
  }
  return (
    <AboutBase 
      content={aboutSiteContext()}
      subtitle={aboutSiteSubtitle()}
      title={aboutSiteTitle()} 
    />
  );
}

export default AboutSitePage;