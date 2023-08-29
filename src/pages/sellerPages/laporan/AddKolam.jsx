import React,{Fragment,useEffect, useState} from "react";

// component
import Input from "../../../components/sellers/form/Input";
import Button from "../../../components/sellers/form/Button";
import Select from "../../../components/sellers/form/Select";
import Textarea from "../../../components/sellers/form/Textarea";

import { kolamSeller } from "../../../slices/seller/poolSlice";
// icons
import { IoChevronBackCircle } from 'react-icons/io5';

// react dom
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const AddKolam = () => {

    const location = useLocation();
    if (location.pathname.includes("edit_kolam"))
        document.title = "Edit Kolam";
    else document.title = "Add Kolam";

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    /* ======== for changing categories ======== */
  
    /* ======== for changing upload product ======== */
    const [previewProductImages, setPreviewProductImages] = useState([]);
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
    const handleUploadProdct = (e) => {
        const files = e.target.files;
        setPreviewProductImages([]);
        // console.log(e);

        // reset error message
        formik.setFieldError("image", "");
        formik.setFieldValue("image", "");

        // if users upload more than 3 images
        if (files.length > 3) {
            formik.setFieldError("image", "Hanya bisa mengunggah 3 gambar");
            formik.setFieldTouched("image", true);
        } else {
            // set data url images for previews
            [...Array(files.length)].forEach((item, index) => {
                FiletoDataURL(files[index], (result) => {
                    setPreviewProductImages((prevState) => [
                        ...prevState,
                        result,
                    ]);
                });
            });
            // set formik value
            formik.setFieldValue("image", files, files.length <= 3);
        }
    };

    /* ======== formik stuff ======== */
    const initialValues = {
        name: "",
        long: "",
        // categoryId: categories[0].value,
        wide: "",
        image: "",
    };
    
    const validationSchema = () => {
        const validationObject = {
            name: Yup.string().required("Masukkan nama Kolam"),
            long: Yup.string()
                .required("Tolong masukkan Panjang Kolam")
                .matches(/^[0-9]*$/, "Tolong hanya masukkan angka"),
            wide: Yup.string()
                .required("Tolong masukkan Panjang Kolam")
                .matches(/^[0-9]*$/, "Tolong hanya masukkan angka"),
            image: Yup.string().required(
                "Tolong masukkan gambar produk (Maks 3)"
            ),
        };
        return Yup.object().shape(validationObject);
    };
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            const data = new FormData();
            data.append("name", values.name);
            data.append("long", values.long);
            data.append("wide", values.wide);
            console.log(data)

            data.append("productName", values.productName);
            [...Array(values.image.length)].forEach((item, index) => {
                data.append("image", values.image[index]);
            });
            toast.loading("Menambahkan Kolam . . .");
            dispatch(kolamSeller(
                values
                ))
                .unwrap()
                .then(() => {
                    toast.dismiss();
                    toast.success("Berhasil menambahkan Kolam!");
                    navigate("/home-sel/laporan");
                });

            // if (location.pathname.includes("edit_kolam")) {
            //     data.append("productId", id);

            //     if (values.image === "placeholder")
            //         data.set("image", null);

            //     toast.loading("Memperbarui detail Kolam . . .");
            //     // dispatch(updateProduct(formData))
            //     //     .unwrap()
            //     //     .then(() => {
            //     //         toast.dismiss();
            //     //         toast.success("Berhasil memperbarui detail produk!");
            //     //         navigate("/list");
            //     //     });
            // } else {
            //     toast.loading("Menambahkan produk . . .");
            //     dispatch(kolamSeller(data))
            //         .unwrap()
            //         .then(() => {
            //             toast.dismiss();
            //             toast.success("Berhasil menambahkan produk!");
            //             navigate("/home-sel/laporan");
            //         });
            // }
        },
    });

     /* ======== handle preview ======== */
    //  const { fullName, imageUrl, address } = useSelector((state) => state.user);
    //  const handlePreview = () => {
    //      const { name, long, wide,  image} =
    //          formik.values;
    //      if (
    //         name === "" ||
    //         long === "" ||
    //         wide === "" ||
    //         image === ""
    //      )
    //          toast.error("Tolong lengkapi semua data");
    //      else {
    //          const previewProduct = {
    //              productId: location.pathname.includes("edit_product") ? id : -1,
    //              name,
    //              long,
    //              wide,
    //              image,
    //              productImages: previewProductImages,
    //              realProductImages: image,
    //             //  userName: fullName,
    //             //  photoProfile: imageUrl,
    //             //  city: address.city,
    //          };
    //         //  dispatch(setPreviewProduct(previewProduct));
    //          navigate("/preview");
    //      }
    //  };

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
                <div className="container px-4 mx-auto max-w-3xl pt-0 pb-20 md:py-7 relative">
                    <div className="text-center text-3xl font-semibold">
                        <h1>Post Kolam</h1>
                    </div>
                    {/* <div className="flex container  mx-auto max-w-3xl pt-3" > */}			
                    <section className="pt-5 md:pt-8 pb-8">
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
                            <p className="text-center font-medium mb-10 md:hidden pt-1">
                                Lengkapi Detail Produk
                            </p>
                            <form
                                onSubmit={formik.handleSubmit}
                                method="POST"
                                encType="multipart/form-data"
                            >
                                <fieldset className="flex flex-col mt-4 space-y-1">
                                    <label htmlFor="name">
                                        Nama Kolam{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Nama Kolam"
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
                                    <label htmlFor="long">
                                        Panjang Kolam{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        type="text"
                                        id="long"
                                        name="long"
                                        placeholder="Panjang Kolam"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.long}
                                    />
                                    {formik.touched.long && formik.errors.long && (
                                        <span className="text-sm text-red-500">
                                            {formik.errors.long}
                                        </span>
                                    )}
                                </fieldset>
                                <fieldset className="flex flex-col mt-4 space-y-1">
                                    <label htmlFor="wide">
                                        Lebar Kolam{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        type="text"
                                        id="wide"
                                        name="wide"
                                        placeholder="Lebar Kolam"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.wide}
                                    />
                                    {formik.touched.wide && formik.errors.wide && (
                                        <span className="text-sm text-red-500">
                                            {formik.errors.wide}
                                        </span>
                                    )}
                                </fieldset>
                                
                                
                                <fieldset className="mt-4">
                                    <p className="mb-1">
                                        Foto kolam (Maks 3){" "}
                                        <span className="text-red-500">*</span>
                                    </p>
                                    <div className="flex space-x-2">
                                        {previewProductImages.map((image, index) => (
                                            <div
                                                key={index}
                                                htmlFor="image"
                                                className=" w-24 h-24 flex items-center justify-center rounded-lg border bg-white hover:bg-gray-100 transition"
                                            >
                                                <img
                                                    src={image}
                                                    className="object-cover h-full w-full rounded-lg"
                                                    alt="preview"
                                                />
                                            </div>
                                        ))}
                                        {previewProductImages.length <= 3 && (
                                            <div>
                                                <input
                                                    type="file"
                                                    id="image"
                                                    name="image"
                                                    accept="image/png, image/jpg, image/jpeg"
                                                    className="h-full w-full hidden"
                                                    multiple
                                                    onBlur={formik.handleBlur}
                                                    onChange={handleUploadProdct}
                                                    onClick={(e) =>
                                                        (e.target.value = "")
                                                    }
                                                />
                                                <label
                                                    htmlFor="image"
                                                    className=" w-24 h-24 flex items-center justify-center rounded-lg border-2 border-dashed bg-white hover:bg-gray-100 transition"
                                                >
                                                    {/* prettier-ignore  */}
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 5V19" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M5 12H19" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </label>
                                            </div>
                                        )}
                                    </div>
                                    {formik.touched.image && formik.errors.image && (
                                        <span className="text-sm text-red-500">
                                            {formik.errors.image}
                                        </span>
                                    )}
                                </fieldset>
                                <div className="flex flex-row items-start mt-6 gap-4">
                                    <Button
                                        type="button"
                                        // onClick={handlePreview}
                                        className="w-full"
                                        variant="secondary"
                                    >
                                        Preview
                                    </Button>
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
export default AddKolam