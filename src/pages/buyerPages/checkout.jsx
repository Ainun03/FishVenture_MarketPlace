import React, { Fragment } from "react";

// component
import CartCHeckout from "../../components/buyers/checkout/cartCheckout";

// icons
import { AiOutlinePlusCircle  } from 'react-icons/ai';

function Checkout () {
    
    return (
        <Fragment>
            <div className="bg-tarnsparent  bg-white shadow md:static flex w-full z-[30] md:block md:top-0 md:z-0">
                <div className="container mx-4 py-4 md:mx-auto  max-w-7xl md:px-4 flex justify-between md:py-4">
                    <div className="items-center flex-none">
                    <h1 className="font-semibold  text-primary h-full justify-center inline-flex items-center text-3xl">E-<span className="text-black underline decoration-primary">Fish</span>.</h1>
                    </div>

                </div>
            </div>

            <div className="container py-4 mx-auto max-w-3xl">
                <div className="">
                    <CartCHeckout/>
                </div>
            </div>
        </Fragment>
    )
}
export default Checkout