import React, { useEffect } from "react";
import { Link } from 'react-router-dom'

export default function Labs(){
    return(
        <>
            <header>Labs</header>
            <div className="tiles">
                <div className="card"><Link to="/labs/colorchart">Color Chart</Link></div>
                <div className="card"><Link to="/labs/soundmachine">Sound Machine</Link></div>
                <div className="card"><Link to="/labs/resume">Resume</Link></div>
            </div>
        </>
    );
}