import React, { Fragment, useEffect, useState } from "react";
// icons
import { IoChevronBackCircle,IoClose } from 'react-icons/io5';
import { BsFillChatDotsFill,BsCalendar4Week,BsCalendar4Event,BsFillCartFill } from 'react-icons/bs';
import { AiOutlinePlusCircle,AiOutlineMinusCircle,AiOutlineShoppingCart, AiOutlineConsoleSql  } from 'react-icons/ai';
import {BiTime} from 'react-icons/bi'
// route
import NavbarBuyer from "../../../components/buyers/Navbar";
// redux
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import ModalPesanan from "../../../components/buyers/pesanan/modalPesanan";
import moment from "moment"

// slice
import { addToCart,addToCheckout } from "../../../slices/buyer/buyerSlice";

function ProductDetail(){
    const [quantity, setQuantity] = useState('');
    const [editQuantity, setEditQuantity] = useState('');
    const navigate = useNavigate();
    const dispatch =useDispatch();
    const { id } = useParams();
    const [showModal, setShowModal] = useState(true);
    const modalClick = () => {
		setShowModal(current => !current);
	};

    
    const { pondBuyer,getBudidayaBuyer,productDetail } = useSelector(
        (store) => store.buyer
    );
    const [cart, setCart] = useState(0);
    const kolam = productDetail.pool
    const fish= productDetail.fishSpecies
    
    const price1 = productDetail.priceList

    let arrayForSort = [...price1]
    arrayForSort.sort((a, b) => (a.price > b.price) ? 1 : -1)

    const initialValues={
        budidayaID:id ? id : "",
        qty:0,
        bookingDate:"",
    }

    // const list = [
    //     { qty: 2, size: 'XXL' },
    //     { qty: 10, size: 'XL' },
    //     { qty: 8, size: 'M' }
    //   ]
    //   list.sort((a, b) => (a.qty > b.qty) ? 1 : -1)

    //   console.log(list)
      
    // const sorting = price.sort((a, b)=> (a.price > b.price) ? 1 : -1)
    // console.log("sorting",sorting)

    // console.log(price)

    // const myData = [].concat(price)
    // .sort((a, b) => a.limit > b.limit ? 1 : -1)
    // .map((item, i) => 
    //     <div key={i}> {item.id} {item.limit}</div>
    // );
    // console.log(myData)
    var startPanen = moment.tz(productDetail.dateOfSeed, "Asia/Jakarta");
    var endPanen = moment.tz(productDetail.estPanenDate,"Asia/Jakarta");

    const handleClick=()=>{
        dispatch(addToCheckout([initialValues]));
        modalClick()
    }

    return(
        <Fragment>
            <div className="relative">
                <div className='modal'>
                    <div className={`fixed overlay bg-black opacity-50 z-[999] h-full w-full inset-x-0 cursor-default transition ease-in-out duration-[850ms] ${showModal ? "hidden" : ""}`}>
                    </div>
                    <div className={`fixed top-[100%] md:top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  bg-gray-200 rounded-b-none rounded-t-2xl md:rounded-2xl z-[999] w-full h-full md:h-auto md:w-[700px] p-8 transition ease-in-out duration-700 ${showModal ? "translate-y-[100%] md:scale-0" : ""}`}>
                        <div className='flex justify-end text-3xl -mt-5 md:-mt-5 mb-6 md:mb-0'>
                            <img role='button' onClick={modalClick} className='mx-auto md:hidden' src='/assets/images/mobile-modal.png' alt='mobile-modal' />
                            <IoClose className='hidden md:block' role='button' onClick={modalClick} />
                        </div>
                        <div className="pt-2">
                            <ModalPesanan stok={productDetail.estTonase} fish={fish} price={price1} modalClick={modalClick}/>
                        </div>
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
                                        
                                        <div className='product-detail'>
                                            <p className='text-xs  text-neutralGray'> {kolam.long? kolam.long : 0}m x <span>{kolam.wide ? kolam.wide : 0}m</span> <span> | {startPanen.from(endPanen,true)}  </span><span> | Stock 80kg </span></p>
                                            <div className="flex pt-2">
                                                <BsCalendar4Week className="text-primary"/>
                                                <p className='text-xs ml-2 text-neutralGray'>18 April 2023 - {productDetail? productDetail.estTonase : "Stok Kosong"} ekor</p>
                                            </div>
                                            <div className="flex pt-2">
                                                <BiTime size={15} className="text-primary"/>
                                                <p className='text-xs ml-2 text-neutralGray'>{startPanen.from(endPanen,true)}</p>
                                            </div>
                                            <div className="pt-2 font-bold text-gray-500 text-md">
                                                <h1>Select Harga</h1>
                                            </div>

                                            <div className='price w-full mb-4'>
                                                {
                                                    arrayForSort.length ?
                                                    (
                                                        arrayForSort.map((val,idx) => 
                                                        // let arrayForSort = [...price1]
                                                        // .sort((a, b) => (a.price > b.price) ? 1 : -1)
                                                        <div key={idx} className=" flex text-lg justify-between w-full gap-4 font-bold text-gray-600">
                                                            <div className=" flex text-lg justify-between w-full border-2 my-2 rounded-xl p-2 font-bold text-gray-600">
                                                                <div>
                                                                    <p className="font-bold ">Harga Per- <span className="text-[#053742]">{val ? val.limit :"limit"}</span> kg</p>
                                                                </div>
                                                                <div className="">
                                                                    <h3 className=' '>{
                                                                        arrayForSort ? new Intl.NumberFormat('id-ID',
                                                                            { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                                                                        ).format(val.price) : 'Free'
                                                                    }</h3>
                                                                </div>
                                                            </div>
                                                            {/* <div className='w-fit text-right text-sm text-white bg-green-500 px-1 rounded-sm cursor-pointer select-none' onClick={()=>addtocart(val)} >Add</div> */}
                                                        </div>
                                                        )
                                                        ):(
                                                            <>Tidak Ada Data</>
                                                        )
                                                    }
                                                    <p className="text-gray-500 text-md font-semibold italic" >stok: {productDetail ? productDetail.estTonase : "stok"}</p>
                                                    <div className="flex justify-between py-2">
                                                        <div>
                                                            <button htmlFor="cart" type="button" onClick={(e) =>setCart(cart + 1)}>
                                                                <AiOutlinePlusCircle size={30}/>
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <label htmlFor="cart">
                                                                <input 
                                                                    type="number"
                                                                    name="cart"
                                                                    value={cart}
                                                                />
                                                            </label>
                                                            {/* <h1>{cart ? cart : 0}</h1> */}
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
                                                        
                                                        <div className="flex self-end w-40 border-b border-orange-600 text-lg font-bold">
                                                            <h3 className=' '>{
                                                                arrayForSort ? new Intl.NumberFormat('id-ID',
                                                                    { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                                                                ).format(arrayForSort.price) : 'Free'
                                                            }</h3>
                                                        </div>
                                                        {/* <p>Total: {item ? item.price : "free"}</p> */}
                                                       
                                                    </div>
                                            </div>
                                            {/* <p className='text-xs text-neutralGray'>{productData ? (productData.users.city).charAt(0).toUpperCase() + (productData.users.city).slice(1).toLowerCase() : 'Anonymous'}</p> */}
                                        </div>
                                    </div>
                                </div>
                                {/* <h1>Jenis Ikan</h1> */}

{/* web ========================= Button */}
                                {/* {console.log(productDetail)} */}
                                <div className='w-full'>
                                    <div className='btn pt-4 hidden md:block px-5'>
                                        <div className=' flex gap-3'>
                                            <div onClick={()=>dispatch(addToCart(productDetail))} className=" cursor-pointer  rounded-lg text-white bg-[#39A2DB] hover:bg-[#A2DBFA]  p-1 "> 
                                                <AiOutlineShoppingCart className=""  size={25}/>
                                            </div>
                                            <div className="w-full "> 
                                                {/* <button onClick={modalClick} className='bg-[#39A2DB] hover:bg-[#A2DBFA] p-2 text-white w-full rounded-xl  text-sm transition ease-in-out duration-300 disabled:opacity-40'>
                                                    Pesan Sekarang
                                                </button> */}
                                                <button onClick={()=> handleClick()} className='bg-[#39A2DB] hover:bg-[#A2DBFA] p-2 text-white w-full rounded-xl  text-sm transition ease-in-out duration-300 disabled:opacity-40'>
                                                    Pesan Sekarang
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
{/* mobile ========================= Button */}
                            {/* <div className='md:hidden fixed w-full bottom-5 flex px-5'>
                                <button onClick={modalClick}  className='bg-[#39A2DB] hover:bg-[#A2DBFA] text-white w-full rounded-2xl py-[10px] text-sm transition ease-in-out duration-300 disabled:opacity-40'>
                                    Pesan Sekarang
                                </button>
                            </div> */}

                            <div className='md:hidden fixed  w-full bottom-5 px-5'>   
                                <div className=' flex gap-3'>
                                    <div className=" cursor-pointer rounded-lg text-white bg-[#39A2DB] hover:bg-[#A2DBFA]  p-1 "> 
                                        <AiOutlineShoppingCart  size={25}/>
                                    </div>  
                                    <div className="w-full">
                                        <button onClick={()=> handleClick()}   className='bg-[#39A2DB] hover:bg-[#A2DBFA] text-white w-full rounded-2xl py-[10px] text-sm transition ease-in-out duration-300 disabled:opacity-40'>
                                            Pesan Sekarang
                                        </button>
                                    </div>            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
export default ProductDetail