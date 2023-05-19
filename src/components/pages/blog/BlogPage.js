import { React } from 'react';
import { useNavigate } from "react-router-dom";
import './css/BlogPage.css'

export const blog_descriptions = {
    "compiler": {
      title: "Test Blog 1",
      description: "A test blog for my new blog section",
      date: "2023-05-18",
      url: "/blog/1"
    }, 
};

function BlogPage() {

  const navigate = useNavigate(); 
  const linkProject = (key) => { 
    const url = blog_descriptions[key]["url"]; 
    navigate(url);
  }

  const BlogTitle = () => {
    return (
      <div className="projects_page_title_container">
        <div className="projects_page_title">
           &#128221; Blogs
        </div>
        <div className="projects_page_subtitle">
          Before I succumb to GPT dependance
        </div>
      </div> 
    );
  }
  
  function BlogList() {
      const projects = Object.keys(blog_descriptions).map((key) => {
        const { title, description, date, lang } = blog_descriptions[key];
        return (
          <div key={title} className="project_container" onClick={() => linkProject(key)}>
            <div className="project_title_lang_container">
              <div className="project_title">
                {title}
              </div> 
              <div className="project_language" id={lang}>
                {lang}
              </div>
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
      <BlogTitle />
      <BlogList />
    </div>
  );
}

export default BlogPage;
