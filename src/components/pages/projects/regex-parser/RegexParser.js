import { React, useState } from 'react';

import CodeEditor from '../CodeEditor'; 
import HttpTerminal from '../HttpTerminal'
import '../../css/RegexParser.css'

function RegexParser() {

    const [input, setInput] = useState();
    const default_input = "procedure main() returns integer {\n \"Hello, World\" -> stdout;\n return 0;\n}" 
    const terminal = <HttpTerminal program={"gazprea"} input={input}/>
    const editor = <CodeEditor 
        passUpInput={runInputOnProgram} 
        default_input={default_input}
        default_program="gazprea" 
        />

    function runInputOnProgram (input) {
        setInput(input);
    }
    
    return(
        <div className="Project">  
            <div className="project-description">
                This project is in the process of being accessible through the terminal emulator. 
                See Compiler for working implementation.
            </div> 
        </div>     
    );
}
    
export default RegexParser;