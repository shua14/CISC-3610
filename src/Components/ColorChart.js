import React, { useState, useEffect } from "react";

export default function ColorChart(){

    // const [fruit, setFruit] = useState([]);

    useEffect(() => {
        const fruit = [ 
            {"name":"Strawberry", "quantity":15, "color":"red"},
            {"name":"Peach", "quantity":10, "color":"orange"},
            {"name":"Banana", "quantity":25, "color":"yellow"},
            {"name":"Pear", "quantity":10, "color":"green"},
            {"name":"grape", "quantity":20, "color":"purple"}
        ];

        const result = JSON.stringify(fruit)
        const obj = JSON.parse(result)

        console.log(obj[0].name)

        const c = document.getElementById("myCanvas");
        const context = c.getContext("2d");
        context.fillStyle = '#90EE90'
        context.fillRect(0, 0, 1000, 500)

    }, [])
    
    return(
        <>
            <header>Color Chart</header>
            <canvas
                id="myCanvas"
                width="1000"
                height="500"
                style={{ border: "1px solid #90EE90" }}
            >
                Your browser does not support the HTML canvas tag.
            </canvas>
        </>
    );
}