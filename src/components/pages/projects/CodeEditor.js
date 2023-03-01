import { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import axios from 'axios';
import "../css/CodeEditor.css"
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another

function CodeEditor({ passUpInput, default_input, default_program }) {
    
    const [input, setInput] = useState(default_input);
    
    const handleInputChange = (newCode) => {
        setInput(newCode);
        passUpInput(input);
    };
        
    useEffect(() => {
        passUpInput(input); 
    }, [input, passUpInput]);

    async function getProgram(program) {
     
        console.log("get program: ", program);
        const fetchData = async () => {
            const get = axios.get(`https://justin-terminal-server.com:3443/get-file?program=${program}`)
                .then(response => {
                    console.log(response.data);
                    return response.data; 
                }); 
            return get;
        }
        return fetchData();        
    }
    
    async function load_program(selected_value) {
            const output = await getProgram(selected_value);
            setInput(output);  
    }

    const handleProgramSelection = (event) => {
        const program_path = event.target.getAttribute("data-value"); 
        load_program(program_path);
    }

    const input_dropdown = () => {

        const compiler_input = (
            <div class="btn-group" style={{"margin-bottom": "10px"}}>
                <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select Program
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" data-value="input_compiler_helloworld.txt" onClick={handleProgramSelection}>Hello, World</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" data-value="input_compiler_quicksort.txt" onClick={handleProgramSelection}>Quick Sort</a>
                    <a class="dropdown-item" data-value="input_compiler_mergesort.txt" onClick={handleProgramSelection}>Merge Sort</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" data-value="input_compiler_filter.txt" onClick={handleProgramSelection}>Filter</a>
                    <a class="dropdown-item" data-value="input_compiler_generator.txt" onClick={handleProgramSelection}>Generator</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" data-value="input_compiler_vector.txt" onClick={handleProgramSelection}>Vector</a>
                    <a class="dropdown-item" data-value="input_compiler_matrix.txt" onClick={handleProgramSelection}>Matrix</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" data-value="input_compiler_fibonnaci.txt" onClick={handleProgramSelection}>Fibonnaci</a>
                </div>
            </div>
        );
        const nfa_regex_input = (
            <div className="input selection">
                <select>
                    <option value="nfa-regex">a's or b's</option>
                    <option value="b-tree">input 2</option>
                    <option value="other">Other</option>
                </select> 
            </div>
        );
        if (default_program == "gazprea") {
            return ( compiler_input );
        } else if (default_program == "nfa-regex") {
            return ( nfa_regex_input );
        } 
         
    }
    
    async function awaitRequest() {

        const fetchData = async () => {
            const get = axios.get(`https://justin-terminal-server.com:3443/get-file?program=${"input_compiler_vector.txt"}`)
                .then(response => {
                    console.log(response.data);
                    return response.data; 
                }); 
            return get;
        }
        return fetchData();       
    }

    const makeRequest = () => {
        console.log("make a request");
        awaitRequest();
    }

    return (
        <div className="code_editor_component">
            {/* Program Selector Dropdown */}
            <div className="code_editor">
                { input_dropdown() }
                <Editor
                    value={input}
                    onValueChange={handleInputChange}
                    highlight={(input) => highlight(input, languages.js)}
                    padding={10}
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 16,
                        backgroundColor: '#f5f5f5',
                        border: '2px solid #ddd',
                    }}
                />
            </div> 
            <button onClick={() => {makeRequest()}}>test domain</button>
        </div> 
    );
}

export default CodeEditor;