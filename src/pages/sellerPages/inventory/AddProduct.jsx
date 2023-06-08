import React,{Fragment} from "react";

// icons
import { IoChevronBackCircle } from 'react-icons/io5';

// react dom
import { Link } from "react-router-dom";

function AddProduct () {
    return (
        <Fragment>
            <div className="relative" 
            data-aos="fade-up"
            data-aos-durations="1000"
            data-aos-delay="500">
                {/* <Link to="/home-sel/inventory">
                    <div className='bg-transparent absolute z-10'>
                        <IoChevronBackCircle className='m-7 cursor-pointer ' size={30} color={'#ffffff'} />
                    </div>
                </Link> */}
                <div className="container mx-auto max-w-3xl pt-0 pb-20 md:py-7 relative">
                    <div className="text-center text-3xl font-semibold">
                        <h1>Post Produk</h1>
                    </div>
                    <div className="flex container  mx-auto max-w-3xl pt-3" >
				
				<div className="w-full p-6 border mx-4 rounded-lg border-xl bg-white" >
                    <div className="mb-4">
                            <label className="relative">
                                <span className="block mb-1 text-sm font-medium text-slate-700">Pilih Produk</span>
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
                                        Type Produk
                                    </option>
                                    
                                    <option value={1}>Kelapa</option>
                                    <option value={2}>Pisang</option>
                                    {/* {allProvinces.map((province) => (
                                        <option key={province} value={province}>
                                            {province}
                                        </option>
                                    ))} */}

                                </select>

                            </label>
                            {/* {productTypeId === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Silahkan Isi Tipe Produk</span> : ''} */}
                        </div>

                        <div className="mb-4 pt-5">
                            <label className="block">
                                <span className="block mb-1 text-sm font-medium text-slate-700">
                                    Spesifikasi
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
                        </div>
                        <div className="mb-4 pt-5">
                            <label className="block">
                                <span className="block mb-1 text-sm font-medium text-slate-700">
                                    Description
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
                        <div className=" mb-4 ">
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

        </Fragment>
    )
}
export default AddProduct