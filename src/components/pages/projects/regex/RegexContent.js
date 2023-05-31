import { React, useState, useEffect, useRef } from 'react';
import Graph from "react-graph-vis";
import axios from 'axios';

function RegexContent() {

    const [expr, setExpr] = useState("j&mU(re*)");
    const [string, setString] = useState("rerere");
    const [accept, setAccept] = useState(false);
    const [acceptMessage, setAcceptMessage] = useState(true);
    const [graph, setGraph] = useState({nodes: [], edges: []});
    const [startState, setStartState] = useState(0);
    const [acceptStates, setAcceptStates] = useState([]); 
    const [states, setStates] = useState([]);   
    const [edges, setEdges] = useState([]);   
    const ref = useRef(null);    

    const populateGraphStates = (nodesArray) => {
        console.log(states);
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
                    border: "#fff"
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
            // const res = await axios.get(`https://justin-terminal-server.com:3443/api/regex/${expr}/${string}`);
            const res = await axios.get(`http://localhost:8080/api/regex/${expr}/${string}`);
            console.log(res.data);
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
        if (accept == true) {
            alert("String Accepted!");
        } else {
            alert("String Rejected!");
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
        height: '500px', 
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
        <div className="project"> 
             <div className="regex_control">
                <div className="d-flex align-items-center">
                    <label htmlFor="text-input" className="mr-2">Regular Expression: </label> 
                    <input
                        type="text"
                        id="text-input"
                        className="mr-2"
                        value={expr}
                        onChange={handleInputChange}
                    />
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Expression
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" onClick={() => {setExpr("abc"); console.log("click")}} type="button">abc</button>
                            <button className="dropdown-item" onClick={() => {setExpr("aUbUc")}}type="button">aUbUc</button>
                            <button className="dropdown-item" onClick={() => {setExpr("(ab)*")}}type="button">(ab)*</button>
                            <button className="dropdown-item" onClick={() => {setExpr("(aUb)*")}}type="button">(aUb)*</button>
                            <button className="dropdown-item" onClick={() => {setExpr("(jUkUl)*")}}type="button">(jUkUl)*</button>
                            <button className="dropdown-item" onClick={() => {setExpr("(jUk&(bUa)*)*")}}type="button">(jUk&(bUa)*)*</button>
                            <button className="dropdown-item" onClick={() => {setExpr("(a&b&c&d&e)*U(justin)*")}}type="button">(a&b&c&d&e)*U(justin)*</button>
                        </div>
                    </div>
                </div>
                
                <div className="regex_string">
                    <label htmlFor="text-input">String:</label>
                    <input
                        type="text"
                        id="text-input"
                        value={string}
                        onChange={handleStringChange}
                    />
                </div>
                 
                <div className="regex_buttons">
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
                </div> 
                </div>
            <div className="regex_graph"> 
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
    
export default RegexContent;