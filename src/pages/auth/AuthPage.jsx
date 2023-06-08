import React, { Fragment,useState,useEffect } from "react";

import FormLogin from "../../components/auth/FormLogin";

import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";

// icons
const AuthPage = () =>{
    const location = useLocation();
    console.log(location);

    return(
        <Fragment>
            <div className="relative">
                <div className="bg-lime-100 h-screen shadow-md from-[#2EB51F40] overflow-hidden">

                    <div className="grid mx-36 max-w-screen-xl grid-cols-1 h-full justify-items-center items-center md:grid-cols-2  ">
                        <div className="flex-col w-64 md:w-full"
                        data-aos="fade-right"
                        data-aos-durations="1000"
                        data-aos-delay="500">
                            <div className="text-center md:text-left h-full">
                                <h1 className="text-7xl tracking-wider text-primary font-bold">E-<span className="text-black underline decoration-primary">Fish</span>.</h1>
                                <p className="tracking-tight text-xl font-semibold ">E-Fish. membantu anda mencari berbagai bala dan bala</p>
                            </div>         
                        </div>
                        <div className="flex-col w-9/12  ">
                            <div className=" flex flex-row gap-4 py-2  items-center justify-center">
                                <Link to="/auth-page/login">
                                    <div className={"mt-2"+
                                        (location.pathname === "/auth-page/login" ||
                                        location.pathname === "/auth-page/login/"
                                            ? "active-state text-[#0172AF]"
                                            : "nonActive-state")}
                                    >
                                        <h1 className="tracking-tight hover:underline hover:decoration-primary text-xl font-semibold">Login</h1>
                                    </div>
                                </Link>{"||"}
                                <Link to="/auth-page/register">
                                    <div className={""+
                                        (location.pathname === "/auth-page/register" ||
                                        location.pathname === "/auth-page/register"
                                            ? "active-state text-[#0172AF]"
                                            : "nonActive-state")}
                                    >
                                        <h1 className="tracking-tight hover:underline hover:decoration-primary text-xl font-semibold">Register</h1>
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