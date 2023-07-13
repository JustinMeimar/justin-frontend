import { React, useState } from 'react';
import CodeEditor from './CodeEditor'; 
import HttpTerminal from './HttpTerminal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "../css/CompilerContent.css";

function CompilerTabs() {
  const [key, setKey] = useState('about');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="about" title="About">
        Gazprea is a statically types programming language. 
      </Tab>
      <Tab eventKey="features" title="Features">
        LLVM. 
      </Tab>
      <Tab eventKey="background" title="Background">
        Made in a group of 4!
      </Tab>
    </Tabs>
  );
}


function CompilerContent() {

    const [input, setInput] = useState();
    const [section, setSection] = useState('about');
 
    const default_input = `// Hello, World!
    // typedefs 
    typedef integer int;
    typedef string StringTy;
    
    procedure main() returns integer {
    
        // declare a string variable
        StringTy say_hello = "Hello, World";
        
        // pipe string to stdout 
        say_hello -> stdout;
    
        // use a literal string 
        "Hello, World" -> stdout;
    
        // just a char... 
        'd' -> stdout;
        'd'-> stdout;
    
        return 0;
    }`;  
    const terminal = <HttpTerminal program={"gazprea"} input={input}/>
    
    const editor = <CodeEditor 
        passUpInput={runInputOnProgram} 
        default_input={default_input}
        default_program="gazprea" 
        />

    function runInputOnProgram (input) {
        setInput(input);
    }
    
    const setShowGazpreaInfo  = (section) => {
        setSection(section);
        console.log(section);
    }

    return(
        <div className="Project"> 
            <div className="project_compiler_info_container"> 
                <div className="editor-terminal-container">
                  <div> 
                    <div className="editor_title">Editor</div> 
                    <div className="editor-wrapper">
                        {editor}
                    </div>
                  </div>
                  <div> 
                    <div className="terminal_title"> Terminal</div>
                    <div className="terminal-wrapper">
                        {terminal}
                    </div>
                  </div> 
                </div> 
            
            </div>
        </div>     
    );
}
    
export default CompilerContent;