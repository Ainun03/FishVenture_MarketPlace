import React, { Fragment, useState } from "react";

// icons
import { AiOutlinePlusCircle, AiOutlineMinusCircle  } from 'react-icons/ai';
import {BsTrash  } from 'react-icons/bs';

function CartCHeckout ({product,decrement,increment,deleteItem}) {
    const [count, setCount] = useState(0)
    const priced= product.priceList
    return(
        <Fragment>
            <div className="container mx-auto max-w-4xl">
                <div className='w-full h-auto p-10 flex flex-col space-y-4 justify-center border-2 items-center relative'>
                    {product?.map((val,index)=>
                        <div key={index} className='flex space-x-10 w-full h-20 border-orange-200 border-b items-center'>
                            <div className='w-80 h-auto line-clamp-1 uppercase'>{val?.fishSpecies.name}</div>
                            <div className='flex space-x-2'>
                                <div className='cursor-pointer select-none' onClick={()=>decrement(val.id)}>-</div>
                                <p className='font-semibold'>{val.qty}</p>
                                <div className='cursor-pointer select-none' onClick={()=>increment(val.id)}>+</div>
                            </div>
                            <p className='font-semibold'>
                                {
                                    new Intl.NumberFormat('id-ID',
                                    { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                                    ).format(val.priceList.price)
                                }
                            </p>
                            <p className='font-bold'>${val.price*val.qty}</p>
                            <BsTrash className='w-5 h-5 text-red-500 rounded-sm cursor-pointer' onClick={()=>deleteItem(val.id)}/>
                            
                        </div>
                    )}
                    {/* <div className='rounded-xl  bg-gray-300'>
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
                        
                    </div> */}
                    {product.length?
                        <div className='flex self-end w-40 border-b border-orange-600 text-lg font-bold'>Total : 
                        {
                            new Intl.NumberFormat('id-ID',
                            { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                            ).format( 
                                product.reduce((sum,item)=>{
                                return sum + (item.qty * item.price)
                            },0).toFixed(2))
                        }
                        {/* product.reduce((sum,item)=>{
                            return sum + (item.qty * item.price)
                        },0).toFixed(2) */}
                    
                    </div>:<p className='text-xl font-bold text-gray-500'>Belum Ada Produk yang Ditambahkan</p>}
                </div>

            {/* <div className='rounded-xl bg-gray-300'>
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
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>         */}
        </div>
        </Fragment>
    )
}
export default CartCHeckout