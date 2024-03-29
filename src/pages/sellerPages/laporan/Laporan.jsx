import React, { useState, Fragment } from "react";

// icons
import { BsBox } from 'react-icons/bs';
import { FiHeart, FiDollarSign } from 'react-icons/fi';
import { MdArrowForwardIos } from 'react-icons/md';

import AllKolam from "../../../components/sellers/category/AllKolam";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
function Laporan () {
  const dispatch = useDispatch();
  const navigate = useNavigate()
    // return(
    //     <Fragment>
    //         <div className="max-w-4xl py-4 mx-4 md:mx-auto" data-aos="fade-right"
    //                     data-aos-durations="1000"
    //                     data-aos-delay="500"> 
    //             <div className="flex"> 
    //                 <h2 className="font-semibold text-2xl">Laporan Kolam </h2> 
    //             </div>     
    //             <hr></hr>
    //             <div className="grid grid-cols-2 gap-4 ">
    //                 <div className="border-2 bg-white rounded-xl h-32 ">
    //                     <div className=" mx-4">
    //                         <h1>janji</h1>
    //                     </div>
    //                 </div>
    //                 <div className="border-2 bg-white rounded-xl h-32 ">
    //                     <div className=" mx-4">
    //                         <h1>janji</h1>
    //                     </div>
    //                 </div>
    //                 <div className="border-2 bg-white rounded-xl h-32 ">
    //                     <div className=" mx-4">
    //                         <h1>janji</h1>
    //                     </div>
    //                 </div>
    //                 <div className="border-2 bg-white rounded-xl h-32 ">
    //                     <div className=" mx-4">
    //                         <h1>janji</h1>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="pt-4">
    //                 <div className="border-2 bg-white rounded-xl h-40">
    //                     <div className="flex items-center justify-center ">
    //                         <h1>List Order</h1>
    //                     </div>
                        
    //                     <div className="w-full h-full px-4  py-2 ">                                
    //                         <table class="border-collapse w-full mx-auto border border-slate-400 ...">
    //                         <thead>
    //                             <tr>
    //                             <th class="border border-slate-300 ...">State</th>
    //                             <th class="border border-slate-300 ...">City</th>
    //                             </tr>
    //                         </thead>
    //                         <tbody>
    //                             <tr>
    //                             <td class="border border-slate-300 ...">Indiana</td>
    //                             <td class="border border-slate-300 ...">Indianapolis</td>
    //                             </tr>
    //                             <tr>
    //                             <td class="border border-slate-300 ...">Ohio</td>
    //                             <td class="border border-slate-300 ...">Columbus</td>
    //                             </tr>
    //                             <tr>
    //                             <td class="border border-slate-300 ...">Michigan</td>
    //                             <td class="border border-slate-300 ...">Detroit</td>
    //                             </tr>
    //                         </tbody>
    //                         </table>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div> 
    //     </Fragment>
    const [category, setCategory] = useState('all')
    return(
        <Fragment>
          <div className="relative"
          data-aos="fade-right"
          data-aos-durations="1000"
          data-aos-delay="500">
            <div className='px-4 mx-auto absolute md:relative md:top-0'>
              <h2 className='hidden md:block text-xl font-bold md:my-7'>Laporan Ikan</h2>
              {/* <UserCard image={user.data.imageUser} name={user.data.username} city={user.data.city} /> */}
              <div className='flex flex-col md:flex-row mt-5 gap-4'>
                <div>
                  {/* Category Web */}
                  <div className='hidden md:flex bg-white flex-col rounded-lg shadow-main p-7 justify-evenly w-60'>
                    <span className='text-base font-bold mb-5'>Kategori</span>
                    <div className='flex flex-col gap-5'>
                    <div className={category === 'all' ? 'flex flex-row items-center justify-between text-[#0172AF] cursor-pointer' : 'flex flex-row items-center justify-between hover:text-[#0172AF] cursor-pointer'} onClick={() => setCategory('all')}>
                        <div className='flex flex-row items-center'>
                          <BsBox size={20} />
                          <span className='ml-2 text-base font-semibold'>Semua Kolam</span>
                        </div>
                        <MdArrowForwardIos />
                      </div>
                        <div className={category === 'sold' ? 'flex flex-row items-center justify-between text-[#0172AF] cursor-pointer' : 'flex flex-row items-center justify-between hover:text-[#0172AF] cursor-pointer'} onClick={() => setCategory('sold')}>
                          <div className='flex flex-row items-center'>
                              <FiDollarSign size={20} />
                            <button onClick={() => navigate('/home-sel/laporan/post-jenis-ikan')}
                            >
                              <span className='ml-2 text-base font-semibold'>Jenis Ikan</span>
                            </button>
                          </div>
                          <MdArrowForwardIos />
                        </div>
                      <div className={category === 'loved' ? 'flex flex-row items-center justify-between text-[#0172AF] cursor-pointer' : 'flex flex-row items-center justify-between hover:text-[#0172AF] cursor-pointer'} onClick={() => setCategory('loved')}>
                        <div className='flex flex-row items-center'>
                          <FiHeart size={20} />
                          <button
                            onClick={() => 
                                navigate('/home-sel/laporan/post-budidaya')
                              }
                          >
                            <span className='ml-2 text-base font-semibold'>Budidaya</span>
                          </button>
                        </div>
                        <MdArrowForwardIos />
                      </div>
                    </div>
                  </div>
                  {/* Category Web End */}

                  {/* Category Mobile */}
                  <div className="flex gap-3 overflow-x-auto no-scrollbar text-clip md:hidden">
                  <button onClick={() => setCategory('all')} className={category === 'all' ? 'snap-center rounded-lg flex flex-shrink-0 bg-primary text-white text-md px-4 py-2 transition ease-in-out duration-200' : 'snap-center rounded-lg flex flex-shrink-0 bg-[#E2D4F0] text-black text-md px-4 py-2 hover:bg-primary hover:text-white transition ease-in-out duration-200'}>
                      <BsBox className='my-auto mr-1' />
                      <span>Semua Produk</span>
                    </button>
                    <button onClick={() =>
                      navigate('/home-sel/laporan/post-budidaya')
                    
                       } 
                       className={category === 'loved' ? 'snap-center rounded-lg flex flex-shrink-0 bg-primary text-white text-md px-4 py-2 transition ease-in-out duration-200' : 'snap-center rounded-lg flex flex-shrink-0 bg-[#E2D4F0] text-black text-md px-4 py-2 hover:bg-primary hover:text-white transition ease-in-out duration-200'}>
                      <FiHeart className='my-auto mr-1' />
                      <span>Budidaya</span>
                    </button>
                    {/* <button onClick={() => setCategory('sold')} className={category === 'sold' ? 'snap-center rounded-lg flex flex-shrink-0 bg-primary text-white text-md px-4 py-2 transition ease-in-out duration-200' : 'snap-center rounded-lg flex flex-shrink-0 bg-[#E2D4F0] text-black text-md px-4 py-2 hover:bg-primary hover:text-white transition ease-in-out duration-200'}>
                      <FiDollarSign className='my-auto mr-1' />
                      <span>Terjual</span>
                    </button> */}
                  </div>
                  {/* Category Mobile End */}

                </div>
                <div className='w-full'>
                  {category === 'all' && <AllKolam />}
                  {/* {category === 'loved' && <LovedCategory />}
                  {category === 'sold' && <SoldCategory />} */}
                </div>
              </div>
            </div>
          </div>
        </Fragment>
    )
}

export default Laporan