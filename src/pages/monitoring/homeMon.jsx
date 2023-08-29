import React, { Fragment,useEffect } from "react";

import { getListPond } from "../../slices/admin/adminSlice";

import SideMon from "../../components/monitoring/SideMon";

import { Outlet } from "react-router";
import { useDispatch, useSelector } from 'react-redux';


function HomeMon(){
    document.title = "Home Page - Admin";

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListPond());
      }, [dispatch]);

    return(
        <Fragment>
            <div className="relative bg-gradient-to-r from-[#256D85] h-full to-[#39A2DB]  font-sans"
            >
                <div className=" flex  flex-col">
                    <div className="h-full z-50  bg-gradient-to-r from-[#256D85]  to-[#39A2DB] fixed flex "
                    data-aos="fade-right"
                    data-aos-durations="1000"
                    >
                        <SideMon/>
                    </div>
                    
                    <div className=" md:ml-72 ml-24 bg-gray-200  mt-4 rounded-l-2xl "
                    data-aos="fade-left"
                    data-aos-durations="2000"
                    data-aos-delay="500">
                        <div className="p-4">
                            <Outlet/>
                        </div>
                    </div>
                    
                </div>
            </div>

        </Fragment>
    )
}
export default HomeMon