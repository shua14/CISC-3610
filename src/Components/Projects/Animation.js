import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import smiling from './images/man-smiling.png';
import frowning from './images/man-frowning.png';

export default function Animation(){
  useEffect(() => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Create an image element for the smiling face
    const imgSmiling = new Image();
    imgSmiling.src = smiling;

    // Create an image element for the frowning face
    const imgFrowning = new Image();
    imgFrowning.src = frowning;

    let currentImg = imgSmiling; // Keep track of the current image being displayed


    // Draw the initial image on the canvas once it has loaded
    imgSmiling.onload = () => {
      ctx.drawImage(currentImg, 0, 0);
    
      // Animate the image by switching between the smiling and frowning faces
      let counter = 0;
      const animate = () => {
        ctx.clearRect(0, 0, 803, 802);

        ctx.drawImage(currentImg, 0, 0);
        ctx.font = '24px sans-serif';
        ctx.fillStyle = '#000';
        ctx.fillText('The Cycle of Life ', 150, 40);

        // Switch between the smiling and frowning faces every second
        counter += 1;
        if (counter % 60 === 0) {
          currentImg = currentImg === imgSmiling ? imgFrowning : imgSmiling;
        }

        requestAnimationFrame(animate);
      }
      animate();
    }
  }, []);

    return(
    <>
        <header>Animation</header>
            <canvas
                id="myCanvas"
                width="803"
                height="802"
                style={{ border: "1px solid #0c164f" }}
            >
                Your browser does not support the HTML canvas tag.
            </canvas>
        <br/>
        <div><Link to="/">Back Home</Link></div>
    </>
    );
};