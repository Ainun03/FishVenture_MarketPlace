import { Fragment } from "react";
// redux
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';

import {BiTime} from 'react-icons/bi'
import moment from "moment"

function CardSellerList(props){
    const navigate = useNavigate();
    const item = props.buyer;

    var startPanen = moment.tz(item.dateOfSeed, "Asia/Jakarta");
    var endPanen = moment.tz(item.estPanenDate,"Asia/Jakarta");

    const fish=item.fishSpecies
    const pool = item.pool

    const {isAuntheticated} =useSelector(
        (store) =>store.user
      )
    return(
        <Fragment>
            <div className='card border-2 bg-white hover:origin-top-left p-2 shadow-main shadow-slate-700 h-64 cursor-pointer  overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out ' 
            // onClick={() => navigate('/product-detail')}
            onClick={() => {
                // Checking product seller with user logged\
                if ((isAuntheticated !== true)) {
                    navigate(`/product-detail/${item.id}`);
                } else {
                    navigate(`/auth-page/login-Pembeli`);
                }
                }}
            
            // onClick={() => {
            // // Checking product seller with user logged\
            // if ((item.userId == auth.login.id && auth.login.id !== undefined)) {
            //     navigate(`/seller-product/${item.productId}`);
            // } else {
            //     navigate(`/buyer-product/${item.productId}`);
            // }
            // }}
             >
                <img className="rounded-md h-[100px] w-screen object-cover" src={pool ? pool.image : 'https://static.vecteezy.com/system/resources/previews/003/475/012/original/confused-man-with-question-mark-concept-flat-illustration-free-vector.jpg'} alt='poolSeller' />
                <div className="card-body px-1 pt-2 pb-3">
                    <h3 className='font-semibold font-sans uppercase'>{fish.name ? fish.name : "kosong"}</h3> 
                    {/* <h5 className='text-xs text-neutralGray my-1'>Alamat</h5> */}
                    {/* <h3 className='font-semibold text-primary'>
                    {
                        new Intl.NumberFormat('id-ID',
                        { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                        ).format(20000)
                    }
                    <span className='font-thin text-xs text-black'>/gram</span>
                    </h3> */}
                    <div className="h-20  justify-center ">
                        <div className=" flex flex-col">
                            <div className="capitalize text-gray-400 text-xs">
                                <p>{pool.name? pool.name : ""}</p>
                            </div>
                            
                            <h5 className='text-xs text-neutralGray my-1'>
                                {pool.long? pool.long : 0}m x <span>{pool.wide ? pool.wide : 0}m</span>
                            </h5>
                        </div>

                        <div className="text-primary  h-full items-center  flex justify-between ">
                            <div><BiTime size={20}/></div>
                            <div className="text-xs">
                                <p>{startPanen.from(endPanen,true)} </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
            
        </Fragment>
    )
}
export default CardSellerList