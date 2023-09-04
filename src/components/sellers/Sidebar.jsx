import React, { Fragment } from "react";

// icons
import {BsNewspaper} from 'react-icons/bs'
import {GiMoneyStack} from 'react-icons/gi'
import {MdOutlineInventory} from 'react-icons/md'
import {AiOutlineHome} from 'react-icons/ai'
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();

    return(
        <Fragment>
            <div className="bg-gradient-to-r from-[#39A2DB] to-[#256D85]  text-white  drop-shadow-md shadow-2xl shadow-slate-500 m-3  rounded-2xl px-4 w-48 hidden md:block ">
                <Link to="/home-sel">
                    <div className={
                    "mt-4 absolute " +
                    (location.pathname === "/home-sel" ||
                    location.pathname === "/home-sel/"
                        ? "active-state text-[#0172AF]"
                        : "nonActive-state"
                        )}
                    >
                        <AiOutlineHome size={30}/>
                    </div>
                </Link>

                <div className=" h-full py-10  ">
                    <Link to="/home-sel/list">
                        <div className={
                                "home text-sm flex gap-2 mt-4  font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-gray-600 hover:text-base rounded-md transition duration-150 ease-in-out " +
                                (location.pathname === "/home-sel/list" ||
                                location.pathname === "/home-sel/list/"
                                ? "active-state bg-teal-500 text-gray-600 text-base "
                                : "nonActive-state")
                        }>
                            <div className=" flex justify-center items-center">
                                <BsNewspaper size={25} />
                            </div>
                            <h1>Dashboard</h1>
                        </div>
                    </Link>
                    
                    <Link to="/home-sel/transaksi">
                        <div className={
                            "home text-sm flex gap-2 mt-2  font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-gray-600 hover:text-base rounded-md transition duration-150 ease-in-out " +
                            (location.pathname === "/home-sel/transaksi" ||
                            location.pathname === "/home-sel/transaksi/"
                            ? "active-state bg-teal-500 text-gray-600 text-base"
                            : "nonActive-state")
                        }> 
                            <div className=" flex justify-center items-center">
                                <GiMoneyStack size={25} />
                            </div>
                            <h1>Transaksi</h1>
                        </div>
                    </Link>
                    
                    <Link to="/home-sel/inventory">
                        <div className={
                            "home text-sm flex gap-2 mt-2  font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-gray-600 hover:text-base rounded-md transition duration-150 ease-in-out  " +
                            (location.pathname === "/home-sel/inventory" ||
                            location.pathname === "/home-sel/inventory"
                            ? "active-state bg-teal-500 text-gray-600 text-base "
                            : "nonActive-state")
                        }> 
                            <div className=" flex justify-center items-center">
                                <MdOutlineInventory size={25} />
                            </div>
                            <h1>Inventory</h1>
                        </div>
                    </Link>
                    
                    {/* <Link to="/home-sel/laporan">
                        <div className={
                            "home text-sm flex gap-2 mt-2  font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-gray-600 hover:text-base rounded-md transition duration-150 ease-in-out " +
                            (location.pathname === "/home-sel/laporan" ||
                            location.pathname === "/home-sel/laporan"
                            ? "active-state bg-teal-500 text-gray-600 text-base"
                            : "nonActive-state")

                        }> 
                            <div className=" flex justify-center items-center">
                                <FaStethoscope size={25} />
                            </div>
                            <h1>Laporan</h1>
                        </div>
                    </Link> */}
                    
                </div>
            </div>
        </Fragment>
    )
}
export default Sidebar;