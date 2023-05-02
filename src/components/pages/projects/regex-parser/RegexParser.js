import { React, useState, useEffect, useRef } from 'react';
import Graph from "react-graph-vis";
import CodeEditor from '../CodeEditor'; 
import HttpTerminal from '../HttpTerminal'
import axios from 'axios';
import '../../css/RegexParser.css'

function RegexParser() {

    const [expr, setExpr] = useState("");
    const [string, setString] = useState("");
    const [accept, setAccept] = useState(false);
    const [acceptMessage, setAcceptMessage] = useState(true);
    const [graph, setGraph] = useState({nodes: [], edges: []});
    const [startState, setStartState] = useState(0);
    const [acceptStates, setAcceptStates] = useState([]); 
    const [states, setStates] = useState([]);   
    const [edges, setEdges] = useState([]);   
    const ref = useRef(null);    

    const populateGraphStates = (nodesArray) => {
        states.forEach(s => { 
            const stateId = (s == startState) ? "s" : s;
            const stateColor = (acceptStates.includes(s)) ? "#19ff75" : (s == startState ? "#8aedff" : "#ffffff");
            const graph_state = {
                id: s,
                label: 'q'+stateId.toString(),
                color: {
                    background: stateColor, 
                    border: '#000000',   
                    highlight: {          
                        background: stateColor,
                        border: '#000000'
                    }
                }
            }; 
            nodesArray.push(graph_state);                
        }); 
        const emptyState = {
            id: -1, 
            label:'start', 
            color: {
                background: "#fff", 
                border: "#fff",  
                highlight: {          
                    background: "#fff",
                    border: '#fff'
                }
            } 
        }
        nodesArray.push(emptyState);
        
        return nodesArray;
    }

    const populateGraphEdges = (edgesArray) => {
        edges.forEach(e => { 
            const edgeColor = (e['sigma'] == -50) ? '#000000': '#000000';
            const label = (e['sigma'] == -50) ? String.fromCharCode(955) : String.fromCharCode(e['sigma']);
            const graph_edge = {
                from: e["qi"],
                to: e["qj"],
                label: label,
                color: {
                    color: edgeColor, 
                    highlight: "#00ff00", 
                    hover: "#0000ff" 
                } 
            };
            edgesArray.push(graph_edge);   
        });
        const startArrow = {from: -1, to: startState}
        edgesArray.push(startArrow);
        
        return edgesArray;
    }

    useEffect(() => {
        if (edges && states && ref.current) { 
            ref.current.setData({nodes: [], edges: []});
            const nodesArray = []
            const edgesArray = []
         
            populateGraphStates(nodesArray);
            populateGraphEdges(edgesArray);
            
            ref.current.setData({nodes: nodesArray, edges: edgesArray});
        }
    }, [states, edges]); 

    useEffect(() => {
        console.log(graph);
    }, [graph]);

    async function getNfa(expr, string) {
        try {
            const res = await axios.get(`https://justin-terminal-server.com:3443/api/regex/${expr}/${string}`);
            return res.data;
        } catch(error) {
            return null
            console.error("unable to fetch nfa");
        }
    }

    async function drawNfa() {
        if (expr != "") {
            const data = await getNfa(expr, string);       
            if (data != null) {
                setStates(data.states);
                setEdges(data.edges);
                setStartState(data.startState);
                setAcceptStates(data.acceptStates);
            }
        } 
    }

    async function runString() { 
        if (string != "") {
            const data = await getNfa(expr, string); 
            if (data != null) {
                setAccept(data.accept);
            }
        }
        return (<div>{acceptMessage}</div>);
    }

    const handleInputChange = (event) => {
        setExpr(event.target.value);
    }
    
    const handleStringChange = (event) => {
        setString(event.target.value);
    }

    const showAcceptMessage = () => {
        const acceptMessage = (accept == true) ? "accept" : "reject";
        console.log("accept message:", accept);
        return (
            <div> {accept} </div>
        );
    }

    var options = { 
        height: '800px', 
        edges: { smooth: true, shadow: false},
        layout: {
            randomSeed: 1,
            improvedLayout: true,
            hierarchical: {
                enabled: false, //change to true to see the other graph
                direction: 'UD',
                sortMethod: 'directed'
            }
        }
    }

    return(
        <div className="Project">  
            <div className="project-description">
                Regular Expression Engine    
            </div>
            <div className="description-text">
                This is a simple Regular Expression engine that generates an NFA and runs a string through it.
            </div> 
            <div className="expreesion_text"> 
            </div>
            <div>
                <label htmlFor="text-input">Regular Expression:</label> {/* aUbUcU(d&e)* */}
                <input
                    type="text"
                    id="text-input"
                    value={expr}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="text-input">String:</label>
                <input
                    type="text"
                    id="text-input"
                    value={string}
                    onChange={handleStringChange}
                />
            </div>
            <div className="regex-buttons">
                <button class="btn btn-primary" 
                        type="button" 
                        data-toggle="collapse" 
                        onClick={() => { drawNfa() }}
                >Generate NFA</button> 
                <button class="btn btn-success" 
                        type="button" 
                        data-toggle="collapse" 
                        onClick={() => { runString() }}
                >Run String</button>
                <div className="success-message">
                    accept message: { showAcceptMessage() } 
                </div> 
            </div>
            <div className="regex-graph"> 
                <Graph 
                    graph={ graph }
                    options={ options }
                    getNetwork={network => {
                        ref.current = network
                    }}
                /> 
            </div>
        </div>     
    );
}
    
export default RegexParser;