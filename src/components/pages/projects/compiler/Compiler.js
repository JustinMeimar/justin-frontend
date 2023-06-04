import ProjectBase from "../ProjectBase.js";
import CompilerContent from "./CompilerContent.js";

function CompilerProject() {
  
  const compilerProjectContent = () => {
    return (<CompilerContent />);
  }

  const compilerProjectTitle = () => {
    return (<div> &#127795; NAGC Compiler Explorer</div>);
  }
  
  const compilerProjectSubtitle = () => {
    return (<div> A virtual window into the NAGC Compiler! </div>);
  }

  const modalContent = `

  # NAGC Compiler Explorer

  ### Info
    This page contains a virtual explorer into the NAGC compiler. This compiler was built in 
    2022 by James Le, Tianming Han, Ian Cho and myself. It is written in C++ using ANTLR 
    for the compiler frontend and LLVM IR builder for the backend. The compiler also utilizes
    a large C runtime library.
  
  ### Features
    See the dropdown menu for sample inputs programs that showcase a variety of language features. 
    The text is editable, so you can experiment with the lanauge and recieve the compiler output by
    clicking run above the terminal.

    If the terminal becomes crowded, you can type 'clear'
  `;

  return (
    <ProjectBase 
      title={compilerProjectTitle()} 
      subtitle={compilerProjectSubtitle()}
      content={compilerProjectContent()}
      modal_info={modalContent}
    />
  );
}

export default CompilerProject;