import { React } from 'react';
import { useNavigate } from "react-router-dom";
import './css/BlogPage.css'
import { format } from 'date-fns';

function formatDate(dateString) {
  const date = new Date(dateString);
  return format(date, 'MMM do yyyy');
}

 
export const blog_descriptions = {
    // Older blogs are higher number key. 
    // Some weridness in the javascript Object.keys().map function probably
    "2": {
      title: "Test Blog",
      date: "2023-07-11",
      url: "/blog/test-blog"
    },  
    "1": {
      title: "My Quick and Simple Homeserver Recipe",
      date: "2023-07-12",
      url: "/blog/home-server-recipe"
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
          Before I succumb to LLM dependence
        </div>
      </div> 
    );
  }
  
  function BlogList() {
      const projects = Object.keys(blog_descriptions).map((key) => {
        const { title, description, date, lang } = blog_descriptions[key];
        console.log(date);
        return (
          <div key={title} className="blog_container" onClick={() => linkProject(key)}> 
            <div className="blog_title">{title}</div>  
            <div className="blog_date">{formatDate(date)}</div>
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