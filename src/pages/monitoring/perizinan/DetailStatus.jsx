import React, { Fragment, useState,useEffect } from "react";

// icons
import { IoChevronBackCircle } from 'react-icons/io5';
import { ToastContainer, toast } from "react-toastify";
// route
import { updatePond } from "../../../slices/admin/adminSlice";
// redux
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import CardPool from "../../../components/monitoring/status/CardPool";

import { Worker, Viewer } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import { getFilePlugin } from "@react-pdf-viewer/get-file"

import GoogleMapReact from 'google-map-react';

 

// applicationType:  ["buyer","seller"],
const AnyReactComponent = ({ text }) => <div>{text}</div>;

function DetailStatusAdmin({checkStatus}){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isAccept, setisAccept] = useState(false);

    const statusSubmission = 
    [ "submission" ,
    "reviewed" ,
      "actived" ,
     "disabled"]

    const { listPond } = useSelector(
        (store) => store.admin
    );

    console.log(statusSubmission[1])
    
    const { id } = useParams();
    const listPondStatus=listPond.find(i => i.id === id)
    const clickStatus = () => {
        toast.loading("Edit Status . . .", {
            position: "top-center",
            autoClose: 5000,
        });
        dispatch(updatePond({
            pondId:listPondStatus.id,
            status:statusSubmission[2]
        }))
        .unwrap()
        .then(() => {
            toast.dismiss();
            toast.success("Berhasil Update Status!", {
                position: "top-center",
                autoClose: 5000,
            });
            window.location.reload(false);
        });
    }
    
    const defaultProps = {
        center: {
            lat: -7.7543,
            lng: 113.2159
        },
        zoom: 11
      };
        

    return(
        <Fragment>
            <div className="relative ">
                <div className='bg-transparent absolute z-10'>
                    <IoChevronBackCircle className='m-3 cursor-pointer' size={30} color={'#E2D4F0'} onClick={() => navigate('/home-mon/perizinan')} />
                </div>
                <div className='container mx-auto max-w-4xl pt-0 pb-20 md:py-7 relative'>
                    <div className='grid grid-cols-1 md:grid-cols-3 md:gap-6'>
                        {/* Carousel */}
                        <div className='col-span-2 text-center '
                        data-aos="fade-right"
                        data-aos-durations="1000"
                        data-aos-delay="500">
                            <img className="rounded-2xl h-[400px] w-screen  object-cover"  src={listPondStatus ? listPondStatus.image :  'https://static.vecteezy.com/system/resources/previews/003/475/012/original/confused-man-with-question-mark-concept-flat-illustration-free-vector.jpg'} alt='pond'/>
                        </div>
                        {/* End Carousel */}
                        <div className='-mt-14 md:flex  md:flex-col md:items-center md:justify-center md:mt-0 md:static relative container mx-auto max-w-sm md:max-w-none md:mx-0' 
                        data-aos="fade-left"
                        data-aos-durations="1000"
                        data-aos-delay="500">
                            <div className='rounded-xl w-full mb-6 bg-gray-300'>
                                <div className='shadow-main h-46  rounded-2xl p-4'>
                                    <div className='info-status'>
                                        {/* <strong className='text-sm font-medium'>{productData ? (productData.users.username).charAt(0).toUpperCase() + (productData.users.username).slice(1).toLowerCase() : 'Anonymous'}</strong> */}
                                       <div className="flex justify-between">
                                        <h1 className='text-md font-semibold text-neutralGray'>{listPondStatus ? listPondStatus.name : 'Anonymous'}</h1>
                                        <p className='text-md  text-neutralGray'> {listPondStatus ? listPondStatus.status : ''}</p>
                                       </div>
                                        {/* <div className="flex pt-2">
                                            <BsCalendar4Week className="text-primary"/>
                                            <p className='text-xs ml-2 text-neutralGray'>Type : {listPondStatus ? listPondStatus.type : ''}</p>
                                        </div>
                                        <div className="flex pt-2">
                                            <BiTime size={15} className="text-primary"/>
                                            <p className='text-xs ml-2 text-neutralGray'>Status : { listPondStatus ? listPondStatus.status : ''}</p>
                                        </div> */}
                                        {/* <h3 className='font-semibold pt-2 text-primary'>
                                            {
                                                new Intl.NumberFormat('id-ID',
                                                { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                                                ).format(20000)
                                            }
                                            <span className='font-thin text-xs text-black'>/kg</span>
                                        </h3> */}
                                        {/* <p className='text-xs text-neutralGray'>{productData ? (productData.users.city).charAt(0).toUpperCase() + (productData.users.city).slice(1).toLowerCase() : 'Anonymous'}</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className='rounded-xl w-full mb-6 bg-gray-300'>
                                <div className='shadow-main h-46  rounded-2xl p-4'>
                                    <div className='info-status'>
                                        {/* <strong className='text-sm font-medium'>{productData ? (productData.users.username).charAt(0).toUpperCase() + (productData.users.username).slice(1).toLowerCase() : 'Anonymous'}</strong> */}
                                       <div className="flex justify-between">
                                        <h1 className='text-md font-semibold text-neutralGray p-2'>Berkas</h1>
                                        <div className="">
                                            <button className="border-primary hover:bg-primary border-2 p-2 rounded-xl">
                                               <span>Unduh Berkas</span> 
                                            </button>
                                        </div>
                                        {/* <p className='text-md  text-neutralGray'> {listPondStatus ? listPondStatus.status : ''}</p> */}
                                       </div>
                                        {/* <div className="flex pt-2">
                                            <BsCalendar4Week className="text-primary"/>
                                            <p className='text-xs ml-2 text-neutralGray'>Type : {listPondStatus ? listPondStatus.type : ''}</p>
                                        </div>
                                        <div className="flex pt-2">
                                            <BiTime size={15} className="text-primary"/>
                                            <p className='text-xs ml-2 text-neutralGray'>Status : { listPondStatus ? listPondStatus.status : ''}</p>
                                        </div> */}
                                        {/* <h3 className='font-semibold pt-2 text-primary'>
                                            {
                                                new Intl.NumberFormat('id-ID',
                                                { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                                                ).format(20000)
                                            }
                                            <span className='font-thin text-xs text-black'>/kg</span>
                                        </h3> */}
                                        {/* <p className='text-xs text-neutralGray'>{productData ? (productData.users.city).charAt(0).toUpperCase() + (productData.users.city).slice(1).toLowerCase() : 'Anonymous'}</p> */}
                                    </div>
                                </div>
                            </div>

                            

     
                            <div className='rounded-xl w-full mb-6 bg-gray-300'>
                                <div className='shadow-main h-46  rounded-2xl p-4'>
                                    <div className='info-status'>
                                        {/* <strong className='text-sm font-medium'>{productData ? (productData.users.username).charAt(0).toUpperCase() + (productData.users.username).slice(1).toLowerCase() : 'Anonymous'}</strong> */}
                                        <div className="flex justify-between">
                                            <h1 className='text-md font-semibold text-neutralGray'>Alamat</h1>
                                            {/* <button>
                                                {listPondStatus ? listPondStatus.latitude : 'Anonymous'}
                                            </button> */}
                                       </div>

                                    </div>
                                </div>
                            </div>
                            <div className='w-full hidden md:block mx-2'>
                                {listPondStatus && listPondStatus.status === 'actived' ? (
                                    <div className="">
                                       <h1>Telah Di ACC</h1>
                                    </div>
                                ):(
                                    <div className="flex gap-2">
                                        <div className="w-full "> 
                                            <button className='bg-[#39A2DB] hover:bg-[#A2DBFA] p-2 text-white w-full rounded-xl  text-sm transition ease-in-out duration-300 disabled:opacity-40'>
                                                Tolak
                                            </button>
                                        </div>
                                        <div className="w-full "> 
                                            <button onClick={clickStatus} className='bg-[#39A2DB] hover:bg-[#A2DBFA] p-2 text-white w-full rounded-xl  text-sm transition ease-in-out duration-300 disabled:opacity-40'>
                                                terima
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            
                        </div>
                        <div className='col-span-2 md:col-span-4 rounded-xl ontainer mx-auto max-w-sm md:max-w-none md:mx-0 mt-2 md:mt-0'>
                            <div className=' grid grid-cols-3 gap-2 rounded-2xl'>
                                <CardPool/>
                                <CardPool/>
                                <CardPool/>
                            </div>
                        </div>
                        <div className='col-span-2 md:col-span-4 rounded-xl bg-gray-300 container mx-auto max-w-sm md:max-w-none md:mx-0 mt-2 md:mt-0'
                        // data-aos="fade-right"
                        // data-aos-durations="1000"
                        // data-aos-delay="500"
                        >
                            {/* <div style={{ height: '100vh', width: '100%' }} className=' shadow-main rounded-2xl p-4'>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "" }}
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                            >
                                <AnyReactComponent
                                    lat={listPondStatus ? listPondStatus.latitude : 0}
                                    lng={listPondStatus ? listPondStatus.longtitude : 0}
                                    text="Lokasi Budidaya"
                                    />
                            </GoogleMapReact>
                            </div> */}
                        </div>
                        {/* button mobile */}
                        {/* <div className=' -mx-4 px-4 md:hidden w-full fixed  bottom-5'>
                            <button  className='bg-[#39A2DB] hover:bg-[#A2DBFA] w-full text-white  rounded-2xl py-[10px] text-sm transition ease-in-out duration-300 disabled:opacity-40'>
                                Pesan Sekarang
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
export default DetailStatusAdmin