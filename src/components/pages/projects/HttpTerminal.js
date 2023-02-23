import {React, useRef} from 'react';
import Terminal from 'react-console-emulator';
import axios from 'axios';

function HttpTerminal({program, input}) {

    let terminal = useRef();
  
    async function awaitProgramOutput(program, input) {

        //needed because of unusual terminal formatting without
        const parseOutput = (output, char) => {
            const arr = output.split('\n');
            return arr.join(`${char}\n`)
        }
        
        const fetchData = async () => {

            console.log("program:", program);
            console.log("input:", input);

            const post = axios.post('http://localhost:3001/post', {"program": program, "input" : input})
                .then(response => {
                    console.log("response:", response.data.stdout);
                    // term.write(parseOutput(response.data.stdout, '\r'));    
                }); 
        }
        fetchData();        
    }
           
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

    const runCommand = () => {
        const term = terminal.current;
        awaitProgramOutput(program, input);
        term.pushToStdout("just ran a program");
    }

    return( 
        <div className="project_gazprea"> 
            <div className="terminal_div">
                 
                <Terminal
                    ref={terminal}
                    commands={commands}
                    promptLabel={'justin@webstite:~$'} >  
                </Terminal>
                <button onClick={() => {runCommand()}}>Real run code</button>
            </div> 
        </div>
    );
}

export default HttpTerminal;