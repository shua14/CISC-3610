import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jukebox from "./images/jukebox.jpeg"
import cow from "./audio/moo.mp3"
import horse from "./audio/neigh.mp3"
import duck from "./audio/quack.mp3"
import pig from "./audio/oink.mp3"
import lion from "./audio/roar.mp3"

export default function SoundMachine(){
    
    const soundOfCow = () => {
        return new Audio(cow).play();
    }

    const soundOfHorse = () => {
        return new Audio(horse).play();
    }

    const soundOfDuck = () => {
        return new Audio(duck).play();
    }

    const soundOfPig = () => {
        return new Audio(pig).play();
    }

    const soundOfLion = () => {
        return new Audio(lion).play();
    }
    
    return(
        <>
            <header>Sound Machine</header>
            <img src={jukebox} useMap="#image_map"/>
            <map name="image_map">
                <area alt="Cow" title="Cow" onClick={soundOfCow} coords="25,223,145,418" shape="rect"/>
                <area alt="Horse" title="Horse" onClick={soundOfHorse} coords="147,221,271,418" shape="rect"/>
                <area alt="Dog" title="Duck" onClick={soundOfDuck} coords="274,219,399,420" shape="rect"/>
                <area alt="Pig" title="Pig" onClick={soundOfPig} coords="403,223,524,418" shape="rect"/>
                <area alt="Bear" title="Lion" onClick={soundOfLion} coords="528,222,647,415" shape="rect"/>
            </map>


            <div><Link to="/">Back Home</Link></div>
        </>
    );
}