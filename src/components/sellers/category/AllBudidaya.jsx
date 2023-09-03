import React, { Fragment } from 'react';
import AddKolamButton from '../button/AddKolamButton';
import CardBudidaya from '../card/cardBudidaya';

import { toast } from "react-toastify";

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const AllBudidaya = ({status}) => {
  const { getBudiday } = useSelector(
    (store) => store.seller
  );
  const navigate = useNavigate();

    return (
      <Fragment>
        <div className='w-full  pb-5 px-4  flex justify-end '>
                <button onClick={() => {
                  if ((status === "reviewed" || status === "submission"  )) {
                    return toast.error('Tunggu Hingga Pengajuan Anda Diterima!', {
                          position: "top-center",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "light",
                          });  
                  } else{
                    return navigate('/home-sel/inventory/post-budidaya')}
                  }     
                }
                
                 className=' p-2 rounded-3xl hover:bg-blue-200 hover:border-blue-300 hover:text-blue-500 border-b-4 bg-primary border-dashed border-blue-600 w-32 '>
                    <span className=''>Tambah </span>
                </button>
                {/* <div className='flex cursor-pointer gap-2 p-4 '>
                    <p>Tambah</p>
                    <div className='rounded-full border-2 hover:border-blue-200 hover:text-blue-200 border-dashed text-primary border-primary'>
                        
                    </div>
                </div> */}
            </div>
        <div className="grid grid-cols-2 px-3 md:grid-cols-3 gap-2">
          {/* <AddKolamButton /> */}
          {getBudiday.length > 0 && getBudiday.map(item => <CardBudidaya key={item.id} seller={item} />)}
        </div>
      </Fragment>
    );
  };
  
export default AllBudidaya;