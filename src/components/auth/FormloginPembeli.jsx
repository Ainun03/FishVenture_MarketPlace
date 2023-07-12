import React, { Fragment,useState } from "react";

// icons
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { useFormik } from "formik";
import * as Yup from "yup";

import { toast } from "react-toastify";
// react dom
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {loginUser} from "../../slices/authSlice"

function FormLoginPembeli ({
    children,
    ...props
}) {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector(state => state);

    const initialValues = {
        email: "",
        password: "",
        applicationType: "seller",
    };

    const validationSchema = () => {
        const validationObject = {
            email: Yup.string()
                .email("Email tidak valid")
                .required("Tolong masukkan email"),
            password: Yup.string().required("Tolong masukkan password"),


        };
        return Yup.object().shape(validationObject);
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => { 
            toast.loading("Signing in . . .",{
                position: "top-center",
				autoClose: 10000,
            });
            dispatch(loginUser(values))
                .unwrap()
                .then(() => {
                    // toast.dismiss();
                    // toast.success("Login berhasil!");
                    // navigate("/home-sel");
                    // if(user.user.data.applicationType === "buyer" ){
                    //     toast.dismiss();
                    //     toast.success("Login berhasil!");
                    //     navigate("/");
                    // }else if (user.user.data.applicationType === "seller"){
                    //     toast.dismiss();
                    //     toast.success("Login berhasil!");
                    //     navigate("/home-sel");
                    // }else if (user.user.data.applicationType === "admin"){
                    //     toast.dismiss();
                    //     toast.success("Login berhasil!");
                    //     navigate("/home-mon");
                    // }
                    if (initialValues.applicationType === "buyer"){
                        toast.dismiss();
                        toast.success("Login berhasil!");                 
                        navigate("/");
                    }else if(initialValues.applicationType === "seller"){
                        toast.dismiss();
                        toast.success("Login berhasil!");
                        navigate("/home-sel");
                    }else if(initialValues.applicationType === "admin"){
                        toast.dismiss();
                        toast.success("Login berhasil!");
                        navigate("/home-mon");
                    }
                });
        },
    });
    return(
        <Fragment>
            <div className=" border border-xl rounded-lg shadow-lg bg-white p-4"
                data-aos="fade-right"
                data-aos-durations="1000"
                data-aos-delay="500">
                <form onSubmit={formik.handleSubmit} method="POST">

                    <label className="block" htmlFor="email">
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
                            className="peer ... mt-1 px-3 py-3 bg-[#EEFFF6] border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-lg sm:text-sm focus:ring-1" 
                            placeholder="ainun@ganteng.com" />
                            {formik.touched.email && formik.errors.email && (
                                <span className="text-sm text-red-500">
                                    {formik.errors.email}
                                </span>
                            )}
                            {/* {email === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Email tidak boleh kosong</span> : ''} */}

                    </label>
                    {/* {email === '' && isSubmitted ? <span className='text-red-600 mt-1'>*Email tidak boleh kosong</span> : ''} */}
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
                        {formik.touched.password && formik.errors.password && (
                            <span className="text-sm text-red-500">
                                {formik.errors.password}
                            </span>
                        )}
                    </label>

                    <button type="submit" className="px-4 py-2 mt-4 border-2  w-full border-[#CCEAFF] bg-gradient-to-r from-[#A2DBFA]  to-[#39A2DB] hover:bg-gradient-to-r hover:from-[#39A2DB] hover:to-[#A2DBFA] text-white hover:text-black font-semibold text-2xl rounded-xl">
                        Login
                    </button>
                    {/* <div className="text-center pt-4">
                        <span className=" cursor-pointer text-blue-500">Lupa Kata Sandi ?</span>
                    </div> */}
                </form>
                <div className="text-center pt-4">
                        <span>Belum Punya Akun?</span>
                        <button onClick={()=>navigate('/auth-page/register')} >
                            <span className=" cursor-pointer text-blue-500">Daftar</span>
                        </button>
                    </div>
                
                {/* <div className="text-center py-2 pt-6">      
                    <button  className="border  px-4 py-3 bg-secondary hover:bg-lime-400 text-white font-medium text-xl rounded-lg">
                        Buat Akun Baru
                    </button>
                </div> */}
            </div>
        </Fragment>
    )
}
export default FormLoginPembeli