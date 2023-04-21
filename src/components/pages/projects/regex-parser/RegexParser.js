import { React, useState, useEffect } from 'react';
import Graph from "react-graph-vis";
import CodeEditor from '../CodeEditor'; 
import HttpTerminal from '../HttpTerminal'
import axios from 'axios';
import '../../css/RegexParser.css'

function RegexParser() {

    const [states, setStates] = useState([]);   
    const [edges, setEdges] = useState([]);   
    const [inputExpr, setInputExpr] = useState("");
    
    useEffect(() => {
        if (edges && states) {
            constructNfa();
        }
    }, [states, edges]);

    async function getNfa(expr) {
        try {
            const res = await axios.get(`http://localhost:3001/api/regex/${expr}`);
            setStates(res.data.states);
            setEdges(res.data.edges);
        } catch(error) {
            console.error("unable to fetch nfa");
        }
    }

    const handleInputChange = (event) => {
        setInputExpr(event.target.value);
    }
    
    const handleExprSubmit = () => {
        // getNfa();
        console.log("edges:", edges);
    }

    const graph = {
        nodes: [ 
            { id: 1, label: "Node 1", title: "node 1 tootip text" },
            { id: 2, label: "Node 2", title: "node 2 tootip text" },
            { id: 3, label: "Node 3", title: "node 3 tootip text" },
            { id: 4, label: "Node 4", title: "node 4 tootip text" },
            { id: 5, label: "Node 5", title: "node 5 tootip text" }
        ],
        edges: [
            { from: 1, to: 2 },
            { from: 1, to: 3 },
            { from: 2, to: 4 },
            { from: 2, to: 5 }
        ]
    };

    const constructNfa = () => {
        console.log(states);
        console.log(edges);
    }

    return(
        <div className="Project">  
            <div className="project-description">
                Regular Expression Engine    
            </div> 
            <div className="expreesion_text"> 
            </div>
            <div>
                <label htmlFor="text-input">Regular Expression:</label>
                <input
                    type="text"
                    id="text-input"
                    value={inputExpr}
                    onChange={handleInputChange}
                />
                <p>You typed: {inputExpr}</p>
            </div>
            <div className="regex_buttons">
                <button class="btn btn-primary" 
                        type="button" 
                        data-toggle="collapse" 
                        onClick={() => { getNfa("aUb"); }}
                >Generate NFA</button> 
            </div>
            <div> 
                {/* <Graph 
                    graph={ graph }
                    options={ {height : "500px"} }
                    // events={events}
                    // getNetwork={network => {
                        //  if you want access to vis.js network api you can set the state in a parent component using this property
                    // }}
                />
                */}
            </div>
        </div>     
    );
}
    
export default RegexParser;