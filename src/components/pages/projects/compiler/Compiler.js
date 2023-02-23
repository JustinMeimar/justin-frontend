import { React, useState } from 'react';

import CodeEditor from '../CodeEditor'; 
import HttpTerminal from '../HttpTerminal'
import '../../css/Compiler.css'

function Compiler() {
    
    const [input, setInput] = useState();
    const terminal = <HttpTerminal program={"gazprea"} input={input}/>
    const editor = <CodeEditor passUpInput={runInputOnProgram}/>

    function runInputOnProgram (input) {
        setInput(input);
    }

    const loadProgram = () => {
        console.log("here");
    }

    return(
        <div className="Project">  
            <div className="project_compiler_info_container">
                <div className="project_compiler_title">
                    NAGC Vector Language Compiler 
                </div>
                <div className="project_compiler_info_body">
                    This a remote window into the NAGC compiler! To use type in the code to execute, or
                    select from on of the pre-written inputs, then click Run.
                </div>
            </div>
            {terminal}
            {editor}
        </div>     
    );
}
    
export default Compiler;