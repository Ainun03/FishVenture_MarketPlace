import React, { Fragment, useEffect, useState } from "react";

// icons
import { IoChevronBackCircle } from 'react-icons/io5';
import { BsFillChatDotsFill,BsCalendar4Week,BsTelephone } from 'react-icons/bs';
import {BiTime,BiMap} from 'react-icons/bi'
// route
import { useDispatch, useSelector } from "react-redux";
import NavbarBuyer from "../../../components/buyers/Navbar";
import CardSellerList from "../../../components/buyers/cardSellerList";
// redux
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getListBudidayaBuyer} from "../../../slices/buyer/buyerSlice";
import { listPondBuyer,sellerPond } from "../../../slices/buyer/buyerSlice";

function ProductSeller(items){
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const { id } = useParams();

    const { pondBuyer,getBudidayaBuyer,sellerDetailID } = useSelector(
        (store) => store.buyer
    );
    const {isAuntheticated} =useSelector(
        (store) =>store.user
      )
    
    // const item=sellerDetailID
    // const item=pondBuyer
    useEffect(() => {
        if (isAuntheticated !== true){
          dispatch(listPondBuyer())
        }
      }, [dispatch,isAuntheticated]);
      console.log(getBudidayaBuyer)

    useEffect(() => {
        dispatch(getListBudidayaBuyer({id:id}));
     },[dispatch,id]);

    // useEffect(() => {
    //     dispatch(sellerPond({id:id}));
    //  },[dispatch,id]);

    // const item=pondBuyer.find((i) => i.id === id)

    return(
        <Fragment>
            <NavbarBuyer/>
            <div className="relative bg-gradient-to-r from-[#A2DBFA] to-[#39A2DB]  ">
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
                            {/* {sellerDetailID.map((item)=>{ */}
                                <img className="rounded-2xl h-[400px] shadow-md w-screen  object-cover" src={sellerDetailID ? sellerDetailID.image :  'https://static.vecteezy.com/system/resources/previews/003/475/012/original/confused-man-with-question-mark-concept-flat-illustration-free-vector.jpg'} alt="pond"/>
                            {/* })} */}
                        </div>
                        {/* End Carousel */}
                        <div className='-mt-14 md:flex  md:flex-col md:items-center md:justify-center md:mt-0 md:static relative container mx-auto max-w-sm md:max-w-none md:mx-0' 
                        data-aos="fade-left"
                        data-aos-durations="1000"
                        data-aos-delay="500">
                              {/* { sellerDetailID.length > 0 && sellerDetailID.map((item)=> */}
                                <div className='rounded-xl w-full mb-6 shadow-main shadow-slate-700 shadow-md bg-white'>
                                    <div className='shadow-main h-46  rounded-2xl p-4'>
                                        <div className="flex justify-between">    
                                            <div className=" flex items-center justify-center">
                                                <strong className='font-semibold uppercase text-2xl'>{sellerDetailID ? sellerDetailID.name : "Anonymous"}</strong>
                                            </div>
                                            <div>
                                                <img className='w-10 h-10 rounded-md' src="/assets/images/nyet.jpg" alt='profile' />
                                            </div>
                                        </div>
                                        <div className='info-profile pt-2'>
                                            {/* <strong className='text-sm font-medium'>{productData ? (productData.users.username).charAt(0).toUpperCase() + (productData.users.username).slice(1).toLowerCase() : 'Anonymous'}</strong> */}
                                            <div className="flex pt-2">
                                                <div>
                                                    <Link to={sellerDetailID ? sellerDetailID.url : "www.google.com"} target="_blank">
                                                        <BiMap size={20} className="text-secondary"/>
                                                    </Link>
                                                </div>
                                                {/* <div className="">
                                                </div> */}
                                                <div className="">
                                                    <p className='text-xs ml-2 capitalize text-neutralGray'><span>{sellerDetailID ? sellerDetailID.detailAddress : "detailAlamat"}</span> <span>{sellerDetailID ? sellerDetailID.district.name : "kecamatan"} </span><span>{sellerDetailID ? sellerDetailID.city.name : "Kota"}</span> <span>{sellerDetailID ? sellerDetailID.province.name : "Provinsi"} </span><span>{sellerDetailID ? sellerDetailID.country.name : "Negara"}</span> 12730</p>
                                                </div>
                                            </div>
                                            <div className="flex pt-2">
                                                <div>
                                            
                                                    <BsTelephone size={15} className="text-secondary"/>
                                                    
                                                </div>
                                                <div>
                                                    <p className='text-xs ml-3 text-neutralGray'>(021) 71790991</p>
                                                </div>
                                            </div>
                                            {/* <p className='text-xs text-neutralGray'>{productData ? (productData.users.city).charAt(0).toUpperCase() + (productData.users.city).slice(1).toLowerCase() : 'Anonymous'}</p> */}
                                        </div>
                                    </div>
                                </div>
                              {/* )} */}
                            <div className='btn pt-4 w-full hidden md:block'>
                                <div className=' flex gap-3'>
                                    <div className=" rounded-xl text-white bg-[#39A2DB] hover:bg-[#A2DBFA] p-1 "> 
                                        <BsFillChatDotsFill className="p-1" size={25}/>
                                    </div>
                                    <div className="w-full "> 
                                        <button className='bg-[#39A2DB] hover:bg-[#A2DBFA] p-2  text-white w-full rounded-xl  text-sm transition ease-in-out duration-300 disabled:opacity-40'>
                                            Hubungi Penjual
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                            <div className='col-span-2 md:col-span-4 container mx-auto max-w-sm md:max-w-none md:mx-0 md:mt-0'
                            >
                                <h1 className="font-bold text-lg text-gray-700">Jenis Ikan</h1>
                                    { getBudidayaBuyer.length > 0  ? (
                                    // <div className=" flex w-full bg-secondary justify-center h-full  ">
                                    //     {getBudidayaBuyer.map(item => <CardSellerList key={item.id} buyer={item} />)}
                                    // </div>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {/* <h1>Produk Kosong</h1> */}
                                        { getBudidayaBuyer.map(item => <CardSellerList key={item.id} buyer={item} />)}
                                    </div>
                                        
                                    ):(
                                        <div className=" flex w-full font-semibold text-gray-500 items-center justify-center h-full  ">
                                            <h1>Produk Kosong</h1> 
                                        </div>

                                    )}
                                
                            </div>
                        {/* button mobile */}
                        <div className='md:hidden fixed  w-full bottom-5 px-5'>   
                            <div className=' flex gap-3'>
                                <div className=" cursor-pointer rounded-xl text-white bg-[#39A2DB] hover:bg-[#A2DBFA]  p-2 "> 
                                    <BsFillChatDotsFill  size={25}/>
                                </div>  
                                <div className="w-full">
                                    <button   className='bg-[#39A2DB] hover:bg-[#A2DBFA] text-white w-full rounded-2xl py-[10px] text-sm transition ease-in-out duration-300 disabled:opacity-40'>
                                        Hubungi Penjual
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
export default ProductSeller