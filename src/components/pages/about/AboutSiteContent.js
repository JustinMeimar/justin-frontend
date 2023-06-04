export const AboutSiteInfo = () => {
    return (
        <div className="about_site_info">

           Lots of cool programming projects hide away in the command line.
           I made this site to bring some of my favourite projects to life. 
           
            <br></br>
            <br></br>
           
           To avoid programming too much JavaScript, all the GUI projects implement serialization methods in their
           original language so that a JSON representation of the program state can be retrieved
           and rendered with a JS graphics library.
         
            <br></br>
            <br></br>
            Since this site required a backend for running my projects, I originally had to rent a server. 
            This was costing me big &#128176; ($10 per month) so I set up a home sever to hopefully save cost over the long run. 
            If you're able to reach this site, your request traveled to a little bee-link U59 running Ubuntu
            server in my room.  
            <br></br>
            <br></br>
            The <a href="/projects/compiler">Compiler Explorer</a> is a great way 
            to put the poor bee-link U59 to the test in all sorts of creative ways. If you're curious about 
            home server setup, see my <a href="/blog">blog</a>.

        </div>
    );
}

export default AboutSiteInfo;