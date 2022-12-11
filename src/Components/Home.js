import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Home.css'

export default function Home() {
    return (
        <div className="Home">
            <header>
                Jay Luxenberg <br />
                CISC. 3610 Introduction to Multimedia Programming
            </header>
            <div className="tiles">
                <div className="card"><Link to='/projects'>Projects</Link></div>
                <div className="card"><Link to='/labs'>Labs</Link></div>
            </div> 
        </div>
    )
}