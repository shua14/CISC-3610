import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ColorChart(){
    useEffect(() => {
        const fruit = [ 
            {name:"Strawberry", quantity:15, color:"red"},
            {name:"Peach", quantity:10, color:"orange"},
            {name:"Banana", quantity:25, color:"yellow"},
            {name:"Pear", quantity:10, color:"green"},
            {name:"Grape", quantity:20, color:"purple"}
        ];

        const result = JSON.stringify(fruit)
        const obj = JSON.parse(result)

        const c = document.getElementById("myCanvas");
        const context = c.getContext("2d");
        context.fillStyle = 'grey'
        context.fillRect(0, 0, 1000, 500)
        context.stroke();

        context.font = "30px Arial";
        context.fillStyle = "black";
        context.fillText("Jay Luxenberg", 850, 80)

        let x = 325;
        for(let i = 0; i < fruit.length; i++){
            context.strokeStyle = obj[i].color;
            context.lineWidth = 70;
            context.beginPath();
            context.moveTo(x, 325 - (obj[i].quantity * 10));
            context.lineTo(x, 400);
            context.stroke();

            context.font = "20px Arial";
            context.fillStyle = "brown";
            context.textAlign = 'center';
            context.fillText(obj[i].name, x, 425);
            x += 90;
            context.stroke();
        }
    }, [])
    
    return(
        <>
            <header>Color Chart</header>
            <canvas
                id="myCanvas"
                width="1000"
                height="500"
                style={{ border: "1px solid grey" }}
            >
                Your browser does not support the HTML canvas tag.
            </canvas>
            <div><Link to="/">Back Home</Link></div>
        </>
    );
}