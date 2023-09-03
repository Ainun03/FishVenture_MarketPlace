import React, { Fragment,useState } from "react";

// component
import CartCHeckout from "../../components/buyers/checkout/cartCheckout";

// icons
import { AiOutlinePlusCircle  } from 'react-icons/ai';
// redux
import { useDispatch, useSelector } from "react-redux";
import { deleteItem,incrementItem,decrementItem } from "../../slices/buyer/buyerSlice";


function Checkout () {
    const dispatch=useDispatch()

    const [isOpen,setIsOpen]= useState(false)

    const { cart,productDetail } = useSelector((store) => store.buyer);
    const handleDelete =(id)=> dispatch(deleteItem(id))
    const handleIndrement = (id)=> dispatch(incrementItem(id))
    const handleDecrement = (id)=> dispatch(decrementItem(id))

    
    return (
        <Fragment>
            <div className="bg-tarnsparent  bg-white shadow md:static flex w-full z-[30] md:block md:top-0 md:z-0">
                <div className="container mx-4 py-4 md:mx-auto  max-w-7xl md:px-4 flex md:py-4">
                    <div className=" flex-none">
                    <h1 className="font-semibold  text-primary h-full justify-center inline-flex items-center text-3xl">E-<span className="text-black underline decoration-primary">Fish</span>.</h1>
                    </div>
                    <div className="w-full h-full justify-center flex items-center">
                        <h1 className="font-semibold   text-xl">Detail Pesanan</h1>
                    </div>

                </div>
            </div>

            <div className="container py-4 px-4 mx-auto max-w-3xl">
                <div className="">
                    <CartCHeckout product={cart} deleteItem={handleDelete} increment={handleIndrement} decrement={handleDecrement} />
                </div>
            </div>


        </Fragment>
    )
}
export default Checkout