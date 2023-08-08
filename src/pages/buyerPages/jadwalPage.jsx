import React,{Fragment} from "react";
import Cardbuyer from "../../components/buyers/card";
import NavbarBuyer from "../../components/buyers/Navbar";
import Footer from "../../components/buyers/Footer";
function JadwalPage(){
    return(
        <Fragment>
            <div className="relative">
                <NavbarBuyer/>
                <div className="container-fluid max-w-6xl mx-auto h-screen p-4">
                    <div className="text-center font-bold text-2xl">
                        {/* <h1>Jadwal Panen</h1> */}
                    </div>
                    <div className="grid grid-cols-2 py-4 gap-4 md:grid-cols-3">
                        <Cardbuyer/>
                        <Cardbuyer/>
                        <Cardbuyer/>
                        <Cardbuyer/>
                        <Cardbuyer/>
                    </div>
                </div>
                <Footer/>
            </div>
        </Fragment>
    )
}
export default JadwalPage