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
            <div className="relative">
            {/* bg-gradient-to-r from-[#39A2DB]  to-[#256D85] text-white  */}
                <div className=" text-white shadow-slate-500 px-4 w-24 md:w-72 h-full">
                       <div>
                            {/* <div
                                id="view"
                                class="h-full w-screen flex flex-row"
                                x-data="{ sidenav: true }"
                                >
                                <button
                                
                                    class="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden"
                                >
                                    <svg
                                    class="w-5 h-5 fill-current"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        fill-rule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clip-rule="evenodd"
                                    ></path>
                                    </svg>
                                </button>
                            </div> */}
                            <div id="profile" class="space-y-3 pt-3">
                                <img
                                src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                alt="Avatar user"
                                class="w-10 md:w-16 rounded-full mx-auto"
                                />
                                <div>
                                    <h2
                                        class="font-medium text-xs md:text-sm text-center text-teal-500"
                                    >
                                        Dinas Perikanan
                                    </h2>
                                    <p class="text-xs text-gray-700 text-center">Administrator</p>
                                </div>
                            </div>
                            {/* <div className="flex flex-col gap-3 md:gap-0 md:flex-row pt-4 items-center md:justify-between">
                                <div>
                                    <Link to="/home-mon">
                                        <div className={
                                        " hover:text-[#0172AF] text-white" +
                                        (location.pathname === "/home-mon" ||
                                        location.pathname === "/home-mon/"
                                            ? "active-state text-[#053742] "
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
                                            ? "active-state text-[#053742] "
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
                            </div>                    */}
                            <div className=" h-full py-3 ">
                                {/* <div className="">
                                    <hr></hr>
                                    <Link to="/home-mon/dashboard-mon">
                                        <div className={
                                                "home p-2 flex  gap-3 hover:text-[#0172AF] " +
                                                (location.pathname === "/home-mon/dashboard-mon" ||
                                                location.pathname === "/home-mon/dashboard-mon/"
                                                ? "active-state text-[#0172AF] bg-gray-200 border "
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
                                </div> */}
                                <div className="">
                                    <p className="font-normal text-sm text-gray-700">Menu</p>
                                </div>
                                <Link to="/home-mon/dashboard-mon">
                                    <div className={
                                            "home text-sm flex gap-2 mt-2  font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-gray-600 hover:text-base rounded-md transition duration-150 ease-in-out " +
                                            (location.pathname === "/home-mon/dashboard-mon" ||
                                            location.pathname === "/home-mon/dashboard-mon/"
                                            ? "active-state bg-teal-500 text-gray-600 text-base  "
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
                                
                                <Link to="/home-mon/data">
                                    <div className={
                                        "home text-sm mt-2 flex gap-2  font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-gray-600 hover:text-base rounded-md transition duration-150 ease-in-out " +
                                        (location.pathname === "/home-mon/data" ||
                                        location.pathname === "/home-mon/data/"
                                        ? "active-state bg-teal-500 text-gray-600 text-base"
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
                                        "home text-sm mt-2 flex gap-2  font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-gray-600 hover:text-base rounded-md transition duration-150 ease-in-out" +
                                        (location.pathname === "/home-mon/perizinan" ||
                                        location.pathname === "/home-mon/perizinan"
                                        ? "active-state bg-teal-500 text-gray-600 text-base "
                                        : "nonActive-state")
                                    }> 
                                        <div className=" flex cursor-pointer justify-center mx-auto md:mx-0 items-center">
                                            <MdOutlineInventory size={25} />
                                        </div>
                                        <div className="hidden md:block">
                                            <h1>Pengajuan</h1>
                                        </div>
                                    </div>
                                </Link>
                                
                                {/* <Link to="/home-sel/laporan">
                                    <div className={
                                        "home text-sm  mt-2 flex gap-2  font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-gray-600 hover:text-base rounded-md transition duration-150 ease-in-out" +
                                        (location.pathname === "/home-sel/laporan" ||
                                        location.pathname === "/home-sel/laporan"
                                        ? "active-state bg-teal-500 text-gray-600 text-base"
                                        : "nonActive-state")

                                    }> 
                                        <div className=" flex justify-center mx-auto md:mx-0 items-center">
                                            <FiUser size={25} />
                                        </div>
                                        <div className="hidden md:block">
                                            <h1>Profile</h1>
                                        </div>
                                    </div>
                                </Link> */}
                            </div>
                            <div className=" justify-center fixed bottom-5 items-end -ml-4 flex w-full ">
                                
                                <button 
                                    onClick={() => {  
                                        dispatch(logout());
                                        navigate('/auth-page/login-penjual');
                                    }}
                                >
                                    <div className=
                                    "mt-4 "
                                    >
                                      
                                        <h1 className="tracking-tight hover:underline hover:decoration-primary text-xl font-semibold">Logout</h1>
                                    </div>
                                    
                                </button>
                            </div>
                        </div>
                       </div> 
            {/* </div>
            {/* <body class="font-poppins antialiased"> */}
                    {/* <div
                    id="view"
                    class="h-full w-screen flex flex-row"
                    x-data="{ sidenav: true }"
                    >
                    <button
                    
                        class="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden"
                    >
                        <svg
                        class="w-5 h-5 fill-current"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"
                        ></path>
                        </svg>
                    </button>
                    <div
                        id="sidebar"
                        class="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
                        x-show="sidenav"
                
                >
                    <div class="space-y-6 md:space-y-10 mt-10">
                    <h1 class="font-bold text-4xl text-center md:hidden">
                        D<span class="text-teal-600">.</span>
                    </h1>
                    <h1 class="hidden md:block font-bold text-sm md:text-xl text-center">
                        Dashwind<span class="text-teal-600">.</span>
                    </h1>
                    <div id="profile" class="space-y-3">
                        <img
                        src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                        alt="Avatar user"
                        class="w-10 md:w-16 rounded-full mx-auto"
                        />
                        <div>
                        <h2
                            class="font-medium text-xs md:text-sm text-center text-teal-500"
                        >
                            Eduard Pantazi
                        </h2>
                        <p class="text-xs text-gray-500 text-center">Administrator</p>
                        </div>
                    </div>
                    <div
                        class="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500"
                    >
                        <input
                        type="text"
                        class="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
                        placeholder="Search"
                        />
                        <button
                        class="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block"
                        >
                        <svg
                            class="w-4 h-4 fill-current"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"
                            ></path>
                        </svg>
                        </button>
                    </div>
                    <div id="menu" class="flex flex-col space-y-2">
                        <a
                        href=""
                        class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
                        >
                        <svg
                            class="w-6 h-6 fill-current inline-block"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                            ></path>
                        </svg>
                        <span class="">Dashboard</span>
                        </a>
                        <a
                        href=""
                        class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                        >
                        <svg
                            class="w-6 h-6 fill-current inline-block"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
                            ></path>
                        </svg>
                        <span class="">Products</span>
                        </a>
                        <a
                        href=""
                        class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                        >
                        <svg
                            class="w-6 h-6 fill-current inline-block"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
                            ></path>
                            <path
                            d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
                            ></path>
                        </svg>
                        <span class="">Messages</span>
                        </a>
                       
                        <a
                        href=""
                        class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                        >
                        <svg
                            class="w-6 h-6 fill-current inline-block"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            fill-rule="evenodd"
                            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"
                            ></path>
                        </svg>
                        <span class="">Table</span>
                        </a>
                        <a
                        href=""
                        class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                        >
                        <svg
                            class="w-6 h-6 fill-current inline-block"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"
                            ></path>
                        </svg>
                        <span class="">UI Components</span>
                        </a>
                        <a
                        href=""
                        class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                        >
                        <svg
                            class="w-6 h-6 fill-current inline-block"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                            ></path>
                        </svg>
                        <span class="">Users</span>
                        </a>
                    </div>
                    </div>
                </div>
                
                // </div> */}
            {/* </body> */}
            </div>
        </Fragment>
    )
}
export default SideMon