import React, { Fragment } from "react";

// icon
import{AiOutlineInstagram} from 'react-icons/ai';
import {FaFacebookF} from 'react-icons/fa'
import {AiFillYoutube} from 'react-icons/ai'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'

function Footer(){
    return(
        <Fragment>
            <div className="relative pt-4 bg-gray-300">
                <div className="mx-8 grid grid-cols-2 py-4 md:grid-cols-5">
                    <div className="py-2"> 
                        <h1 className='font-semibold text-primary text-2xl' >Fish<span className="text-black underline decoration-primary">Venture</span>.</h1>
                        <div className="flex  flex-row  ">
                            <div className=" grid grid-cols-3 py-4 px-1 md:grid-cols-5 gap-2">
                                <div className="border-x-4 border-y-4 border-white bg-white flex justify-center items-center bg-white rounded-full">
                                    <AiOutlineInstagram size={20}/>
                                </div>
                                <div className=" border-x-4 border-y-0 border-white bg-white flex justify-center items-center  rounded-full">
                                    <FaFacebookF size={20}/>
                                </div>
                                <div className=" border-x-4 border-y-4  shadow-2xl drop-shadow-2xl border-white bg-white flex justify-center items-center  rounded-full">
                                    <AiFillYoutube size={20}/>
                                </div>
                                <div className=" border-x-4 border-y-4  shadow-2xl drop-shadow-2xl border-white bg-white flex justify-center items-center  rounded-full">
                                    <AiOutlineTwitter size={20}/>
                                </div>
                                <div className=" border-x-4 border-y-4  shadow-2xl drop-shadow-2xl border-white bg-white flex justify-center items-center  rounded-full">
                                    <BsWhatsapp size={20}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-2"> 
                        <h1 className='font-bold text-dark text-xl' >Quick Links</h1>
                        <div className="flex flex-col py-2 gap-1">  
                            <p className=" text-dark text-sm">Home</p>
                            <p className=" text-dark text-sm">About Us</p>
                            <p className=" text-dark text-sm">Offers</p>
                            <p className=" text-dark text-sm">Services</p>
                            <p className=" text-dark text-sm">Contact Us</p>
                        </div>
                    </div>
                    <div className="py-2"> 
                        <h1 className='font-bold text-dark text-xl' >About</h1>
                        <div className="flex flex-col py-2 gap-1">  
                            <p className=" text-dark text-sm">How it Work</p>
                            <p className=" text-dark text-sm">Our Packages</p>
                            <p className=" text-dark text-sm">Promotions</p>
                            <p className=" text-dark text-sm">refer A Friend</p>
                        </div>
                    </div>
                    <div className="py-2"> 
                        <h1 className='font-bold text-dark text-xl' >Help Center</h1>
                        <div className="flex flex-col py-2 gap-1">  
                            <p className=" text-dark text-sm">Payments</p>
                            <p className=" text-dark text-sm">Shipping</p>
                            <p className=" text-dark text-sm">Product Returns</p>
                            <p className=" text-dark text-sm">FAQs</p>
                            <p className=" text-dark text-sm">Checkout</p>
                            <p className=" text-dark text-sm">Other Issues</p>
                        </div>
                    </div>
                    <div className="py-2"> 
                        <h1 className='font-bold text-dark text-xl' >Quick Links</h1>
                        <div className="flex flex-col py-2 gap-1">  
                        <label className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Email
                            </span>
                            <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1" placeholder="ainun@ganteng.com" />
                            <button className="px-4 py-1 mt-4 border-2 w-full border-black bg-black hover:border-gray-500 hover:bg-gray-500 text-white font-semibold rounded-xl">
                                Send
                            </button>
                        </label>
                        </div>
                    </div>
                </div>
                <div className=" mx-8 flex py-2">
                    <AiOutlineCopyrightCircle size={20} className="text-gray-500 "/>
                    <p className="text-gray-500 text-sm">Copyright 2022 Fish<span className="underline">venture</span>. Terms & Privacy</p>
                </div>
            </div>
        </Fragment>
    )
}
export default Footer;