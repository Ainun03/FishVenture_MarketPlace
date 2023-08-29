import React, { Fragment,useState,useEffect } from "react";

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { hargaSeller } from "../../../slices/seller/poolSlice";

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { toast } from "react-toastify";
import { date } from "yup";
import { input } from "@material-tailwind/react";

const ModalSellerForm = ({modalClick}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { pricePool } = useSelector(state => state);

    const [inputData, SetInputData] =useState({
        limit:"",
        price:"",
    })
    const [multiplePrice, setMultiplePrice] =useState([])
    const handleModal=(e)=>{
        SetInputData({
            ...inputData,
            [e.target.name]:parseInt(e.target.value)
        })
        
    }

    let {limit,price}=inputData;
    const modalClikPrice =() =>{
        setIsSubmitted(true);
        // setMultiplePrice([...multiplePrice])
        setMultiplePrice([...multiplePrice,{limit,price}])
        dispatch(hargaSeller(multiplePrice))
            .unwrap()
            .then(() => {
                toast.dismiss();      
                toast.success("Berhasil Menambah harga"); 
                SetInputData({
                    limit:"",
                    price:"",})     
                modalClick()
            });


    }
    return(
        <Fragment>
            <div className=" overflow-hidden">
                    <div className=" justify-items-center items-center  ">
                            <div className=" flex w-full justify-between gap-3 bg-white">
                                <div className="py-2 w-full">
                                    <label className="block ">
                                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs font-medium text-slate-700">
                                            Berat (kg)
                                        </span>
                                        <input 
                                            type="text" 
                                            // autoComplete="off"
                                            name="limit"
                                            id="limit"
                                            // value={inputData.limit} 
                                            // onChange={(e) => SetInputData({ ...inputData, limit: e.target.value })}
                                            // onChange={(e) => setMultiplePrice({ ...multiplePrice, limit: e.target.value })}
                                            onChange={handleModal}
                                            className="peer ... mt-1 px-3 py-3 bg-lime-200 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-lg sm:text-sm focus:ring-1" 
                                            placeholder="Masukkan Berat " 
                                            // onChange={(e) => setCurrentModalPrice({ ...currentModalPrice, limit: e.target.value })}
                                            
                                            />
                                    </label>
                                        {/* {currentModalPrice.limit === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Nama tidak boleh kosong</span> : ''} */}
                                </div>
                                <div className="w-full">                  
                                    <label className="block py-2">
                                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs font-medium text-slate-700">
                                            Harga
                                        </span>
                                        <input 
                                            type="text" 
                                            name="price" 
                                            id="price"
                                            // autoComplete="off" 
                                            // onChange={(e) => setMultiplePrice({ ...multiplePrice, price: e.target.value })}
                                            // onChange={(e) => SetInputData({ ...inputData, price: e.target.value })}
                                            onChange={handleModal}
                                            // value={inputData.price}
                                            className="peer ... mt-1 px-3 py-3 bg-lime-200 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-lg sm:text-sm focus:ring-1" 
                                            placeholder="masukan Harga" 
                                            // onChange={(e) => setCurrentModalPrice({...currentModalPrice, price: e.target.value })}
                                            
                                            />
                                    </label>
                                    {/* {currentModalPrice.price === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Alamat tidak boleh kosong</span> : ''} */}
                                </div>
                                
                            </div>
                                <div className="">
                                    <button type="submit" 
                                    onClick={() => modalClikPrice()}
                                     className='rounded-2xl bg-primary hover:bg-[#7126B5CC] w-full py-3 mt-5 text-white text-sm font-medium'>
                                        Tambah
                                    </button>
                                </div>
                    </div>
                   
                </div>
  
        </Fragment>
    )
}
export default ModalSellerForm;