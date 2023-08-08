import React,{ Fragment,useEffect }from "react";

// pages
import NavbarSel from "../../components/sellers/NavbarSel";
import Sidebar from "../../components/sellers/Sidebar";

import { getUser } from "../../slices/authSlice";
import { getUsers } from "../../slices/profileSlice";
import { getPond } from "../../slices/seller/sellerSlice";

import { Outlet } from "react-router";
import { useDispatch, useSelector } from 'react-redux';


function HomeSel (){
    document.title = "Home Page - Seller";
    const dispatch = useDispatch();
    const { user } = useSelector(state => state);
    let role=user.user.data.applicationType
    console.log(role)
    // useEffect(() => {
    //     dispatch(getUsers({
    //         applicationType:role
    //     }));
    // }, [dispatch]);
    useEffect(() => {
        dispatch(getPond());
      }, [dispatch]);
    return(
        <Fragment>
            <div className=" bg-gray-200 font-sans">
                <div className="flex min-h-screen ">
                    <Sidebar />
                    {/* <div className="bg-transparant  border drop-shadow-md shadow-2xl shadow-slate-500 px-2 ">
                        <div className=" h-full flex flex-col justify-center">
                            <div className="">
                                <div className=" flex justify-center items-center">
                                    <BsNewspaper size={30} />
                                </div>
                                <h1>Dashboard</h1>
                            </div>
                            <hr></hr>

                            <div className="pt-3"> 
                                <div className=" flex justify-center items-center">
                                    <FaStethoscope size={30} />
                                </div>
                                <h1>Transaksi</h1>
                            </div>  
                            <hr></hr>

                            <div className="pt-3"> 
                                <div className=" flex justify-center items-center">
                                    <MdOutlineInventory size={30} />
                                </div>
                                <h1>Inventory</h1>
                            </div>
                            <hr></hr>

                            <div className="pt-3"> 
                                <div className=" flex justify-center items-center">
                                    <FaStethoscope size={30} />
                                </div>
                                <h1>Laporan</h1>
                            </div>
                            
                        </div>
                    </div> */}

                    <div className="bg-gray-200 w-full">
                        {/* <NavbarBuyer/> */}
                        <NavbarSel/>
                        <Outlet />
                        {/* <div className="max-w-4xl py-4 mx-4 md:mx-auto"> 
                            <div className="flex"> 
                                <h2 className="font-semibold text-primary text-2xl">Dashboard </h2> 
                            </div>     
                            <hr></hr>
                            <div className="grid grid-cols-2 gap-4 ">
                                <div className="border-2 bg-white rounded-xl h-32 ">
                                    <div className=" mx-4">
                                        <h1>janji</h1>
                                    </div>
                                </div>
                                <div className="border-2 bg-white rounded-xl h-32 ">
                                    <div className=" mx-4">
                                        <h1>janji</h1>
                                    </div>
                                </div>
                                <div className="border-2 bg-white rounded-xl h-32 ">
                                    <div className=" mx-4">
                                        <h1>janji</h1>
                                    </div>
                                </div>
                                <div className="border-2 bg-white rounded-xl h-32 ">
                                    <div className=" mx-4">
                                        <h1>janji</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4">
                                <div className="border-2 bg-white rounded-xl h-40">
                                    <div className="flex items-center justify-center ">
                                        <h1>List Order</h1>
                                    </div>
                                   
                                    <div className="w-full h-full px-4  py-2 ">                                
                                        <table class="border-collapse w-full mx-auto border border-slate-400 ...">
                                        <thead>
                                            <tr>
                                            <th class="border border-slate-300 ...">State</th>
                                            <th class="border border-slate-300 ...">City</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td class="border border-slate-300 ...">Indiana</td>
                                            <td class="border border-slate-300 ...">Indianapolis</td>
                                            </tr>
                                            <tr>
                                            <td class="border border-slate-300 ...">Ohio</td>
                                            <td class="border border-slate-300 ...">Columbus</td>
                                            </tr>
                                            <tr>
                                            <td class="border border-slate-300 ...">Michigan</td>
                                            <td class="border border-slate-300 ...">Detroit</td>
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    
                </div>
            </div>
            
        </Fragment>
    )
}
export default HomeSel