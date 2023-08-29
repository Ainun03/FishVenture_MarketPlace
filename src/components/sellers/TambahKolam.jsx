import React, { Fragment,useState,useEffect } from "react";

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

// function

import { useDispatch, useSelector } from 'react-redux';
import {loginUser, registerUser } from "../../slices/authSlice";
import { useNavigate } from 'react-router-dom';

const TambahKolam = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    // const { user, status,massage } = useSelector(
    //     (state) => state.auth
    //   )

    // const register = () => {
    //     setIsSubmitted(true);
    //     if (name !== '' && email !== '' && password !== '' & address !== '') { 
        
    //         dispatch(registerUser( {name,email,password,address} ));
    //         // dispatch(registerUser( userData ));
    //     }
    //   };
    return(

        <Fragment>
            <div className=" overflow-hidden">
                    <div className=" justify-items-center items-center  ">
                            <div className=" bg-white">
                                <div className="gap-2 py-2">
                                    <label className="block ">
                                        {/* <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md font-medium text-slate-700">
                                            Nama Depan
                                        </span> */}
                                        <input 
                                            type="text" 
                                            name="text"
                                            // value={name} 
                                            className="peer ... mt-1 px-3 py-3 bg-lime-200 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-lg sm:text-sm focus:ring-1" 
                                            placeholder="Nama " 
                                            onChange={(e) => setName(e.target.value)}
                                            />
                                    </label>
                                            {name === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Nama tidak boleh kosong</span> : ''}
                                    {/* <label className="block ">
                                      
                                        <input 
                                            type="email" 
                                            name="email" 
                                            className="peer ... mt-1 px-3 py-3 bg-lime-200 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-lg sm:text-sm focus:ring-1" 
                                            placeholder="Nama Belakang" />
                                    </label> */}
                                </div>
                                <label className="block py-2">
                                        {/* <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md font-medium text-slate-700">
                                            No Handphone
                                        </span> */}
                                        <input 
                                            type="email" 
                                            name="email" 
                                            // value={email}
                                            className="peer ... mt-1 px-3 py-3 bg-lime-200 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-lg sm:text-sm focus:ring-1" 
                                            placeholder="Email" 
                                            onChange={(e) => setEmail(e.target.value)}
                                            />

                                    </label>
                                {email === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Email tidak boleh kosong</span> : ''}
                                <label className=" block py-2"> 
                                    {/* <span className="after:content-['*'] after:ml-0.5 after:text-red-500 pt-2 block text-lg font-medium text-slate-700">
                                        Password
                                    </span> */}
                                    <div className="flex  fex-grow border  border-[#D0D0D0] bg-lime-200 mt-1 pr-2  rounded-lg items-center justify-between">
                                        <input 
                                            type={isVisible ? 'text' : 'password'} 
                                            name="password" 
                                            // value={password}
                                            placeholder='Masukkan password Baru'
                                            className="peer ... px-3 py-3 bg-lime-200 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-lg sm:text-sm focus:ring-1"
                                            onChange={(e) => setPassword(e.target.value)} 
                                              />
                                        {
                                            isVisible ?
                                            <AiOutlineEyeInvisible
                                                onClick={() => setIsVisible(false)}
                                                size={25}
                                            /> :
                                            <AiOutlineEye
                                                onClick={() => setIsVisible(true)}
                                                size={25}
                                            />
                                        }
                                    </div>
                                    {password === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Password tidak boleh kosong</span> : ''}
                                </label>
                                <label className="block py-2">
                                        {/* <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md font-medium text-slate-700">
                                            No Handphone
                                        </span> */}
                                        <input 
                                            type="text" 
                                            name="text" 
                                            // value={address}
                                            className="peer ... mt-1 px-3 py-3 bg-lime-200 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-lg sm:text-sm focus:ring-1" 
                                            placeholder="Alamat" 
                                            onChange={(e) => setAddress(e.target.value)}
                                            />
                                    </label>
                                    {address === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Alamat tidak boleh kosong</span> : ''}
                                <div className="text-center py-2 pt-6">      
                                    {/* <button onClick={() => register()} className="border  px-4 py-3 bg-secondary hover:bg-lime-400 text-white font-medium text-xl rounded-lg">
                                        Daftar
                                    </button> */}
                                </div>
                            </div>
                    </div>
                   
                </div>
  
        </Fragment>
    )
}
export default TambahKolam;