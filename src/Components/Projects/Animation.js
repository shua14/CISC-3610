import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import astronaut from './images/astronaut.png';
import spaceship from './images/spaceship.png';

export default function Animation(){
    
    function Astronaut(image, x, y) {
        this.image = image
        this.x = 465
        this.y = 153
    }
    
    useEffect(() => {
        const c = document.getElementById("myCanvas");
        const context = c.getContext("2d");
        context.fillStyle = '#0c164f'
        context.fillRect(0, 0, 1000, 500)
        context.stroke();

        context.beginPath();
        context.arc(500, 650, 400, 0, 2 * Math.PI);
        context.fillStyle = "#F4F6F0";
        context.strokeStyle = "#F4F6F0";
        context.fill();
        context.stroke();


        let frameCount = 0;
        let animationFrameId
        let man;

        const load_astronaut = () => {
            
            let base_image = new Image();
            base_image.src = astronaut;
            base_image.onload = function(){
                context.drawImage(base_image, 465, 153, 70, 100);
                context.restore();
            }

            man = new Astronaut(base_image, 465, 153)
            // frameCount++
            // draw(context, frameCount)
            // animationFrameId = window.requestAnimationFrame(load_astronaut)
        }
        context.save();
        load_astronaut();

        const load_spaceship = () => {
            let base_image = new Image();
            base_image.src = spaceship;

            base_image.onload = function(){
                rotate_image()
                context.drawImage(base_image, 140, 170, 300, 200);
                context.restore();
            }

            function rotate_image(){
                context.rotate(349*Math.PI/180)
            }
        }
        load_spaceship();

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }

    }, [])

    return(
        <>
            <header>Animation</header>
            <canvas
                id="myCanvas"
                width="1000"
                height="500"
                style={{ border: "1px solid #0c164f" }}
            >

                Your browser does not support the HTML canvas tag.
            </canvas>
            <br/>
            <div><Link to="/">Back Home</Link></div>
        </>
    );
}