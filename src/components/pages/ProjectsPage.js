import { React } from 'react';
import { useNavigate } from "react-router-dom";
import './css/ProjectsPage.css'

function ProjectsPage() {


    const project_descriptions = {
        "compiler": {
            title: "Compiler",
            description: "A fully functional compiler. Gazprea uses ANTLR frontend to generatae a parse tree. After transforming \
                the parse tree to an AST we implement multiple \ AST walks including symbol definition\
            , resolution, static type checking and finally code generation.",
        date: "2022-05-01",
        lang: "C++",
        url: "/projects/compiler"
        },
        "b-tree": {
        title: "B-Tree",
        description: "A C++ implementation of a B-Tree for indexing an ordered database.",
        date: "2022-04-01",
        lang: "C++",
        url: "/projects/b-tree"
        },
        "nfa-regex": {
        title: "NFA-regex",
        description: "NFA regex includes a recursive-descent parser for recognizing a regular expression as well",
        date: "2022-03-01",
        lang: "C++",
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
        <div key={title} className="project_container" onClick={() => linkProject(key)}>
            
                <div className="project_title">{title}</div>
                <div className="project_language">{lang}</div>
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