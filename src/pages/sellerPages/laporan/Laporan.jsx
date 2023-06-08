import React, { Fragment } from "react";

function Laporan () {
    return(
        <Fragment>
            <div className="max-w-4xl py-4 mx-4 md:mx-auto" data-aos="fade-right"
                        data-aos-durations="1000"
                        data-aos-delay="500"> 
                <div className="flex"> 
                    <h2 className="font-semibold text-primary text-2xl">Laporan </h2> 
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
            </div> 
        </Fragment>
    )
}

export default Laporan