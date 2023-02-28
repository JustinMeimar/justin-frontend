import { React, useState } from 'react';

import CodeEditor from '../CodeEditor'; 
import HttpTerminal from '../HttpTerminal'
import '../../css/Compiler.css'

function Compiler() {

    const [input, setInput] = useState();
    const [section, setSection] = useState('about');
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
    
    const setShowGazpreaInfo  = (section) => {
        setSection(section);
        console.log(section);
    }

    const showGazpreaInfo = (section) => {
        if (section == "about") {
            return (
                <div className="gazprea_about_wrapper"> 
                <div className="gazprea_about_title">
                About 
                </div>
                    
                <div className="gazprea_about">
                Gazprea is a statically typed language used for matrix and vector programming which was developed by IBM. Because the language is proprietary, I can not make the source code publicly available, this was one motivation for the creation of this site. 
                                   
                    <div className="gazprea_instructions"> 
                    Below is a remote window into our implementation -- the NAGC (Not Another Gazprea Compiler) compiler! Just select from one of the predefined inputs or type in 
                    the editor to design your own programs. Press Run to execute!
                    </div>
                </div>
                </div> 
            );
        } else if (section == "background") {
            return (
                <div className="gazprea_background_wrapper">
                    <div className="gazprea_background_title">
                    Background 
                    </div>
                    
                    <div className="gazprea_background">
                    In the CMPUT 415 Compilers class, we implemented the language specification in six teams of four. The compilers were tested against one another in a tournament where each team's unit tests were run against one another. This Compiler came first place! 
                    </div>
                </div>
            );
        } else if (section == "features") {
            return (
                <div className="gazprea_features_wrapper"> 
                    <div className="gazprea_features_title">
                        Language Features
                    </div>
                    <div className="gazprea_features">
                    Gazprea has built in operators such as dot product and matrix multiplication that are defined over the vector and matrix types. Additionally, Gazprea has high-level vector and matrix constructors called generators and filters, which allow the programmer to specify a pattern from which to build an object. Construction of a vector of even numbers, squares etc can be generated in a single line using these features. See “generator” and “filter” inputs.
                    </div>
                </div>
            );
        }  else if (section == "technical") {
            return (
                <div className="gazprea_technical_wrapper">                  
                    <div className="gazprea_technical_title">
                        Technical Details
                    </div>
                    <div className="gazprea_technical">
                    We use the C++ bindings for the ANTLR parser generator in our front end. ANTLR allows you to specify context free grammars and will generate a parse tree automatically. Once we had the parse tree, we implemented several walks. First to convert the parse tree into an AST (to reduce redundancy and make the expressions simple.) Then a symbol definition walk, where ID’s were put into the symbol table for every variable declaration in the program. Then a symbol resolution walk, where instances of every variable were resolved with annotated types. Second last, we did a type checking walk, where we enforced some type rules based on each operator in the program and the variables used with it. Lastly we do our code-generation walk, where we produce LLVM IR. The codegeneration walk lays down the controlflow, basic blocks, functions in LLVM IR, and makes external function calls to the C runtime for much of the core computations. In the end, we can compile our LLVM IR file down to an object file, link it with the runtime object, and produce an executable. Then running a Gazprea program is as easy as using GCC!
                    </div> 
                </div>
            );
        } 
    }

    return(
        <div className="Project"> 
            <div class="alert"> 
                <div class="alert alert-warning" role="alert">
                    My SSL certificate is currently being verfied. If the dropdown is unresponsive, please allow the connection to my server to use. HTTPS should be here in a couple days at most.
                    Please allow <a href="https://195.88.25.189:3433/post">my server ip</a>
                </div>
            </div>
            <div className="project_compiler_info_container">
                <div className="project_compiler_title">
                    NAGC Vector Language Compiler 
                </div>
                <div className="project_compiler_info_body">
                    <p>
                        <button class="btn btn-primary" style={{"margin-right":"10px", "color" : ""}} type="button" data-toggle="collapse" onClick={() => {setShowGazpreaInfo("about")}}>About</button>
                        <button class="btn btn-primary" style={{"margin-right":"10px"}} type="button" data-toggle="collapse" onClick={() => {setShowGazpreaInfo("background")}}>Background</button>
                        <button class="btn btn-primary" style={{"margin-right":"10px"}} type="button" data-toggle="collapse" onClick={() => {setShowGazpreaInfo("features")}}>Language Features</button>
                        <button class="btn btn-primary" type="button" data-toggle="collapse" onClick={() => {setShowGazpreaInfo("technical")}}>Technical Details</button>
                    </p>
                    {showGazpreaInfo(section)}  
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
        </div>     
    );
}
    
export default Compiler;