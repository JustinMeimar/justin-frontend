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
    const [states, setStates] = useState([]);   
    const [edges, setEdges] = useState([]);   
    const ref = useRef(null);    

    useEffect(() => {
        if (edges && states && ref.current) {
            
            ref.current.setData({nodes: [], edges: []});

            const nodesArray = []
            const edgesArray = []

            states.forEach(s => { 
                const graph_state = {
                    id: s,
                    label: s.toString()
                    // title: "title",
                    // shape: "image",
                    // image: "./logo192.png"
                }; 
                nodesArray.push(graph_state);                
            }); 

            edges.forEach(e => {
                const graph_edge = {
                    from: e["qi"],
                    to: e["qj"],
                    label: e["sigma"],
                    color: {
                        color: "#ff0000", // Line color
                        highlight: "#00ff00", // Line color when the edge is selected
                        hover: "#0000ff" // Line color when the mouse hovers over the edge
                    } // Add this block 
                };
                console.log(graph_edge);
                edgesArray.push(graph_edge);   
            });
            
            ref.current.setData({nodes: nodesArray, edges: edgesArray});
        }
    }, [states, edges]); 

    useEffect(() => {
        console.log(graph);
    }, [graph]);

    useEffect(() => {
        console.log('Accept update: ', accept);
        if (accept) {
            setAcceptMessage(`Accepted on ${string}`);
        } else {
            setAcceptMessage(`Rejected on ${string}`);
        }
    }, [accept]);

    async function getNfa(expr, string) {
        try {
            // https://localhost:3443/api/regex/aUbUcUd/ab 
            const res = await axios.get(`https://localhost:3443/api/regex/${expr}/${string}`);
            console.log(res.data);
            
            setStates(res.data.states);
            setEdges(res.data.edges);
            setAccept(res.data.accept);
        } catch(error) {
            console.error("unable to fetch nfa");
        }
    }

    async function drawNfa() {
        if (expr != "" && string != "" ) {
            await getNfa(expr, string);
        } 
        console.log("after");
    }

    const runString = () => {
        console.log("do nothing");
        return (
            accept ? <div>True</div> : <div> False </div>
        );
    }

    const handleInputChange = (event) => {
        setExpr(event.target.value);
    }
    
    const handleStringChange = (event) => {
        setString(event.target.value);
    }

    const handleExprSubmit = () => {
        // getNfa();
        console.log("edges:", edges);
    }

    return(
        <div className="Project">  
            <div className="project-description">
                Regular Expression Engine    
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
                <p>You typed: {expr}</p>
            </div>
            <div>
                <label htmlFor="text-input">String:</label>
                <input
                    type="text"
                    id="text-input"
                    value={string}
                    onChange={handleStringChange}
                />
                <p>You typed: {string}</p>
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
                <div className="success-message">
                    {acceptMessage} 
                </div> 
            </div>
            <div> 
                <Graph 
                    graph={ graph }
                    options={ {height : "500px"} }
                    // events={events}
                    getNetwork={network => {
                        ref.current = network
                    }}
                /> 
            </div>
        </div>     
    );
}
    
export default RegexParser;
    
// const graph = {
//     nodes: [ 
//         { id: 1, label: "Node 1", title: "node 1 tootip text" },
//         { id: 2, label: "Node 2", title: "node 2 tootip text" },
//         { id: 3, label: "Node 3", title: "node 3 tootip text" },
//         { id: 4, label: "Node 4", title: "node 4 tootip text" },
//         { id: 5, label: "Node 5", title: "node 5 tootip text" }
//     ],
//     edges: [
//         { from: 1, to: 2 },
//         { from: 1, to: 3 },
//         { from: 2, to: 4 },
//         { from: 2, to: 5 }
//     ]
// };