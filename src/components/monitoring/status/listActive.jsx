import React,{Fragment} from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { updatePond } from "../../../slices/admin/adminSlice";

const  ListActive = (props) => {
    const item = props.admin;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const statusSubmission = [ "submission" ,"reviewed" ,"actived" ,"disabled"]
    
    return(
        <Fragment>
            {/* <tbody className="text-gray-600 text-sm font-light"> */}
            {/* <tr class="border-b border-gray-200 hover:bg-gray-100"> */}
                    {/* <tr> */}
                        <td className="py-3 px-6 text-left">
                            <div className="flex items-center">
                                <div className="mr-2">
                                    {/* <img className="w-6 h-6" src="https://img.icons8.com/color/48/000000/javascript.png"/> */}
                                </div>
                                <span className="font-medium">{item ? item.name : 'nama'}</span>
                            </div>
                        </td>
                    {/* </tr> */}
                    {/* <tr</tr> */}
                    <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                            <div className="mr-2">
                                {/* <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/women/7.jpg"/> */}
                            </div>
                            <span>{item ? item.detailAddress : 'Alamat'}</span>
                        </div>
                    </td>
                    {/* <td className="py-3 px-6 text-center">
                        <div className="flex items-center justify-center">
                            <img className="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                            <img className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/women/2.jpg"/>
                            <img className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                        </div>
                    </td> */}
                    <td className="py-3 px-6 text-center">
                    {
                        item.status === "submission" ? (
                            <span className="bg-red-200 text-green-600 py-1 px-3 rounded-full text-xs">{item ? item.status :'No status'}</span>
                        ):(   
                            <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">{item ? item.status :'No status'}</span>
                        )
                    }
                    </td>
                    <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                            {/* <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div> */}
                            <div
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
                             className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </div>
                            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </div>
                        </div>
                    </td>
                {/* </tr> */}
            {/* </tbody>/ */}
            
                {/* <div className="card">
                        <div className="card-body py-1">
                            <div className="grid grid-cols-7">
                                <div className="">
                                    <li></li>
                                </div>
                                <div className="col-span-2">
                                    <h3 className='font-semibold'>{item ? item.name : 'Anonymous'}</h3> 
                                </div>
                                <div className="">
                                    <h5 className='text-xs text-neutralGray my-1'>{item.detailAddress}</h5>
                                </div>
                            
                                <div>
                                    <div className=" "><BsTrash/></div>
                                </div>
                                <div>
                                    <div className=" "><GoPencil/></div>
                                </div>
                                <div className="">
                                    {
                                    item.status === "actived" ? 
                                        <div className="flex gap-2">
                                            <h5 className='text-xs text-neutralGray my-1'>{item ? item.status :'No status'}</h5>
                                            <div className="bg-green-600 flex rounded-full  w-3 h-3 mt-[7px]"></div>
                                        </div>
                                    : 
                                    <div className="flex gap-2">
                                            <h5 className='text-xs text-neutralGray my-1'>{item ? item.status :'No status'}</h5>
                                            <div className="bg-red-600 flex rounded-full  w-3 h-3 mt-[7px]"></div>
                                        </div>
                                           
                                    
                                }

                                    
                                </div>
              
                        
                            </div>
                    </div>
                </div> */}
                
            
        </Fragment>
    )
}
export default ListActive