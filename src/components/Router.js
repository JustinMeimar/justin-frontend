import {Route, BrowserRouter, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage.js";
import ProjectsPage from "./pages/ProjectsPage.js";
import AboutPage from './pages/AboutPage.js';
import Compiler from './pages/projects/compiler/Compiler.js';
import RegexParser from './pages/projects/regex-parser/RegexParser.js';
import BlogPage from './pages/blog/BlogPage.js';

import AboutMePage from "./pages/about/AboutMePage.js";
import AboutSitePage from "./pages/about/AboutSitePage.js";

function MainRouter() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>

            <Route path="/justin-frontend/" element={<HomePage/>}/>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/projects/" element={<ProjectsPage/>} />
            <Route path="/blog/" element={<BlogPage/>} />

            <Route path="/about/me" element={<AboutMePage></AboutMePage>} />
            <Route path="/about/site" element={<AboutSitePage></AboutSitePage>} />
            
            <Route path="/projects/compiler" element={<Compiler/>} />
            <Route path="/projects/b-tree" element={<RegexParser/>} />
            <Route path="/projects/nfa-regex" element={<RegexParser/>} />
            <Route path="/projects/vn-8bit" element={<RegexParser/>} />
        
        </Routes>
    </BrowserRouter>
     
  );
}

export default MainRouter;