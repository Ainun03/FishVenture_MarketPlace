import React,{Fragment,useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { Input } from "@material-tailwind/react";
// import Input from "../../../components/sellers/form/Input";
import Button from "../../../components/sellers/form/Button";
// slice
import { imageKolamSeller,createPondSeller } from "../../../slices/seller/sellerSlice";
import { kolamSeller } from "../../../slices/seller/poolSlice";

// formik
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";

function ModalTambahKolam({modalClick}){
    const navigate = useNavigate();
	const dispatch = useDispatch();

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
    const [previewPoolImages, setpreviewPoolImages] = useState([]);
    const handleUploadPoolImage = (e) => {
        const files = e.target.files;
        setpreviewPoolImages([])

        if (files.length > 4) {
            formik.setFieldError("images", "Hanya bisa mengunggah 4 gambar");
            formik.setFieldTouched("images", true);
        } else {
            // set data url images for previews
            [...Array(files.length)].forEach((item, index) => {
                FiletoDataURL(files[index], (result) => {
                    setpreviewPoolImages((prevState) => [
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

    const [multipleData, setMultipleData] =useState([])
    const initialValues = {
        name:"",
        long:"",
        wide:"",
        image:imageKolam.url ? imageKolam.url : "",
    }
    const formik = useFormik({
        initialValues,
        // validationSchema,
        onSubmit: (values) => {
            setMultipleData(values)
            values.long=parseFloat(values.long)
            values.wide=parseFloat(values.wide)
            values.image=initialValues.image

            let {name,long,wide,image}=values;

            setMultipleData([...multipleData,{name,long,wide,image}])
            console.log(multipleData)
            console.log(values)
            
            toast.loading("Menambah Kolam Budidaya . . .");
            dispatch(kolamSeller(multipleData))
                .unwrap()
                .then(() => {
                    toast.dismiss();         
                    toast.success("Berhasil Menambah Kolam Budidaya");      
                    formik.setFieldValue={
                        name:"",
                        long:"",
                        wide:"",
                        image:imageKolam.url ? imageKolam.url : "",
                    }
                    modalClick()
                });
        },
    });
    return(
        <Fragment>
            <div className='modal-body'>
                <form
                    onSubmit={formik.handleSubmit}
                    method="POST"
                    encType="multipart/form-data"
                >

                    <fieldset className="flex flex-col mt-4 space-y-1">
                        {/* <label htmlFor="name">
                            Nama Kolam{" "}
                            <span className="text-red-500">*</span>
                        </label> */}
                        <Input
                            label="Nama Kolam"
                            type="text"
                            id="name"
                            name="name"
                            // placeholder="Masukkan Nama Kolam"
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
                        {/* <label htmlFor="long">
                            Panjang Kolam{" "}
                            <span className="text-red-500">*</span>
                        </label> */}
                        <Input
                            label="Panjang Kolam"
                            type="number"
                            id="long"
                            name="long"
                            // placeholder="Masukkan Panjang Kolam"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.long}
                        />
                        {formik.touched.long &&
                            formik.errors.long && (
                                <span className="text-sm text-red-500">
                                    {formik.errors.long}
                                </span>
                            )}
                    </fieldset>

                    <fieldset className="flex flex-col mt-4 space-y-1">
                        {/* <label htmlFor="wide">
                            Lebar Kolam{" "}
                            <span className="text-red-500">*</span>
                        </label> */}
                        <Input
                            label="Lebar Kolam"
                            type="number"
                            id="wide"
                            name="wide"
                            // placeholder="Masukkan Lebar Kolam"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.wide}
                        />
                        {formik.touched.wide &&
                            formik.errors.wide && (
                                <span className="text-sm text-red-500">
                                    {formik.errors.wide}
                                </span>
                            )}
                    </fieldset>

                    <fieldset className="mt-4">
                        <div className="avb">
                            {previewPoolImages.length <= 2 && (
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
                                                multiple
                                                onBlur={formik.handleBlur}
                                                onChange={handleUploadPoolImage}
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
                                                className=" flex w-full h-full items-center justify-center transition"
                                                >
                                                {previewPoolImages ? (
                                                    previewPoolImages.map((image, index) => (
                                                    <div
                                                        key={index}
                                                        htmlFor="images"
                                                        className=" w-full h-48 relative cursor-pointer -top-48 rounded-lg hover:bg-gray-100 transition"
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
                                                            className="object-cover  h-full w-full rounded-lg"
                                                            />   
                                                                    
                                                    </div>
                                                    ))
                                                            
                                                    ) : (
                                                
                                                    <span className="text-xl font-bold  ">Pilih Gambar</span>  

                                                    )}
                                            </label>
                                    </div>
                                </div>
                            )}
                        </div>
                        {formik.touched.image && formik.errors.image && (
                            <span className="text-sm text-red-500">
                                {formik.errors.image}
                            </span>
                        )}
                    </fieldset>

                    <Button type="submit" className="w-full bg-primary ">
                        Simpan
                    </Button>
                </form>
            </div> 

        </Fragment>
    )
}
export default ModalTambahKolam