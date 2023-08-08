import React, { Fragment } from "react";
import NavbarBuyer from "../../components/buyers/Navbar";

import Clock from 'react-live-clock';
import { useTimer,useTime } from 'react-timer-hook';
import Berlangsung from "../../components/buyers/pesanan/berlangsung";
import Footer from "../../components/buyers/Footer";

import { useLocation,Outlet } from "react-router";
import { Link } from "react-router-dom";

function MyTimer ({expiryTimestamp})  {
    const {
        seconds,
        minutes,
        hours,
        days,
        // ampm,
      } = useTime({ format: '24-hour'});
    // const {
    //     seconds,
    //     minutes,
    //     hours,
    //     days,
    //     isRunning,
    //     start,
    //     pause,
    //     resume,
    //     restart,
    //   } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
      return(
        <div style={{textAlign: 'center'}}>
        <h1>react-timer-hook </h1>
        <p>Current Time Demo</p>
        <div style={{fontSize: '100px'}}>
        <span>{days}</span>: <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
      </div>
          
      )
}

const PesananPage = ({ expiryTimestamp }) =>{
    const location = useLocation();
    console.log(location);
    
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
    return(
        <Fragment>
            <div className="relative">
                <NavbarBuyer/>
                <div className="bg-gray-200">
                    <div className="flex-col ">
                        <div className=" flex flex-row gap-4 bg-white  px-2 w-full py-1 r">
                    
                            <div className=" border-b-2 cursor-pointer hover:border-primary hover:text-primary flex justify-center w-full ">
                                <Link to="/pesanan">
                                    <div className={"  "+
                                        (location.pathname === "/pesanan" ||
                                        location.pathname === "/pesanan/"
                                            ? "active-state text-[#0172AF] "
                                            : "nonActive-state")}
                                    >
                                        <h1 className="tracking-tight  hover:decoration-primary text-xl font-semibold">Berlangsung</h1>
                                    </div>
                                </Link>
                            </div>{"|"}
                            <div className="w-full flex justify-center cursor-pointer border-b-2 hover:border-primary hover:text-primary">
                                <Link to="/pesanan/pesanan-selesai">
                                    <div className={""+
                                        (location.pathname === "/pesanan/pesanan-selesai" ||
                                        location.pathname === "pesanan/pesanan-selesai/"
                                            ? "active-state border-[#0172AF] text-[#0172AF]"
                                            : "nonActive-state")}
                                    >
                                        <h1 className="tracking-tight hover:decoration-primary text-xl font-semibold">Selesai</h1>
                                    </div>
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                    <div 
                        data-aos="fade-left"
                        data-aos-durations="1000"
                        data-aos-delay="500"
                        className="pt-4 h-full"
                        >      
                        <Outlet/>
                    </div>
                        {/* <MyTimer /> */}
                </div>
                    <Footer/>
            </div>

        </Fragment>
    )
}
export default PesananPage