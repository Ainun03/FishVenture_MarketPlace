import { Fragment } from "react";
// redux
import { useNavigate, useParams } from 'react-router-dom';

import {BiTime} from 'react-icons/bi'


function CardSeller(){
    const navigate = useNavigate();
    return(
        <Fragment>
            <div className='card border-black bg-[#E8F0F2] border-2 hover:origin-top-left rounded-md p-2 shadow-main shadow-slate-700 h-56 cursor-pointer' 
            onClick={() => navigate('/home-sel/inventory/detail')}
            
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
                <div className="card-body px-1 pt-2 pb-3">
                    <h3 className='font-semibold'>Mas Darmo</h3> 
                    <h5 className='text-xs text-neutralGray my-1'>Alamat</h5>
                    <h3 className='font-semibold text-primary'>
                    {
                        new Intl.NumberFormat('id-ID',
                        { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                        ).format(20000)
                    }
                    <span className='font-thin text-xs text-black'>/gram</span>
                    </h3>
                    <div className="text-primary flex justify-between pt-2">
                        <div><BiTime size={20}/></div>
                        <div className="text-xs">
                            <p>123 Hari</p>
                        </div>

                    </div>
                </div>
            </div>
            
            
        </Fragment>
    )
}
export default CardSeller