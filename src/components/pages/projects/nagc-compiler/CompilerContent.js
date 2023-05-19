import { React, useState } from 'react';
import CodeEditor from './CodeEditor'; 
import HttpTerminal from './HttpTerminal';
import "../css/CompilerContent.css";

function CompilerContent() {

    const [input, setInput] = useState();
    const [section, setSection] = useState('about');
 
    const default_input = "procedure main() returns integer {\n \"Hello, World\" -> stdout;\n return 0;\n}";  
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
                    {/* <div className="gazprea_about_title">
                        About 
                    </div>
                         */}
                    <div className="gazprea_about">
                        Gazprea is a statically typed language used for matrix and vector programming. 
                        Below is a remote window into our implementation -- the NAGC (Not Another Gazprea Compiler) compiler! Just select from one of the predefined inputs or type in 
                        the editor to write your own program. Press Run to execute!               
                        
                        <br></br> 
                        <br></br>  
                            Authors: James Le, Tianming Han, Ian Cho and Justin Meimar
                        <br></br> 
                        <br></br> 
                    </div>
                </div> 
            );
        } 
    }

    return(
        <div className="Project"> 
            <div className="project_compiler_info_container"> 
                <div className="project_compiler_info_body">
                    {/* <p>
                        <button class="btn btn-primary" style={{"margin-right":"10px", "color" : ""}} type="button" data-toggle="collapse" onClick={() => {setShowGazpreaInfo("about")}}>About</button>
                        <button class="btn btn-primary" style={{"margin-right":"10px"}} type="button" data-toggle="collapse" onClick={() => {setShowGazpreaInfo("background")}}>Background</button>
                        <button class="btn btn-primary" style={{"margin-right":"10px"}} type="button" data-toggle="collapse" onClick={() => {setShowGazpreaInfo("features")}}>Language Features</button>
                        <button class="btn btn-primary" type="button" data-toggle="collapse" onClick={() => {setShowGazpreaInfo("technical")}}>Technical Details</button>
                    </p> */}
                    {showGazpreaInfo(section)}  
                </div>
                <div className="editor-terminal-container">
                    <div className="editor-wrapper">
                        <div className="editor_title">Editor</div>
                        {editor}
                    </div>    
                    <div className="terminal-wrapper">
                        <div className="terminal_title"> Terminal</div>
                        {terminal}
                    </div> 
                </div> 
            
            </div>
        </div>     
    );
}
    
export default CompilerContent;

// else if (section == "background") {
        //     return (
        //         <div className="gazprea_background_wrapper">
        //             <div className="gazprea_background_title">
        //             Background 
        //             </div>
                    
        //             <div className="gazprea_background">
        //             In the CMPUT 415 Compilers class, we implemented the language specification in six teams of four. The compilers were tested against one another in a tournament where each team's unit tests were run against one another. 
        //             This Compiler came first place!  
                    
        //                 <br></br> <br></br>
        //             </div>
        //         </div>
        //     );
        // } else if (section == "features") {
        //     return (
        //         <div className="gazprea_features_wrapper"> 
        //             <div className="gazprea_features_title">
        //                 Language Features
        //             </div>
        //             <div className="gazprea_features">
        //             Gazprea has operators like dot product and matrix multiplication that work with vector and matrix types. 
        //             It also has generators and filters, which are high-level constructors that allow the programmer to create objects based on a pattern. 
        //             With these features, it's easy to construct vectors with even numbers or squares in a single line. 
        //             Check out the "generator" and "filter" inputs.
        //             Other Language features include, static type checking, forward declaration of functions, recursive typedefs, build in vector and matrix iterators,
        //             const and var type qualifiers and built in Null and Identity types. 
        //                 <br></br> <br></br>
        //             </div>
        //         </div>
        //     );
        // }  else if (section == "technical") {
        //     return (
        //         <div className="gazprea_technical_wrapper">                  
        //             <div className="gazprea_technical_title">
        //                 Technical Details
        //             </div>
        //             <div className="gazprea_technical">
        //                 We used the C++ bindings for ANTLR, a parser generator, in our front end to generate parse trees from context-free grammars. 
        //                 The compiler will perform several walks, including converting the parse tree to an AST, 
        //                 defining symbols in a symbol table, resolving variable instances with annotated types, 
        //                 type checking based on operator and variable usage, and finally, generating LLVM IR for code generation. 
        //                 <br></br> <br></br>
        //                 The resulting LLVM IR file can be compiled into an object file, linked with a runtime library that leverages compatibility betwen C and LLVM IR types, and turned into an executable.
        //                 Once an executable, running a Gazprea program is as easy as using GCC! (But with way, way less flags.)
        //                 <br></br> <br></br>
        //             </div> 
        //         </div>
        //     );
        //