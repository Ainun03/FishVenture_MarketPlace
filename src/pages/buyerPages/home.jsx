import React, { Fragment,useEffect,useState } from "react";

// Component Buyers
import NavbarBuyer from "../../components/buyers/Navbar";
import Cardbuyer from "../../components/buyers/card";
import Footer from "../../components/buyers/Footer";

import { useDispatch, useSelector } from 'react-redux';
import { listPondBuyer } from "../../slices/buyer/buyerSlice";

// icons
import { FiSearch } from "react-icons/fi";
// Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CenteredCarousel = () => {
    const params = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "150px",
      slidesToShow: 1,
      speed: 1500,
      autoplay: true,
      autoplaySpeed: 4000,
    };
  
    const paramsMobile = {
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: "linear"
    };
  
    return (
      <Fragment>
        <div className="py-6 mx-auto max-w-screen-2xl hidden md:block">
          <Slider {...params}>
            <div>
              <img className='mx-auto' src='/assets/images/img-banner.png' alt='banner' />
            </div>
            <div>
              <img className='mx-auto' src='/assets/images/img-banner.png' alt='banner' />
            </div>
            <div>
              <img className='mx-auto' src='/assets/images/img-banner.png' alt='banner' />
            </div>
          </Slider>
        </div>
        <div className="md:hidden overflow-hidden z-10">
          <Slider {...paramsMobile}>
            <div>
              <img className='w-full' src='/assets/images/mobile-banner.png' alt='banner' />
            </div>
            <div>
              <img className='w-full' src='/assets/images/mobile-banner.png' alt='banner' />
            </div>
          </Slider>
        </div>
      </Fragment>
    );
  };

function HomePage() {
  document.title = "Home Page";
  const [category, setCategory] = useState('all');
 
  const {isAuntheticated} =useSelector(
    (store) =>store.user
  )
  const { pondBuyer } = useSelector(
    (store) => store.buyer
  );
  const dispatch = useDispatch();


  useEffect(() => {
    if (isAuntheticated !== true){
      dispatch(listPondBuyer())
    }
  }, [dispatch,isAuntheticated]);

  

  //  else return <Navigate to="/" replace />

  // Fill State When User Change Category

  const slider = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "150px",
    slidesToShow: 1,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 4000,
    };
    return(
        <Fragment>
            <div className="relative overflow-hidden">
              <NavbarBuyer/>
              <div  data-aos="zoom-in"
                  data-aos-durations="1000"
                  >
                <CenteredCarousel />
              </div>
                <div className=" mx-auto max-w-screen-2xl">
                  {/* <div className="overflow-hidden z-10">
                    <Slider {...slider}>
                      <div className="mx-auto">
                        <Cardbuyer/>
                      </div>
                    </Slider>
                        <Cardbuyer/>
                  </div> */}
                  <div className=" mx-8 text-clip" 
                     data-aos="fade-up-left"
                     data-aos-durations="1000"
                     data-aos-delay="1000">
                       <div className="flex justify-between py-3">
                         <div className="font-semibold text-lg text-gray-500">
                           <h1>Panen Terdekat</h1>
                         </div>
                         <div className="font-semibold text-lg text-blue-500">
                           <h1>Lihat Semua</h1>
                         </div>
                       </div>
                    <div className="flex overflow-x-scroll hide-scroll-bar pb-4 "  
                        >
                          {/* <div className="grid grid-cols-1 xs-grid-cols-2 px-3 lg:grid-cols-3 md:grid-cols-2 gap-2"> */}
                          <div className=" flex flex-nowrap gap-4">
                              {pondBuyer.length > 0 && pondBuyer.map(item => 
                                <Cardbuyer key={item.id} buyer={item} />
                              )}
                          </div>
                                      
                    </div>
                  </div>
                  <div className="" data-aos="zoom-in"
                      data-aos-durations="1000"
                      >
                    {/* <CenteredCarousel /> */}
                  </div>
                  {/* Our Product ...  */}

                  <div className="mx-8">
                    {/* <h1 className="text-xl text-center font-bold ">Category</h1> */}
                    <div className=" gap-10  ">
                      <div className=" ">
                        {/* <div className="list-category flex overflow-x-auto no-scrollbar text-clip">
                          <button onClick={() => handleCategoryClick('all')} className={
                            category === 'all' ? 'snap-center rounded-lg flex mr-4 bg-primary text-white text-md px-4 py-2 hover:bg-primary hover:text-white transition ease-in-out duration-200' : 'snap-center rounded-lg flex mr-4 bg-secondary text-[#3C3C3C] text-md px-4 py-2 hover:bg-primary hover:text-white transition ease-in-out duration-200'
                          }>
                            <FiSearch className='my-auto mr-1' />
                            <span>Semua</span>
                          </button>
                          <button onClick={() => handleCategoryClick('Pakaian')} className='snap-center rounded-lg flex mr-4 bg-secondary text-text-md px-4 py-2 hover:bg-primary hover:text-white transition ease-in-out duration-200'>
                            <FiSearch className='my-auto mr-1' />
                            <span>Pakaian</span>
                          </button>
                          <button onClick={() => handleCategoryClick('Elektronik')} className='snap-center rounded-lg flex mr-4 bg-secondary text-[#3C3C3C] text-md px-4 py-2 hover:bg-primary hover:text-white transition ease-in-out duration-200'>
                            <FiSearch className='my-auto mr-1' />
                            <span>Elektronik</span>
                          </button>
                        </div> */}
                          {/* <div className="grid container grid-cols-2 md:grid-cols-6 gap-4 py-3"
                          data-aos="fade-right"
                          data-aos-durations="1000"
                          data-aos-delay="500"
                          >
                              <Cardbuyer/>
                          </div> */}
                        <div className="py-4 " 
                          data-aos="fade-up-left"
                          data-aos-durations="1000"
                          data-aos-delay="1000">
                            <div className="flex justify-between py-3">
                              <div className="font-semibold text-lg text-gray-500">
                                <h1>Lainnya</h1>
                              </div>
                              <div className="font-semibold text-lg text-blue-500">
                                <h1>Lihat Semua</h1>
                              </div>
                            </div>
                            <div className="flex overflow-x-scroll hide-scroll-bar pb-4 "  
                                >
                                  {/* <div className="grid grid-cols-1 xs-grid-cols-2 px-3 lg:grid-cols-3 md:grid-cols-2 gap-2"> */}
                                  <div className=" flex flex-nowrap gap-4">
                                      {pondBuyer.length > 0 && pondBuyer.map(item => 
                                        <Cardbuyer key={item.id} buyer={item} />
                                      )}
                                  </div>
                                              
                            </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="grid mx-36 pt-4 max-w-screen-xl grid-cols-1 h-full justify-items-center items-center md:grid-cols-2  ">
                        <div className="flex-col ">
                          <div className="text-center md:text-right h-full">
                              <h1 className="text-3xl tracking-wider  font-bold">Download The App</h1>
                              <p className="tracking-tight text-sm py-8 font-normal ">Nec massa viverra eget feugiat pellentesque. Feugiat adipiscing massa vitae auctor mi massa. Sodales libero viverra cursus sed duis luctus nulla. In malesuada vulputate pharetra ipsum orci.</p>
                              <div className="flex gap-4  justify-center md:justify-end">
                              <img className="rounded-2xl" src='/assets/images/ios-store.png' alt='ios-store-app'/>
                              <img className="rounded-2xl" src='/assets/images/andro-store.png' alt='ios-store-app'/>
                              </div>
                          </div>
                        </div>

                        <div className="flex-col pt-4 md:pt-0"
                        data-aos="fade-gri right"
                        data-aos-durations="1000"
                        data-aos-delay="500">
                            <div className="h-full">
                            <img className=" w-64 rounded-2xl" src='/assets/images/iPhone.png' alt='download-app'/>
                            </div>         
                        </div>
                    </div>
                </div>
            <Footer/>
            </div>
        </Fragment>
    )
}
export default HomePage