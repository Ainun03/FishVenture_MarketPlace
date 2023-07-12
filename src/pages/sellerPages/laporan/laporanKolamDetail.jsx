import React, { Fragment, useState } from "react";

// icons
import { IoChevronBackCircle } from 'react-icons/io5';
import { BsFillChatDotsFill,BsCalendar4Week,BsTelephone } from 'react-icons/bs';
import {BiTime,BiMap} from 'react-icons/bi'

// route
import CardSeller from "../../../components/sellers/card/card";
import AddProductButton from "../../../components/sellers/button/AddProductButton";
// redux
import { useNavigate, useParams } from 'react-router-dom';

function KolamDetail(){
    const navigate = useNavigate();

    return(
        <Fragment>
            <div className="relative bg-gradient-to-r from-[#A2DBFA] to-[#39A2DB]  ">
                <div className='bg-transparent absolute z-10'>
                    <IoChevronBackCircle className='m-3 cursor-pointer' size={30} color={'#E2D4F0'} onClick={() => navigate('/')} />
                </div>
                <div className='container mx-auto max-w-4xl pt-0 pb-20 md:py-7 relative'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-x-0 md:gap-6'>
                        {/* Carousel */}
                        <div className='col-span-2 text-center '
                        data-aos="fade-right"
                        data-aos-durations="1000"
                        data-aos-delay="500">
                            <img className="rounded-2xl" src='/assets/images/IMG_0003.JPG' alt='product'/>
                        </div>
                        {/* End Carousel */}
                        <div className='-mt-14 md:flex  md:flex-col md:items-center md:justify-center md:mt-0 md:static relative container mx-auto max-w-sm md:max-w-none md:mx-0' 
                        data-aos="fade-left"
                        data-aos-durations="1000"
                        data-aos-delay="500">
                            <div className='rounded-xl w-full bg-primary mb-6 bg-gray-300'>
                                <div className='shadow-main h-46  rounded-2xl p-4'>
                                    <div className="flex justify-between">
                                        
                                        <div className=" flex items-center justify-center">
                                            <strong className='font-semibold text-2xl'>Anonymous</strong>
                                        </div>
                                        <div>
                                            <img className='w-10 h-10 rounded-md' src="/assets/images/nyet.jpg" alt='profile' />
                                        </div>
                                    </div>
                                    <div className='info-profile pt-2'>
                                        {/* <strong className='text-sm font-medium'>{productData ? (productData.users.username).charAt(0).toUpperCase() + (productData.users.username).slice(1).toLowerCase() : 'Anonymous'}</strong> */}
                                        <div className="flex pt-2">
                                            <div className="">
                                                <BiMap size={20} className="text-primary"/>
                                            </div>
                                            <div className="">
                                                <p className='text-xs ml-2 text-neutralGray'>Jl. Kemang Sel. No.99, RT.1/RW.2, Bangka, Kec. Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12730</p>
                                            </div>
                                        </div>
                                        <div className="flex pt-2">
                                            <div>
                                                <BsTelephone size={15} className="text-primary"/>
                                            </div>
                                            <div>
                                                <p className='text-xs ml-3 text-neutralGray'>(021) 71790991</p>
                                            </div>
                                        </div>
                                        {/* <p className='text-xs text-neutralGray'>{productData ? (productData.users.city).charAt(0).toUpperCase() + (productData.users.city).slice(1).toLowerCase() : 'Anonymous'}</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className='btn pt-4 w-full hidden md:block'>
                                <div className=' flex gap-3'>
                                    <div className=" rounded-xl text-white bg-[#39A2DB] hover:bg-[#A2DBFA] p-1 "> 
                                        <BsFillChatDotsFill className="p-1" size={25}/>
                                    </div>
                                    <div className="w-full "> 
                                        <button className='bg-[#39A2DB] hover:bg-[#A2DBFA] p-2  text-white w-full rounded-xl  text-sm transition ease-in-out duration-300 disabled:opacity-40'>
                                            Hubungi Penjual
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                            <div className='col-span-2 md:col-span-4 container mx-auto max-w-sm md:max-w-none'
                            data-aos="fade-left"
                            data-aos-durations="1000"
                            data-aos-delay="500">
                                <h1 className="font-bold text-lg text-gray-700">Jenis Ikan</h1>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <CardSeller/>
                                    <CardSeller/>
                                    <CardSeller/>
                                    <CardSeller/>
                                    {/* <AddProductButton/> */}
                                </div>
                                
                            </div>
                        {/* button mobile */}
                        <div className='md:hidden fixed  w-full bottom-5 px-5'>   
                            <div className=' flex gap-3'>
                                <div className=" cursor-pointer rounded-xl text-white bg-[#39A2DB] hover:bg-[#A2DBFA]  p-2 "> 
                                    <BsFillChatDotsFill  size={25}/>
                                </div>  
                                <div className="w-full">
                                    <button   className='bg-[#39A2DB] hover:bg-[#A2DBFA] text-white w-full rounded-2xl py-[10px] text-sm transition ease-in-out duration-300 disabled:opacity-40'>
                                        Hubungi Penjual
                                    </button>
                                </div>            
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
export default KolamDetail