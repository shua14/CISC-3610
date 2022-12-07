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

// import React, { useRef, useEffect, useState } from 'react';

// export default function Animation(){
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');

//     // Set the canvas dimensions to match the image
//     const image = new Image();
//     image.src = './images/astronaut.png';
//     image.onload = () => {
//       canvas.width = image.width;
//       canvas.height = image.height;
//     };

//     // Draw the image on the canvas
//     ctx.drawImage(image, 0, 0);

//     // Animate the image by moving it horizontally across the canvas
//     let xPos = 0;
//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.drawImage(image, xPos, 0);

//       xPos += 1;
//       if (xPos > canvas.width) {
//         xPos = 0;
//       }

//       requestAnimationFrame(animate);
//     };

//     animate();
//   }, []);

//   return <canvas ref={canvasRef} />;
// }


// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import astronaut from './images/astronaut.png';
// import spaceship from './images/spaceship.png';

// export default function Animation(){
    
//     function Astronaut(image, x, y) {
//         this.image = image
//         this.x = 465
//         this.y = 153
//     }
    
//     useEffect(() => {
//         const c = document.getElementById("myCanvas");
//         const context = c.getContext("2d");
//         context.fillStyle = '#0c164f'
//         context.fillRect(0, 0, 1000, 500)
//         context.stroke();

//         context.beginPath();
//         context.arc(500, 650, 400, 0, 2 * Math.PI);
//         context.fillStyle = "#F4F6F0";
//         context.strokeStyle = "#F4F6F0";
//         context.fill();
//         context.stroke();

//         let frameCount = 0;
//         let animationFrameId
//         let man;


//         const load_astronaut = () => {
            
//             let base_image = new Image();
//             base_image.src = astronaut;
//             base_image.onload = function(){
//                 context.drawImage(base_image, 465, 153, 70, 100);
//                 context.restore();
//             }

//             man = new Astronaut(base_image, 465, 153)
//             // frameCount++
//             // draw(context, frameCount)
//             // animationFrameId = window.requestAnimationFrame(load_astronaut)
//         }
//         context.save();
//         load_astronaut();

//         const load_spaceship = () => {
//             let base_image = new Image();
//             base_image.src = spaceship;

//             base_image.onload = function(){
//                 rotate_image()
//                 context.drawImage(base_image, 140, 170, 300, 200);
//                 context.restore();
//             }

//             function rotate_image(){
//                 context.rotate(349*Math.PI/180)
//             }
//         }
//         load_spaceship();

//         let x = 10;
//         let y = 0;
//         let dx = 20;
//         let dy = 40;

//         const animate = () => {
//             // // Clear the canvas on each frame
//             // context.clearRect(0, 0, 1000, 500);
    
//             // Draw a circle on the canvas
//             context.beginPath();
//             context.arc(x, y, 50, 0, Math.PI * 2, false);
//             context.fillStyle = "red";
//             context.fill();
    
//             // Update the position of the circle for the next frame
//             x += dx;
//             y += dy;
    
//             // Check if the circle has reached the edge of the canvas
//             if (x + 50 > 1000 || x - 50 < 0) {
//             dx = -dx;
//             }
//             if (y + 50 > 500 || y - 50 < 0) {
//             dy = -dy;
//             }
    
//             // Use requestAnimationFrame to animate the canvas
//             requestAnimationFrame(animate);
//         };
    
//         // Start the animation
//         animate();

//     }, [])

//     return(
//         <>
//             <header>Animation</header>
//             <canvas
//                 id="myCanvas"
//                 width="1000"
//                 height="500"
//                 style={{ border: "1px solid #0c164f" }}
//             >
//                 Your browser does not support the HTML canvas tag.
//             </canvas>
//             <br/>
//             <div><Link to="/">Back Home</Link></div>
//         </>
//     );
// }

// import React, { useRef, useEffect } from "react";

// export default function Animation(){
//   // Create a reference to the canvas element
//   const canvasRef = useRef(null);

//   // Use the useEffect hook to animate the canvas
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     // Set the canvas dimensions to match the size of the screen
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     // Define some variables to use in the animation
//     let x = 0;
//     let y = 0;
//     let dx = 20;
//     let dy = 40;

//     // Create a function to animate the canvas
//     const animate = () => {
//       // Clear the canvas on each frame
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // Draw a circle on the canvas
//       ctx.beginPath();
//       ctx.arc(x, y, 50, 0, Math.PI * 2, false);
//       ctx.fillStyle = "red";
//       ctx.fill();

//       // Update the position of the circle for the next frame
//       x += dx;
//       y += dy;

//       // Check if the circle has reached the edge of the canvas
//       if (x + 50 > canvas.width || x - 50 < 0) {
//         dx = -dx;
//       }
//       if (y + 50 > canvas.height || y - 50 < 0) {
//         dy = -dy;
//       }

//       // Use requestAnimationFrame to animate the canvas
//       requestAnimationFrame(animate);
//     };

//     // Start the animation
//     animate();
//   }, []); // The empty array ensures that the effect only runs once

//   return (
//     <canvas ref={canvasRef} />
//   );
// };



// import React, { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import astronaut from './images/astronaut.png';
// import spaceship from './images/spaceship.png';

// export default function Animation(){
    
//     function Astronaut(image, x, y) {
//         this.image = image
//         this.x = 465
//         this.y = 153
//     }
    
//     useEffect(() => {
//         const c = document.getElementById("myCanvas");
//         const context = c.getContext("2d");
//         context.fillStyle = '#0c164f'
//         context.fillRect(0, 0, 1000, 500)
//         context.stroke();

//         context.beginPath();
//         context.arc(500, 650, 400, 0, 2 * Math.PI);
//         context.fillStyle = "#F4F6F0";
//         context.strokeStyle = "#F4F6F0";
//         context.fill();
//         context.stroke();

//         const requestIdRef = useRef(null);

//     const tick = () => {
//     // ...
//         requestIdRef.current = requestAnimationFrame(tick);
//     };


//         let frameCount = 0;
//         let animationFrameId
//         let man;

//         const load_astronaut = () => {
            
//             let base_image = new Image();
//             base_image.src = astronaut;
//             base_image.onload = function(){
//                 context.drawImage(base_image, 465, 153, 70, 100);
//                 context.restore();
//             }

//             man = new Astronaut(base_image, 465, 153)
//             // frameCount++
//             // draw(context, frameCount)
//             // animationFrameId = window.requestAnimationFrame(load_astronaut)
//         }
//         context.save();
//         load_astronaut();

//         const load_spaceship = () => {
//             let base_image = new Image();
//             base_image.src = spaceship;

//             base_image.onload = function(){
//                 rotate_image()
//                 context.drawImage(base_image, 140, 170, 300, 200);
//                 context.restore();
//             }

//             function rotate_image(){
//                 context.rotate(349*Math.PI/180)
//             }
//         }
//         load_spaceship();

//         return () => {
//             window.cancelAnimationFrame(animationFrameId)
//         }

//     }, [])

//     return(
//         <>
//             <header>Animation</header>
//             <canvas
//                 id="myCanvas"
//                 width="1000"
//                 height="500"
//                 style={{ border: "1px solid #0c164f" }}
//             >
//                 Your browser does not support the HTML canvas tag.
//             </canvas>
//             <br/>
//             <div><Link to="/">Back Home</Link></div>
//         </>
//     );
// }