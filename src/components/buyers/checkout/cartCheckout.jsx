import React, { Fragment, useState } from "react";

// icons
import { AiOutlinePlusCircle, AiOutlineMinusCircle  } from 'react-icons/ai';

function CartCHeckout () {
    const [count, setCount] = useState(0)
    return(
        <Fragment>
            <div className="container mx-auto max-w-4xl">

            <div className='rounded-xl  bg-gray-300'>
                <div className='shadow-main rounded-2xl p-4 flex w-full'>
                    <img className='w-16 rounded-md' src="/assets/images/sang.png" alt='profile' />
                    <div className='ml-4 w-full'>
                        <h3 className='font-semibold'>Spesifikasi</h3> 
                        <div className=" flex flex-row items-end gap-2 ">
                            <div className="">
                                <button onClick={() =>setCount(count + 1 )}>
                                    <AiOutlinePlusCircle size={20}/>
                                </button>
                            </div>
                            <div className=" pb-1">
                                <h1>{count}</h1>
                            </div>
                            <div className="">
                                <button onClick={() =>setCount(count - 1 )}
                                disabled={count === 0 }
                                >
                                    <AiOutlineMinusCircle size={20}/>
                                </button>
                            </div>
                        </div>

                        <div className="flex pt-2 items-end justify-end">
                            <h3 className='font-semibold text-md'>
                            {
                                new Intl.NumberFormat('id-ID',
                                { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                                ).format(20000)
                            }
                            <span className='font-thin text-xs text-black'>/gram</span>
                            </h3>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='rounded-xl mt-2 bg-gray-300'>
                <div className='shadow-main rounded-2xl p-4'>
                    <div className='info-profile ml-4'>
                        <h3 className='font-bold'>Rincian Pesanan</h3> 
                        <div className="flex pt-4 justify-between w-full ">
                            <div className="">
                                <h5 className='text-sm text-neutralGray my-1'>Total Pesanan</h5>
                            </div>
                            <div className="">
                                <h3 className='font-semibold text-md'>
                                    {
                                        new Intl.NumberFormat('id-ID',
                                        { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                                        ).format(200000)
                                    }
                                    {/* <span className='font-thin text-xs text-black'>/gram</span> */}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
                             
            <div className="flex fixed inset-x-2/4 bottom-5 justify-center">
                <button   className='bg-primary p-4 hover:bg-lime-400 text-white rounded-2xl py-[10px] text-sm transition ease-in-out duration-300 disabled:opacity-40'>
                    Hubungi Penjual
                </button>
            </div>            
        </div>
        </Fragment>
    )
}
export default CartCHeckout