import { React, useState } from 'react';

import CodeEditor from '../CodeEditor'; 
import HttpTerminal from '../HttpTerminal'
import '../../css/Compiler.css'

function Compiler() {

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
            <div className="project_compiler_info_container">
                <div className="project_compiler_title">
                    NAGC Vector Language Compiler 
                </div>
                <div className="project_compiler_info_body">
                    This a remote window into the NAGC compiler! To use type in the code to execute, or
                    select from on of the pre-written inputs, then click Run. NAGC was build by a team of 4.
                </div>
            </div>
            <div className="editor-terminal-container">
                <div className="editor-wrapper">
                    {editor}
                </div>
                <div className="terminal-wrapper">
                    {terminal}
                </div>
            </div> 
        </div>     
    );
}
    
export default Compiler;