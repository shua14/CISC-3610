import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TextForm(){
    const[name, setName] = useState("");
    const[backgroundcolor, setBackgroundColor] = useState("");
    const[textcolor, setTextColor] = useState("");
    const[fontsize, setFontSize] = useState(30);
    const[font, setFont] = useState("");

    useEffect(() => {
        const c = document.getElementById("myCanvas");
        const context = c.getContext("2d");
        
        context.fillStyle = backgroundcolor;
        context.fillRect(0, 0, 1000, 500)
        context.stroke();

        context.font = fontsize + "px " + font;
        context.fillStyle = textcolor;
        context.fillText(name, 400, 250)

    }, [name, backgroundcolor, textcolor, fontsize, font])

    const handleNameSelect = (event) => {
       setName(event.target.value)
    }
    
    const handleBackgroundColorSelect = (event) => {
        setBackgroundColor(event.target.value)
    }

    const handleTextColorSelect = (event) => {
        setTextColor(event.target.value)
    }

    const handleFontSizeSelect = (event) => {
        setFontSize(event.target.value)
    }

    const handleFontSelect = (event) => {
        setFont(event.target.value)
    }

    return(
        <>
            <header>Text Form</header>
            <canvas
                id="myCanvas"
                width="1000"
                height="500"
                style={{ border: "1px solid grey" }}
            >
                Your browser does not support the HTML canvas tag.
            </canvas>
            <form>
                <label for="name">Name: </label>
                <input type="text" id="name" name="name" onChange={handleNameSelect} ></input><br/>
                <label for="backgroundcolor">Background Color: </label>
                <input type="color" id="backgroundcolor" onChange={handleBackgroundColorSelect}></input><br/>
                <label for="textcolor">Text Color: </label>
                <input type="color" id="textcolor" onChange={handleTextColorSelect}></input><br/>
                <label for="textsize">Text Size: </label>
                <input type="range" min="12" max="48" class="slider" id="textsize" onChange={handleFontSizeSelect}></input><br/>
                
                <input type="radio" id="couriernew" name="fav_language" value="Courier New" onClick={handleFontSelect}></input>
                <label for="couriernew">Courier New</label><br/>
                <input type="radio" id="timesnewroman" name="fav_language" value="Times New Roman" onClick={handleFontSelect}></input>
                <label for="timesnewroman">Times New Roman</label><br/>
                <input type="radio" id="helvetica" name="fav_language" value="Helvetica" onClick={handleFontSelect}></input>
                <label for="helvetica">Helvetica</label>
            </form>
            <div><Link to="/">Back Home</Link></div>
        </>
    );
}