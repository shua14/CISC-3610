import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
// import '../styles/Home.css'

export default function Home() {

    // let navigate = useNavigate();

    useEffect(() => {
        document.title = "CISC. 3610"
    }, [])

    return (
        <>
         <header>
            Jay Luxenberg <br />
            CISC. 3610 Introduction to Multimedia Programming
         </header>
        </>
        // <div className="Home">
        //     <header>
        //         Jay Luxenberg <br />
        //         CISC. 3610 Introduction to Multimedia Programming
        //     </header>
        //     {/* <div className="tiles">

        //     </div> */}
        // </div>
    )
}