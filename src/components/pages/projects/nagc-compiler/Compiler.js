import ProjectBase from "../ProjectBase.js";
import CompilerContent from "./CompilerContent.js";

function CompilerProject() {
  
  const compilerProjectContent = () => {
    return (<CompilerContent />);
  }

  const compilerProjectTitle = () => {
    return (
      <div> &#127795; NAGC Compiler </div>
    );
  }
  
  const compilerProjectSubtitle = () => {
    return (
      <div> A virtual window into the NAGC Compiler! </div>
    );
  }

  return (
    <ProjectBase 
      title={compilerProjectTitle()} 
      subtitle={compilerProjectSubtitle()}
      content={compilerProjectContent()}  
    />
  );
}

export default CompilerProject;