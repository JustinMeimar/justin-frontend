export const AboutSiteInfo = () => {
    return (
        <div className="about_site_info">
            
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

export default AboutSiteInfo;