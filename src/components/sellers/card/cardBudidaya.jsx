import { Fragment } from "react";
// redux
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {BiTime} from 'react-icons/bi'
import moment from "moment"

function CardBudidaya(props){
    const navigate = useNavigate();
    const item = props.seller;
    const fish=item.fishSpecies
    const pool = item.pool
    var startPanen = moment.tz(item.dateOfSeed, "Asia/Jakarta");
    var endPanen = moment.tz(item.estPanenDate,"Asia/Jakarta");
    return(
        <Fragment>
            <div className='card inline-block  border-2 hover:origin-top-left bg-[#E8F0F2]   p-2 shadow-main shadow-slate-700 w-64 h-64 cursor-pointer  overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out' 
            onClick={() =>  {
                navigate(`update-product/${item.id}`)
            }}

             >
                <img className="rounded-md h-[100px] w-screen object-cover" src={pool ? pool.image : 'https://static.vecteezy.com/system/resources/previews/003/475/012/original/confused-man-with-question-mark-concept-flat-illustration-free-vector.jpg'} alt='pool' />
                <div className="card-body px-1 h-28 flex flex-col justify-center">
                    <div className=" mt-4">
                        <h3 className='font-semibold text-xl '>{pool.name ? pool.name : "Nama"}</h3> 
                        <p className="text-xs capitalize">{fish.name ? fish.name : "Spesies"}</p>
                    </div>
                    {/* <h5 className='text-xs text-neutralGray my-1'>
                        {item.long? item.long : 0}m x <span>{item.wide ? item.wide : 0}m
                        
                    </span></h5> */}
                    <div className="text-primary h-full py-3 items-end flex justify-between">
                        <div className="">
                            <h3 className="uppercase ">{item.status ? item.status : "Status"}</h3>
                        </div>
                        <div className="flex">
                            <div className="mt-1">
                                <BiTime size={20}/>
                            </div>
                            {/* h:mm:ss a */}
                            {/* <p className="capitalize">{moment(item ? item.dateOfSeed : "Time")}  </p> */}
                            <p className="capitalize">{startPanen.from(endPanen,true)} </p>
                            {/* <p className="capitalize">{a.format()} </p> */}
                        </div>

                    </div>
                </div>
            </div>
            
            
        </Fragment>
    )
}
export default CardBudidaya