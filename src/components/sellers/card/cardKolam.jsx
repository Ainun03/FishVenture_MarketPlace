import { Fragment } from "react";
// redux
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {BiTime} from 'react-icons/bi'


function CardKolam(props){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const item = props.seller;

    return(
        <Fragment>
            <div className='card inline-block  border-2 hover:origin-top-left bg-[#E8F0F2]   p-2 shadow-main shadow-slate-700 w-full h-64 cursor-pointer  overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out'>
                <img className="rounded-md h-[100px] w-screen object-cover" src={item ? item.image : 'https://static.vecteezy.com/system/resources/previews/003/475/012/original/confused-man-with-question-mark-concept-flat-illustration-free-vector.jpg'} alt='pool' />
                <div className="card-body px-1 h-28 flex flex-col justify-center">
                    <h3 className='font-semibold text-xl '>{item.name ? item.name : "kosong"}</h3> 
                    <h5 className='text-xs text-neutralGray my-1'>
                        {item.long? item.long : 0}m x <span>{item.wide ? item.wide : 0}m
                        
                    </span></h5>
                </div>
            </div>
            
            
        </Fragment>
    )
}
export default CardKolam