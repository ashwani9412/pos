"use client";
import React, { useEffect, useState } from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";


const DashboardLineChart = () => {
  let chartData:any = {
    data: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Rainfall",
          fill: false,
          lineTension: 0.5,
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: [65, 59, 80, 81, 56],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Line Chart",
        },
      },
    },
  };
  useEffect(() => {
    console.log(chartData);
    
  },[chartData]);

  return (
    <div>
      <Line data={chartData?.data} options={chartData?.options} />
    </div>
  );
}

export default DashboardLineChart;

// import Chart from 'chart.js/auto';
// import React, { useEffect, useRef } from 'react';

// export default function DashboardLineChart() {

//     const canvasEl:any = useRef(null);

//     const colors = {
//       purple: {
//         default: 'rgba(149, 76, 233, 1)',
//         half: 'rgba(149, 76, 233, 0.5)',
//         quarter: 'rgba(149, 76, 233, 0.25)',
//         zero: 'rgba(149, 76, 233, 0)',
//       },
//       indigo: {
//         default: 'rgba(80, 102, 120, 1)',
//         quarter: 'rgba(80, 102, 120, 0.25)',
//       },
//     };

//     useEffect(() => {
//       const ctx = canvasEl.current.getContext('2d');
//       // const ctx = document.getElementById("myChart");

//       const gradient = ctx.createLinearGradient(0, 16, 0, 600);
//       gradient.addColorStop(0, colors.purple.half);
//       gradient.addColorStop(0.65, colors.purple.quarter);
//       gradient.addColorStop(1, colors.purple.zero);

//       const weight = [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2];

//       const labels = [
//         'Week 1',
//         'Week 2',
//         'Week 3',
//         'Week 4',
//         'Week 5',
//         'Week 6',
//         'Week 7',
//         'Week 8',
//         'Week 9',
//         'Week 10',
//       ];
//       const data = {
//         labels: labels,
//         datasets: [
//           {
//             backgroundColor: gradient,
//             label: 'My First Dataset',
//             data: weight,
//             fill: true,
//             borderWidth: 2,
//             borderColor: colors.purple.default,
//             lineTension: 0.2,
//             pointBackgroundColor: colors.purple.default,
//             pointRadius: 3,
//           },
//         ],
//       };
//       const config:any = {
//         type: 'line',
//         data: data,
//       };
//       const myLineChart = new Chart(ctx, config);

//       return function cleanup() {
//         myLineChart.destroy();
//       };
//     });

//   return (
//     <div>
//         <canvas id="myChart" ref={canvasEl} height="100" />
//     </div>
//   )
// }
