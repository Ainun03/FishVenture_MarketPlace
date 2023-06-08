import React, { Fragment,useState } from "react";

import {AiOutlineUser} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useLocation } from "react-router";

import {BsNewspaper} from 'react-icons/bs'
import {FaStethoscope} from 'react-icons/fa'
import {MdOutlineInventory} from 'react-icons/md'
import {AiOutlineHome} from 'react-icons/ai'
import { IoClose, IoMenu } from "react-icons/io5";

function NavbarSel () {
    const [show, setShow] = useState(true);
    const location = useLocation();
    console.log(location);

    const handleClick = () => {
		setShow(current => !current);
	};
    return(
        <Fragment>
            <div className='bg-tarnsparent  bg-white shadow md:static flex w-full z-[30] md:block md:top-0 md:z-0'>
                <div className="container mx-4 py-4 md:mx-auto justify-between  max-w-7xl md:px-6 flex md:py-4">
                    <button onClick={handleClick} className='bg-white md:hidden border rounded-lg p-2 text-xl'>
						<IoMenu />
					</button>
                    <div className="items-center hidden md:block "> 
                        <h1 className="font-semibold  text-primary h-full justify-center inline-flex items-center text-3xl">E-<span className="text-black underline decoration-primary">Fish</span>.</h1>
                    </div>
                    <div className="flex">
                        <Link to="/home-sel/profil">
                            <div className="items-center border-2 cursor-pointer border-black rounded-2xl "> 
                                {/* <h1 className="font-normal  text-primary h-full justify-center inline-flex items-center text-3xl">Welcome . . . </h1> */}
                                <AiOutlineUser size={30}/>
                            </div>
                        </Link>
                        <div className="flex items-center justify-center">
                            <p>Hello . . .</p>
                        </div>
                    </div>
                </div>
            </div>

            <div role='button' onClick={handleClick} className={`overlay fixed z-40 h-full w-full bg-slate-600 opacity-40 inset-x-0 cursor-default transition ease-in-out duration-700 md:-translate-x-full ${show ? "hidden" : ""}`}></div>
            <div className={`fixed bg-white h-full left-0 w-1/2 z-50 md:-translate-x-full p-5 ${show ? "-translate-x-full transition ease-in-out duration-1000" : "transition ease-in-out duration-1000"}`}>
				<div className='title flex justify-between mb-3 items-center'>
                <Link to="/home-sel">
                        <div className={
                        " " +
                        (location.pathname === "/home-sel" ||
                        location.pathname === "/home-sel/"
                            ? "active-state text-[#0172AF]"
                            : "nonActive-state")}
                        >
                            <AiOutlineHome size={30}/>
                        </div>
                    </Link>
					<button onClick={handleClick} className='text-3xl'>
						<IoClose />
					</button>
				</div>
                {/* <div className="border drop-shadow-md shadow-2xl shadow-slate-500 px-4 w-72 hidden md:block "> */}
                    

                    <div className=" h-full ">
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
                {/* </div> */}
            </div>
        </Fragment>
    )
}
export default NavbarSel