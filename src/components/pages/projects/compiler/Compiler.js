import React from 'react';

import CodeEditor from '../CodeEditor'; 
import HttpTerminal from '../HttpTerminal'

function Compiler() {
    
    const terminal = <HttpTerminal/>
    const editor = <CodeEditor passUpInput={runInputOnProgram}/>

    function runInputOnProgram (input) {
        console.log(input);
    }

    return(
        <div className="Project">  
            This is the compiler project page. 
            {terminal}
            {editor}
        </div>     
    );
}
    
export default Compiler;