import React, { useState, Fragment,useEffect } from "react";

// icons
import { BsBox } from 'react-icons/bs';
import { FiHeart, FiDollarSign } from 'react-icons/fi';
import { MdArrowForwardIos } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import AllCategory from "../../../components/sellers/category/AllCategory";
import AllBudidaya from "../../../components/sellers/category/AllBudidaya";
import AllIkan from "../../../components/sellers/category/AllIkan";
import AllKolam from "../../../components/sellers/category/AllKolam";
import CardSeller from "../../../components/sellers/card/card";

// slice
import { getKolam, getJenisIkan, getBudidaya } from "../../../slices/seller/sellerSlice";


function Invent() {
  const [category, setCategory] = useState(['kolam','Jenis-Ikan','Budidaya']);
  const dispatch = useDispatch();

  const { pond } = useSelector(
    (store) => store.seller
);

  useEffect(() => {
    dispatch(getJenisIkan());
  }, [dispatch]);

  useEffect(() => {
    switch (category) {
      case 'kolam':
        setCategory(category)
        break;
      case 'Jenis-Ikan':
        setCategory(category);
        break;
      case 'Budidaya':
        setCategory(category);
        break;
      default:
        break;
    }
  }, [category]);

  return (
    <Fragment>
      <div className="relative h-screen"
        data-aos="fade-right"
        data-aos-durations="1000"
        data-aos-delay="500">
        {/* <div className='px-4 mx-auto absolute md:relative md:top-0'>
          <h2 className='hidden md:block text-xl font-bold md:my-7'>Daftar Jual Saya</h2>
          <div className='flex flex-col md:flex-row mt-5 gap-4'>
            <div>

              <div className='hidden md:flex bg-white flex-col rounded-lg shadow-main p-7 justify-evenly w-60'>
                <span className='text-base font-bold mb-5'>Kategori</span>
                <div className='flex flex-col gap-5'>
                  <div className={category === 'all' ? 'flex flex-row items-center justify-between text-[#0172AF] cursor-pointer' : 'flex flex-row items-center justify-between hover:text-[#0172AF] cursor-pointer'} onClick={() => setCategory('all')}>
                    <div className='flex flex-row items-center'>
                      <BsBox size={20} />
                      <span className='ml-2 text-base font-semibold'>Semua Produk</span>
                    </div>
                    <MdArrowForwardIos />
                  </div>
                  <div className={category === 'loved' ? 'flex flex-row items-center justify-between text-[#0172AF] cursor-pointer' : 'flex flex-row items-center justify-between hover:text-[#0172AF] cursor-pointer'} onClick={() => setCategory('loved')}>
                    <div className='flex flex-row items-center'>
                      <FiHeart size={20} />
                      <span className='ml-2 text-base font-semibold'>Diminati</span>
                    </div>
                    <MdArrowForwardIos />
                  </div>
                  <div className={category === 'sold' ? 'flex flex-row items-center justify-between text-[#0172AF] cursor-pointer' : 'flex flex-row items-center justify-between hover:text-[#0172AF] cursor-pointer'} onClick={() => setCategory('sold')}>
                    <div className='flex flex-row items-center'>
                      <FiDollarSign size={20} />
                      <span className='ml-2 text-base font-semibold'>Terjual</span>
                    </div>
                    <MdArrowForwardIos />
                  </div>
                </div>
              </div>


              <div className="flex gap-3 overflow-x-auto no-scrollbar text-clip md:hidden">
                <button onClick={() => setCategory('all')} className={category === 'all' ? 'snap-center rounded-lg flex flex-shrink-0 bg-primary text-white text-md px-4 py-2 transition ease-in-out duration-200' : 'snap-center rounded-lg flex flex-shrink-0 bg-[#E2D4F0] text-black text-md px-4 py-2 hover:bg-primary hover:text-white transition ease-in-out duration-200'}>
                  <BsBox className='my-auto mr-1' />
                  <span>Semua Produk</span>
                </button>
                <button onClick={() => setCategory('loved')} className={category === 'loved' ? 'snap-center rounded-lg flex flex-shrink-0 bg-primary text-white text-md px-4 py-2 transition ease-in-out duration-200' : 'snap-center rounded-lg flex flex-shrink-0 bg-[#E2D4F0] text-black text-md px-4 py-2 hover:bg-primary hover:text-white transition ease-in-out duration-200'}>
                  <FiHeart className='my-auto mr-1' />
                  <span>Diminati</span>
                </button>
                <button onClick={() => setCategory('sold')} className={category === 'sold' ? 'snap-center rounded-lg flex flex-shrink-0 bg-primary text-white text-md px-4 py-2 transition ease-in-out duration-200' : 'snap-center rounded-lg flex flex-shrink-0 bg-[#E2D4F0] text-black text-md px-4 py-2 hover:bg-primary hover:text-white transition ease-in-out duration-200'}>
                  <FiDollarSign className='my-auto mr-1' />
                  <span>Terjual</span>
                </button>
              </div>

            </div>
            <div className='w-full'>
                  {category === 'all' && <AllCategory />}
                </div>
          </div>
        </div> */}
        {/* Newww ======================== */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 p-4 gap-4">
          <button 
            onClick=
                {() => dispatch(getKolam({id:pond.id})) && setCategory('kolam')
              }
            className={category === "kolam" ? "bg-blue-200 cursor-pointer dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-300 dark:border-gray-600 text-white font-medium group" : "nonActive bg-blue-500 hover:bg-blue-200 cursor-pointer dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 hover:border-blue-300 border-blue-600 dark:border-gray-600 text-white font-medium group"}  >
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </div>
            <div className="text-right">
              <p className="text-2xl">Kolam</p>
            </div>
          </button>
          <button onClick=
          {() => dispatch(getJenisIkan()) && setCategory('Jenis-Ikan')}
           className={category === "Jenis-Ikan" ? "bg-blue-200 cursor-pointer dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-300 dark:border-gray-600 text-white font-medium group" : "nonActive-state bg-blue-500 hover:bg-blue-200 cursor-pointer  dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 hover:border-blue-300 border-blue-600 dark:border-gray-600 text-white font-medium group"}>
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
            </div>
            <div className="text-right">
              <p className="text-2xl">Jenis Ikan</p>
              {/* <p>Orders</p> */}
            </div>
          </button>
          <button onClick=
          {() => dispatch(getBudidaya({id:pond.id})) && setCategory('Budidaya')}
           className={category === "Budidaya" ? "bg-blue-200 cursor-pointer dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-300 dark:border-gray-600 text-white font-medium group" : "nonActive-state bg-blue-500 hover:bg-blue-200 cursor-pointer  dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 hover:border-blue-300 border-blue-600 dark:border-gray-600 text-white font-medium group"}>
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div className="text-right">
              <p className="text-2xl">Budidaya</p>
              {/* <p>Orders</p> */}
            </div>
          </button>
        </div>
        {/* <div className="grid px-4 grid gap-3 grid-cols-3">
          <CardSeller/>
          <CardSeller/>
          <CardSeller/>
        </div> */}
        <div className='w-full'>
          {category === 'kolam' && <AllKolam />}
          {category === 'Jenis-Ikan' && <AllIkan />}
          {category === 'Budidaya' && <AllBudidaya />}
        </div>    
      </div>

    </Fragment>
  )
}
export default Invent