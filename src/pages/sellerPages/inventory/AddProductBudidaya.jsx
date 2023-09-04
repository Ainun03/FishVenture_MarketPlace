import React,{Fragment,useEffect, useState} from "react";

// component
import Input from "../../../components/sellers/form/Input";
import Button from "../../../components/sellers/form/Button";
// import Select from "../../../components/sellers/form/Select";
import Textarea from "../../../components/sellers/form/Textarea";
 
import { Select, Option } from "@material-tailwind/react";

import moment from "moment"
import axios from "axios";
import Datepicker from 'flowbite-datepicker/Datepicker';
// react dom
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { getKolam,getJenisIkan,getPond,createBudidayaSeller } from "../../../slices/seller/sellerSlice";


function AddProductBudidaya () {

    const location = useLocation();
    if (location.pathname.includes("edit_product"))
        document.title = "Edit Product";
    else document.title = "Add Product";

    const { getIkan,kolam,pond } = useSelector(
        (store) => store.seller
    );

    const dispatch = useDispatch();
    const navigate=useNavigate();

    useEffect(() => { 
        window.scrollTo(0, 0);
        dispatch(getPond());
      }, [dispatch]);

    useEffect(() => { 
        window.scrollTo(0, 0);
        dispatch(getJenisIkan());
      }, [dispatch]);
      
      useEffect(() => { 
        window.scrollTo(0, 0);
        dispatch(getKolam({
      id:pond.id
    }));
  }, [dispatch,pond]);

  const [poolFil, setPoolFil] = useState()
  console.log("poolFile ke 1",poolFil)

//   const AllKolam = kolam.map((item) => item)
//   console.log(AllKolam)
  
  const handleChangePool=(e)=>{
      setPoolFil(e);
    //   setPoolFil(kolam.find(
    //       (item) =>item.id === parseInt(e.target.value)
    //       ));
        formik.setFieldValue("poolID",e)
        
    };
    /* ======== formik stuff ======== */
    const initialValues = {
        poolID: "",
        fishSpeciesID: "",
        dateOfSeed: "",
    };
    const validationSchema = () => {
        const validationObject = {
            poolID: Yup.string().required("Masukkan Pilih Kolam"),
            fishSpeciesID: Yup.string()
                .required("Tolong masukkan Jenis Ikan"),
                // .matches(/^[0-9]*$/, "Tolong hanya masukkan angka"),
            dateOfSeed: Yup.string()
                .required("Tolong masukkan Tanggal Penebaran")
                // .max(300, "Batas maksimum deskripsi adalah 300 karakter"),
        };
        return Yup.object().shape(validationObject);

    };
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            values.dateOfSeed=moment.utc(values.dateOfSeed)
            console.log(values)
                toast.loading("Memperbarui detail produk . . .");
                dispatch(createBudidayaSeller(values))
                    .unwrap()
                    .then(() => {
                        toast.dismiss();
                        toast.success("Berhasil memperbarui detail produk!");
                        navigate("/home-sel/inventory");
                    });
            
        },
    });


    return (
        <Fragment>
            <div className="relative" 
            data-aos="fade-up"
            data-aos-durations="1000"
            data-aos-delay="500">
                {/* <Link to="/home-sel/inventory">
                    <div className='bg-transparent absolute z-10'>
                        <IoChevronBackCircle className='m-7 cursor-pointer ' size={30} color={'#ffffff'} />
                    </div>
                </Link> */}
                <div className="md:container-fluid md:mx-auto md:px-3  mx-4 max-w-3xl pt-0 pb-20 md:py-7 relative">
                    <div className="text-center text-3xl font-semibold">
                        <h1>Mulai Budidaya</h1>
                    </div>
                    {/* <div className="flex container  mx-auto max-w-3xl pt-3" > */}			
                    <section className="pt-5 md:pt-8 pb-">
                        <div className="container-small relative">
                            {/* <Link
                                to="/"
                                className="absolute md:-left-76px w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
                            >
                                
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 12H5" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 19L5 12L12 5" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link> */}
                            {/* <p className="text-center font-medium mb-10 md:hidden pt-1">
                                Lengkapi Detail Produk
                            </p> */}
                            <form
                                onSubmit={formik.handleSubmit}
                                method="POST"
                                encType="multipart/form-data"
                            >
                                <fieldset className="flex flex-col  mt-4 space-y-1">
                                    {/* <label htmlFor="poolID">Pilih Kolam</label> */}
                                    <Select
                                        label="Pilih Kolam"
                                        id="poolID"
                                        name="poolID"
                                        className="bg-gray-100 uppercase"
                                        // className="border uppercase text-gray-400 font-semibold rounded-xl p-2 bg-gray-200 hover:italic w-full p-3  shadow-main shadow-slate-700 cursor-pointer  overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                        // onChange={(e) => formik.setFieldValue("poolID",e.target.value)}
                                        // onChange={(e) => formik.setFieldValue("poolID",e.target.value)}
                                        // onClick={(e) =>  setPoolFil(kolam.find(
                                        //     (item) =>item.id === e.target.value
                                        //     ))
                                        //     // formik.setFieldValue("poolID",e.target.value)
                                        // }
                                        value={poolFil}
                                        onChange={handleChangePool}
                                    >
                                        {/* <Option className="text-gray-400 capitalize " value='' disabled selected >
                                            Pilih Kolam
                                        </Option> */}
                                        {kolam.map((item) => (
                                            <Option
                                                className="uppercase"
                                                // className="border text-gray-400 font-semibold rounded-xl p-2 bg-gray-200 hover:italic w-full p-3  shadow-main shadow-slate-700 cursor-pointer  overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.name}
                                            </Option>
                                        ))}
                                    </Select>
                                </fieldset>
                                <fieldset className="flex flex-col  mt-4 space-y-1">
                                    {/* <label htmlFor="fishSpeciesID">Pilih Ikan</label> */}
                                    <Select
                                        label="Pilih Ikan"
                                        id="fishSpeciesID"
                                        name="fishSpeciesID"
                                        onChange={(e) => formik.setFieldValue("fishSpeciesID",e)}
                                        className="bg-gray-100 uppercase"
                                        // value={selectedCategory.value}
                                        // onChange={handleChangeCategory}
                                    >
                                        {/* <option className="" value='' disabled selected >
                                            Pilih Jenis Ikan
                                        </option> */}
                                        {getIkan.map((ikan) => (
                                            <Option
                                                className="uppercase"
                                                key={ikan.id}
                                                value={ikan.id}
                                            >
                                                {ikan.name}
                                            </Option>
                                        ))}
                                    </Select>
                                </fieldset>
                                <fieldset className="flex flex-col  mt-4 space-y-1">
                                    <label className="text-gray-500 font-semibold" htmlFor="dateOfSeed">Pilih Tanggal Awal Tebar Ikan</label>
                                    <input 
                                    className="border rounded-xl p-2 bg-gray-200 peer ... mt-1 px-3 py-3 hover:italic text-gray-600 shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-lg sm:text-sm focus:ring-1 "
                                    placeholder="Pilih Tanggal"
                                    type="date"
                                    name="dateOfSeed"
                                    id="dateOfSeed"
                                    // onChange={handleChangeTime}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.dateOfSeed}
                                    onChange={(e) => formik.setFieldValue("dateOfSeed",e.target.value)}
                                    
                                    />

                                </fieldset>
                                
                                <div className="flex flex-row items-start  mt-6 gap-4">
                                    {/* <Button
                                        type="button"
                                        // onClick={handlePreview}
                                        className="w-full"
                                        variant="secondary"
                                    >
                                        Preview
                                    </Button> */}
                                    <button type="submit" className="w-full text-gray-700 font-semibold  border-2 hover:italic bg-blue-500 hover:bg-blue-300 hover:text-white w-full p-3  shadow-main shadow-slate-700 cursor-pointer  overflow-hidden rounded-xl shadow-md hover:shadow-xl  transition-shadow duration-300 ease-in-out">
                                        {location.pathname.includes("edit_product")
                                            ? "Perbarui"
                                            : "Terbitkan"}
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
export default AddProductBudidaya