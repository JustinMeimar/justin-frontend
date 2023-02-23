import { React } from 'react';
import { useNavigate } from "react-router-dom";
import './css/ProjectsPage.css'

function ProjectsPage() {


    const project_descriptions = {
        "compiler": {
        title: "Compiler",
        description: "A fully functional compiler. Gazprea uses ANTLR frontend to generatae a parse tree. After transforming \
            the parse tree to an AST we implement multiple \ AST walks including symbol definition,\
           resolution, static type checking and finally code generation. We target LLVM IR to be portable, then\
           use the Clang compiler to generate an executable.",
        date: "2022-05-01",
        lang: "C++",
        url: "/projects/compiler"
        },
        "b-tree": {
        title: "B+ Tree",
        description: "A C++ implementation of a B-Tree for indexing an ordered database.\
          Assumes non-repeating indexes and operates by spawning nodes, pushing and copying up indexes when necessary.\
          Each non-leaf node can have three children so a index takes log3(N)",
        date: "2022-04-01",
        lang: "C++",
        url: "/projects/b-tree"
        },
        "nfa-regex": {
        title: "NFA Regex Parser",
        description: "An implementation of a recursive-descent parser for a minimal regular expression language. \
          The parsed regular expression is then used to generate a Non-deterministic Finite Automata (NFA), which can\
          be executed to determine if a string matches the regular expression",
        date: "2022-03-01",
        lang: "C++",
        url:"/projects/nfa-regex"
        },
        "vn-8bit": {
        title: "VN 8-Bit",
        description: "A 8-bit CPU emulator and assembler for a custom ISA. The CPU and ISA are pretty restricted\
        only 4Kb program memory, small address range for jumps, etc. The assembler handles label aliasing and conversion to binary instruction format.",
        date: "2021-07-01",
        lang: "Rust",
        url:"/projects/nfa-regex"
        }
    };

const navigate = useNavigate();
  const linkProject = (key) => {
    
    const url = project_descriptions[key]["url"];
    
    navigate(url);
}

    function ProjectList() {
        const projects = Object.keys(project_descriptions).map((key) => {
      const { title, description, date, lang } = project_descriptions[key];
      return (
        <div key={title} className="project_container" onClick={() => linkProject(key)}> <div className="project_title_lang_container">
                  <div className="project_title">
                    {title}
                  </div> 
                  <div className="project_language" id={lang}>{lang}</div>
                </div> 
                
                <div className="project_date">{date}</div>
                <div className="project_description">{description}</div>
            
            
        </div>
      );
    });

    return <div>{projects}</div>;
  }

  return (
    <div className="projects_container">
      <ProjectList />
    </div>
  );
}

export default ProjectsPage;