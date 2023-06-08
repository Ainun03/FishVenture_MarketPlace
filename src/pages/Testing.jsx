import React, { Fragment } from "react";

function Flask () {
    return(
        <Fragment>
            <div className="relative">
                <div className="bg-gradient-to-b shadow-md from-orange-400">
                    <div className="grid mx-36 max-w-screen-xl h-screen grid-cols-1 h-full justify-items-center items-center md:grid-cols-2  ">
                        <div className="flex-col w-64 md:w-full ">
                            <div className="text-center ">
                                <div className="flex justify-center items-center">
                                    <img className=" w-72 rounded-2xl" src='/assets/images/orang.png' alt='product'/>
                                </div>
                                    <h1 className="text-6xl tracking-wider text-orange-600 font-bold">Orange<span className="text-gray-700 underline decoration-orange-600">Image</span>.</h1>
                                <div className="pt-10">
                                    <p className="tracking-tight text-xl text-left font-semibold ">Flask Image. membantu anda mengklasifikasi bla bla bla</p>
                                    <p className="tracking-tight text-xl text-left text-gray-500 font-semibold ">100% Automatically & <span className="italic text-orange-600"> free </span> </p>
                                </div>
                            </div>         
                        </div>

                        <div className="flex-col w-9/12 pt-32 ">
                            <div className=" border drop-shadow-2xl border-xl h-96 flex flex-col justify-center rounded-lg shadow-lg bg-white p-4">           
                                <div className="text-center py-2 pt-6">      
                                    <button  className="border  px-4 py-3 bg-secondary hover:bg-lime-400 text-white font-medium text-xl rounded-lg">
                                        Uploud Image
                                    </button>
                                </div>

                                <div className="text-center pt-4">
                                    <span className=" cursor-pointer text-gray-500">Drop Your Image in Here</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className=" mx-36 max-w-screen-xl py-4 ">
                        <div className=" px-24 border drop-shadow-2xl border-xl flex flex-col  rounded-lg shadow-lg bg-white p-4">           
                            <div className="text-center">
                                <h2 className="text-black font-semibold text-xl">Keterangan</h2>
                            </div>
                            <div className="flex gap-8">
                                <div className="">
                                    <p className="tracking-tight text-lg text-left font-semibold ">Kategori</p>
                                    <p className="tracking-tight text-lg text-left font-semibold ">Akurasi</p>
                                </div>
                                <div className="">
                                    <p className="tracking-tight text-lg text-left font-semibold ">:</p>
                                    <p className="tracking-tight text-lg text-left font-semibold ">:</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    
                </div>
            </div>

        </Fragment>
    )
}
export default Flask