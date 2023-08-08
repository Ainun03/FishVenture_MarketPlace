import React, { Fragment,useState } from "react";
import { IoClose } from 'react-icons/io5';
import ModalPesanan from "./modalPesanan";

import Clock from 'react-live-clock';

function Selesai(){
    const [showModal, setShowModal] = useState(true);

    const modalClick = () => {
        setShowModal(current => !current);
    };
    return(
        <Fragment>
            <div className="relative ">
                <div className=" card bg-white h-screen ">
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
                        <div className="bg-[#EEFFF6] text-[#46DB39] p-1 px-2 boorder-1 rounded-xl">
                            <span className="text-sm font-normal">Selesai</span>
                        </div>
                    </div>
                    <div className="px-4  mx-4 md:mx-auto py-4 max-w-4xl border border-gray-300 rounded shadow-xl rounded">
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
                        {/* <div className="flex w-full pt-2 justify-center">
                            <div >
                                <button onClick={modalClick} className="border rounded p-2 text-[#DB3939] border-[#DB3939]">
                                    <span>Batalkan Pesanan</span>
                                </button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Selesai