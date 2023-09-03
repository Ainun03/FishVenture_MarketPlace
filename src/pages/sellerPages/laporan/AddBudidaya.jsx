import React,{Fragment,useEffect, useState} from "react";

// component
// import Input from "../../../components/sellers/form/Input";
import Button from "../../../components/sellers/form/Button";
// import Select from "../../../components/sellers/form/Select";
import ModalTambahKolam from "./modalTambahKolam";

import { Input, Select, Option } from "@material-tailwind/react";

// slice
import { getListProvince,getListCity,getListDistrict } from "../../../slices/listAddressSlice";
import { imageKolamSeller,createPondSeller } from "../../../slices/seller/sellerSlice";
// icons
import { IoClose } from 'react-icons/io5';
import { AiFillGoogleCircle, AiOutlinePlus } from 'react-icons/ai';

// react dom
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import useGeoLocation from "../../../components/sellers/location/getLocation";

const type = [
    { value: 1, key: "mandiri" },
    { value: 2, key: "team" },
];

const AddBudidaya = (position) => {

    const [showModal, setShowModal] = useState(true);
    const modalClick = () => {
		setShowModal(current => !current);
	};

    const location = useLocation();
    if (location.pathname.includes("edit_budidaya"))
        document.title = "Edit Budidaya";
    else document.title = "Tambah Budidaya";
// // ============ loc
    // const loc=useGeoLocation()
    // console.log(loc)

    // const [loc, setLocation]=useState(
    //     {
    //         loaded:false,
    //         coordinates:{lat:"", lng:""}
    //     }
    // );
    // console.log(loc)
    // console.log(po)

    const [posi, setPosi]=useState({
        latitude: '',
        longitude: '',
      })
      console.log(posi)

    const pos = navigator.geolocation
    const handleClickLoc = () =>{  
        if (pos){
            pos.getCurrentPosition((position)=>{
                setPosi({
                    latitude: position.coords.latitude,
                    longitude:position.coords.longitude,
                })
                console.log("latitude",position)
            })
        }
    }
// ============================


    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {pool}=useSelector((store)=>store.pool)

    function deleteData(i){
        let hapus=pool.indexOf(pool[i])
        // console.log(hapus,"index i")

        if (hapus > -1){
            pool.splice(hapus,1);
        }
        localStorage.setItem("pool",JSON.stringify(pool))
    }
    // function deleteData(i){
    //     console.log(i,"index i")
    //     let total=[...pool]
    //     total.splice(i,1)
    //     localStorage.setItem("pool",JSON.stringify(pool))
    // }

   
    /* ======== for changing categories ======== */
    
    const {imageKolam}=useSelector((store)=>store.seller)

    const FiletoDataURL = (file, callback) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            callback(reader.result);
        };
        reader.onerror = function (error) {
            toast.error(error);
        };
    };
    /* ======== for changing upload pond ======== */
    const [previewPondImages, setpreviewPondImages] = useState([]);  
    const handleUploadImage = (e) => {
        const files = e.target.files;
        setpreviewPondImages([])

        if (files.length > 4) {
            formik.setFieldError("images", "Hanya bisa mengunggah 4 gambar");
            formik.setFieldTouched("images", true);
        } else {
            // set data url images for previews
            [...Array(files.length)].forEach((item, index) => {
                FiletoDataURL(files[index], (result) => {
                    setpreviewPondImages((prevState) => [
                        ...prevState,
                        result,
                    ]);
                });
            });
        }
        dispatch(imageKolamSeller({
            image:files[0]
        }))

        
        

        // reset error message
    };

// ========================  Country ================ 
    const { country,province,district,city } = useSelector(
        (store) => store.listAddress
    );
    const [berkas, setBerkas]=useState([])
    const handleBerkas = (e) => {
        const files = e.target.files[0];
        setBerkas([files])
        formik.setFieldValue('listBerkas',files)

    }
    const initialValues = {
        name: "",
        countryID: "",
        provinceID: "" ,
        cityID:"" ,
        districtID: "",
        detailAddress: "",
        noteAddress: "",
        type: type[0].key,
        latitude: posi ? posi.latitude : 0,
        longitude: posi ? posi.longitude : 0,
        image: imageKolam.url,
        // teamId: "",
        listPool: pool ? pool : [],
        listBerkas: berkas ? berkas :[],

    };
    const validationSchema = () => {
        const validationObject = {
            name: Yup.string().required("Masukkan nama anda"),
            countryID: Yup.string()
                .required("Tolong masukkan negara lokasi budidaya anda"),
            //     // .matches(/^[0-9]*$/, "Tolong hanya masukkan angka"),
            provinceID: Yup.string()
                .required("Tolong masukkan provinsi Lokasi budidaya  anda"),
            cityID: Yup.string()
                .required("Tolong masukkan kota lokasi budidaya anda"),
            districtID: Yup.string()
                .required("Tolong masukkan kecamatan lokasi budidaya anda"),
            detailAddress: Yup.string()
                .required("Tolong masukkan Detail Alamat lokasi budidaya anda"),
            noteAddress: Yup.string()
                .required("Tolong masukkan spesifikasi Alamat lokasi budidaya anda"),
            type: Yup.string()
                .required("Tolong masukkan deskripsi produk"),
            // latitude: Yup.string()
            //     .required("Tolong masukkan deskripsi produk"),
            // longtitude: Yup.string()
            //     .required("Tolong masukkan deskripsi produk"),
            // teamId: Yup.string()
            //     .required("Tolong masukkan deskripsi produk"),
            // url: Yup.string().required(
            //     "Tolong masukkan gambar produk "),
            // listPool: Yup.string()
            //     .required("Tolong masukkan deskripsi produk"),
            //     // .max(300, "Batas maksimum deskripsi adalah 300 karakter"),
            // listBerkas: Yup.string()
            //     .required("Tolong masukkan deskripsi produk"),
                // .max(300, "Batas maksimum deskripsi adalah 300 karakter"),
        };
        return Yup.object().shape(validationObject);
    };
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            values.image=initialValues.image
            values.listPool=initialValues.listPool
            values.listBerkas=initialValues.listBerkas
            values.latitude=initialValues.latitude
            values.longitude=initialValues.longitude
            console.log(values)
            toast.loading("Menambah Kolam Budidaya . . .");
            dispatch(createPondSeller(values))
                .unwrap()
                .then(() => {
                    toast.dismiss();
                    toast.success("Menambah Kolam Budidaya");
                    navigate("/home-sel");
                });
        },
    });


    return (
        <Fragment>
            <div className="relative " 
            data-aos="fade-up"
            data-aos-durations="1000"
            data-aos-delay="500">
                {/* <Link to="/home-sel/inventory">
                    <div className='bg-transparent absolute z-10'>
                        <IoChevronBackCircle className='m-7 cursor-pointer ' size={30} color={'#ffffff'} />
                    </div>
                </Link> */}
                <div className='modal'>
                    <div className={`fixed overlay bg-black opacity-50 z-[999] h-full w-full inset-x-0 cursor-default transition ease-in-out duration-[850ms] ${showModal ? "hidden" : ""}`}>
                    </div>
                    <div className={`fixed top-[100%] bg-gray-200 md:top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-b-none rounded-t-2xl md:rounded-2xl z-[999] w-full h-full md:h-auto md:w-[500px] p-8 transition ease-in-out duration-700 ${showModal ? "translate-y-[100%] scale-0 md:scale-0" : ""}`}>
                        <div className='flex justify-end text-3xl -mt-5 md:-mt-0 mb-6 md:mb-0'>
                            <img role='button' onClick={modalClick} className='mx-auto md:hidden' src='/assets/images/mobile-modal.png' alt='mobile-modal' />
                            <IoClose className='hidden md:block' role='button' onClick={modalClick} />
                        </div>
                        <ModalTambahKolam modalClick={modalClick}/>
                    </div>
                </div>
                
                <div className="container px-4 mx-auto max-w-3xl pt-0 pb-20 md:py-7 relative">
                    <div className="text-center text-3xl font-semibold">
                        <h1>Post Kolam</h1>
                        {/* <div>User's address: {userAddress}</div>; */}
                    </div>
                    {/* <div className="flex container  mx-auto max-w-3xl pt-3" > */}			
                    <section className="pt-5 md:pt-8 pb-8">
                        <div className="container-small relative">
                            <p className="text-center font-medium mb-10 md:hidden pt-1">
                                Lengkapi Detail Produk
                            </p>
                            <form
                                onSubmit={formik.handleSubmit}
                                method="POST"
                                encType="multipart/form-data"
                            >
                                <fieldset className="flex flex-col mt-4 space-y-1">
                                    {/* <label htmlFor="name">
                                        Pemilik Budidaya{" "}
                                        <span className="text-red-500">*</span>
                                    </label> */}
                                    <Input
                                        label="Pemilik Budidaya"
                                        type="text"
                                        id="name"
                                        name="name"
                                        // placeholder="Masukkan Nama"
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
                                    {/* <label htmlFor="countryID">Negara
                                        {" "}
                                        <span className="text-red-500">*</span>
                                    </label> */}
                                    <Select
                                        label="Pilih Negara"
                                        id="countryID"
                                        name="countryID"
                                        // value={formik.values.countryID}
                                        onChange={(e) =>dispatch(getListProvince({id:e})) && formik.setFieldValue("countryID",e)}
                                    >
                                        {country.map((country) => (
                                            <Option
                                                key={country.id}
                                                value={country.id}
                                            >
                                                {country.name}
                                            </Option>
                                        ))}
                                    </Select>
                                </fieldset>
                                <fieldset className="flex flex-col mt-4 space-y-1">
                                    {/* <label htmlFor="provinceID">Provinsi
                                        {" "}
                                        <span className="text-red-500">*</span>
                                    </label> */}
                                    <Select
                                        label="Pilih Provinsi"
                                        id="provinceID"
                                        name="provinceID"
                                        // value={formik.values.provinceID}
                                        onChange={(e) =>dispatch(getListCity({id:e})) && formik.setFieldValue("provinceID",e)
                                        }
                                        
                                        >
                                        {province.map((province) => (
                                            <Option
                                                key={province.id}
                                                value={province.id}
                                                // onClick={() => 
                                                //     dispatch(getListCity(
                                                //     {id:formik.values.provinceID}
                                                // ))}
                                            >
                                                {province.name}
                                            </Option>
                                        ))}
                                    </Select>
                                </fieldset>
                                <fieldset className="flex flex-col mt-4 space-y-1">
                                    {/* <label htmlFor="cityID">Kabupaten/Kota
                                        {" "}
                                        <span className="text-red-500">*</span>
                                    </label> */}
                                    <Select
                                        label="Pilih Kota"
                                        id="cityID"
                                        name="cityID"
                                        // value={formik.values.cityID}
                                        // value={selectedCategory.value}
                                        onChange={(e) =>dispatch(getListDistrict({id:e})) && formik.setFieldValue("cityID",e)
                                        }
                                        // onClick={() => 
                                        //     dispatch(getListDistrict(
                                        //         {id:formik.values.cityID}
                                        //     ))}
                                    >

                                        {city.map((city) => (
                                            <Option
                                                key={city.id}
                                                value={city.id}
                                            >
                                                {city.name}
                                            </Option>
                                        ))}
                                    </Select>
                                </fieldset>
                                <fieldset className="flex flex-col mt-4 space-y-1">
                                    {/* <label htmlFor="districtID">
                                        Kecamatan
                                        {" "}
                                        <span className="text-red-500">*</span>
                                    </label> */}
                                    <Select
                                        label="Pilih Kecamatan"
                                        id="districtID"
                                        name="districtID"
                                        // value={formik.values.districtID}
                                        onChange={(e) => formik.setFieldValue("districtID",e)
                                            // setSelectedDistrict(e.target.value)
                                        }
                                    >
                                        {district.map((district) => (
                                            <Option
                                                key={district.id}
                                                value={district.id}
                                            >
                                                {district.name}
                                            </Option>
                                        ))}
                                    </Select>
                                </fieldset>

                                <fieldset className="flex flex-col mt-4 space-y-1">
                                    {/* <label htmlFor="detailAddress">
                                        Detail Alamat{" "}
                                        <span className="text-red-500">*</span>
                                    </label> */}
                                    <Input
                                        label="Detail Alamat"
                                        type="text"
                                        id="detailAddress"
                                        name="detailAddress"
                                        // placeholder="Masukkan Detail Alamat"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        // value={formik.values.detailAddress}
                                    />
                                    {formik.touched.detailAddress &&
                                        formik.errors.detailAddress && (
                                            <span className="text-sm text-red-500">
                                                {formik.errors.detailAddress}
                                            </span>
                                        )}
                                </fieldset>
                                <fieldset className="flex flex-col mt-4 space-y-1">
                                    {/* <label htmlFor="noteAddress">
                                        Note Alamat{" "}
                                        <span className="text-red-500">*</span>
                                    </label> */}
                                    <Input
                                        label="Spesifikasi Alamat"
                                        type="text"
                                        id="noteAddress"
                                        name="noteAddress"
                                        // placeholder="Masukkan Detail Alamat"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        // value={formik.values.detailAddress}
                                    />
                                    {formik.touched.noteAddress && (
                                            <span className="text-sm text-red-500">
                                                {formik.errors.noteAddress}
                                            </span>
                                        )}
                                </fieldset>

                                <fieldset className="flex flex-col mt-4 space-y-1">
                                    {/* <label htmlFor="type">
                                        Status Pengajuan{" "}
                                        <span className="text-red-500">*</span>
                                    </label> */}
                                    <Select
                                        label="Status Pengajuan"
                                        id="type"
                                        className="uppercase"
                                        name="type"
                                        // value={formik.values.type}
                                        
                                        onChange={(e) => formik.setFieldValue("type",e)
                                            // setUploudBerkas(e.target.files[0])
                                        }
                                        // onChange={handleChangeCategory}
                                    >
                                        {type.map((type) => (
                                            <Option
                                                key={type.key}
                                                value={type.key}
                                                className="uppercase"
                                            >
                                                {type.key}
                                            </Option>
                                        ))}
                                    </Select>
                                </fieldset>

                                <fieldset className="flex flex-col mt-4 ">
                                        <div className="text-sm font-body font-semibold text-gray-600">
                                            <p>Klik Disini Untuk Mengetahui Koordinatmu</p>
                                        </div>
                                        <div className="flex w-full gap-3">   
                                            <Button onClick={handleClickLoc} type="button" className="bg-primary p-4 rounded-md">
                                                <span>Koordinat</span>
                                            </Button>
                                            <div className=" font-sans text-gray-700 font-semibold text-xs flex flex-col justify-center items-start">
                                                <p>
                                                    Latitude: {posi ? posi.latitude : "location tidak ditemukan"}
                                                </p>
                                                <p>
                                                    Longitude: {posi ? posi.longitude : "location tidak ditemukan"}
                                                </p>
                                               
                                            </div>
                                        </div>
                                </fieldset>

                                     {/* ====================== model pool =====================*/}
                                <div className="max-w-3xl border-2 mt-4 rounded-lg border-gray-400  p-3">
                                        <div className=" flex justify-between w-full py- 3 ">
                                            <div x-data="{ dataKolam: true }" id="dataKolam" htmlFor="dataKolam">
                                                <h1 className="font-bold pt-2">Data Kolam</h1>
                                            </div>
                                            <div className="flex items-center gap-3 " id="tambahKolam" >
                                                <p className="text-xs font-semibold text-gray-500" >Tambah Kolam ---{'>'}</p>
                                                <button type="button" onClick={modalClick} className="hover:rotate-45 hover:transition hover:duration-300 hover:scale-125 p-2 text-gray-700 font-semibold  border-2 hover:italic bg-blue-500 hover:bg-blue-300 hover:text-white rounded-full" >
                                                    <AiOutlinePlus size={20}/>
                                                    {/* <span className="font-bold pt-2">Tambah Kolam</span> */}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="">
                                            {pool.length >=0 ? (
                                                <div className="grid grid-cols-2 py-2 gap-3">
                                                    {pool.map((item, i) => (
                                                        <div key={i} className='card border-black border-2 hover:origin-top-left rounded-md p-2 bg-[#E8F0F2] shadow-main shadow-slate-700 cursor-pointer' 
                                                            >
                                                            <img className="rounded-md h-[50px] w-screen object-cover" src={item ? item.image : 'https://static.vecteezy.com/system/resources/previews/003/475/012/original/confused-man-with-question-mark-concept-flat-illustration-free-vector.jpg'} alt='pool' />
                                                            <div className="card-body px-1 flex flex-col justify-center">
                                                                <h3 className='font-semibold text-lg '>{item.name ? item.name : "kosong"}</h3> 
                                                                <h5 className='text-xs text-neutralGray my-1'>
                                                                    {item.long? item.long : 0}m x <span>{item.wide ? item.wide : 0}m
                                                                    
                                                                </span></h5>
                                                                <Button type="button" onClick={()=>deleteData(i)} className="bg-primary p-4 rounded-md" >
                                                                    <span className="font-bold pt-2">Delete</span>
                                                                </Button>
                                                                {/* <div className="text-primary flex justify-between pt-2">
                                                                    <div><BiTime size={20}/></div>
                                                                    <div className="text-xs">
                                                                        <p>123 Hari</p>
                                                                    </div>

                                                                </div> */}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                            ) : (

                                                <span className="text-xl font-bold ">ga onok isine</span>
                                            )}
                 
                                        </div>
                                </div>
                                {/* ============================== */}

                                <fieldset className="mt-4">
                                    <div className="flex space-x-2">                      
                                        <input
                                            type="file"
                                            id="listBerkas"
                                            name="listBerkas"
                                            className="h-full w-full hidden"
                                            // multiple
                                            // onBlur={formik.handleBlur}
                                            onChange={handleBerkas}
                                            // onChange={(e) => setBerkas(e.target.files[0] )}
                                            // onChange={(e) => formik.setFieldValue('listBerkas', e.target.files[0])
                                               
                                            // }
                                        />
                                        <label
                                            htmlFor="listBerkas"
                                            className=" w-32 h-12 flex items-center justify-center rounded-lg border-2 border-primary text-primary bg-white hover:bg-gray-100 transition"
                                        >
                                            <span>Uploud File</span>
                                        </label>
                                        {berkas[0] ? (
                                            <div className="flex justify-center items-center">
                                                <p>Filename: {berkas[0].name}</p>
                                            </div>
                                        ) : (
                                            <div className="flex justify-center items-center">
                                                <p>Pilih File </p>
                                            </div>
                                        )}
                                        
                                                    
                                    </div>
                                    {formik.touched.listBerkas && formik.errors.listBerkas && (
                                        <span className="text-sm text-red-500">
                                            {formik.errors.listBerkas}
                                        </span>
                                    )}
                                </fieldset>



                                <fieldset className="mt-4">
                                    <div className="avb">
                                        {previewPondImages.length <= 2 && (
                                            <div className="w-full py-4 rounded-xl border-2 bg-white h-68">
                                                <div className="boder border-b px-6">
                                                    <h2 className="text-primary">Foto Kolam</h2>
                                                </div>
                                                <div className="px-6">
                                                    <p className="">Silahkan upload Foto Kolam dengan cara menyentuh area/foto dibawah ini :</p>
                                                </div>
                                                <div className="bg-gray-300 h-48 rounded-xl border m-6">
                                                    <div className="relative h-full">

                                                        <input
                                                            type="file"
                                                            id="images"
                                                            name="images"
                                                            accept="image/png, image/jpg, image/jpeg"
                                                            className="h-full inset-0 opacity-0 absolute outline-none w-full cursor-pointer"
                                                            // onClick={() => 
                                                            //     dispatch(imageKolamSeller(
                                                            //         {image:previewPondImages}
                                                            //     ))}
                                                            multiple
                                                            // value={image}
                                                            onBlur={formik.handleBlur}
                                                            onChange={handleUploadImage}
                                                            // onClick={(e) =>
                                                            //     (e.target.value = "")
                                                            // }
                                                        />
                                                        <div className="flex flex-col items-center justify-center h-full text-center">
                                                            <svg className="w-6 h-6 mr-1 text-gray-700 text-current-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                                stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                            </svg>
                                                            <p className="m-0 font-semibold text-gray-700">Drag your files here or click in this area.</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <label
                                                        htmlFor="images"
                                                        className=" flex w-full relative -top-48 items-center justify-center transition"
                                                    >
                                                        {previewPondImages ? (
                                                            previewPondImages.map((image, index) => (
                                                                <div
                                                                    key={index}
                                                                    htmlFor="images"
                                                                    className="  w-full relative cursor-pointer  rounded-lg hover:bg-gray-100 transition"
                                                                >
                                                                    <div className="h-48 absolute mr-1 right-5 ">
                                                                        <button class="absolute z-50 p-1  bg-white rounded-bl focus:outline-none" type="button" >
                                                                            <svg class="w-4 h-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                                viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                            </svg>
                                                                        </button>
                                                                    </div>
                                                                    <img
                                                                    alt=""
                                                                    id="images"
                                                                    // htmlFor="images"
                                                                    src={image}
                                                                    className="object-cover relative h-48 w-full rounded-lg"
                                                                    />                  
                                                                </div>
                                                            ))

                                                        ) : (

                                                            <span className="text-xl font-bold ">Pilih Gambar</span>
                                                        )}
                                                        {/* prettier-ignore  */}
                                                    </label>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {formik.touched.images && formik.errors.images && (
                                        <span className="text-sm text-red-500">
                                            {formik.errors.images}
                                        </span>
                                    )}
                                </fieldset>
                                <div className="flex flex-row items-start mt-6 gap-4">
                                <Button type="submit" className="w-full bg-primary ">
                                    Simpan
                                </Button>
                                    {/* <Button
                                        type="button"
                                        
                                        className="w-full"
                                        variant="secondary"
                                    >
                                        Preview
                                    </Button>
                                    <Button type="submit" className="w-full bg-primary ">
                                    </Button> */}
                                </div>
                            </form>
                        </div>
                    </section>		
                </div>
                
            </div>

        </Fragment>
    )
}
export default AddBudidaya;