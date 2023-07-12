import React,{Fragment} from "react";
import {BiTime} from 'react-icons/bi'
import Button from "../../components/sellers/form/Button";

function Perizinan () {
    return(
        <Fragment>
            <div className='card border-2 bg-blue-100 border-black hover:origin-top-left w-60  rounded-md p-2 shadow-main shadow-slate-700 h-56 cursor-pointer' 
             >
                <div className="card-body px-1 pt-2 pb-3">
                    <h3 className='font-semibold'>Email</h3> 
                    <h5 className='text-xs text-neutralGray my-1'>Alamat</h5>
                    <h3 className='font-semibold'>Mas Darmo</h3> 
                    <h5 className='text-xs text-neutralGray my-1'>Alamat</h5>
                    <div className="flex flex-row items-start mt-6 gap-4">
                        <Button
                            type="button"
                            className="w-full hover:bg-red"
                            variant="secondary"
                        >
                            Tolak
                        </Button>
                        <Button type="submit" variant="secondary" className="w-full bg-primary">
                            Terima
                        </Button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Perizinan