import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Home.css'

export default function Home() {

    useEffect(() => {
        document.title = "CISC. 3610"
    }, [])

    return (
        <div className="Home">
            <header>
                Jay Luxenberg <br />
                CISC. 3610 Introduction to Multimedia Programming
            </header>
            <div className="tiles">
                <div className="projects"><Link to='/projects'>Projects</Link></div>
                <div className="labs"><Link to='/labs'>Labs</Link></div>
            </div> 
        </div>
    )
}