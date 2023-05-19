import {React, useRef} from 'react';
import Terminal from 'react-console-emulator';
import axios from 'axios';
import '../css/HttpTerminal.css';

// wait for the server to run the program and return the stdout
async function awaitProgramOutput(program, input) {
    
    const fetchData = async () => {
        console.log("program:", program);
        console.log("input:", input);

        // const post = axios.post('https://justin-terminal-server.com:3443/post', {"program": program, "input" : input})
        const post = axios.post('http://localhost:8080/post', {"program": program, "input" : input})
            .then(response => {
                if (response.data.stdout ) {
                    return response.data.stdout;
                } 
                return response.data.stderr;
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
        term.pushToStdout(output);
    }

    return( 
        <div className="terminal_div">        
            <button type="button" style={{"margin-bottom": "15px"}} class="btn btn-success" onClick={() => {runCommand()}}>Run</button>
            <Terminal
                ref={terminal}
                commands={commands}
                promptLabel={'justin@webstite:~$'} >  
            </Terminal>
        </div> 
    );
}

export default HttpTerminal;