import { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import axios from 'axios';
import "../css/CodeEditor.css"
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another

function CodeEditor({ passUpInput }) {
    
    const [input, setInput] = useState('procedure main() returns integer {\n 123 -> stdout;\n\n return 0;\n}\n\n\n\n\n\n\n');

    const handleInputChange = (newCode) => {
        setInput(newCode);
        passUpInput(input);
    };
        
    useEffect(() => {
        passUpInput(input);
    }, [input, passUpInput]);

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
            {/* Program Selector Dropdown */}
            <div className="input selection">
                <select>
                    <option value="nfa-regex">input 1</option>
                    <option value="b-tree">input 2</option>
                    <option value="other">Other</option>
                </select>
            </div>

            {/* Editor */} 
            <div className="code_editor">
                <Editor
                    value={input}
                    onValueChange={handleInputChange}
                    highlight={(input) => highlight(input, languages.js)}
                    padding={10}
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 12,
                        backgroundColor: '#f5f5f5',
                        border: '2px solid #ddd',
                    }}
                />
            </div> 
        </div> 
    );
}

export default CodeEditor;