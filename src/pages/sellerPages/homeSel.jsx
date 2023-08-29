import React,{ Fragment,useEffect }from "react";

// pages
import NavbarSel from "../../components/sellers/NavbarSel";
import Sidebar from "../../components/sellers/Sidebar";

// import { getUser } from "../../slices/authSlice";
// import { getUsers } from "../../slices/profileSlice";
import { getPond,getKolam,getJenisIkan,getBudidaya } from "../../slices/seller/sellerSlice";

import { Outlet } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'


function HomeSel (){
    document.title = "Home Page - Seller";
    const dispatch = useDispatch();
    const { pond, isActivate } = useSelector(
        (store) => store.seller
    );  
    const {isAuntheticated, user} =useSelector(
        (store) =>store.user
      )

    useEffect(() => {
        if (isAuntheticated !== true){
            dispatch(getPond());
        }
      }, [dispatch,isAuntheticated]);

    useEffect(() => {
        if (isAuntheticated !== true){
            dispatch(getJenisIkan());
        }
      }, [dispatch,isAuntheticated]);
      
      useEffect(() => {
        if (isAuntheticated !== true){
            dispatch(getKolam({id:pond.id}));
        }
  }, [dispatch,isAuntheticated,pond]);

      useEffect(() => {
        if (isAuntheticated !== true){
            dispatch(getBudidaya({id:pond.id}));
        }
  }, [dispatch,isAuntheticated,pond]);
  
    var check = pond;

    const activate = ({ children }) =>{
        if (isActivate === true){
            if(check.status === "submission"){
                return children
            } else if (check.status === "reviewed"){
                return children
            } else if (check.status === "actived"){
                return children
            }
        }

    }

    
    
    return(
        <Fragment>
            <div className=" h-full font-serif"> 
                <div className="flex flex-col ">
                    <div className="h-full fixed flex">
                        <Sidebar />
                    </div>
                    <div className=" md:ml-48 ">
                        {/* <NavbarBuyer/> */}
                        <NavbarSel/>
                        <div className="">
                            {        
                                check.status === "reviewed" ? (
                                    <div className="bg-yellow-500 flex justify-center w-full p-3 rounded-b-2xl ">
                                        <h3 className="font-medium capitalize text-white py-2 px-2  ">
                                            Tunggu hingga pengajuan anda di setujui
                                        </h3>
                                    </div>
                                ) : (
                                    <Link to="/home-sel/laporan/post-budidaya">
                                        <div className="bg-red-500 flex justify-center hover:bg-red-300 hover:text-gray-600 hover:text-base cursor-pointer w-full p-3 rounded-b-2xl ">
                                            <h3 className="font-medium text-white py-2 px-2  ">
                                                Aktivasi <span className="font-bold text-xl text-green-400"></span> Terlebih Dahulu
                                            </h3>
                                        </div>
                                    </Link>
                                )
                            }
                        </div>
                        <div className="md:ml-3">
                            <Outlet />
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </Fragment>
    )
}
export default HomeSel