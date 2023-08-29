import { Fragment } from "react";
// redux
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';

import {BiTime} from 'react-icons/bi'


function Cardbuyer(props){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {isAuntheticated} =useSelector(
        (store) =>store.user
      )
    const item = props.buyer;
    return(
        <Fragment>
            <div className='card inline-block  border-2 hover:origin-top-left bg-[#E8F0F2]   p-2 shadow-main shadow-slate-700 w-64 h-64 cursor-pointer  overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out' 
            // onClick={() => navigate('/product-list-seller')}
            
            onClick={() => {
            // Checking product seller with user logged\
            if ((isAuntheticated !== true)) {
                navigate(`/product-list-seller/${item.id}`);
            } else {
                navigate(`/auth-page/login-Pembeli`);
            }
            }}
             >
                <img className="rounded-md h-[100px] w-full object-cover" src={item ? item.image : 'https://static.vecteezy.com/system/resources/previews/003/475/012/original/confused-man-with-question-mark-concept-flat-illustration-free-vector.jpg'} alt='product' />
                <div className="card-body h-32  flex flex-col justify-center">
                    <div className="mt-4">
                        <h3 className='font-semibold capitalize text-xl'>{item ? item.name : "Anonim"}</h3> 
                        <h5 className='text-xs capitalize'>Alamat</h5>
                    </div>
                    {/* <h3 className='font-semibold text-primary'>
                    {
                        new Intl.NumberFormat('id-ID',
                        { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                        ).format(20000)
                    }
                    <span className='font-thin text-xs text-black'>/gram</span>
                    </h3> */}
                    <div className=" h-full py-3 items-end flex justify-between">
                        <div className="">
                            <h3 className="uppercase ">{item? item.detailAddress : "Alamat"}</h3>
                        </div>
                        <div className="flex text-primary">
                            <div className="mt-1">
                                <BiTime size={20}/>
                            </div>
                            <p className="capitalize">200 </p>
                        </div>

                    </div>
                </div>
            </div>
            
            
        </Fragment>
    )
}
export default Cardbuyer