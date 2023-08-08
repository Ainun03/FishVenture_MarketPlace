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
            <div className="relative  my-4">
                <div className="mx-4">
                    <h1 className="font-bold text-2xl hidden md:block">Settings</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
                        <div className="hidden md:block">
                            <div className="card p-2 bg-white">
                                <h1 className="font-bold text-md">Profile</h1>
                                <h1 className="font-bold text-md">Profile</h1>
                                <h1 className="font-bold text-md">Profile</h1>
                                <h1 className="font-bold text-md">Profile</h1>
                            </div>
                        </div>
                        <div className=" md:hidden">
                            <div className="flex justify-between">
                                <div>
                                    <h1 className="font-bold text-2xl">Settings</h1>         
                                </div>
                                <div>
                                    <label for="underline_select" class="sr-only">Underline select</label>
                                        <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-500  dark:text-gray-500 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-500 peer">
                                            <option selected>Edit Profile</option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                        </select>          
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 mt-4 md:mt-0">
                            <div className="card p-2 bg-white">
                                <h1 className="font-bold">Profile Foto</h1>
                                <div className="grid grid-cols-2 gap-4 py-4">
                                    <div className="border-r flex">
                                        <div className="flex w-40 justify-center">

                                            <div className="bg-gray-300 border rounded-full p-6">
                                                <AiOutlineUser size={25}/>
                                            </div>
                                        </div>
                                        <div className="flex w-full flex-col justify-center gap-2 ">
                                            <button className="text-primary">
                                                <span className="border-2 p-2 px-6 border-primary">Uploud Foto</span>
                                            </button>
                                            <button className="w-full">
                                                <span>remove</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-md font-semibold">Image requirments:</p>
                                        <ol className="list-decimal px-4">
                                            <li className="text-xs">Min.  400 x 400px</li>
                                            <li className="text-xs">Max. 2MB</li>
                                            <li className="text-xs" >Your face or company logo</li>
                                        </ol>
                                        
                                    </div>
                                </div>                  
                            </div>


                            <div className="card mt-4 p-2 bg-white">
                                <h1 className="font-bold ">Users Detail</h1>
                                <div className="px-6">

                                    <div className="pt-4">
                                        <label className="block">
                                            <span className="block mb-1 text-sm font-medium text-slate-700">
                                                Nama
                                            </span>
                                            <input
                                                // value={name}
                                                // onChange={(e) => setDescription( e.target.value)}
                                                type="text"
                                                name="description"
                                                placeholder="Nama"
                                                className=" w-full rounded-xl  px-4 py-2 bg-gray-200"
                                            />

                                            {/* {description === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Silahkan Description</span> : ''} */}
                                        </label>
                                    </div>
                                    <div className="pt-2">
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
                                    <div className="pt-2">
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
                                    <div className="pt-2">
                                        <label className="block">
                                            <span className="block mb-1 text-sm font-medium text-slate-700">
                                                Alamat
                                            </span>
                                            <textarea
                                                name="description"
                                                placeholder="Alamat"
                                             className=" w-full rounded-xl  px-4 py-4 bg-gray-200"
                                             >

                                            {/* <input
                                                value={name}
                                                onChange={(e) => setDescription( e.target.value)}
                                                type="text"
                                                name="description"
                                                placeholder="Alamat"
                                                className=" w-full rounded-xl  px-4 py-2 bg-gray-200"
                                            /> */}
                                            </textarea>

                                            {/* {description === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Silahkan Description</span> : ''} */}
                                        </label>
                                    </div>

                                    <div className="pb-4">
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
                                            </select>

                                        </label>
                                    </div>
                                    <div className="w-full flex justify-end items-end ">
                                        <button type="submit" 
                                            className="px-4 py-2  border-2 hover:bg-lime-400 border-primary bg-primary text-white font-semibold rounded-xl">
                                            Simpan
                                        </button>
                                    </div>

                                </div>


                                
                            </div>
                            
                        </div>
                    </div>
                </div>


                {/* <Link to="/home-sel">
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
                                            type="text"
                                            name="specificType"
                                            placeholder="Nama"
                                            className=" w-full rounded-xl  px-4 py-2 bg-gray-200"
                                        />

                                    </label>
                                    
                                </div>
                                <div className="">
                                    <label className="relative">
                                        <span className="block mb-1 text-sm font-medium text-slate-700">Jenis Kelamin</span>
                                        <select
                                            required
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

                                        </select>

                                    </label>
                                </div>
                                <div className="">
                                    <label className="block">
                                        <span className="block mb-1 text-sm font-medium text-slate-700">
                                            Alamat
                                        </span>
                                        <input
                                            type="text"
                                            name="description"
                                            placeholder="Alamat"
                                            className=" w-full rounded-xl  px-4 py-2 bg-gray-200"
                                        />
                                    </label>
                                </div>
                                <div className="">
                                    <label className="block">
                                        <span className="block mb-1 text-sm font-medium text-slate-700">
                                            No. Handphone
                                        </span>
                                        <input
                                            type="text"
                                            name="description"
                                            placeholder="No. Handphone"
                                            className=" w-full rounded-xl  px-4 py-2 bg-gray-200"
                                        />

                                    </label>
                                </div>
                                <div className=" ">
                                    <button type="submit" 
                                        className="px-4 w-full py-2 mr-4 border-2 hover:bg-lime-400 border-primary bg-primary text-white font-semibold rounded-xl">
                                        Simpan
                                    </button>
                                </div>

                            </div>		
                        </div>
                        
                    </div>
                </div> */}
                    
            </div>

         </Fragment>
     )
 }
 export default ProfileSel