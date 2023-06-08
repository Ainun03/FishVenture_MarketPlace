import React, { Fragment } from "react";

// icons
import {BsNewspaper} from 'react-icons/bs'
import {FaStethoscope} from 'react-icons/fa'
import {MdOutlineInventory} from 'react-icons/md'
import {AiOutlineHome} from 'react-icons/ai'
import { useLocation } from "react-router";
import { Link } from "react-router-dom";


const Sidebar = () => {
    const location = useLocation();
    console.log(location);

    return(
        <Fragment>
            <div className="bg-gradient-to-r from-[#39A2DB]  to-[#256D85] text-white  border drop-shadow-md shadow-2xl shadow-slate-500 px-4 w-72 hidden md:block ">
                <Link to="/home-sel">
                    <div className={
                    "mt-4 absolute " +
                    (location.pathname === "/home-sel" ||
                    location.pathname === "/home-sel/"
                        ? "active-state text-[#0172AF]"
                        : "nonActive-state")}
                    >
                        <AiOutlineHome size={30}/>
                    </div>
                </Link>

                <div className=" h-full py-10 ">
                    <Link to="/home-sel/list">
                        <div className={
                                "home text-center p-2 mt-10 flex gap-3 hover:text-[#0172AF] " +
                                (location.pathname === "/home-sel/list" ||
                                location.pathname === "/home-sel/list/"
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
                            <h1>Transaksi</h1>
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
                                <FaStethoscope size={25} />
                            </div>
                            <h1>Laporan</h1>
                        </div>
                    </Link>
                    
                </div>
            </div>
        </Fragment>
    )
}
export default Sidebar;