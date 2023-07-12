import React, { Fragment } from "react";

import SideMon from "../../components/monitoring/SideMon";

import { Outlet } from "react-router";

function HomeMon(){
    return(
        <Fragment>
            <div className="relative bg-gradient-to-r from-[#256D85]  to-[#39A2DB]  font-sans"
            >
                <div className="flex ">
                    <div className="h-screen"
                    data-aos="fade-right"
                    data-aos-durations="1000"
                    >
                        <SideMon/>
                    </div>
                    <div className="bg-gray-200 mt-4 rounded-l-2xl w-full"
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