import { React } from 'react';
import ResumePDF from '../static/Resume.pdf'

function TopNavigation() {

    return( 
        <div className="test_page"> 
            <a href="/">Home </a> 
            <a href="/projects">Projects</a> 
            <a href="/about">About</a> 
            <a href={ResumePDF} target="_blank" rel="noreferrer">Resume</a> 
        </div>
    );
}

export default TopNavigation;