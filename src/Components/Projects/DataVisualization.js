import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Chart as 
    ChartJS, 
    ArcElement, 
    Tooltip, 
    Legend, 
    CategoryScale,
    LinearScale,
    BarElement,
    Title, } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import '../../styles/DataVisualization.css';

export default function DataVisualization(){
    ChartJS.register(ArcElement, Tooltip, Legend);

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );

    const data = {
        labels: ['The Last of Us (2013)', 'Red Dead Redemption II (2018)', 'The Witcher 3: Wild Hunt (2015)', 'God of War (2018)', 'Grand Theft Auto V (2013)', 'The Elder Scrolls V: Skyrim (2011)',
                'The Legend of Zelda: Ocarina of Time (1998)', 'Grand Theft Auto: San Andreas (2004)', 'Super Mario Bros. 3 (1988)', 'Spider-Man (2018)'],
        datasets: [
            {
            label: 'Top 10 Video Games on IMDb (Jay Luxenberg)',
            data: [2951, 2043, 1425, 1254, 947, 482, 377, 350, 343, 320],
            backgroundColor: [
                'grey',
                'red',
                'blue',
                'green',
                'purple',
                'orange',
                "pink",
                "yellow",
                "maroon",
                "indigo"
            ],
            borderColor: [
                'grey',
                'red',
                'blue',
                'green',
                'purple',
                'orange',
                'pink',
                "yellow",
                "maroon",
                "indigo"

            ],
            borderWidth: 1,
            },
        ],
    };

    const options = {
        indexAxis: 'y',
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
        title: {
            display: true,
            text: 'Top 10 Video Games on IMDb (Jay Luxenberg)',
        },
        },
      }
    return(
        <>
            <header>Data Visualization</header>
            
            <div className="chart-container">     
                <div><Doughnut data={data}/></div>
                <div><Bar data={data} options={options}/></div>
            </div> 
            <div><Link to="/">Back Home</Link></div>
        </>
    );
}