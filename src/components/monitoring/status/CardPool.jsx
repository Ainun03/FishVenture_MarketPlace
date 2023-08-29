import React,{Fragment} from "react";
import {BiTime} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';

import { updatePond } from "../../../slices/admin/adminSlice";
import Button from "../form/Button"

function CardPool () {
    return(
        <Fragment>
         
                <div class='w-full gap-2 '
               
                >
                    <div></div>
                    <div  class="group relative rounded-lg overflow-hidden bg-white  hover:shadow-2xl ">
                        
                    <div class="h-40">
                        <img
                        src='https://static.vecteezy.com/system/resources/previews/003/475/012/original/confused-man-with-question-mark-concept-flat-illustration-free-vector.jpg' alt='pond'
                        class="h-40 w-full object-cover object-center "
                        />
                    </div>
                    <div class="h-1/2 p-4 ">
                        <h3 class="mb-2 text-base font-semibold text-blue-800">

                            {/* {item ? item.name : 'nama'} */}
                            nama
                        </h3>
                        <p class="text-sm font-bold text-orange-500">ALamat</p>
                        {/* <p class="text-sm font-bold text-orange-500">{item ? item.detailAddress : 'nama'}</p> */}
                        <div class='flex flex-row justify-between text-xs mt-2'> 
                        <p>Type</p><p>Status</p>
                        
                        </div>
                    </div>
                    </div>

                    <div></div>
                    </div>
               
        </Fragment>
    )
}
export default CardPool