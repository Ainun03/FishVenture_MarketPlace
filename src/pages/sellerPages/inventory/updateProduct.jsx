import React, { Fragment, useState,useEffect } from "react";
// component
// import Input from "../../../components/sellers/form/Input";
import Button from "../../../components/sellers/form/Button";

import { Input, Select, Option } from "@material-tailwind/react";

import moment from "moment"
// route-dom
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { IoClose } from 'react-icons/io5';
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify"

import { updateBudidayaSeller } from "../../../slices/seller/sellerSlice";

import ModalSellerForm from "../../../components/sellers/card/ModalsSellerForm";

function UpdateProduct(props){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { seller } = useSelector(state => state);
    const {harga}=useSelector((store)=>store.pool)
    const {getBudiday}=useSelector((store)=>store.seller)

    
    const { id } = useParams();
    // console.log(getBudiday.pondID)
    // let item;

    // const item = getBudiday.find((i) => i.startsWith(id));
    // let item=[...getBudiday].find(({id}) => id )
    // if (Array.isArray(id)){
    //     item=getBudiday.find((i) => i.id === id)
    // }
    // console.log(item)
    const [detailBudidaya, setDetailBudidaya]=useState()
    useEffect(() => {
        if (id){
            let item=getBudiday.find((i) => i.id === id )
            // console.log(item)
            setDetailBudidaya(item)
        //   dispatch(getProfileUser())
        }
      }, [id,getBudiday]);

      const initialValues = {
        budidayaID:id ? id : "",
        estTonase: "",
        estDate:"",
        input: harga ? harga : [],
    };

    const validationSchema = () => {
        const validationObject = {
            estTonase: Yup.string()
                .required("Masukkan Perkiraan Panen")
                .matches(/^[0-9]*$/, "Tolong hanya masukkan angka"),
            // price: Yup.string()
            //     .required("Tolong masukkan Asal Benih Ikan")
            //     // .matches(/^[0-9]*$/, "Tolong hanya masukkan angka"),
        };
        return Yup.object().shape(validationObject);
    };
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            toast.loading("Menambahkan Jenis Ikan . . .");
            values.budidayaID=initialValues.budidayaID
            values.estTonase=parseInt(values.estTonase)
            values.estDate=moment.utc(values.estDate)
            values.input=initialValues.input
            console.log(values)
            dispatch(updateBudidayaSeller(
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
    const [showModal, setShowModal] = useState(true);
    const modalClick = () => {
        setShowModal(current => !current);
    };
    return(
        <Fragment>
        <div className="relative h-screen m-0" 
        data-aos="fade-up"
        data-aos-durations="1000"
        data-aos-delay="500">
            <div className='modal'>
                    <div className={`fixed overlay bg-black opacity-50 z-[999] h-full w-full inset-x-0 cursor-default transition ease-in-out duration-[850ms] ${showModal ? "hidden" : ""}`}>
                    </div>
                    <div className={`fixed top-[85%] md:top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-b-none rounded-t-2xl md:rounded-2xl z-[999] w-full h-full md:h-auto md:w-[360px] p-8 transition ease-in-out duration-700 ${showModal ? "translate-y-[100%] md:scale-0" : ""}`}>
                        <div className='flex justify-between text-3xl -mt-5  mb-6 md:mb-0'>
                            <img role='button' onClick={modalClick} className='mx-auto md:hidden' src='/assets/images/mobile-modal.png' alt='mobile-modal' />
                            <h1 className=" hidden md:block text-primary font-bold">Tambah Harga</h1>
                            <IoClose className='hidden md:block' role='button' onClick={modalClick} />
                        </div>
                        <ModalSellerForm modalClick={modalClick}
                        // image={productData.imageProduct[0]} productName={productData.productName} price={productData.price} 
                        />
                        {/* <button onClick={modalClick} className='rounded-2xl bg-primary hover:bg-[#7126B5CC] w-full py-3 mt-5 text-white text-sm font-medium'>
                            Tambah
                        </button> */}
                    </div>
                </div>
            {/* <Link to="/home-sel/inventory">
                <div className='bg-transparent absolute z-10'>
                    <IoChevronBackCircle className='m-7 cursor-pointer ' size={30} color={'#ffffff'} />
                </div>
            </Link> */}
            <div className="container px-4 mx-auto max-w-3xl pt-0 pb-20 md:py-7 relative">
                <div className="text-center text-3xl hidden md:block font-semibold">
                    <h1>Tambah Produk </h1>
                </div>
                {/* <div className="flex container  mx-auto max-w-3xl pt-3" > */}			
                <section className="pt-5 md:pt-8 pb-8">
                    <div className="container-small relative">
                        {/* <p className="text-center font-medium mb-10 md:hidden pt-1">
                            Lengkapi Detail Jenis Ikan
                        </p> */}
                        <form
                            onSubmit={formik.handleSubmit}
                            method="POST"
                            encType="multipart/form-data"
                        >
                            <fieldset className="flex flex-col mt-4 space-y-1">
                                <label htmlFor="estDate">
                                    Pilih Tanggal{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    className="border rounded-xl p-2 bg-gray-200 hover:italic w-full p-3  shadow-main shadow-slate-700 cursor-pointer  overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                    placeholder="Pilih Tanggal"
                                    type="date"
                                    name="estDate"
                                    id="estDate"
                                    // onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.estDate}
                                    onChange={(e) => formik.setFieldValue("estDate",e.target.value)}
                                    
                                    />
                                {formik.touched.estDate &&
                                    formik.errors.estDate && (
                                        <span className="text-sm text-red-500">
                                            {formik.errors.estDate}
                                        </span>
                                    )}
                            </fieldset>
                            <fieldset className="flex flex-col mt-4 space-y-1">
                                    <label htmlFor="estTonase">
                                    Perkiraan Panen (Kg){" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        label="Perkiraan Panen"
                                        type="text"
                                        id="estTonase"
                                        name="estTonase"
                                        // placeholder="Masukkan Nama"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.estTonase}
                                    />
                                    {formik.touched.estTonase &&
                                        formik.errors.estTonase && (
                                            <span className="text-sm text-red-500">
                                                {formik.errors.estTonase}
                                            </span>
                                        )}
                                </fieldset>

                            <div className="py-6 w-full">
                                <button onClick={modalClick} type="button" className="border-2 hover:italic hover:bg-blue-300 hover:text-white w-full p-3  shadow-main shadow-slate-700 cursor-pointer  overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                    <span className="hover:scale-110 ">Tambah Harga</span>
                                </button>
                            </div>

                            <div className="">
                                {harga.length >= 0 ? (
                                    <div className="grid grid-cols-1 py-2 gap-3">
                                        {harga.map((item, i) => (
                                            <div key={i} className='card inline-block  border-2 hover:origin-top-left bg-[#E8F0F2]   p-2 shadow-main shadow-slate-700 cursor-pointer  overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out' 
                                                >
                                                <div className="card-body flex justify-between  px-1 ">
                                                    <div className="flex gap-2">
                                                        <h3 className='font-semibold text-lg '>{item.limit ? item.limit : "kosong"}</h3> 
                                                        <h3 className='font-semibold text-lg '>
                                                            {
                                                                new Intl.NumberFormat('id-ID',
                                                                { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                                                                ).format(item.price ? item.price : "harga")
                                                            }
                                                           
                                                        </h3> 
                                                    </div>
                                                    <div className="flex item-center gap-2 justify-center">
                                                            <div
                                                            //  onClick={() => { 
                                                            //     if ((item.status === "reviewed")) {
                                                            //         navigate(`detail-izin/${item.id}`)
                                                            //     } else if ((item.status === "submission")){
                                                            //             dispatch(updatePond({
                                                            //                 pondId:item.id,
                                                            //                 status:statusSubmission[1]
                                                            //             }))
                                                            //             navigate(`detail-izin/${item.id}`)
                                                            //     } else{
                                                            //         navigate(`detail-izin/${item.id}`)
                                                            //     }
                                                            // }}
                                                            className="w-6  transform hover:text-yellow-500 hover:scale-110">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                                </svg>
                                                            </div>
                                                            <div className="w-6 transform hover:text-red-500 hover:scale-110">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    {/* <Button type="button"  className="bg-primary rounded-md" >
                                                        <span className="font-bold ">Delete</span>
                                                    </Button> */}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                ) : (

                                    <span className="text-xl font-bold ">ga onok isine</span>
                                )}
                            </div>

                            <div className="flex flex-row items-start mt-6 gap-4">
                                {/* <Button
                                    type="button"
                                    // onClick={handlePreview}
                                    className="w-full"
                                    variant="secondary"
                                >
                                    Preview
                                </Button> */}
                                <Button type="submit" className="w-full bg-primary ">
                                    {/* {location.pathname.includes("edit_kolam")
                                        ? "Perbarui"
                                        : "Terbitkan"} */}
                                        Terbitkan
                                </Button>
                            </div>
                        </form>
                    </div>
                </section>		
            </div>
            
        </div>

    </Fragment>
    )
}
export default UpdateProduct