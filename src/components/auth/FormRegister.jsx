import React, { Fragment,useState } from "react";

// icons
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

function FormRegister () {
    const [isVisible, setIsVisible] = useState(false);
    return(
        <Fragment>
            <div className=" border border-xl rounded-lg shadow-lg bg-white p-4"
            data-aos="fade-left"
            data-aos-durations="1000"
            data-aos-delay="500">
                <label className="block ">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-lg font-medium text-slate-700">
                        Username
                    </span>
                    <input 
                        type="text" 
                        name="Name" 
                        // onChange={(e) => setEmail(e.target.value)}
                        className="peer ... mt-1 px-3 py-3 bg-lime-200 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-lg sm:text-sm focus:ring-1" 
                        placeholder="Your Username" />
                        {/* <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-xs">
                            Please provide a valid email address.
                        </p> */}
                        {/* {email === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Email tidak boleh kosong</span> : ''} */}

                </label>
                <label className="block ">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-lg font-medium text-slate-700">
                        Email
                    </span>
                    <input 
                        type="email" 
                        name="email" 
                        // onChange={(e) => setEmail(e.target.value)}
                        className="peer ... mt-1 px-3 py-3 bg-lime-200 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-lg sm:text-sm focus:ring-1" 
                        placeholder="ainun@ganteng.com" />
                        {/* <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-xs">
                            Please provide a valid email address.
                        </p> */}
                        {/* {email === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Email tidak boleh kosong</span> : ''} */}

                </label>
                {/* {email === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Email tidak boleh kosong</span> : ''} */}
                <label>
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 pt-2 block text-lg font-medium text-slate-700">
                        Password
                    </span>
                    <div className="flex  fex-grow border  border-[#D0D0D0] bg-lime-200 mt-1 pr-2  rounded-lg items-center justify-between">
                        <input 
                            type={isVisible ? 'text' : 'password'} 
                            name="password" 
                            // onChange={(e) => setPassword(e.target.value)}
                            placeholder='Masukkan password'
                            className="peer ... px-3 py-3 bg-lime-200 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-lg sm:text-sm focus:ring-1"
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

                    <button  className="px-4 py-2 mt-4 border-2 w-full border-primary hover:border-lime-400 bg-primary hover:bg-lime-400 text-white font-semibold text-2xl rounded-xl">
                        Register
                    </button>
                </label>
            </div>
        </Fragment>
    )
}
export default FormRegister