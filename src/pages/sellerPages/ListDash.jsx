import React, { Fragment } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend,CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title, } from 'chart.js';
import { Pie,Line,Bubble,Scatter } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

// icons
import { FiSearch } from "react-icons/fi";
import { BsTrash,BsThreeDotsVertical } from "react-icons/bs";
import { GoPencil } from "react-icons/go";

const ListDas = () =>{
    ChartJS.register(ArcElement, CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend); 

const options1 = {
    scales: {
        y: {
        beginAtZero: true,
        },
    },
    };
    
const data1 = {
    datasets: [
        {
        label: 'Red dataset',
        data: Array.from({ length: 50 }, () => ({
            x: faker.datatype.number({ min: -100, max: 100 }),
            y: faker.datatype.number({ min: -100, max: 100 }),
            r: faker.datatype.number({ min: 5, max: 20 }),
        })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
        label: 'Blue dataset',
        data: Array.from({ length: 50 }, () => ({
            x: faker.datatype.number({ min: -100, max: 100 }),
            y: faker.datatype.number({ min: -100, max: 100 }),
            r: faker.datatype.number({ min: 5, max: 20 }),
        })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
    };

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
                // label: 'Pendaftar',
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                        "#FF6384",
                        "#63FF84",
                        "#84FF63",
                        "#8463FF",
                        "#6384FF"
                ],
                // borderColor: [
                //     "black"
                // ],
                borderWidth: 2,
                },
            ],
        }
    return (
        <Fragment> 
            <div className=" py-4 max-w-4xl p-4 md:mx-auto " 
                data-aos="fade-right"
                data-aos-durations="1000"
                data-aos-delay="500"
                > 
                <div className="flex"> 
                    <h2 className="font-semibold text-primary text-2xl">Dashboard </h2> 
                </div>     
                <hr></hr>
                <div className="grid mb-3 h-full grid-cols-1 md:grid-cols-3 gap-4  ">
                    <div className="h-52">
                        <div className=" card rounded-xl h-full  border bg-white p-4">
                            <div className="flex justify-between mx-auto">
                                <div>
                                    <h1 className="font-bold">Keuntungan</h1>
                                </div>
                                <div className="cursor-pointer">
                                    <BsThreeDotsVertical size={20}/>
                                </div>
                            </div>
                            
                            <div className="chart h-full">
                                <Bubble options={options1} data={data1} />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 h-52">
                        <div className=" card  rounded-xl h-full border bg-white p-4">
                            <div className="flex justify-between mx-auto">
                                <div>
                                    <h1 className="font-bold">Active</h1>
                                </div>
                                <div className="cursor-pointer">
                                    <BsThreeDotsVertical size={20}/>
                                </div>
                            </div>
                            <div className="chart h-full ">
                                <Scatter options={options1} data={data1} />
                            </div>
                        </div>
                    </div>
                    <div className="col-start-1 col-end-4 h-52">
                        <div className=" card  rounded-xl h-full border bg-[#DBD539] p-4">
                            <div className="flex justify-between mx-auto">
                                <div>
                                    <h1 className="font-bold">Active</h1>
                                </div>
                                <div className="cursor-pointer">
                                    <BsThreeDotsVertical size={20}/>
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-4">
                                <div className="">
                                    <h1>General</h1>
                                    <p>halo</p>
                                </div>
                                <div className="card border rounded-2xl w-32 h-32 bg-white">
                                    <div className="mx-4">
                                        <h1>This day</h1>
                                        <div className=" h-24 flex items-center">
                                            <h1>132 Days</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border rounded-2xl w-32 h-32 bg-white">

                                </div>
                                <div className="card border rounded-2xl w-32 h-32 bg-white">

                                </div>
                                <div className="card border rounded-2xl w-32 h-32 bg-white">

                                </div>
                                <div className="card border rounded-2xl w-32 h-32 bg-white">

                                </div>
                            </div>
                            {/* <div className="chart h-full ">
                                <Scatter options={options1} data={data1} />
                            </div> */}
                        </div>
                    </div>
                </div>
                    {/* <div className="flex justify-between">
                        <div className="list-category pt-2 flex overflow-x-auto no-scrollbar text-clip">
                            <button className=
                            'snap-center rounded-lg flex mr-4 bg-white text-[#3C3C3C] text-md px-4 py-2 hover:bg-primary hover:text-white transition ease-in-out duration-200'
                            >
                            <FiSearch className='my-auto mr-1' />
                            <span>Semua</span>
                            </button>
                            <button className='snap-center rounded-lg flex mr-4 bg-white text-text-md px-4 py-2 hover:bg-primary hover:text-white transition ease-in-out duration-200'>
                            <FiSearch className='my-auto mr-1' />
                            <span>Penjual</span>
                            </button>
                            <button className='snap-center rounded-lg flex mr-4 bg-white text-[#3C3C3C] text-md px-4 py-2 hover:bg-primary hover:text-white transition ease-in-out duration-200'>
                            <FiSearch className='my-auto mr-1' />
                            <span>Pembeli</span>
                            </button>
                        </div>

                        <div className="form-search mt-2 h-10 w-full md:w-80 bg-white rounded-lg flex text-[#8A8A8A] text-sm px-6">
                            <input className='w-full text-black bg-transparent focus:outline-none' placeholder='Cari di sini ...' alt='search' />
                            <span className='my-auto text-lg bg-transparant cursor-pointer border p-2 rounded'> <FiSearch /> </span>
                        </div>
                    </div> */}

                      {/* <div className="pt-4">
                        <div className="border-2 bg-white rounded-xl ">
                            
                            <div className="w-full h-full  px-4 py-2 ">                                
                                <table class=" w-full border border-slate-300 mx-auto table-auto">
                                <thead className="bg-gray-300 border border-slate-300">
                                    <tr className="text-left grid grid-cols-3 ">
                                        <div>
                                            <th className="  p-2">Users</th>
                                        </div>
                                        <div>
                                            <th class=" p-2">Status</th>
                                        </div>
                                        
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr className="p-4 border border-slate-300">
                                        <td className="border-slate-300">
                                            <div className="grid grid-cols-3 w-full ">
                                                <p className="p-2">tukiyem</p>
                                                <div className=" ">
                                                    <button className="border p-2 w-32 bg-lime-300">Acivate</button>
                                                </div>
                                                <div className="flex flex-row justify-end ">
                                                    <div>
                                                        <div className=" p-2"><BsTrash/></div>
                                                    </div>
                                                    <div>
                                                        <div className=" p-2"><GoPencil/></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>                
                                    </tr>
                                    <tr className="p-4 border border-slate-300">
                                        <td className="border-slate-300">
                                            <div className="grid grid-cols-3 w-full ">
                                                <p className="p-2">Darsono</p>
                                                <div className=" ">
                                                    <button className="border p-2 w-32 bg-red-500">NonActive</button>
                                                </div>
                                                <div className="flex flex-row justify-end ">
                                                    <div>
                                                        <div className=" p-2"><BsTrash/></div>
                                                    </div>
                                                    <div>
                                                        <div className=" p-2"><GoPencil/></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div> */}
            </div> 
        </Fragment>
    )
}
export default ListDas