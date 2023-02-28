import {Route, BrowserRouter, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage.js";
import ProjectsPage from "./pages/ProjectsPage.js";
import AboutPage from './pages/AboutPage.js';
import Compiler from './pages/projects/compiler/Compiler.js';
import RegexParser from './pages/projects/regex-parser/RegexParser.js';

function MainRouter() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>

            <Route path="/justin-frontend/" element={<HomePage/>}/>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about/" element={<AboutPage></AboutPage>} />
            <Route path="/projects/" element={<ProjectsPage/>} />

            <Route path="/projects/compiler" element={<Compiler/>} />
            <Route path="/projects/b-tree" element={<RegexParser/>} />
            <Route path="/projects/nfa-regex" element={<RegexParser/>} />
            <Route path="/projects/vn-8bit" element={<RegexParser/>} />
        
        </Routes>
    </BrowserRouter>
     
  );
}

export default MainRouter;