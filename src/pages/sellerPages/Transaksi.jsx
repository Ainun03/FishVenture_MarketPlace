import React, { Fragment,useState } from "react";
import { IoClose } from 'react-icons/io5';

import Clock from 'react-live-clock';

function TransaksiSeller(){
    const [showModal, setShowModal] = useState(true);

    const modalClick = () => {
        setShowModal(current => !current);
    };
    return(
        <Fragment>
            <div className="relative">
                <div className='modal'>
                    <div className={`fixed overlay bg-black opacity-50 z-[999] h-full w-full inset-x-0 cursor-default transition ease-in-out duration-[850ms] ${showModal ? "hidden" : ""}`}>
                    </div>
                    <div className={`fixed top-[85%] md:top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-b-none rounded-t-2xl md:rounded-2xl z-[999] w-full h-full md:h-auto md:w-[360px] p-8 transition ease-in-out duration-700 ${showModal ? "translate-y-[100%] scale-0 md:scale-0" : ""}`}>
                        <div className='flex justify-end text-3xl -mt-5  mb-6 md:mb-0'>
                            {/* <h1 className=" font-semibold text-lg">Konfirmasi</h1> */}
                            <img role='button' onClick={modalClick} className='mx-auto md:hidden' src='/assets/images/mobile-modal.png' alt='mobile-modal' />
                            <IoClose className='hidden md:block' role='button' onClick={modalClick} />
                            {/* <div className="">hallo</div> */}
                        </div>
                        <div className="">
                            <h1 className=" font-semibold text-lg">Konfirmasi</h1>
                            <p className="text-sm text-gray-400 font-thin">Apakah Anda yakin ingin membatalkan Pesanan?</p>
                        </div>
                        <div className="flex gap-4 font-semibold justify-end">
                            <button className="hover:text-gray-500 ">Ya</button>
                            <button className="hover:text-gray-500 ">Tidak</button>
                        </div>
                        {/* <ModalPesanan /> */}
                    </div>
                </div>

                <div className="  card bg-white h-screen ">
                    <div className=" w-full justify-between mx-auto px-4 flex">
                        <div>
                            <h1>DRM00000123</h1>
                        </div>
                        <div className="flex gap-2 justify-end ">
                            <Clock format={' dddd, D MMMM YYYY - h:mm:ss '} ticking={true} timezone={'Asia/Jakarta'} />
                            <h1>WIB</h1>
                        </div>
                    </div>
                    <div className=" flex mx-4 pt-2">
                        <div className="bg-[#F3F9FF] text-[#74AEE9] p-1 px-2 boorder-1 rounded-xl">
                            <span className="text-sm font-normal">Sedang Proses</span>
                        </div>
                    </div>
                    <div className="px-4  py-4 mx-4 md:mx-auto max-w-4xl border border-gray-300 rounded shadow-xl">
                        <div className="flex pt-2">
                            <div className="">
                                <img className="rounded-2xl w-40 h-32" src='/assets/images/lele.png' alt='lele'/>
                            </div>
                            <div className=" flex flex-col justify-center mx-4">
                                <h1 className="text-lg font-bold">Ikan Lele</h1>
                                <p className="text-sm">20 Kg</p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <h3 className='font-semibold text-3xl'>
                            {
                                new Intl.NumberFormat('id-ID',
                                { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                                ).format(20000)
                            }
                            </h3>
                        </div>
                        <div className="flex w-full pt-2 justify-center">
                            <div >
                                <button onClick={modalClick} className="border rounded p-2 text-[#DB3939] border-[#DB3939]">
                                    <span>Batalkan Pesanan</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default TransaksiSeller