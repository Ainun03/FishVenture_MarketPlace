import React,{Fragment, useEffect, useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowCounterclockwise } from "react-icons/bs";
import { IoCodeWorkingSharp } from "react-icons/io5";

import moment from "moment"
// slice

import { toast } from "react-toastify"

import { incrementItemCo,decrementItemCo,createOrderBuyer } from "../../../slices/buyer/buyerSlice";

function ModalPesanan({price, stok,fish,modalClick}){
    const { id } = useParams();
    const navigate = useNavigate();
	const dispatch = useDispatch();

    const handleIncrement = (budidayaID)=> dispatch(incrementItemCo(budidayaID))
    const handleDecrement = (budidayaID)=> dispatch(decrementItemCo(budidayaID))

    const { checkout} = useSelector(
        (store) => store.buyer
    );
    const initialValues={
        budidayaID:price[0].budidayaID ? price[0].budidayaID : "",
        qty:0,
        bookingDate:"",
    }
    let clock = moment()
    console.log(clock)

    // const [checkout,SetCheckout] =useState([initialValues])
    // console.log(initialValues.qty)
    // useEffect(()=>{
    //     localStorage.setItem("checkout",JSON.stringify(checkout))
    // },[checkout])

    let priceSort = [...price]
    priceSort.sort((a, b) => (a.price < b.price) ? 1 : -1);
    // priceSort.sort((a, b) => a.value1 - b.value1 || a.value2 - b.value2);

    const handleClick=(budidayaID,qty,bookingDate)=>{
       
        toast.loading("Menambahkan Pesanan . . .");
        dispatch(createOrderBuyer({
            budidayaID:checkout[0].budidayaID,
            qty:checkout[0].qty,
            bookingDate:moment()          
        }))    
        
        .unwrap()
                .then(() => {
                    toast.dismiss();
                    toast.success("Berhasil menambahkan Pesanan!");
                    modalClick()
                    navigate("/pesanan");
                });
    }
    console.log(priceSort)

    // let total = 

    // let subTotal = ({children}) =>{
    //     // if ()
    // }

    // const { checkout,getBudidayaBuyer } = useSelector(
    //     (store)
    // );

    return(
        <Fragment>
            <div className='modal-body'>
            {/* {stok.length > 0 ?  */}
                <>
                    <div className="flex bg-white border mb-4 flex-col rounded-md p-3 gap-4">
                        <div className="flex gap-4">
                            <div>
                                <img className='w-[100px] h-full rounded-md' src="/assets/images/nyet.jpg" alt='profile' />
                            </div>
                            <div className='w-full font-bold flex flex-col items-start justify-end'>
                                <p className="uppercase">{fish ? fish.name : "Nama Ikan"}</p>
                                <p className="text-gray-500 text-md font-semibold italic" >stok: {stok ? stok - checkout[0].qty : "Tidak Ada Stok"}</p>
                            </div>
                        </div>
                        <div className='w-full h-auto flex flex-col '>
                            <div className="">
                                <p>Harga</p>
                            </div>
                            {priceSort.length> 0 && priceSort.map((item,idx ) => 
                                <div key={idx} className="flex space-x-10 w-full  h-12 border-orange-200 border-b items-center">
                                    <div className='flex space-x-4'>
                                        <div onClick={() => handleDecrement(item.budidayaID)} disabled={checkout[0].qty === 0 } className='cursor-pointer select-none' >-</div>
                                        <p className='font-semibold'>{checkout[0].qty}</p>
                                        {/* <input className='font-semibold'value={checkout ? checkout[0].qty :0}/>                                    */}
                                        <div onClick={() => handleIncrement(item.budidayaID)} className='cursor-pointer  select-none'>+</div>
                                    </div>
                                    <p className='font-semibold w-full flex justify-end '>
                                        {
                                            new Intl.NumberFormat('id-ID',
                                            { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                                            ).format(item.price) 
                                        }
                                    </p>
                                    {/* <div className="">
                                        <h3 className=' '>{
                                            price ? new Intl.NumberFormat('id-ID',
                                                { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                                            ).format(item.price) : 'Free'
                                        }</h3>
                                    </div> */}
                                </div>
                                )}
                                <p className="text-gray-500 text-md font-semibold italic" >stok: {stok ? stok - checkout[0].qty : "Tidak Ada Stok"}</p>
                                {priceSort.length ? 
                                    <div className='flex self-end w-40 border-b border-orange-600 text-lg font-bold'>Total : 
                                        <h3>
                                            {
                                                new Intl.NumberFormat('id-ID',
                                                { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                                                ).format(  priceSort.reduce((sum,item)=>{
                                                    return sum + (checkout[0].qty * item.price)
                                                },0).toFixed(2)
                                                //     priceSort.reduce((sum,item)=>{
                                                //     return (checkout[0].qty * item.price)
                                                //     // return (if ())
                                                // },0).toFixed(2)
                                                )
                                            }
                                            {/* .toFixed(2) */}
                                            {/* {checkout[0].qty * price[0].price} */}
                                        </h3>
                                        {/* product.reduce((sum,item)=>{
                                            return sum + (item.qty * item.price)
                                        },0).toFixed(2) */}
                                
                                    </div>
                                :<p className='text-xl font-bold text-gray-500'>Belum Ada Produk yang Ditambahkan</p>} 
                        </div>
                    </div>
                    

                    <button onClick={()=> handleClick()} className='rounded-2xl bg-primary hover:bg-[#7126B5CC] w-full py-3 text-white text-sm font-medium'>
                        Kirim
                    </button>
                </>
                {/* : <p className='text-xl flex w-full justify-center font-bold text-gray-500'>Stok Kosong</p>} */}
            </div> 

        </Fragment>
    )
}
export default ModalPesanan