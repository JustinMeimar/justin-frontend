import { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import axios from 'axios';
import "../css/CodeEditor.css"

function CodeEditor({ passUpInput }) {
    
    const [input, setInput] = useState('aUbUc');

    const handleInputChange = (newCode) => {
        setInput(newCode);
    };
      
    // CURRENTLY NOT USED. Will use to fetch predefined inputs for Gazprea (like mergesort, quicksort ...)
    async function getProgram(program) {
          
        const fetchData = async () => {
            const get = axios.get(`http://localhost:3001/file?program=${program}`)
                .then(response => {
                    setInput(response.data); 
                }); 
        }
        fetchData();        
    }
    
    return (
        <div className="code_editor_component">
            {/* Editor */}
            <div className="code_editor">
                <Editor
                    value={input}
                    onValueChange={handleInputChange}
                    highlight={(code) => highlight(code, languages.javascript, 'javascript')}
                    padding={10}
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 12,
                        backgroundColor: '#f5f5f5',
                        border: '2px solid #ddd',
                    }}
                />
            </div> 
             
            {/* Run Code Button */}
            <button onClick={() => {passUpInput(input)}}> Run Code </button> 
                
            {/* Program Selector Dropdown */}
            <div className="input selection">
                <select>
                    <option value="nfa-regex">input 1</option>
                    <option value="b-tree">input 2</option>
                    <option value="other">Other</option>
                </select>
            </div>
            

        </div> 
    );
}

export default CodeEditor;