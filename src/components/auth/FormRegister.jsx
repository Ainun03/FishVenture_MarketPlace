import React, { Fragment,useState } from "react";

// modal
import ModalSellerForm from "../sellers/card/ModalsSellerForm";

// icons
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';

import { toast } from "react-toastify";

import { useFormik } from "formik";
import * as Yup from "yup";

// react dom
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// slice
import {registerUser} from "../../slices/authSlice"

function FormRegister () {
    const [isVisible, setIsVisible] = useState(false);
    const [showModal, setShowModal] = useState(true);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialValues = {
        name: "",
        email: "",
        password: "",
        applicationType:  ["buyer","seller"],
        // conpassword: "",
    };
    // const [conpassword, setConfPassword] = useState(initialValues.password ? initialValues.password : "",);


    const validationSchema = () => {
        const validationObject = {
            name: Yup.string().required(
                "Tolong masukkan nama lengkap anda"
            ),
            email: Yup.string()
                .email("Email tidak valid")
                .required("Tolong masukkan email"),
            password: Yup.string().required("Tolong masukkan password"),
            // applicationType: Yup.string().required("Pilih salah satu role"),

        };
        return Yup.object().shape(validationObject);
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => { 
            toast.loading("Signing up . . .",{
                position: "top-center",
				autoClose: 10000,
            });
            console.log(values)

            dispatch(registerUser(values))
                .unwrap()
                .then(() => {
                    toast.dismiss();
                    toast.success("Register berhasil!");
                    navigate("/auth-page/login-penjual");
                });
        },
    });

    return(
        <Fragment>
            <div className="relative">

                <div className=" border border-xl rounded-lg shadow-lg bg-white p-4"
                data-aos="fade-left"
                data-aos-durations="1000"
                data-aos-delay="500">
                    <form onSubmit={formik.handleSubmit} method="POST">
                        <label className="block" htmlFor="name">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-lg font-medium text-slate-700">
                                Username
                            </span>
                            <input 
                                type="text" 
                                name="name"
                                id="name" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                // onChange={(e) => setName(e.target.value)}
                                className="peer ... mt-1 px-3 py-3 bg-[#EEFFF6] border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-lg sm:text-sm focus:ring-1" 
                                placeholder="Your Username" />
                                {formik.touched.name && formik.errors.name && (
                                    <span className="text-sm text-red-500">
                                        {formik.errors.name}
                                    </span>
                                )}
                                {/* {name === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Nama tidak boleh kosong</span> : ''} */}

                        </label>
                        <label className="block " htmlFor="email">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-lg font-medium text-slate-700">
                                Email
                            </span>
                            <input 
                                type="email" 
                                name="email" 
                                id="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                // onChange={(e) => setEmail(e.target.value)}
                                className="peer ... mt-1 px-3 py-3 bg-[#EEFFF6] border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-lg sm:text-sm focus:ring-1" 
                                placeholder="ainun@ganteng.com" />
                                {/* {email === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Email tidak boleh kosong</span> : ''} */}
                            {formik.touched.email && formik.errors.email && (
                                <span className="text-sm text-red-500">
                                    {formik.errors.email}
                                </span>
                            )}
                        </label>
                        <label htmlFor="password">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 pt-2 block text-lg font-medium text-slate-700">
                                Password
                            </span>
                            <div className="flex  fex-grow border  border-[#D0D0D0] bg-[#EEFFF6] mt-1 pr-2  rounded-lg items-center justify-between">
                                <input 
                                    type={isVisible ? 'text' : 'password'} 
                                    name="password" 
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    // isPasswordInput={true}
                                    value={formik.values.password}
                                    // onChange={(e) => setPassword(e.target.value)}
                                    placeholder='Masukkan password'
                                    className="peer... px-3 py-3 bg-[#EEFFF6] border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-lg sm:text-sm focus:ring-1"
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
                            {formik.touched.password && formik.errors.password && (
                                <span className="text-sm text-red-500">
                                    {formik.errors.password}
                                </span>
                            )}
                            {/* {password === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Password tidak boleh kosong</span> : ''} */}
                        </label>
                        {/* <label>
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 pt-2 block text-lg font-medium text-slate-700">
                                Conf Password
                            </span>
                            <div className="flex  fex-grow border  border-[#D0D0D0] bg-[#EEFFF6] mt-1 pr-2  rounded-lg items-center justify-between">
                                <input 
                                    type={isVisible ? 'text' : 'password'} 
                                    name="conpassword" 
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.conpassword}
                                    placeholder='Masukkan password'
                                    className="peer ... px-3 py-3 bg-[#EEFFF6] border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-lg sm:text-sm focus:ring-1"
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
                            {formik.touched.conpassword && formik.errors.conpassword && (
                                <span className="text-sm text-red-500">
                                    {formik.errors.conpassword}
                                </span>
                            )}
                        </label> */}
                        <label className="block " htmlFor="applicationType">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-lg font-medium text-slate-700">
                                Pilih Role
                            </span>
                            <div className="flex justify-center gap-10">
                     
                                <div className="flex items-center">
                                    <input 
                                        id="buyer" 
                                        type="radio" 
                                        name="applicationType"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value="buyer" 
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label for="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Buyer</label>
                                </div>

                                <div className="flex items-center">
                                    <input 
                                        id="seller" 
                                        type="radio" 
                                        name="applicationType"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value="seller"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                <label for="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Seller</label>
                                </div>
                            </div>
                            
                       
                        </label>
                        <button type="submit"  className="px-4 py-2 mt-4 border-2 w-full border-[#CCEAFF] bg-gradient-to-r from-[#A2DBFA]  to-[#39A2DB] hover:bg-gradient-to-r hover:from-[#39A2DB] hover:to-[#A2DBFA] text-white font-semibold text-2xl rounded-xl">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}
export default FormRegister