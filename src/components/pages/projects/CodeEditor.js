import { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import axios from 'axios';
import "../css/CodeEditor.css"
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another

function CodeEditor({ passUpInput }) {
    
    const [input, setInput] = useState('');

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
            const get = axios.get(`http://195.88.25.189:80/get-file?program=${program}`)
                .then(response => {
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

    const input_dropdown = () => {

        const compiler_input = (
            <div className="input selection">
                <select onChange={(event) => load_program(event.target.value)}>
                    <option value="input_compiler_mergesort.txt">mergesort</option>
                    <option value="input_compiler_quicksort.txt">quicksort</option>
                    <option value="input_compiler_generator.txt">generator</option>
                    <option value="3">while loop</option>
                    <option value="4">matrix</option>
                    <option value="5">heavy-duty</option>
                </select>
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
        return (
            compiler_input 
        ); 
    }

    async function testHttps() { 
        const fetchData = async () => {
            const get = axios.get(`https://195.88.25.189:3443/`)
                .then(response => {
                    console.log("recieved response from port 3443"); 
                    return response.data; 
                }); 
            return get;
        }
        return fetchData();        
    }
    
    return (
        <div className="code_editor_component">
            {/* Program Selector Dropdown */}
            {/* Editor */} 
            <div className="code_editor">
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
                { input_dropdown() }
                <button onClick={() => {testHttps()}}>Test Https</button>
            </div> 
        </div> 
    );
}

export default CodeEditor;