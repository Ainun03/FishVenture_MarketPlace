import React, { Fragment, useState } from "react";

// icons
import { IoChevronBackCircle } from 'react-icons/io5';
import { AiOutlinePlusCircle,AiOutlineMinusCircle  } from 'react-icons/ai';

// route
import NavbarBuyer from "../../../components/buyers/Navbar";
// redux
import { useNavigate, useParams } from 'react-router-dom';

function ProductDetail(){
    const navigate = useNavigate();
    const [count, setCount] = useState(0)

    return(
        <Fragment>
            <NavbarBuyer/>
            <div className="relative bg-gradient-to-r from-[#0172AF] to-[#74FEBD]  ">
                <div className='bg-transparent absolute z-10'>
                    <IoChevronBackCircle className='m-3 cursor-pointer' size={30} color={'#E2D4F0'} onClick={() => navigate('/')} />
                </div>
                <div className='container mx-auto max-w-4xl pt-0 pb-20 md:py-7 relative'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-x-0 md:gap-6'>
                        {/* Carousel */}
                        <div className='col-span-2 text-center '
                        data-aos="fade-right"
                        data-aos-durations="1000"
                        data-aos-delay="500">
                            <img className="rounded-2xl" src='/assets/images/IMG_0003.JPG' alt='product'/>
                        </div>
                        {/* End Carousel */}
                        <div className='-mt-14 md:mt-0 md:static relative container mx-auto max-w-sm md:max-w-none md:mx-0' 
                        data-aos="fade-left"
                        data-aos-durations="1000"
                        data-aos-delay="500">
                            <div className='mb-6'>
                                <div className='shadow-main rounded-2xl p-4 md:mb-0 bg-gray-300'>
                                    <h1 className='font-semibold mb-2'>{
                                         'Undefined'
                                    }</h1>
                                    {/* <h3 className='text-sm text-neutralGray mb-4'>{
                                        productData ? (productData.categories.strAlcoholic).charAt(0).toUpperCase() + (productData.categories.categoryName).slice(1).toLowerCase() : 'Undefined'
                                    }</h3> */}
                                    <h2 className='font-medium md:mb-6'>{
                                        20000
                                        // productData ? new Intl.NumberFormat('id-ID',
                                        //     { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                                        // ).format(20000) : 'Free'
                                    }</h2>
                                    <div className="flex justify-between py-2">
                                        <div>
                                            <button onClick={() =>setCount(count + 1 )}>
                                                <AiOutlinePlusCircle size={30}/>
                                            </button>
                                        </div>
                                        <div>
                                            <h1>{count}</h1>
                                        </div>
                                        <div>
                                            <button onClick={() =>setCount(count - 1 )}
                                                disabled={count === 0 }
                                            >
                                                <AiOutlineMinusCircle size={30}/>
                                            </button>
                                        </div>
                                    </div>

                                    <div className='btn  hidden md:block'>
                                        <div className='wrap-btn'>
                                        <button className='bg-primary hover:bg-lime-400 text-white w-full rounded-2xl py-[10px] text-sm transition ease-in-out duration-300 disabled:opacity-40'>
                                            Kirim
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='rounded-xl bg-gray-300'>
                                <div className='shadow-main  rounded-2xl p-4 flex'>
                                    <img className='w-12 h-12 rounded-md' src="/assets/images/nyet.jpg" alt='profile' />
                                    <div className='info-profile ml-4'>
                                        {/* <strong className='text-sm font-medium'>{productData ? (productData.users.username).charAt(0).toUpperCase() + (productData.users.username).slice(1).toLowerCase() : 'Anonymous'}</strong> */}
                                        <strong className='text-sm font-medium'>Anonymous</strong>
                                        <p className='text-xs text-neutralGray'>Banyuwangi</p>
                                        {/* <p className='text-xs text-neutralGray'>{productData ? (productData.users.city).charAt(0).toUpperCase() + (productData.users.city).slice(1).toLowerCase() : 'Anonymous'}</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-2 rounded-xl bg-gray-300 container mx-auto max-w-sm md:max-w-none md:mx-0 mt-6 md:mt-0'
                        data-aos="fade-right"
                        data-aos-durations="1000"
                        data-aos-delay="500">
                            <div className=' shadow-main rounded-2xl p-4'>
                                <h1 className='font-medium text-sm mb-3'>Deskripsi</h1>
                                <p className='text-neutralGray text-sm mb-4'>
                                    {/* Deskripsi Produk ...... */}
                                    {'No Description'}
                                </p>
                            </div>
                        </div>
                        {/* button mobile */}
                        <div className='md:hidden fixed w-full bottom-5 grid px-5'>
                        
                            <button   className='bg-primary hover:bg-lime-400 text-white w-full rounded-2xl py-[10px] text-sm transition ease-in-out duration-300 disabled:opacity-40'>
                                Kirim
                            </button>


                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
export default ProductDetail