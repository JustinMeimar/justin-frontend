import { React, useState, useEffect, useRef } from 'react';
import Graph from "react-graph-vis";
import axios from 'axios';
import "./css/BTreeContent.css";

function BTreeContent() {
    

    const [insertIndex, setInsertIndex] = useState();
    const [deleteIndex, setDeleteIndex] = useState();

    const handleIndex = () => {
        return (e) => {
            setInsertIndex(e.target.value);
        }
    }

    return(
        <div className="Project"> 
            <div className="control">
                B+ Tree controls

                <div className="d-flex align-items-center">
                    <input
                        type="text"
                        id="text-input"
                        className="mr-2"
                        className="custom-input"
                        value={insertIndex}
                        onChange={handleIndex()}
                    /> 
                    <button class="btn btn-primary" type="button" data-toggle="collapse" onClick={() => {}}>Insert</button>    
                </div>
                <div className="d-flex align-items-center">
                    <input
                        type="text"
                        id="text-input"
                        className="mr-2"
                        className="custom-input"
                        value={deleteIndex}
                        onChange={handleIndex()}
                    /> 
                    <button class="btn btn-primary" type="button" data-toggle="collapse" onClick={() => {}}>Delete</button>    
                </div>
                 
            </div> 
            <div className="graph">
            
            </div> 
        </div>     
    );
}
    
export default BTreeContent;