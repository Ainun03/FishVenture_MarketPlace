import React,{Fragment} from "react";

// icons
import {BsNewspaper} from 'react-icons/bs'
import {FaStethoscope,FaUserAlt} from 'react-icons/fa'
import {MdOutlineInventory} from 'react-icons/md'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import { FiUser } from "react-icons/fi";

import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const SideMon = () => {
    const location = useLocation();
    console.log(location);
    return(
        <Fragment>
            {/* <div className="relative"> */}
                <div className="bg-gradient-to-r from-[#39A2DB]  to-[#256D85] text-white border drop-shadow-md shadow-2xl shadow-slate-500 px-4 w-72 ">
                    <div className="">
                        <Link to="/home-mon">
                            <div className={
                            "mt-4 absolute " +
                            (location.pathname === "/home-mon" ||
                            location.pathname === "/home-mon/"
                                ? "active-state text-[#0172AF]"
                                : "nonActive-state")}
                            >
                                <AiOutlineHome size={30}/>
                            </div>
                        </Link>

                        <div className=" h-full py-10 ">
                            <div className="mt-10">
                                <hr></hr>
                                <Link to="/home-mon/chart">
                                    <div className={
                                            "home p-2 flex gap-3 hover:text-[#0172AF] " +
                                            (location.pathname === "/home-mon/chart" ||
                                            location.pathname === "/home-mon/chart/"
                                            ? "active-state text-[#0172AF] bg-gray-200 "
                                            : "nonActive-state")
                                    }>
                                        <div className=" flex justify-center items-center">
                                            <FaUserAlt size={25} />
                                        </div>
                                        <div>
                                            <h1>Anonymous  <p className="font-thin text-sm">Admin</p> </h1>     
                                        </div>
                                    </div>
                                </Link>
                                <hr></hr>
                            </div>
                            <div className="pt-6">
                                <p className="font-normal text-sm text-gray-700">Menu</p>
                            </div>
                            <Link to="/home-mon/chart">
                                <div className={
                                        "home text-center mt-2 p-2 flex gap-3 hover:text-[#0172AF] " +
                                        (location.pathname === "/home-mon/chart" ||
                                        location.pathname === "/home-mon/chart/"
                                        ? "active-state text-[#0172AF] bg-gray-200 "
                                        : "nonActive-state")
                                }>
                                    <div className=" flex justify-center items-center">
                                        <BsNewspaper size={25} />
                                    </div>
                                    <h1>Dashboard</h1>
                                </div>
                            </Link>
                            
                            <Link to="/home-sel/inventory">
                                <div className={
                                    "home text-center mt-2 p-2 flex gap-3  hover:text-[#0172AF] " +
                                    (location.pathname === "/home-sel/inventory" ||
                                    location.pathname === "/home-sel/inventory"
                                    ? "active-state text-[#0172AF] bg-gray-200"
                                    : "nonActive-state")
                                }> 
                                    <div className=" flex justify-center items-center">
                                        <FaStethoscope size={25} />
                                    </div>
                                    <h1>Data </h1>
                                </div>
                            </Link>
                            
                            <Link to="/home-sel/inventory">
                                <div className={
                                    "home text-center flex p-2 gap-3 mt-2 hover:text-[#0172AF] " +
                                    (location.pathname === "/home-sel/inventory" ||
                                    location.pathname === "/home-sel/inventory"
                                    ? "active-state text-[#0172AF] bg-gray-200 "
                                    : "nonActive-state")
                                }> 
                                    <div className=" flex justify-center items-center">
                                        <MdOutlineInventory size={25} />
                                    </div>
                                    <h1>Inventory</h1>
                                </div>
                            </Link>
                            
                            <Link to="/home-sel/laporan">
                                <div className={
                                    "home text-center mt-2 p-2 flex gap-3 hover:text-[#0172AF] " +
                                    (location.pathname === "/home-sel/laporan" ||
                                    location.pathname === "/home-sel/laporan"
                                    ? "active-state text-[#0172AF] bg-gray-200"
                                    : "nonActive-state")

                                }> 
                                    <div className=" flex justify-center items-center">
                                        <FiUser size={25} />
                                    </div>
                                    <h1>Profile</h1>
                                </div>
                            </Link>
                        </div>

                        <div className=" justify-center items-end flex h-44">
                            <Link to="/home-mon">
                                <div className={
                                "mt-4 " +
                                (location.pathname === "/home-mon" ||
                                location.pathname === "/home-mon/"
                                    ? "active-state text-[#0172AF]"
                                    : "nonActive-state")}
                                >
                                    {/* <AiOutlineHome size={30}/> */}
                                    <h1 className="tracking-tight hover:underline hover:decoration-primary text-xl font-semibold">Logout</h1>
                                </div>
                                
                            </Link>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </Fragment>
    )
}
export default SideMon