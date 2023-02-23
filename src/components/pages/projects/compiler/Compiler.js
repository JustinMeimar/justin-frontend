import { React, useState } from 'react';

import CodeEditor from '../CodeEditor'; 
import HttpTerminal from '../HttpTerminal'

function Compiler() {
    
    const [input, setInput] = useState();
    const terminal = <HttpTerminal program={"gazprea"} input={input}/>
    const editor = <CodeEditor passUpInput={runInputOnProgram}/>

    function runInputOnProgram (input) {
        setInput(input);
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