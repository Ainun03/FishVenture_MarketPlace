import React, { Fragment } from "react";

import {FaChevronRight,FaChevronCircleLeft} from 'react-icons/fa'

function ProfileComSel () {
    return(
        <Fragment>
            {/* <div className="text-center text-3xl pb-4 font-semibold">
                <h1>Update Profile</h1>
            </div> */}

            <div className="relative bg-white w-60 rounded p-4 border-2">               
                <div className="mb-4">
                    <div className="" >
                            <h1>Nama</h1>
                        <div className="border flex justify-between gap-4 rounded-xl bg-gray-200 p-2">
                            <div className="text-gray-400">
                                <h1>Nama</h1>
                            </div>
                            <div className="pt-1 ">
                                <FaChevronRight />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mb-4">
                    <div className="" >
                            <h1>Jenis Kelamin</h1>
                        <div className="border flex gap-4 justify-between rounded-xl bg-gray-200 p-2">
                            <div className="text-gray-400">
                                <h1>Jenis Kelamin</h1>
                            </div>
                            <div className="pt-1">
                                <FaChevronRight/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                        <div className="" >
                                <h1>Alamat</h1>
                            <div className="border  flex gap-4 justify-between rounded-xl bg-gray-200 p-2">
                                <div className="text-gray-400">
                                    <h1>Alamat</h1>
                                </div>
                                <div className="pt-1">
                                    <FaChevronRight/>
                                </div>
                            </div>

                        </div>
                </div>
                <div className="mb-4">
                        <div className="" >
                                <h1>No Handphone</h1>
                            <div className="border flex gap-4 justify-between rounded-xl bg-gray-200 p-2">
                                <div className="text-gray-400">
                                    <h1>No. Handphone</h1>
                                </div>
                                <div className="pt-1">
                                    <FaChevronRight/>
                                </div>
                            </div>

                        </div>
                </div>
                    {/* <div className=" mb-4 ">
                    <button type="submit" 
                    // onClick={() => postProSubmit()}
                        className="px-4 w-full py-2 mr-4 border-2 hover:bg-lime-400 border-primary bg-primary text-white font-semibold rounded-xl">
                        Simpan
                    </button>
                </div>

                            		
                             */}
                        
            </div>

        </Fragment>
    )
}
export default ProfileComSel