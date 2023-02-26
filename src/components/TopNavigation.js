import { React } from 'react';
import ResumePDF from '../static/Resume.pdf';
import githubLogo from '../static/github.png';
import { Link }  from 'react-router-dom';

function TopNavigation() {

    return( 
        <div className="top_navigation">  

            <div class="pos-f-t">
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4" >
                    <div class="bg-dark p-2" onClick={() => window.location.href="https://github.com/JustinMeimar"}>
                        <h4 class="text-white" >Github</h4>   
                        <span class="text-muted">To see how this website was created.</span>
                    </div>
                </div>
            </div>
            <nav class="navbar navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                
            </nav>
            </div> 
            <nav class="navbar navbar-expand-lg navbar-light bg-light"> 
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/projects">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href={ResumePDF} target="_blank">Resume</a>
                    </li>
                    </ul>
                </div>
            </nav> 
        </div>

    );
}

export default TopNavigation;