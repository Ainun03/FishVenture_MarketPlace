import React, { Fragment, useState } from "react";

// icons
import { AiOutlinePlusCircle, AiOutlineMinusCircle  } from 'react-icons/ai';

function CartCHeckout () {
    const [count, setCount] = useState(0)
    return(
        <Fragment>
            {/* <div className='card border-2 hover:origin-top-left  rounded-md p-2 shadow-main shadow-slate-700 h-48 cursor-pointer' >
                <img className="rounded-md h-[100px] w-screen object-cover" src='/assets/images/sang.png' alt='product' />
                <div className="card-body px-2 pt-2 pb-3">
                    <h3 className='font-semibold'>Spesifikasi</h3> 
                    <h5 className='text-xs text-neutralGray my-1'>deskripsi</h5>
                    <h3 className='font-semibold text-primary'>
                    {
                        new Intl.NumberFormat('id-ID',
                        { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                        ).format(20000)
                    }
                    <span className='font-thin text-xs text-black'>/gram</span>
                    </h3>
                </div>
            </div> */}
            <div className='rounded-xl flex bg-gray-300'>
                <div className='shadow-main rounded-2xl p-4 flex'>
                    <img className='w-12 rounded-md' src="/assets/images/sang.png" alt='profile' />
                    <div className='info-profile ml-4'>
                        <h3 className='font-semibold'>Spesifikasi</h3> 
                        <h5 className='text-xs text-neutralGray my-1'>deskripsi</h5>
                        <h3 className='font-semibold text-primary'>
                        {
                            new Intl.NumberFormat('id-ID',
                            { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                            ).format(20000)
                        }
                        <span className='font-thin text-xs text-black'>/gram</span>
                        </h3>
                    </div>
                </div>
                <div className="w-full flex flex-col items-end justify-between p-4 ">
                    <div className="">
                        <button onClick={() =>setCount(count + 1 )}>
                            <AiOutlinePlusCircle size={20}/>
                        </button>
                    </div>
                    <div className="mx-1.5 pb-1">
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
            </div>
        </Fragment>
    )
}
export default CartCHeckout