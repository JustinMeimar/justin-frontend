import ProjectBase from "../ProjectBase.js";
import BTreeContent from "./BTreeContent.js";

function BTreeProject() {
  
  const BTreeProjectContent = () => {
    return (<BTreeContent/>);
  }

  const BTreeProjectTitle = () => {
    return (
      <div> &#127794; B+ Tree </div>
    );
  }
  
  const BTreeProjectSubtitle = () => {
    return (
      <div>A database index</div>
    );
  }

  return (
    <ProjectBase 
      title={BTreeProjectTitle()} 
      subtitle={BTreeProjectSubtitle()}
      content={BTreeProjectContent()}  
    />
  );
}

export default BTreeProject;