import React, { useState } from 'react';
import './css/AboutPage.css';

function AboutPage() {

    // const backgroundRGB = "#88D8FF";
    // const backgroundRGB = "#A7D3FF ";
    const backgroundRGB = "#70C3FF ";
    const [showAbout, setShowAbout] = useState(true);
    const [aboutMeColor, setAboutMeColor] = useState(backgroundRGB);
    const [aboutPageColor, setAboutPageColor] = useState('white');

    const clickAboutMe = (event) => {
        setShowAbout(true);
        setAboutMeColor(backgroundRGB);
        setAboutPageColor('white');
    }

    const clickAboutPage = (event) => {
        setShowAbout(false);
        setAboutMeColor('white');
        setAboutPageColor(backgroundRGB);
    }

    return (
        <div className="aboutPage">
            <div className="about-me-title">
                <br />       
                <button class="btn btn-primary" style={{"margin-right":"10px", "color" : ""}} type="button" data-toggle="collapse" onClick={() => {clickAboutMe()}}>About Me</button>
                <button class="btn btn-primary" style={{"margin-right":"10px", "color" : ""}} type="button" data-toggle="collapse" onClick={() => {clickAboutPage()}}>About This Page</button>
        </div>
            {showAbout ? about_me_info() : about_page_info()}
        </div>
    );
}

const about_page_info = () => {
    return (
        <div className="about_page_info">
            
            <br></br>
           The idea for this page came after many failed attempts to create Javascript GUI
           visualizations of some low-level implementations.  
          
           <br></br>
           <br></br>
           I originally planned to create a remote shell window that would allow the user
           to execute the binaries on a server as well as run other commands. However, I quickly
           realized that there were some obvious security risks in creating a publicly accessible remote shell
           into my server.

           <br></br>
           <br></br>
           The current model involves a text editor, which can be pre-filled by a GET request for some
           defined input programs, and a terminal emulator, which displays the results of the program execution.
           The terminal still has some functionality, however the available commands are on a whitelist model. Only commands 
           such as ls and clear etc. are so far allowed.
           
           <br></br>
           <br></br>
           When the user clicks "Run" a POST request is sent with the program and input to run.
           The client waits for the server spawns a subprocess to execute the input on the program and responds with the stdout and
           stderr. Once received, the client writes the stdout/err onto the terminal, just as if the user had
           run the program locally!


           <br></br>
           <br></br>
           The inputs are also not restrained to the dropdown selection. The user can input any input they want
           by using the Editor component. Especially in the case of the Compiler, this makes it great for experimenting
           with the language features for oneself.
      
           <br></br>
           <br></br>
           

        </div>
    );
}

const about_me_info = () => {
    return (
       
        <div className="home_page_info">
            
            <br></br> 
            Hello, I’m Justin, a third year computer science student at the 
            <a href="https://www.ualberta.ca/computing-science/index.html"> University of Alberta </a>  

            <br></br> <br></br> 
            I enjoy implementing low level programs and concepts. A couple of my projects include 
            a compiler for a vector language which targets LLVM IR (team of 4), and a virtual CPU + assembler for 
            a custom toy ISA. 
            
            <br></br> <br></br>
            I learned the fundamentals by implementing some of the suggested projects in    
            <a href='https://github.com/geohot/fromthetransistor' target='_blank'>  this Github blog</a>, 
            which I'm continuing to let guide my exploration.   
                      
            <br></br> <br></br>
            Beside low-level programming, I have experience with modern 
            tools. I've become close with Git by
            working in group projects ranging from 4-6 people. 
            
            <br></br> <br></br>
            I'm in a continual loop of learning React. It always seems to find a 
            use case (including this website :p).   
            
            <br></br> <br></br>
            Last summer, I gained some real world experience working as a Full Stack 
            at a <a href="https://bitsinglass.com/" target='_blank'>Bits In Glass</a>
            , a local Edmonton company. There I learned the ropes of AGILE development
            where we operated in two-week sprints. I was fortunate to be placed on my project 
            at its inception and observe the entire development cylce. 
            
           
            <br></br> <br></br>
            Outside of computers, I like to run (when it isn't -30) and play hockey 
            and soccer. I enjoy reading, although if I'm in school my 
            book completion rate falls enormously.
            </div>
    );
};

export default AboutPage;