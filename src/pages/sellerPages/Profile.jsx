import React, {Fragment,useState,useEffect} from "react";

// icon
import {AiOutlineUser} from 'react-icons/ai'
import {IoChevronBackCircle} from 'react-icons/io5'

import Button from "../../components/sellers/form/Button";

import { Input, Select, Option } from "@material-tailwind/react";

import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";

import { updateUser,postImageUser } from "../../slices/authSlice";

import { Link,useNavigate } from "react-router-dom";
import {FaUserAlt} from 'react-icons/fa'
import { useLocation } from "react-router";

const SvgCamera = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="#7126B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="#7126B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

 function ProfileSel () {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { profil,imageUser } = useSelector(
        (store) => store.user
    );
    const location=useLocation()
    const [category, setCategory] = useState('edit');

    useEffect(() => {
        switch (category) {
          case 'profil':
            setCategory(category)
            break;
          case 'edit':
            setCategory(category);
            break;
          default:
            break;
        }
      }, [category]);

    const initialValues={
        name:profil ? profil.name : "",
        photo:imageUser ? imageUser.Url: "",
        phone:profil? profil.phone:"" ,
    }

    const validationSchema = () => {
        const validationObject = {
            name: Yup.string().required("Masukkan nama anda"),
            phone: Yup.string()
                .required("Tolong masukkan nomor handphone anda")
                .matches(/^[\0-9]+$/, "Tolong hanya masukkan angka")
                .min(11, "Nomor handphone minimal 11 angka")
                .max(13, "Nomor handphone maksimal 13 angka"),
            photo: Yup.string().required("Tolong pilih Avatar"),
        };
        return Yup.object().shape(validationObject);
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            values.photo=imageUser.Url
            console.log(values)
            
            toast.loading("Update Foto . . .");
            dispatch(updateUser(values))
                .unwrap()
                .then(() => {
                    toast.dismiss();
                    toast.success("update Profil");
                    // navigate("/");
                });
        },
    });
    const [fileAvatar, setFileAvatar] = useState("");
    const handleChangeAvatar = (e) => {
        const file = e.target.files[0];
        setFileAvatar(file)
        console.log(file)
        if (file) {
            if (file.size / 1000000 <= 2) {
                formik.setFieldValue("photo", file);
                // FiletoDataURL(e.target.files[0], (result) => {
                //     // formik.setFieldValue("image", result);
                //     setFileAvatar(result);
                // });
            } else {
                formik.setFieldError("photo", "Maksimal ukuran file 2 Mb");
            }
        }
        dispatch(postImageUser({
            image:file
        }))
    };
     return(

        <Fragment>
            <div className="relative py-4  font-body">
                <Link to="/">
                    <div className='bg-transparent mx-4 absolute z-10'>
                        <IoChevronBackCircle  size={30} color={'#f0f0f0'} />
                    </div>
                </Link>
                <div className="px-3 container max-w-6xl h-full">
                    {/* <h1 className="font-bold text-2xl text-center pb-2 hidden md:block">Info Profile</h1> */}
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
                        <div className="hidden mx-auto w-40 md:block">
                        <div className="card p-2  bg-gray-100 ">
                            <div className="border-b-2">
                                <button onClick={() => setCategory('edit')} className="w-full ">
                                    <div className={
                                            "home text-sm flex gap-2 mt-4  font-medium text-gray-400 py-2 px-2 hover:bg-blue-300 hover:text-gray-600 hover:text-base rounded-md transition duration-150 ease-in-out " 
                                        +(category === 'edit'
                                            ? "active-state bg-blue-500 text-gray-600 text-base "
                                            : "nonActive-state")
                                    }>
                                        <h1>Edit Profile</h1>
                                    </div>
                                </button>
                            </div>
                            <div className="">
                                <button onClick={() => setCategory('profil')} className="w-full">
                                    <div className={
                                            "home text-sm flex gap-2   font-medium text-gray-400 py-2 px-2 hover:bg-blue-500 hover:text-gray-600 hover:text-base rounded-md transition duration-150 ease-in-out " 
                                            +(category === 'profil'
                                            ? "active-state bg-blue-500 text-gray-600 text-base "
                                            : "nonActive-state")
                                    }>
                                        <h1>Profil Anda</h1>
                                    </div>
                                </button>
                            </div>

                        </div>
                    </div>
                        <div className=" md:hidden">
                            <div className="flex justify-between">
                                <div>
                                    <h1 className="font-bold text-2xl">Info Profile</h1>         
                                </div>
                                {/* <div>
                                    <label for="underline_select" class="sr-only">Underline select</label>
                                        <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-500  dark:text-gray-500 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-500 peer">
                                            <option selected>Edit Profile</option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                        </select>          
                                </div> */}
                            </div>
                        </div>
                    {category === "edit"?(

                        <section className="col-span-2">
                            <div className=" mt-4 md:mt-0">
                            
                                    <div className="card p-2 bg-gray-100">
                                    <h1 className="font-bold">Profile Foto</h1>
                                    <div className="grid grid-cols-2 gap-4 py-4">
                                    
                                        <div className="border-r flex">
                                            {/* <div className="flex  bg-secondary justify-center"> */}

                                                {/* <div className="bg-gray-300 border rounded-full p-6">
                                                    <AiOutlineUser size={25}/>
                                                </div> */}
                                                <fieldset className=" w-full"> 
                                                    <label
                                                        htmlFor="photo"
                                                        className="w-24 bg-gray-300 h-24 flex items-center justify-center mx-auto rounded-full "
                                                    >
                                                        {/* prettier-ignore  */}
                                                        {formik.values.photo === "" ||
                                                        !formik.values.photo ? (
                                                            <SvgCamera />
                                                        ) : (
                                                            <img
                                                                src={
                                                                    fileAvatar === ""
                                                                        ? formik.values.photo
                                                                        : imageUser.Url
                                                                }
                                                                className={` h-full w-full object-cover rounded-full`}
                                                                alt="profile"
                                                            />
                                                        )}
                                                        <input
                                                            name="photo"
                                                            id="photo"
                                                            type="file"
                                                            className="hidden"
                                                            accept="image/png, image/jpg, image/jpeg"
                                                            onChange={handleChangeAvatar}
                                                            onClick={(e) => (e.target.value = "")}
                                                        />      
                                                    </label>
                                                    {formik.touched.photo && formik.errors.photo && (
                                                        <p className="mt-1 text-sm text-red-500 text-center">
                                                            {formik.errors.photo}
                                                        </p>
                                                    )}
                                                
                                                        {/* <div className="flex w-full flex-col justify-center gap-2 ">
                                                            <label htmlFor="photo">
                                                                <button  type="button" className="text-primary">
                                                                    <span className="border-2 p-2 px-6 border-primary">Uploud Foto</span>

                                                                </button>
                                                            </label>
                                                            
                                                            <button type="button" className="w-full">
                                                                <span>remove</span>
                                                            </button>
                                                        </div> */}
                                                    </fieldset>
                                                {/* </div> */}

                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-md font-semibold">Image requirments:</p>
                                            <ol className="list-decimal px-4">
                                                <li className="text-xs">Min.  400 x 400px</li>
                                                <li className="text-xs">Max. 2MB</li>
                                                <li className="text-xs" >Your face or company logo</li>
                                            </ol>
                                            
                                        </div>
                                    </div>                  
                                </div>

                            
                                <div className="card mt-4 p-2 bg-gray-100 h-full">
                                    <h1 className="font-bold ">Users Detail</h1>
                                    <div className="px-6">
                                <form
                                onSubmit={formik.handleSubmit}
                                method="POST"
                                encType="multipart/form-data"
                                >
                                        
                                        <fieldset className="flex flex-col mt-4 space-y-1">
                                            <label className="font-semibold" htmlFor="type">
                                                Email{" "}
                                                {/* <span className="text-red-500">*</span> */}
                                            </label>
                                            <Input
                                                label="Email"
                                                type="email"
                                                id="phone"
                                                name="phone"
                                                disabled={true}
                                                value={profil.email}
                                            />
                                            
                                        </fieldset>
                                        <fieldset className="flex flex-col mt-4 space-y-1">
                                            <Input
                                                label="Nama"
                                                type="text"
                                                id="name"
                                                name="name"
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
                                            <Input
                                                label="No Telephone"
                                                type="text"
                                                id="phone"
                                                name="phone"
                                                // placeholder="Masukkan Nama"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.phone}
                                            />
                                            {formik.touched.phone &&
                                                formik.errors.phone && (
                                                    <span className="text-sm text-red-500">
                                                        {formik.errors.phone}
                                                    </span>
                                                )}
                                        </fieldset>

                                        <div className="pt-4">
                                            <Button type="submit" className="w-full bg-primary ">
                                                Simpan
                                            </Button>
                                        </div>
                                    
                                </form>
                                    </div>
                                </div>
                            
                            </div>
                        </section>
                    ):(
// ======================== profil =====================================================
                        category ==="profil" &&
                        <section className="col-span-2">
                                <div className="  md:mt-0">
                                
                                        <div className="card p-2  bg-gray-100 ">
                                            <div className="">
                                                <h1 className="font-bold">Profile Foto</h1>                   
                                            </div>
                                            <div className="flex justify-center items-center w-full self-center">
                                                {
                                                    profil.photo === ""?
                                                    <div className="w-24 bg-gray-300 h-24 flex items-center justify-center mx-auto rounded-full">
                                                        <FaUserAlt size={30}/>
                                                    </div>
                                                 :   
                                                    <img className="w-32 rounded-full h-32" src={profil ? profil.photo :"https://static.vecteezy.com/system/resources/previews/003/475/012/original/confused-man-with-question-mark-concept-flat-illustration-free-vector.jpg"} alt="Tidaka Ada Foto"/>
                                                }
                                            </div>
                                        </div>
                                        

                                
                                    <div className="card  bg-gray-100 ">
                                        <div className="px-6 py-4">
                                            <form
                                            onSubmit={formik.handleSubmit}
                                            method="POST"
                                            encType="multipart/form-data"
                                            >
                                                    
                                                    <fieldset className="flex flex-col mt-4 space-y-1">
                                                        <label className="font-semibold" htmlFor="type">
                                                            Email{" "}
                                                            {/* <span className="text-red-500">*</span> */}
                                                        </label>
                                                        <Input
                                                            label="Email"
                                                            type="email"
                                                            id="phone"
                                                            name="phone"
                                                            disabled={true}
                                                            value={profil.email}
                                                        />
                                                    </fieldset>
                                                    <fieldset className="flex flex-col mt-4 space-y-1">
                                                    <label className="font-semibold" htmlFor="type">
                                                            Nama{" "}
                                                            {/* <span className="text-red-500">*</span> */}
                                                        </label>
                                                        <Input
                                                            label="Nama"
                                                            type="text"
                                                            id="name"
                                                            disabled={true}
                                                            name="name"                
                                                            value={profil ? profil.name :""}
                                                        />
                                                        
                                                    </fieldset>
                                                    <fieldset className="flex flex-col mt-4 space-y-1">
                                                        <label className="font-semibold" htmlFor="type">
                                                            No Telephone{" "}
                                                            {/* <span className="text-red-500">*</span> */}
                                                        </label>
                                                        <Input
                                                            label="No Telephone"
                                                            type="text"
                                                            id="phone"
                                                            name="phone"
                                                            disabled={true}

                                                            value={profil ? profil.phone :"Belum ada nomer telephone "}
                                                        />
                                                    </fieldset>

                                                
                                            </form>
                                        </div>
                                    </div>
                                
                                </div>
                            </section>
                        )}
                    </div>
                </div>
               
                    
            </div>

         </Fragment>
     )
 }
 export default ProfileSel