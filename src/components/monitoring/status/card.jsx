import React,{Fragment} from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { updatePond } from "../../../slices/admin/adminSlice";


function CardPerizinan (props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const item = props.admin;

    const statusSubmission = 
    [ "submission" ,
    "reviewed" ,
      "actived" ,
     "disabled"]
    return(
        <Fragment>
            {/* <div className='card border-2 bg-blue-100 border-black hover:origin-top-left  rounded-md p-2 shadow-main shadow-slate-700 h-64 cursor-pointer' 
             onClick={() => { 
                if ((item.status === "reviewed")) {
                    navigate(`detail-izin/${item.id}`)
                } else if ((item.status === "submission")){
                        dispatch(updatePond({
                            pondId:item.id,
                            status:statusSubmission[1]
                        }))
                        navigate(`detail-izin/${item.id}`)
                } else{
                    navigate(`detail-izin/${item.id}`)
                }
            }}
             >
                <div className="card-body px-1 pt-2 pb-3">
                <img className="rounded-md h-[100px] w-screen object-cover" src={item ? item.image : 'https://static.vecteezy.com/system/resources/previews/003/475/012/original/confused-man-with-question-mark-concept-flat-illustration-free-vector.jpg'} alt='pond' />
                    <h3 className='font-semibold'>{item.name}</h3> 
                    <h5 className='text-xs text-neutralGray my-1'>{item.detailAddress}</h5>

                </div>
            </div> */}
            {
            item.status === "submission" ? (

                <div class='w-full gap-2 '
                onClick={() => { 
                    if ((item.status === "reviewed")) {
                        navigate(`detail-izin/${item.id}`)
                    } else if ((item.status === "submission")){
                            dispatch(updatePond({
                                pondId:item.id,
                                status:statusSubmission[1]
                            }))
                            navigate(`detail-izin/${item.id}`)
                    } else{
                        navigate(`detail-izin/${item.id}`)
                    }
                }}
                >
                    <div></div>
                    <div  class="group relative rounded-lg overflow-hidden bg-white  hover:shadow-2xl ">
                        
                    <div class="h-40">
                        <img
                        src={item ? item.image : 'https://static.vecteezy.com/system/resources/previews/003/475/012/original/confused-man-with-question-mark-concept-flat-illustration-free-vector.jpg'} alt='pond'
                        class="h-40 w-full object-cover object-center "
                        />
                    </div>
                    <div class="h-1/2 p-4 ">
                        <h3 class="mb-2 text-base font-semibold text-blue-800">
                        {/* <a href='' class="hover:underline">
                            Sed ut perspiciatis unde omnis iste
                        </a> */}
                            {item ? item.name : 'nama'}
                        </h3>
                        <p class="text-sm font-bold text-orange-500">{item ? item.detailAddress : 'nama'}</p>
                        <div class='flex flex-row justify-between text-xs mt-2'> 
                        <p>{item ? item.type : 'type'}</p><p>{item ? item.status : 'status'}</p>
                        </div>
                    </div>
                    </div>

                    <div></div>
                    </div>
                ):(
                    <></>

                )
            }
        </Fragment>
    )
}
export default CardPerizinan