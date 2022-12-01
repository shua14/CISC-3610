import React, { useEffect, useState, useRef} from "react";
import { Link } from "react-router-dom";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function VoiceRecognition(){
    const commands = [
        {
          command: "color *",
          callback: (color) => {
            setColor(color)
          },
        },
        {
          command: "size *",
          callback: (size) => {
            console.log(size)
            if(size > 300){
                let utterance = new SpeechSynthesisUtterance("Size limit 300");
                window.speechSynthesis.speak(utterance);
                setSize(300)
            } else if (size.match(/^- \d+$/) || size == "zero"){
                let utterance = new SpeechSynthesisUtterance("Size too small, the minimize size is 1");
                window.speechSynthesis.speak(utterance);
                setSize(1)
            } else {
                setSize(size)
            }
          },
        },
        {
            command: "help",
            callback: () => {
                let utterance = new SpeechSynthesisUtterance("Say color, followed by a color, to set the circle color. Say size, followed of a number from 1 to 300, to set the diameter of the circle.");
                window.speechSynthesis.speak(utterance);
            },
          },
        ,
    ]
    
    const [color, setColor] = useState("black");
    const [size, setSize] = useState(50);
    const [isListening, setIsListening] = useState(false);
    const { transcript, resetTranscript } = useSpeechRecognition({ commands });
    const microphoneRef = useRef(null);

    useEffect(() => {
        const c = document.getElementById("myCanvas");
        const context = c.getContext("2d");
        context.fillStyle = "#FF7276"
        context.fillRect(0, 0, 1000, 500)
        context.stroke();

        context.beginPath();
        context.arc(500, 250, size, 0, 2 * Math.PI);
        context.fillStyle = color
        context.fill();
        
    }, [color, size])

    const handleListing = () => {
        setIsListening(true);
        microphoneRef.current = "listening";
        SpeechRecognition.startListening({
          continuous: true,
        });

    };

    const stopHandle = () => {
        setIsListening(false);
        microphoneRef.current = "not listening";
        SpeechRecognition.stopListening();
    };

    return(
        <>
            <header>Speech Recognition</header>
            <canvas
                id="myCanvas"
                width="1000"
                height="500"
                style={{ border: "1px solid grey" }}
            >
                Your browser does not support the HTML canvas tag.
            </canvas><br/>
            {!isListening && 
                <button type="button" onClick={handleListing}>Start Listening</button>
            }
            {isListening && 
                <button type="button" onClick={stopHandle}>Stop Listening</button>
            }
            &ensp; Say "help" to hear instructions
            <div><Link to="/">Back Home</Link></div>
        </>
    );
}