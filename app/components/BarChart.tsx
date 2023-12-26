"use client"

import React, { useState, useEffect } from 'react'; 
import { Bar } from 'react-chartjs-2';
import { Chart as chartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'; 

chartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend); 

const BarChart = () => {
    

    const [chartData, setChartData] = useState<any>({ datasets:[], labels:[] });
    const [chartOptions, setChartOptions] = useState<any>({}); 
    useEffect(() => {

        setChartData({
            labels: ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"],
            datasets: [{
                label: "Sales $",
                data: [18127, 2201, 19490, 17938, 24182, 17842, 22475],
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgb(53, 162, 235, 0.4)"
            }]
        });

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                },
                maintainAspectRatio: false,
                responsive: true,
            }

        }); 
        

    }, []); 



    return (
        <div className='w-full lg:h-[70vh] h-[30vh] m-auto p-4 border rounded-lg bg-white'>
                <Bar className='' data={chartData} options={chartOptions} />
            </div>   
    ); 
}; 

export default BarChart; 