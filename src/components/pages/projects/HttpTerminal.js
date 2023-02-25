import {React, useRef} from 'react';
import Terminal from 'react-console-emulator';
import axios from 'axios';
import '../css/HttpTerminal.css';
// import '../css/HttpTerminal.css';

// wait for the server to run the program and return the stdout
async function awaitProgramOutput(program, input) {
    
    const fetchData = async () => {

        console.log("program:", program);
        console.log("input:", input);

        const post = axios.post('http://195.88.25.189:80/post', {"program": program, "input" : input})
            .then(response => {
                console.log("response:", response.data.stdout);
                return response.data.stdout;
            }); 
        
        return post;
    }
    return fetchData();        
}
           
function HttpTerminal({program, input}) {

    let terminal = useRef();
  
    const commands = {
        ls : {
            description: 'Echo a passed string.',
            usage: 'ls',
            fn: () => {
                const term = terminal.current;
                term.pushToStdout("compiler nfa-regex btree", true);
            }
        }
    }

    async function runCommand() {
        const term = terminal.current;
        const output = await awaitProgramOutput(program, input);
        
        console.log("recieved output");
        // console.log(output);
        term.pushToStdout(output);
    }

    return( 
        <div className="terminal_div">        
            <Terminal
                ref={terminal}
                commands={commands}
                promptLabel={'justin@webstite:~$'} >  
            </Terminal>
            <button type="button" class="btn btn-outline-primary" onClick={() => {runCommand()}}>Run</button>
        </div> 
    );
}

export default HttpTerminal;