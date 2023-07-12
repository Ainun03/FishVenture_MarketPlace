import React, {Fragment} from "react";

// icon
import {AiOutlineUser} from 'react-icons/ai'
import {IoChevronBackCircle} from 'react-icons/io5'

import { Link } from "react-router-dom";

// component
import ProfileComSel from "../../components/sellers/profilSel/ProfileCom";

 function ProfileSel () {
     return(

         <Fragment>
            <div className="relative  mt-4">
                <Link to="/home-sel">
                    <div className='bg-transparent mx-4 absolute z-10'>
                        <IoChevronBackCircle  size={30} color={'#ffffff'} />
                    </div>
                </Link>
                <div className="flex justify-center w-full">
                    <div className="justify-center bg-white p-4 rounded-3xl border-2 rounded-xl items-center">
                        <AiOutlineUser size={70}/>
                    </div>

                </div>

                <div className="flex flex-row  mt-6 justify-center items-center mx-4 ">
                    <div className="mx-auto" 
                    data-aos="fade-right"
                    data-aos-durations="1000"
                    data-aos-delay="500">
                        <ProfileComSel/>
                    </div>
                    <div className=" mx-auto"
                    data-aos="fade-left"
                    data-aos-durations="1000"
                    data-aos-delay="500">   
                        <div className="flex mx-auto " >                      
                            <div className="p-6  border rounded-lg border-xl bg-white" >
                                <div className="mb-4">
                                    <label className="block">
                                        <span className="block mb-1 text-sm font-medium text-slate-700">
                                            Nama
                                        </span>
                                        <input
                                            // value={name}
                                            // onChange={(e) => setSpecificType( e.target.value)}
                                            type="text"
                                            name="specificType"
                                            placeholder="Nama"
                                            className=" w-full rounded-xl  px-4 py-2 bg-gray-200"
                                        />

                                        {/* {specificType === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Silahkan isi specificType</span> : ''} */}
                                    </label>
                                    
                                    {/* {productTypeId === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Silahkan Isi Tipe Produk</span> : ''} */}
                                </div>
                                <div className="">
                                    <label className="relative">
                                        <span className="block mb-1 text-sm font-medium text-slate-700">Jenis Kelamin</span>
                                        <select
                                            // onChange={(e) => handleChangeProvince && setCurrentProfil({ ...currentProfil, city: e.target.value })}
                                            required
                                            // onChange={(e) => setProductTypeId(e.target.value)}
                                            // value={countryId}
                                            name="productTypeId"
                                            className="
                                                w-full           
                                                block
                                                mt-1
                                                rounded-xl
                                                bg-gray-200    
                                                px-4 py-2             
                                                shadow-sm
                                                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                                "  >

                                            <option className="" value='' disabled selected >
                                                Jenis Kelamin
                                            </option>
                                            
                                            <option value={1}>Laki-laki</option>
                                            <option value={2}>Perempuan</option>
                                            {/* {allProvinces.map((province) => (
                                                <option key={province} value={province}>
                                                    {province}
                                                </option>
                                            ))} */}

                                        </select>

                                    </label>
                                </div>
                                <div className="">
                                    <label className="block">
                                        <span className="block mb-1 text-sm font-medium text-slate-700">
                                            Alamat
                                        </span>
                                        <input
                                            // value={name}
                                            // onChange={(e) => setDescription( e.target.value)}
                                            type="text"
                                            name="description"
                                            placeholder="Alamat"
                                            className=" w-full rounded-xl  px-4 py-2 bg-gray-200"
                                        />

                                        {/* {description === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Silahkan Description</span> : ''} */}
                                    </label>
                                </div>
                                <div className="">
                                    <label className="block">
                                        <span className="block mb-1 text-sm font-medium text-slate-700">
                                            No. Handphone
                                        </span>
                                        <input
                                            // value={name}
                                            // onChange={(e) => setDescription( e.target.value)}
                                            type="text"
                                            name="description"
                                            placeholder="No. Handphone"
                                            className=" w-full rounded-xl  px-4 py-2 bg-gray-200"
                                        />

                                        {/* {description === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Silahkan Description</span> : ''} */}
                                    </label>
                                </div>
                                <div className=" ">
                                    <button type="submit" 
                                    // onClick={() => postProSubmit()}
                                        className="px-4 w-full py-2 mr-4 border-2 hover:bg-lime-400 border-primary bg-primary text-white font-semibold rounded-xl">
                                        Simpan
                                    </button>
                                </div>

                            </div>		
                        </div>
                        
                    </div>
                </div>
                    
            </div>

         </Fragment>
     )
 }
 export default ProfileSel