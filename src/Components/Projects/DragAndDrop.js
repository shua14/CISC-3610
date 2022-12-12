import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import jungle from './images/jungle.jpg';
import iceberg from './images/iceberg.jpg';
import island from './images/island.jpg';
import junglesound from "./audio/jungle-sound.mp3"
import icebergsound from "./audio/iceberg-sound.mp3"
import islandsound from "./audio/island-sound.mp3"

export default function DragAndDrop() {
  const [background, setBackground] = useState(jungle);
  const [isPlaying, setIsPlaying] = useState(false);
  const [song, setSong] = useState(new Audio(junglesound));

  const canvasRef = useRef(null);

  const handleBackgroundChange = (event) => {
    setBackground(event.target.value);

    if(background == jungle){
        setSong(new Audio(junglesound));
    } else if(background == iceberg){
        setSong(new Audio(icebergsound));
    } else {
        setSong(new Audio(islandsound));
    }
  };

    const handlePlaySound = () => {
        setIsPlaying(!isPlaying);

        if (isPlaying) {
            song.play();
        } else {
            song.pause();
            song.currentTime = 0;
        }
    };
  

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const image = new Image();
    image.src = background;
    
    image.onload = () => {
      ctx.drawImage(image, 0, 0);
    }
  }, [background, canvasRef, handlePlaySound]);

  return (
    <>
      <header>Drag and Drop</header>
            <canvas
                ref={canvasRef}
                width="1000"
                height="600"
                style={{ border: "1px solid #0c164f" }}
            >
                Your browser does not support the HTML canvas tag.
            </canvas>
        <br />
      <select onChange={handleBackgroundChange}>
        <option value={jungle}>Jungle</option>
        <option value={iceberg}>Iceberg</option>
        <option value={island}>Island</option>
      </select>
      <button onClick={handlePlaySound}>
        {isPlaying ? 'Stop sound' : 'Play sound'}
      </button>
      {/* add more buttons for sound effects here */}
      <br/>
        <div><Link to="/">Back Home</Link></div>
    </>
    
  );
};
