/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-deprecated */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const ChartLine = () => {
    const Alldata = [
        {
            period: '1year', data: {
                labels: ['مرداد 98', 'دی 98', 'خرداد 99', 'مهر 99', 'فروردین 1400', 'مهر 1400', 'فروردین 1401', 'آبان 1401'],
                datasets: [
                    {
                        label: 'بورس',
                        data: [2, 2.5, 5, 7, 6, 5.5, 5, 5.5],
                        borderColor: 'rgb(54, 162, 235)',
                    },
                    {
                        label: 'طلا',
                        data: [2, 2.2, 3, 3.5, 3.8, 4, 4.5, 5],
                        borderColor: 'rgb(255, 206, 86)',
                        backgroundColor: 'rgba(255, 206, 86, 0.2)',
                        fill: true,
                        tension: 0.1
                    },
                    {
                        label: 'ارز',
                        data: [2, 2.1, 2.5, 2.7, 3, 3.2, 3.5, 4],
                        borderColor: 'rgb(75, 192, 192)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    },
                    {
                        label: 'مسکن',
                        data: [2, 2.05, 2.1, 2.3, 2.6, 2.8, 3, 3.2],
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    }
                ]
            }
        },
        {
            period: '5year', data: {
                labels: ['مرداد 98', 'دی 98', 'خرداد 99', 'مهر 99', 'فروردین 1400', 'مهر 1400', 'فروردین 1401', 'آبان 1401', 'مرداد 98', 'دی 98', 'خرداد 99', 'مهر 99', 'فروردین 1400', 'مهر 1400', 'فروردین 1401', 'آبان 1401'],
                datasets: [
                    {
                        label: 'بورس',
                        data: [2, 2.5, 5,  6,  5, 5.5, 2, 2.5, 5, 5, 5.5],
                        borderColor: 'rgb(54, 162, 235)',
                    },
                    {
                        label: 'طلا',
                        data: [2, 2.2, 3, 3.5, 3.8, 4, 4.5, 5, 2, 2.1, 2.5, 2.7, 3, 3.2, 3.5, 4],
                        borderColor: 'rgb(255, 206, 86)',
                        backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    },
                    {
                        label: 'ارز',
                        data: [2, 2.1, 2.5, 2, 3, 3.2, 3.5, 4, 2, 2.1, 2.5, 2.7, 3, 3.2, 3.5, 4],
                        borderColor: 'rgb(75, 192, 192)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    },
                    {
                        label: 'مسکن',
                        data: [2, 2.05, 2.1, 2.3, 2.6, 2.8, 3, 3.2, 2, 2.05, 2.1, 2.3, 2.6, 2.8, 3, 3.2],
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    }
                ]
            }
        }
    ];

    const [data, setData] = useState(Alldata[0].data);

    const handleOneClick = () => {
        setData(Alldata[0].data);
    }

    const handleFiveClick = () => {
        setData(Alldata[1].data);
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'مقایسه سرمایه‌گذاری',
            },
        },
        scales: {
            x: {
                display: false,
            },
            
            x: {
                ticks: {
                    maxRotation: 0,
                    minRotation: 0,
                }
            }
        },
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 10,
                bottom: 10
            }
        }
    };

    return (
        <div className="container mx-auto p-4 read-only: h-[2000px] w-[2000px] mt-0 " >
            <h1 className="text-2xl font-bold mb-4">نمودار سرمایه‌گذاری</h1>
            <div className="bg-white p-4 shadow-lg rounded-lg">
                <div className='flex justify-end gap-3'>
                    <button className='bg-blue-50 border-2 rounded-lg p-2 px-2 text-gray-700 focus:bg-blue-900 focus:text-white' onClick={handleOneClick}>1سال اخیر</button>
                    <button className='bg-blue-50 border-2 rounded-lg p-2 px-2 text-gray-700 focus:bg-blue-900 focus:text-white' onClick={handleFiveClick}>5سال اخیر</button>
                </div>
                <Line data={data} options={options} />
            </div>
        </div>
    );
}

export default ChartLine;
