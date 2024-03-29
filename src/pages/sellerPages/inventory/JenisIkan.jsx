import React, { Fragment } from "react";
// component
// import Input from "../../../components/sellers/form/Input";
import Button from "../../../components/sellers/form/Button";
import { Input } from "@material-tailwind/react";

import { IoChevronBackCircle } from 'react-icons/io5';
// route-dom
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { createjenisIkan } from "../../../slices/seller/sellerSlice";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify"

function JenisIkan(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialValues = {
        name: "",
        asal: "",
    };
    const validationSchema = () => {
        const validationObject = {
            name: Yup.string().required("Masukkan nama Ikan"),
            asal: Yup.string()
                .required("Tolong masukkan Asal Benih Ikan")
                // .matches(/^[0-9]*$/, "Tolong hanya masukkan angka"),
        };
        return Yup.object().shape(validationObject);
    };
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            toast.loading("Menambahkan Jenis Ikan . . .");
            dispatch(createjenisIkan(
                values
                ))
                .unwrap()
                .then(() => {
                    toast.dismiss();
                    toast.success("Berhasil menambahkan Jenis Ikan!");
                    navigate("/home-sel/inventory");
                });

        },
    });
    return(
        <Fragment>
        <div className="relative h-screen m-0" 
        data-aos="fade-up"
        data-aos-durations="1000"
        data-aos-delay="500">
            <Link to="/home-sel/inventory">
                <div className='bg-transparent absolute z-10'>
                    <IoChevronBackCircle className='m-7 cursor-pointer ' size={30} color={'#ffffff'} />
                </div>
            </Link>
            <div className="container px-4 mx-auto max-w-3xl pt-0 pb-20 md:py-7 relative">
                <div className="text-center text-3xl hidden md:block font-semibold">
                    <h1>Tambah Jenis Ikan</h1>
                </div>
                {/* <div className="flex container  mx-auto max-w-3xl pt-3" > */}			
                <section className="pt-5 md:pt-8 pb-8">
                    <div className="container-small relative ">
                        <p className="text-center font-medium mb-10 md:hidden pt-1">
                            Lengkapi Detail Jenis Ikan
                        </p>
                        <form
                            onSubmit={formik.handleSubmit}
                            method="POST"
                            encType="multipart/form-data"
                        >
                            <fieldset className="flex flex-col  mt-4 space-y-1">
                                {/* <label htmlFor="name">
                                    Nama Ikan{" "}
                                    <span className="text-red-500">*</span>
                                </label> */}
                                <Input
                                    label="Nama Ikan"
                                    type="text"
                                    id="name"
                                    name="name"
                                    color="indigo"
                                    // placeholder="Nama Ikan"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                                {formik.touched.name &&
                                    formik.errors.name && (
                                        <span className="text-sm text-red-500">
                                            {formik.errors.name}
                                        </span>
                                    )}
                            </fieldset>
                            <fieldset className="flex flex-col mt-4 space-y-1">
                                {/* <label htmlFor="asal">
                                    Asal{" "}
                                    <span className="text-red-500">*</span>
                                </label> */}
                                <Input
                                    label="Asal Ikan"
                                    type="text"
                                    id="asal"
                                    name="asal"
                                    color="indigo"
                                    // placeholder="Asal Benih Ikan"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.long}
                                />
                                {formik.touched.asal && formik.errors.asal && (
                                    <span className="text-sm text-red-500">
                                        {formik.errors.asal}
                                    </span>
                                )}
                            </fieldset>
                            
                            
                            <div className="flex flex-row items-start mt-6 gap-4">
                                {/* <Button
                                    type="button"
                                    // onClick={handlePreview}
                                    className="w-full"
                                    variant="secondary"
                                >
                                    Preview
                                </Button> */}
                                <button type="submit" className="w-full text-gray-700 font-semibold  border-2 hover:italic bg-blue-500 hover:bg-blue-300 hover:text-white w-full p-3  shadow-main shadow-slate-700 cursor-pointer  overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                    {/* {location.pathname.includes("edit_kolam")
                                        ? "Perbarui"
                                        : "Terbitkan"} */}
                                        Terbitkan
                                </button>
                            </div>
                        </form>
                    </div>
                </section>		
            </div>
            
        </div>

    </Fragment>
    )
}
export default JenisIkan