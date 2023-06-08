import { Fragment } from "react";
// redux
import { useNavigate, useParams } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';


function Cardbuyer(){
    const navigate = useNavigate();
    return(
        <Fragment>
            <div className='card border-2 hover:origin-top-left  rounded-md p-2 shadow-main shadow-slate-700 h-48 cursor-pointer' 
            onClick={() => navigate('/product-detail')}
            
            // onClick={() => {
            // // Checking product seller with user logged\
            // if ((item.userId == auth.login.id && auth.login.id !== undefined)) {
            //     navigate(`/seller-product/${item.productId}`);
            // } else {
            //     navigate(`/buyer-product/${item.productId}`);
            // }
            // }}
             >
                <img className="rounded-md h-[100px] w-screen object-cover" src='/assets/images/sang.png' alt='product' />
                <div className="card-body px-2 pt-2 pb-3">
                    <h3 className='font-semibold'>Spesifikasi</h3> 
                    <h5 className='text-xs text-neutralGray my-1'>deskripsi</h5>
                    <h3 className='font-semibold text-primary'>
                    {
                        new Intl.NumberFormat('id-ID',
                        { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                        ).format(20000)
                    }
                    <span className='font-thin text-xs text-black'>/gram</span>
                    </h3>
                </div>
            </div>

            <div className='card border-2 hover:origin-top-left  rounded-md p-2 shadow-main shadow-slate-700 h-48 cursor-pointer'  >
                <img className="rounded-md h-[100px] w-screen object-cover" src='/assets/images/sang.png' alt='product' />
                <div className="card-body px-2 pt-2 pb-3">
                    <h3 className='font-semibold'>Spesifikasi</h3> 
                    <h5 className='text-xs text-neutralGray my-1'>deskripsi</h5>
                    <h3 className='font-semibold text-primary'>
                    {
                        new Intl.NumberFormat('id-ID',
                        { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                        ).format(20000)
                    }
                    <span className='font-thin text-xs text-black'>/gram</span>
                    </h3>
                </div>
            </div>
            <div className='card border-2 hover:origin-top-left  rounded-md p-2 shadow-main shadow-slate-700 h-48 cursor-pointer' >
                <img className="rounded-md h-[100px] w-screen object-cover" src='/assets/images/sang.png' alt='product' />
                <div className="card-body px-2 pt-2 pb-3">
                    <h3 className='font-semibold'>Spesifikasi</h3> 
                    <h5 className='text-xs text-neutralGray my-1'>deskripsi</h5>
                    <h3 className='font-semibold text-primary'>
                    {
                        new Intl.NumberFormat('id-ID',
                        { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                        ).format(20000)
                    }
                    <span className='font-thin text-xs text-black'>/gram</span>
                    </h3>
                </div>
            </div>
            
        </Fragment>
    )
}
export default Cardbuyer