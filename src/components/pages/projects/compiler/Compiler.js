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

    const loadProgram = () => {
        console.log("here");
    }

    return(
        <div className="Project">  
            This is the compiler project page. 
            {terminal}
            {editor}
            <select onChange={() => loadProgram}>
                <option value="0">mergesort</option>
                <option value="1">quicksort</option>
                <option value="2">fibonacci</option>
                <option value="3">while loop</option>
                <option value="4">matrix</option>
                <option value="5">heavy-duty</option>
            </select>
            <div class="dropdown-menu">
  <h6 class="dropdown-header">Dropdown header</h6>
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
</div>


        </div>     
    );
}
    
export default Compiler;