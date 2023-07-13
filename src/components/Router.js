import {useEffect} from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage.js";
import ProjectsPage from "./pages/projects/ProjectsPage.js";
import BlogPage from './pages/blog/BlogPage.js';

import AboutMePage from "./pages/about/AboutMePage.js";
import AboutSitePage from "./pages/about/AboutSitePage.js";
//projects
import CompilerProject from "./pages/projects/compiler/Compiler.js";
import RegexProject from "./pages/projects/regex/Regex.js";
import BTreeProject from "./pages/projects/btree/BTree.js";
//blogs
import TestBlog from "./pages/blog/blogs/1_TestBlog.js";
import HomeServerRecipe from "./pages/blog/blogs/2_HomeServerRecipe.js";

function MainRouter() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} className="MainRouter">
        <Routes>

            <Route path="/" element={<HomePage/>}/>
            <Route path="/projects/" element={<ProjectsPage/>} />
            <Route path="/blog/" element={<BlogPage/>} />

            <Route path="/about/me" element={<AboutMePage></AboutMePage>} />
            <Route path="/about/site" element={<AboutSitePage></AboutSitePage>} />
            
            <Route path="/projects/compiler" element={<CompilerProject/>} />
            <Route path="/projects/b-tree" element={<BTreeProject/>} />
            <Route path="/projects/nfa-regex" element={<RegexProject/>} />
             
            <Route path="/blog/test-blog" element={<TestBlog/>} />
            <Route path="/blog/home-server-recipe" element={<HomeServerRecipe/>} />
                  
        </Routes>
    </BrowserRouter> 
  );
}

export default MainRouter;