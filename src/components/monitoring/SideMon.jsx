import React,{Fragment} from "react";

// icons
import {BsNewspaper} from 'react-icons/bs'
import {FaStethoscope,FaUserAlt} from 'react-icons/fa'
import {MdOutlineInventory} from 'react-icons/md'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiUser } from "react-icons/fi";

// Redux
import { useDispatch, useSelector } from 'react-redux';

import { logout } from "../../slices/authSlice";

import { useLocation } from "react-router";
import { Link,useNavigate } from "react-router-dom";

const SideMon = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location);
    return(
        <Fragment>
            {/* <div className="relative"> */}
            {/* bg-gradient-to-r from-[#39A2DB]  to-[#256D85] text-white  */}
                <div className=" text-white shadow-slate-500 px-4 w-20 md:w-72 h-full">
                       <div>
                            <div className="flex flex-col gap-3 md:gap-0 md:flex-row pt-4 items-center md:justify-between">
                                <div>
                                    <Link to="/home-mon">
                                        <div className={
                                        " hover:text-[#0172AF] text-white" +
                                        (location.pathname === "/home-mon" ||
                                        location.pathname === "/home-mon/"
                                            ? "active-state text-[#0172AF] bg-gray-200"
                                            : "nonActive-state")}
                                        >
                                            <AiOutlineHome size={30}/>
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/home-mon">
                                        <div className={
                                        "hover:text-[#0172AF] text-white animate-ping" +
                                        (location.pathname === "/home-mon" ||
                                        location.pathname === "/home-mon/"
                                            ? "active-state text-[#0172AF] bg-gray-200"
                                            : "nonActive-state")}
                                        >
                                            <span className="flex absolute mt-1  h-[10px] right-5">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-[12px] w-[12px] bg-blue-500"></span>
                                            </span>
                                            <IoMdNotificationsOutline size={30}/>
                                        </div>
                                    </Link>
                                </div>
                            </div>                   
                            <div className=" h-full py-10 ">
                                <div className="">
                                    <hr></hr>
                                    <Link to="/home-mon/dashboard-mon">
                                        <div className={
                                                "home p-2 flex  gap-3 hover:text-[#0172AF] " +
                                                (location.pathname === "/home-mon/dashboard-mon" ||
                                                location.pathname === "/home-mon/dashboard-mon/"
                                                ? "active-state text-[#0172AF] bg-gray-200 "
                                                : "nonActive-state")
                                        }>
                                            <div className=" flex justify-center mx-auto md:mx-0 items-center">
                                                <FaUserAlt size={25} />
                                            </div>
                                            <div className="hidden md:block">
                                                <h1>Anonymous  <p className="font-thin text-sm">Admin</p> </h1>     
                                            </div>
                                        </div>
                                    </Link>
                                    <hr></hr>
                                </div>
                                <div className="pt-6">
                                    <p className="font-normal text-sm text-gray-700">Menu</p>
                                </div>
                                <Link to="/home-mon/dashboard-mon">
                                    <div className={
                                            "home text-center mt-2 p-2 flex gap-3 hover:text-[#0172AF] " +
                                            (location.pathname === "/home-mon/dashboard-mon" ||
                                            location.pathname === "/home-mon/dashboard-mon/"
                                            ? "active-state text-[#0172AF] bg-gray-200 "
                                            : "nonActive-state")
                                    }>
                                        <div className=" flex justify-center mx-auto md:mx-0 items-center">
                                            <BsNewspaper size={25} />
                                        </div>
                                        <div className="hidden md:block">
                                            <h1>Dashboard</h1>
                                        </div>
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
                                        <div className=" flex justify-center mx-auto md:mx-0 items-center">
                                            <FaStethoscope size={25} />
                                        </div>
                                        <div className="hidden md:block">
                                            <h1>Data</h1>
                                        </div>
                                    </div>
                                </Link>
                                
                                <Link to="/home-mon/perizinan">
                                    <div className={
                                        "home text-center flex p-2 gap-3 mt-2 hover:text-[#0172AF] " +
                                        (location.pathname === "/home-mon/perizinan" ||
                                        location.pathname === "/home-mon/perizinan"
                                        ? "active-state text-[#0172AF] bg-gray-200 "
                                        : "nonActive-state")
                                    }> 
                                        <div className=" flex justify-center mx-auto md:mx-0 items-center">
                                            <MdOutlineInventory size={25} />
                                        </div>
                                        <div className="hidden md:block">
                                            <h1>Perizinan</h1>
                                        </div>
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
                                        <div className=" flex justify-center mx-auto md:mx-0 items-center">
                                            <FiUser size={25} />
                                        </div>
                                        <div className="hidden md:block">
                                            <h1>Profile</h1>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className=" justify-center items-end flex h-full md:h-40 ">
                                
                                <button 
                                    onClick={() => {  
                                        dispatch(logout());
                                        navigate('/auth-page');
                                    }}
                                >
                                    <div className=
                                    "mt-4 "
                                    >
                                        {/* <AiOutlineHome size={30}/> */}
                                        <h1 className="tracking-tight hover:underline hover:decoration-primary text-xl font-semibold">Logout</h1>
                                    </div>
                                    
                                </button>
                            </div>
                        </div>
                       </div>
            {/* </div> */}
        </Fragment>
    )
}
export default SideMon