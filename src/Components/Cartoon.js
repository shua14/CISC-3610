import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import '../styles/Cartoon.css'


export default function Cartoon(){
    useEffect(() => {
        //background
        const c = document.getElementById("myCanvas");
        const context = c.getContext("2d");
        context.fillStyle = 'skyblue'
        context.fillRect(0, 0, 1000, 500)
        
        //grass
        for(let i = 0; i < 1000; i = i + 2){
            context.beginPath();
            context.moveTo(i, 500);
            if(i % 10 === 0){
                context.quadraticCurveTo(i, 470, i + 10, 470)
            } else{
                context.quadraticCurveTo(i, 470, i, 470)
            }
            context.strokeStyle = 'green';
            context.stroke();
        }

        //sun
        context.beginPath();
        context.arc(120, 100, 50, 0, 2 * Math.PI);
        context.fillStyle = "yellow";
        context.fill();
        context.strokeStyle = 'yellow';
        context.stroke();
    
        //top
        context.beginPath();
        context.lineWidth = 10;
        context.moveTo(120, 10);
        context.lineTo(120, 35);
        context.stroke();
        
        //top-right-diag
        context.beginPath();
        context.lineWidth = 10;
        context.moveTo(190, 30);
        context.lineTo(170, 50);
        context.stroke();
        
        //horizontal-line right
        context.beginPath();
        context.lineWidth = 10;
        context.moveTo(120, 165);
        context.lineTo(120, 190);
        context.stroke();

        //bottom-right-diag
        context.beginPath();
        context.lineWidth = 10;
        context.moveTo(200, 165);
        context.lineTo(180, 145);
        context.stroke();

        //bottom
        context.beginPath();
        context.lineWidth = 10;
        context.moveTo(20, 100);
        context.lineTo(45, 100);
        context.stroke();

        //bottom-left-diag
        context.beginPath();
        context.lineWidth = 10;
        context.moveTo(70, 155);
        context.lineTo(50, 175);
        context.stroke();

        //horizontal-line left
        context.beginPath();
        context.lineWidth = 10;
        context.moveTo(190, 100);
        context.lineTo(215, 100);
        context.stroke();

        //top-left-diag
        context.beginPath();
        context.lineWidth = 10;
        context.moveTo(45, 30);
        context.lineTo(65, 50);
        context.stroke();

        //dirt
        context.beginPath();
        context.fillStyle = "#9b7653";
        context.strokeStyle = '#9b7653';
        context.rect(0, 500, 1000, 0);
        context.stroke();

        //house structure
        context.beginPath();
        context.fillStyle = "#FAA0A0";
        context.strokeStyle = "#FAA0A0";
        context.fillRect(550, 300, 300, 300);
        context.stroke();
    
        //roof
        context.beginPath();
        context.fillStyle = "grey";
        context.moveTo(550, 300);
        context.lineTo(850, 300);
        context.lineTo(700, 200);
        context.fill();

        //window left 
        context.beginPath();
        context.fillStyle = "blue";
        context.strokeStyle = "blue";
        context.fillRect(580, 350, 50, 75);
        context.stroke();

        //window left horzional line 
        context.beginPath();
        context.strokeStyle = "white";
        context.lineWidth = 5;
        context.moveTo(580, 390);
        context.lineTo(630, 390);
        context.stroke();

        //window left vertical line 
        context.beginPath();
        context.strokeStyle = "white";
        context.lineWidth = 5;
        context.moveTo(605, 350);
        context.lineTo(605, 425);
        context.stroke();

        //window right 
        context.beginPath();
        context.fillStyle = "blue";
        context.strokeStyle = "blue";
        context.fillRect(770, 350, 50, 75);
        context.stroke();

        //window right horzional line
        context.beginPath();
        context.strokeStyle = "white";
        context.lineWidth = 5;
        context.moveTo(770, 390);
        context.lineTo(820, 390);
        context.stroke();

        //window right vertical line 
        context.beginPath();
        context.strokeStyle = "white";
        context.lineWidth = 5;
        context.moveTo(795, 350);
        context.lineTo(795, 425);
        context.stroke();

        //door 
        context.beginPath();
        context.fillStyle = "brown";
        context.strokeStyle = "brown";
        context.fillRect(675, 400, 50, 200);
        context.stroke();

        //doorknob
        context.beginPath();
        context.arc(712, 450, 8, 0, 2 * Math.PI);
        context.fillStyle = "gold";
        context.fill();
        context.stroke();

        //text 
        context.font = "30px Arial";
        context.fillStyle = "purple";
        context.fillText("House on the prairie", 700, 100);

    })
    
    return(
        <>
            <div className="cartoon_text">Cartoon</div>
            <canvas
                id="myCanvas"
                width="1000"
                height="500"
                style={{ border: "1px solid skyblue" }}
            >
                Your browser does not support the HTML canvas tag.
            </canvas>
            <div><Link to="/">Back Home</Link></div>
        </>
    );
}