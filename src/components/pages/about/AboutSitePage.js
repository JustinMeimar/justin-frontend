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
      <div> &#129313; About Site </div>
    );
  }
  
  const aboutSiteSubtitle = () => {
    return (
      <div> About this website </div>
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