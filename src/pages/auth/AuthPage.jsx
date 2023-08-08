import React, { Fragment } from "react";

import { useLocation,Outlet } from "react-router";
import { Link } from "react-router-dom";

// icons
const AuthPage = () =>{
    const location = useLocation();
    console.log(location);

    return(
        <Fragment>
            <div className="relative">
                <div className="bg-[#A2DBFA] h-screen shadow-md from-[#A2DBFA] overflow-hidden">

                    <div className="grid mx-36 max-w-screen-xl grid-cols-1 h-full justify-items-center items-center md:grid-cols-2  ">
                        <div className="flex-col w-64 md:w-full"
                        data-aos="fade-right"
                        data-aos-durations="1000"
                        data-aos-delay="500">
                            <div className="text-center md:text-left h-full">
                                <h1 className="text-7xl tracking-wider text-primary font-bold">Fish<span className="text-black underline decoration-primary">Venture</span>.</h1>
                                <p className="tracking-tight text-xl font-semibold ">E-Fish. membantu anda mencari berbagai bala dan bala</p>
                            </div>         
                        </div>
                        <div className="flex-col md:w-9/12  ">
                            <div className=" flex flex-row gap-4 py-2  items-center justify-center">
                                <Link to="/auth-page/login-pembeli">
                                    <div className={"mt-2"+
                                        (location.pathname === "/auth-page/login-pembeli" ||
                                        location.pathname === "/auth-page/login-pembeli/"
                                            ? "active-state text-[#0172AF]"
                                            : "nonActive-state")}
                                    >
                                        <h1 className="tracking-tight hover:underline hover:decoration-primary text-xl font-semibold">Pembeli</h1>
                                    </div>
                                </Link>{"||"}
                                <Link to="/auth-page/login-penjual">
                                    <div className={""+
                                        (location.pathname === "/auth-page/login-penjual" ||
                                        location.pathname === "/auth-page/login-penjual/"
                                            ? "active-state text-[#0172AF]"
                                            : "nonActive-state")}
                                    >
                                        <h1 className="tracking-tight hover:underline hover:decoration-primary text-xl font-semibold">Pembudidaya</h1>
                                    </div>
                                </Link>
                                
                            </div>
                            <div data-aos="fade-left"
                                data-aos-durations="1000"
                                data-aos-delay="500">
                                <Outlet/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default AuthPage