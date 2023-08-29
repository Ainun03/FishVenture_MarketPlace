import React, { Fragment, useEffect, useState } from "react";
// icons
import { IoChevronBackCircle,IoClose } from 'react-icons/io5';
import { BsFillChatDotsFill,BsCalendar4Week,BsCalendar4Event } from 'react-icons/bs';
import { AiOutlinePlusCircle,AiOutlineMinusCircle  } from 'react-icons/ai';
import {BiTime} from 'react-icons/bi'
// route
import NavbarBuyer from "../../../components/buyers/Navbar";
// redux
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import ModalPesanan from "../../../components/buyers/pesanan/modalPesanan";
import moment from "moment"

function ProductDetail(){
    const navigate = useNavigate();
    const { id } = useParams();
    const [showModal, setShowModal] = useState(true);
    const modalClick = () => {
		setShowModal(current => !current);
	};

    const initialValues={

    }

    const { pondBuyer,getBudidayaBuyer } = useSelector(
        (store) => store.buyer
    );
    const [cart, setCart] = useState([1]);
    var totalCartPrice = 0;

    const item=getBudidayaBuyer.find((i) => i.id === id)
    
    const kolam = item.pool
    const fish= item.fishSpecies
    
    const price = item.priceList
    // const sorting = price.sort((a, b)=> (a.price > b.price) ? 1 : -1)
    // console.log("sorting",sorting)
    var startPanen = moment.tz(item.dateOfSeed, "Asia/Jakarta");
    var endPanen = moment.tz(item.estPanenDate,"Asia/Jakarta");

    return(
        <Fragment>
            <div className="relative">
                <div className='modal'>
                    <div className={`fixed overlay bg-black opacity-50 z-[999] h-full w-full inset-x-0 cursor-default transition ease-in-out duration-[850ms] ${showModal ? "hidden" : ""}`}>
                    </div>
                    <div className={`fixed top-[100%] md:top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-b-none rounded-t-2xl md:rounded-2xl z-[999] w-full h-full md:h-auto md:w-[360px] p-8 transition ease-in-out duration-700 ${showModal ? "translate-y-[100%] md:scale-0" : ""}`}>
                        <div className='flex justify-end text-3xl -mt-5 md:-mt-0 mb-6 md:mb-0'>
                            <img role='button' onClick={modalClick} className='mx-auto md:hidden' src='/assets/images/mobile-modal.png' alt='mobile-modal' />
                            <IoClose className='hidden md:block' role='button' onClick={modalClick} />
                        </div>
                        <ModalPesanan stok={item.estTonase} price={price}/>
                        {/* <button onClick={maClick} className='rounded-2xl bg-primary hover:bg-[#7126B5CC] w-full py-3 text-white text-sm font-medium'>
                            Kirim
                        </button> */}
                    </div>
                </div>
            <NavbarBuyer/>

                <div className=" bg-gradient-to-r from-[#A2DBFA] to-[#39A2DB]  ">
                    <div className='bg-transparent absolute z-10'>
                        <IoChevronBackCircle className='m-3 cursor-pointer' size={30} color={'#E2D4F0'} onClick={() => navigate('/product-list-seller')} />
                    </div>
                    <div className='container mx-auto max-w-7xl pt-0 pb-20 md:py-7 relative'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-6'>
                            {/* Carousel */}
                            <div className='text-center '
                            data-aos="fade-right"
                            data-aos-durations="1000"
                            data-aos-delay="500">
                                <img className="rounded-2xl" src='/assets/images/IMG_0003.JPG' alt='product'/>
                            </div>
                            {/* End Carousel */}
                            <div className='-mt-14 md:flex  md:flex-col md:items-center md:justify-center md:mt-0 md:static relative container mx-auto max-w-sm md:max-w-none md:mx-0' 
                            data-aos="fade-left"
                            data-aos-durations="1000"
                            data-aos-delay="500">
                                <div className='rounded-xl w-full px-2 mb-6 bg-gray-300'>
                                    <div className='shadow-main rounded-2xl p-4'>
                                        <div className="flex">
                                            {/* <div>
                                                <img className='w-10 h-10 rounded-md' src="/assets/images/nyet.jpg" alt='profile' />
                                            </div> */}
                                            <div className=" flex items-center justify-center">
                                                <strong className='text-sm uppercase font-medium'>Ikan {fish.name ? fish.name : "Ikan"}</strong>
                                            </div>
                                        </div>
                                        
                                        <div className='info-profile'>
                                            {/* <strong className='text-sm font-medium'>{productData ? (productData.users.username).charAt(0).toUpperCase() + (productData.users.username).slice(1).toLowerCase() : 'Anonymous'}</strong> */}
                                            {/* <h1 className='text-lg font-bold text-neutralGray'>Ikan Lele</h1> */}
                                            <p className='text-xs  text-neutralGray'> {kolam.long? kolam.long : 0}m x <span>{kolam.wide ? kolam.wide : 0}m</span> <span> | {startPanen.from(endPanen,true)}  </span><span> | Stock 80kg </span></p>
                                            <div className="flex pt-2">
                                                <BsCalendar4Week className="text-primary"/>
                                                <p className='text-xs ml-2 text-neutralGray'>18 April 2023 - 1000 ekor</p>
                                            </div>
                                            <div className="flex pt-2">
                                                <BiTime size={15} className="text-primary"/>
                                                <p className='text-xs ml-2 text-neutralGray'>{startPanen.from(endPanen,true)}</p>
                                            </div>
                                            <div className="pt-2 font-bold text-gray-500 text-md">
                                                <h1>Select Harga</h1>
                                            </div>

                                            <div className='price w-full mb-4'>
                                                {price.length > 0 && price.map((item,idx) => 
                                                    <div key={idx} className=" flex text-lg justify-between w-full gap-4 font-bold text-gray-600">
                                                        <div className=" flex text-lg justify-between w-full border-2 my-2 rounded-xl p-2 font-bold text-gray-600">
                                                            <div>
                                                                <p className="font-bold ">Harga Per- <span className="text-[#053742]">{item ? item.limit :"limit"}</span> kg</p>
                                                            </div>
                                                            <div className="">
                                                                <h3 className=' '>{
                                                                    price ? new Intl.NumberFormat('id-ID',
                                                                        { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                                                                    ).format(item.price) : 'Free'
                                                                }</h3>
                                                            </div>
                                                        </div>

                                                    </div>
                                                        // <Cardbuyer key={item.id} buyer={item} />
                                                    )}
                                                    <p className="text-gray-500 text-md font-semibold italic" >stok: {item ? item.estTonase : "stok"}</p>
                                                    <div className="flex justify-between py-2">
                                                        <div>
                                                            <button type="button" onClick={() =>setCart(cart + 1 )}>
                                                                <AiOutlinePlusCircle size={30}/>
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <h1>{cart}</h1>
                                                        </div>
                                                        <div>
                                                            <button type="button" onClick={() =>setCart(cart - 1 )}
                                                                disabled={cart === 0 }
                                                            >
                                                                <AiOutlineMinusCircle size={30}/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between tex-md font-semibold pb-4 w-full">
                                                        <div className="">
                                                            <p>Jumlah</p>
                                                        </div>
                                                        <div className="">
                                                            <div className="">
                                                                <h3 className=' '>{
                                                                    price ? new Intl.NumberFormat('id-ID',
                                                                        { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                                                                    ).format(price.price) : 'Free'
                                                                }</h3>
                                                            </div>
                                                        {/* <p>Total: {item ? item.price : "free"}</p> */}
                                                        </div>
                                                    </div>
                                            </div>
                                            {/* <p className='text-xs text-neutralGray'>{productData ? (productData.users.city).charAt(0).toUpperCase() + (productData.users.city).slice(1).toLowerCase() : 'Anonymous'}</p> */}
                                        </div>
                                    </div>
                                </div>
                                {/* <h1>Jenis Ikan</h1> */}

                                <div className='w-full'>
                                    {/* <div className="grid grid-cols-2 md:grid-cols-2 gap-4">

                                        <div className='shadow-main card-body rounded-2xl p-4 md:mb-0 bg-gray-300'>
                                            <h1 className='font-semibold mb-2'>{
                                                'Undefined'
                                            }</h1>
                                            <h5 className='text-xs text-neutralGray my-1'>Alamat</h5>
                                            <h3 className='text-sm text-neutralGray mb-4'>{
                                                productData ? (productData.categories.strAlcoholic).charAt(0).toUpperCase() + (productData.categories.categoryName).slice(1).toLowerCase() : 'Undefined'
                                            }</h3>
                                            <h2 className='font-medium md:mb-6'>{
                                                20000
                                                productData ? new Intl.NumberFormat('id-ID',
                                                    { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                                                ).format(20000) : 'Free'
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
                                            <div className="text-primary flex justify-between pt-2">
                                                <div><BiTime size={20}/></div>
                                                <div className="text-xs">
                                                    <p>123 Hari</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div> */}
                                    
                                    <div className='btn pt-4 hidden md:block'>
                                        {/* <div className=' flex gap-3'>
                                            <div className=" rounded-xl border bg-primary  p-1 "> 
                                                <BsFillChatDotsFill className="p-1" size={25}/>
                                            </div>
                                        </div> */}
                                            <div className="w-full "> 
                                                <button onClick={modalClick} className='bg-[#39A2DB] hover:bg-[#A2DBFA] p-2 text-white w-full rounded-xl  text-sm transition ease-in-out duration-300 disabled:opacity-40'>
                                                    Pesan Sekarang
                                                </button>
                                            </div>
                                    </div>
                                </div>
                                
                            </div>
                            {/* button mobile */}
                            <div className='md:hidden fixed w-full bottom-5 flex px-5'>
                                
                            
                                <button onClick={modalClick}  className='bg-[#39A2DB] hover:bg-[#A2DBFA] text-white w-full rounded-2xl py-[10px] text-sm transition ease-in-out duration-300 disabled:opacity-40'>
                                    Pesan Sekarang
                                </button>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
export default ProductDetail