import React,{Fragment} from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

function ChartMon () {
    ChartJS.register(ArcElement, Tooltip, Legend); 

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
      };

        const data = {
            labels: ['Testing1', 'Testing2', 'Testing3', 'Testing4', 'Testing5'],
            datasets: [
                {
                label: 'Pendaftar',
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                        "#FF6384",
                        "#63FF84",
                        "#84FF63",
                        "#8463FF",
                        "#6384FF"
                ],
                borderColor: [
                    "black"
                ],
                borderWidth: 2,
                },
            ],
        }
    return(
        <Fragment>
            <div className="h-full max-w-7xl">
                    <h2 className="text-center mb-3">Data Sebaran Penjual</h2>
                <div className="chart flex justify-center items-center h-96">
                    <Pie options={options} data={data} />
                </div>
            </div>
            
        </Fragment>
    )
}
export default ChartMon