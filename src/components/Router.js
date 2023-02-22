import {HashRouter as Router, Route, Link, BrowserRouter, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage.js";
import ProjectsPage from "./pages/ProjectsPage.js";
import AboutPage from './pages/AboutPage.js';
import ResumePDF from '../static/Resume.pdf'

function MainRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about/" element={<AboutPage></AboutPage>} />
            <Route path="/projects/" element={<ProjectsPage/>} />
        </Routes>
    </BrowserRouter>
     
  );
}

export default MainRouter;