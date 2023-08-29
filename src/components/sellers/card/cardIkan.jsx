import { Fragment } from "react";
// redux
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {BiTime} from 'react-icons/bi'


function CardIkan(props){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const item = props.seller;

    return(
        <Fragment>
            <div className='card border-black border-2 hover:origin-top-left rounded-md bg-[#E8F0F2] shadow-main shadow-slate-700 cursor-pointer' 
            onClick={() => navigate('/home-sel/laporan/detail')}

             >
                {/* <img className="rounded-md h-[100px] w-screen object-cover" src={item ? item.image : 'https://static.vecteezy.com/system/resources/previews/003/475/012/original/confused-man-with-question-mark-concept-flat-illustration-free-vector.jpg'} alt='pool' /> */}
                <div className="card-body px-1 p-2 flex flex-col justify-center">
                    <h3 className='font-semibold text-xl '>{item.name ? item.name : "kosong"}</h3> 
                    
                </div>
            </div>
            
            
        </Fragment>
    )
}
export default CardIkan