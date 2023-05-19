import ProjectBase from "../ProjectBase.js";
import RegexContent from "./RegexContent.js";

function RegexProject() {
  
  const RegexProjectContent = () => {
    return (<RegexContent />);
  }

  const RegexProjectTitle = () => {
    return (
      <div> &#9881; Regex Engine </div>
    );
  }
  
  const RegexProjectSubtitle = () => {
    return (
      <div> A NFA driven Regular Expression engine from scratch</div>
    );
  }

  return (
    <ProjectBase 
      title={RegexProjectTitle()} 
      subtitle={RegexProjectSubtitle()}
      content={RegexProjectContent()}  
    />
  );
}

export default RegexProject;