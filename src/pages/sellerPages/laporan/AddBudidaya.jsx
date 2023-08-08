import React,{Fragment,useEffect, useState} from "react";

// component
import Input from "../../../components/sellers/form/Input";
import Button from "../../../components/sellers/form/Button";
import Select from "../../../components/sellers/form/Select";
import Textarea from "../../../components/sellers/form/Textarea";

// icons
import { IoChevronBackCircle } from 'react-icons/io5';

// react dom
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const categories = [
    { value: 1, key: "Hobi" },
    { value: 2, key: "Kendaraan" },
    { value: 3, key: "Baju" },
    { value: 4, key: "Elektronik" },
    { value: 5, key: "Kesehatan" },
];
const AddBudidaya = () => {

    const location = useLocation();
    if (location.pathname.includes("edit_budidaya"))
        document.title = "Edit Budidaya";
    else document.title = "Tambah Budidaya";

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userAddress, setUserAddress] = useState(null);
    useEffect(() => {  
    }, []);
//     navigator.geolocation.getCurrentPosition(position => {
//        const { latitude, longitude } = position.coords;
//        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`)
//        .then(response => response.json())
//        .then(data => {
//            setUserAddress(data.results[0].formatted_address);
//        });

//    }, []);

        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
        });      

    /* ======== for changing categories ======== */
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const handleChangeCategory = (e) => {
        // console.log(e.target.value);
        setSelectedCategory(
            categories.find(
                (category) => category.value === parseInt(e.target.value)
            )
        );
        formik.setFieldValue("categoryId", e.target.value);
    };

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
        formik.setFieldError("images", "");
        formik.setFieldValue("images", "");

        // if users upload more than 4 images
        if (files.length > 4) {
            formik.setFieldError("images", "Hanya bisa mengunggah 4 gambar");
            formik.setFieldTouched("images", true);
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
            formik.setFieldValue("images", files, files.length <= 4);
        }
    };

    

    /* ======== formik stuff ======== */
    const initialValues = {
        name: "",
        countryId: "",
        provinceId: "",
        cityId: "",
        districtId: "",
        detailAddress: "",
        noteAddress: "",
        type: "",
        latitude: "",
        longtitude: "",
        url: "",
        teamId: "",
        status: "",
        listPool: [],
        listBerkas: [],

    };
    const validationSchema = () => {
        const validationObject = {
            name: Yup.string().required("Masukkan nama anda"),
            countryId: Yup.string()
                .required("Tolong masukkan negara lokasi budidaya anda"),
                // .matches(/^[0-9]*$/, "Tolong hanya masukkan angka"),
            provinceId: Yup.string()
                .required("Tolong masukkan provinsilokasi budidaya  anda"),
            cityId: Yup.string()
                .required("Tolong masukkan kota lokasi budidaya anda"),
            districtId: Yup.string()
                .required("Tolong masukkan kecamatan lokasi budidaya anda"),
            detailAddress: Yup.string()
                .required("Tolong masukkan detail Almat lokasi budidaya anda"),
            type: Yup.string()
                .required("Tolong masukkan deskripsi produk"),
            latitude: Yup.string()
                .required("Tolong masukkan deskripsi produk"),
            longtitude: Yup.string()
                .required("Tolong masukkan deskripsi produk"),
            teamId: Yup.string()
                .required("Tolong masukkan deskripsi produk"),
            status: Yup.string()
                .required("Tolong masukkan deskripsi produk"),
                // .max(300, "Batas maksimum deskripsi adalah 300 karakter"),
            image: Yup.string().required(
                "Tolong masukkan gambar produk (Maks 4)"
            ),
        };
        return Yup.object().shape(validationObject);
    };
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            const formData = new FormData();
            formData.append("name", values.name);
            formData.append("countryId", values.countryId);
            formData.append("provinceId", values.provinceId);
            formData.append("cityId", values.cityId);
            formData.append("districtId", values.districtId);
            formData.append("detailAddress", values.detailAddress);
            formData.append("noteAddress", values.noteAddress);
            formData.append("type", values.type);
            formData.append("latitude", values.latitude);
            formData.append("longtitude", values.longtitude);
            formData.append("teamId", values.teamId);
            formData.append("image", values.image);
            formData.append("listPool", values.listPool);
            formData.append("listBerkas", values.listBerkas);
            

            [...Array(values.image.length)].forEach((item, index) => {
                formData.append("image", values.image[index]);
            });

            if (location.pathname.includes("edit_product")) {
                formData.append("productId", id);

                if (values.image === "placeholder")
                    formData.set("image", null);

                toast.loading("Memperbarui detail produk . . .");
                // dispatch(updateProduct(formData))
                //     .unwrap()
                //     .then(() => {
                //         toast.dismiss();
                //         toast.success("Berhasil memperbarui detail produk!");
                //         navigate("/list");
                //     });
            } else {
                // toast.loading("Menambahkan produk . . .");
                // dispatch(addProduct(formData))
                //     .unwrap()
                //     .then(() => {
                //         toast.dismiss();
                //         toast.success("Berhasil menambahkan produk!");
                //         navigate("/list");
                    // });
            }
        },
    });

     /* ======== handle preview ======== */
     const { fullName, imageUrl, address } = useSelector((state) => state.user);
     const handlePreview = () => {
         const { productName, price, categoryId, description, images } =
             formik.values;
         if (
             productName === "" ||
             price === "" ||
             description === "" ||
             images === ""
         )
             toast.error("Tolong lengkapi semua data");
         else {
             const previewProduct = {
                productId: location.pathname.includes("edit_product") ? id : -1,
                name: "",
                countryId: "",
                provinceId: "",
                cityId: "",
                districtId: "",
                detailId: "",
                detailAddress: "",
                noteAddress: "",
                type: "",
                latitude: "",
                longtitude: "",
                teamId: "",
                image: "",
                listPool: "",
                listBerkas: "",
             };
            //  dispatch(setPreviewProduct(previewProduct));
             navigate("/preview");
         }
     };


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
                        {/* <div>User's address: {userAddress}</div>; */}
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
                                    <label htmlFor="productName">
                                        Pemilik Budidaya{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        type="text"
                                        id="productName"
                                        name="productName"
                                        placeholder="Masukkan Nama"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.productName}
                                    />
                                    {formik.touched.productName &&
                                        formik.errors.productName && (
                                            <span className="text-sm text-red-500">
                                                {formik.errors.productName}
                                            </span>
                                        )}
                                </fieldset>
                                <fieldset className="flex flex-col mt-4 space-y-1">
                                    <label htmlFor="categoryId">Negara</label>
                                    <Select
                                        id="categoryId"
                                        name="categoryId"
                                        // value={selectedCategory.value}
                                        onChange={handleChangeCategory}
                                    >
                                        <option className="" value='' disabled selected >
                                            Pilih Negara
                                        </option>
                                        {categories.map((category) => (
                                            <option
                                                key={category.key}
                                                value={category.value}
                                            >
                                                {category.key}
                                            </option>
                                        ))}
                                    </Select>
                                </fieldset>
                                <fieldset className="flex flex-col mt-4 space-y-1">
                                    <label htmlFor="categoryId">Provinsi</label>
                                    <Select
                                        id="categoryId"
                                        name="categoryId"
                                        // value={selectedCategory.value}
                                        onChange={handleChangeCategory}
                                    >
                                        <option className="" value='' disabled selected >
                                            Pilih Provinsi
                                        </option>
                                        {categories.map((category) => (
                                            <option
                                                key={category.key}
                                                value={category.value}
                                            >
                                                {category.key}
                                            </option>
                                        ))}
                                    </Select>
                                </fieldset>
                                <fieldset className="flex flex-col mt-4 space-y-1">
                                    <label htmlFor="categoryId">Kabupaten/Kota</label>
                                    <Select
                                        id="categoryId"
                                        name="categoryId"
                                        // value={selectedCategory.value}
                                        onChange={handleChangeCategory}
                                    >
                                        <option className="" value='' disabled selected >
                                            Pilih Kabupaten/Kota
                                        </option>
                                        {categories.map((category) => (
                                            <option
                                                key={category.key}
                                                value={category.value}
                                            >
                                                {category.key}
                                            </option>
                                        ))}
                                    </Select>
                                </fieldset>
                                <fieldset className="flex flex-col mt-4 space-y-1">
                                    <label htmlFor="categoryId">Kecamatan</label>
                                    <Select
                                        id="categoryId"
                                        name="categoryId"
                                        // value={selectedCategory.value}
                                        onChange={handleChangeCategory}
                                    >
                                        <option className="" value='' disabled selected >
                                            Pilih Kocamatan
                                        </option>
                                        {categories.map((category) => (
                                            <option
                                                key={category.key}
                                                value={category.value}
                                            >
                                                {category.key}
                                            </option>
                                        ))}
                                    </Select>
                                </fieldset>
                                <fieldset className="flex flex-col mt-4 space-y-1">
                                    <label htmlFor="productName">
                                        Detail Alamat{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        type="text"
                                        id="productName"
                                        name="productName"
                                        placeholder="Masukkan Detail Alamat"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.productName}
                                    />
                                    {formik.touched.productName &&
                                        formik.errors.productName && (
                                            <span className="text-sm text-red-500">
                                                {formik.errors.productName}
                                            </span>
                                        )}
                                </fieldset>
                                <fieldset className="flex flex-col mt-4 space-y-1">
                                    <label htmlFor="productName">
                                        Koordinat{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        type="text"
                                        id="productName"
                                        name="productName"
                                        placeholder="Masukkan Koordinat"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.productName}
                                    />
                                    {formik.touched.productName &&
                                        formik.errors.productName && (
                                            <span className="text-sm text-red-500">
                                                {formik.errors.productName}
                                            </span>
                                        )}
                                </fieldset>
                                <fieldset className="flex flex-col mt-4 space-y-1">
                                    <label htmlFor="categoryId">Status Pengajuan</label>
                                    <Select
                                        id="categoryId"
                                        name="categoryId"
                                        value={selectedCategory.value}
                                        onChange={handleChangeCategory}
                                    >
                                        {categories.map((category) => (
                                            <option
                                                key={category.key}
                                                value={category.value}
                                            >
                                                {category.key}
                                            </option>
                                        ))}
                                    </Select>
                                </fieldset>
                                <fieldset className="mt-4">
                                    <p className="mb-1">
                                        Foto Produk (Maks 4){" "}
                                        <span className="text-red-500">*</span>
                                    </p>
                                    <div className="flex space-x-2">
                                        {previewProductImages.map((image, index) => (
                                            <div
                                                key={index}
                                                htmlFor="images"
                                                className=" w-24 h-24 flex items-center justify-center rounded-lg border bg-white hover:bg-gray-100 transition"
                                            >
                                                <img
                                                    src={image}
                                                    className="object-cover h-full w-full rounded-lg"
                                                />
                                            </div>
                                        ))}
                                        {previewProductImages.length <= 4 && (
                                            <div>
                                                <input
                                                    type="file"
                                                    id="images"
                                                    name="images"
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
                                                    htmlFor="images"
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
                                    {formik.touched.images && formik.errors.images && (
                                        <span className="text-sm text-red-500">
                                            {formik.errors.images}
                                        </span>
                                    )}
                                </fieldset>
                                <div className="flex flex-row items-start mt-6 gap-4">
                                    <Button
                                        type="button"
                                        onClick={handlePreview}
                                        className="w-full"
                                        variant="secondary"
                                    >
                                        Preview
                                    </Button>
                                    <Button type="submit" className="w-full bg-primary ">
                                        {location.pathname.includes("edit_budidaya")
                                            ? "Perbarui"
                                            : "Terbitkan"}
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
export default AddBudidaya