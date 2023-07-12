import React, { Fragment, useState } from "react";

// icons
import { IoChevronBackCircle } from 'react-icons/io5';
import { BsFillChatDotsFill,BsCalendar4Week,BsCalendar4Event } from 'react-icons/bs';
import {BiTime} from 'react-icons/bi'

// route
// redux
import { useNavigate, useParams } from 'react-router-dom';

function DetailSeller(){
    const navigate = useNavigate();
    return(
        <Fragment>
            <div className="relative bg-gradient-to-r from-[#A2DBFA] to-[#39A2DB]  ">
                <div className='bg-transparent absolute z-10'>
                    <IoChevronBackCircle className='m-3 cursor-pointer' size={30} color={'#E2D4F0'} onClick={() => navigate('/home-sel/inventory')} />
                </div>
                <div className='container mx-auto max-w-4xl pt-0 pb-20 md:py-7 relative'>
                    <div className='grid grid-cols-1 md:grid-cols-3 md:gap-6'>
                        {/* Carousel */}
                        <div className='col-span-2 text-center '
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
                            <div className='rounded-xl w-full mx-2 mb-6 bg-gray-300'>
                                <div className='shadow-main h-46  rounded-2xl p-4'>
                                    {/* <div className="flex">
                                        <div>
                                            <img className='w-10 h-10 rounded-md' src="/assets/images/nyet.jpg" alt='profile' />
                                        </div>
                                        <div className="ml-2 flex items-center justify-center">
                                            <strong className='text-sm font-medium'>Anonymous</strong>
                                        </div>
                                    </div> */}
                                    <div className='info-profile'>
                                        {/* <strong className='text-sm font-medium'>{productData ? (productData.users.username).charAt(0).toUpperCase() + (productData.users.username).slice(1).toLowerCase() : 'Anonymous'}</strong> */}
                                        <h1 className='text-lg font-bold text-neutralGray'>Ikan Lele</h1>
                                        <p className='text-xs  text-neutralGray'>Ukuran 1m x 1m <span> | Umur 73 hari  </span><span> | Stock 80kg </span></p>
                                        <div className="flex pt-2">
                                            <BsCalendar4Week className="text-primary"/>
                                            <p className='text-xs ml-2 text-neutralGray'>18 April 2023 - 1000 ekor</p>
                                        </div>
                                        <div className="flex pt-2">
                                            <BiTime size={15} className="text-primary"/>
                                            <p className='text-xs ml-2 text-neutralGray'>24 Hari</p>
                                        </div>
                                        <h3 className='font-semibold pt-2 text-primary'>
                                            {
                                                new Intl.NumberFormat('id-ID',
                                                { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                                                ).format(20000)
                                            }
                                            <span className='font-thin text-xs text-black'>/kg</span>
                                        </h3>
                                        {/* <p className='text-xs text-neutralGray'>{productData ? (productData.users.city).charAt(0).toUpperCase() + (productData.users.city).slice(1).toLowerCase() : 'Anonymous'}</p> */}
                                    </div>
                                </div>
                            </div>
                            {/* <h1>Jenis Ikan</h1> */}

                            <div className='w-full mx-2'>
                                <div className="w-full "> 
                                    <button className='bg-[#39A2DB] hover:bg-[#A2DBFA] p-2 text-white w-full rounded-xl  text-sm transition ease-in-out duration-300 disabled:opacity-40'>
                                        Edit
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                        <div className='col-span-2 md:col-span-4 rounded-xl bg-gray-300 container mx-auto max-w-sm md:max-w-none md:mx-0 mt-2 md:mt-0'
                        data-aos="fade-right"
                        data-aos-durations="1000"
                        data-aos-delay="500">
                            <div className=' shadow-main rounded-2xl p-4'>
                                <h1 className='font-medium text-sm mb-3'>Deskripsi</h1>
                                <p className='text-neutralGray text-sm mb-4'>
                                    
                                    Keterangan
                                    MOHON MENANYAKAN KETERSEDIAAN

                                    Ikan Lele hidup 1kg isi 5/6/7/8/9/10 ekor (berat 1kg ditimbang ketika hidup dan dikirim sesuai ketersediaan stok).

                                    - Ikan kondisi HIDUP, bukan dijual yg sudah mati
                                    - Segar
                                    - Higienis
                                    - Berkualitas

                                    OPEN ORDER SETIAP SESUAI TANGGAL  PANEN

                                    PENTING:
                                    -Orderan di atas jam 15.00 akan di kirim keesokan harinya.
                                    - Pengiriman hanya bisa menggunakan kendaraan pribadi (Biaya ongkir tergantung Jarak dan banyak pesanan yang di beli)
                                    - Untuk menjaga kesegaran dan kualitas ikan disarankan menjemput langsung ke lokasi (free ongkir)
                                    - Pesanan yang lebih dari 24 jam, maka otomatis pesanan batal

                                    Info pembelian dalam jumlah besar, untuk suplai restoran, katering, pemancingan atau reseller bisa menghubungi:

                                    +62000900000
                                </p>
                            </div>
                        </div>
                        {/* button mobile */}
                        <div className='md:hidden fixed w-full bottom-5 flex px-5'>
                            
                        
                            <button   className='bg-[#39A2DB] hover:bg-[#A2DBFA] text-white w-full rounded-2xl py-[10px] text-sm transition ease-in-out duration-300 disabled:opacity-40'>
                                Pesan Sekarang
                            </button>


                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
export default DetailSeller