import React, { Fragment,useEffect,useState } from "react";

// Component Buyers
import NavbarBuyer from "../../components/buyers/Navbar";
import Cardbuyer from "../../components/buyers/card";
import Footer from "../../components/buyers/Footer";

// AOS

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
  const [category, setCategory] = useState('all');
  const handleCategoryClick = (ctg) => {
      setCategory(ctg);
    };

  // Fill State When User Change Category
  useEffect(() => {
    switch (category) {
      case 'all':
        // productFilter(category);
        break;
      case 'Pakaian':
        // productFilter(category);
        break;
      case 'Elektronik':
        // productFilter(category);
        break;
      case 'Kesehatan':
        // productFilter(category);
        break;
      case 'Kendaraan':
        // productFilter(category);
        break;
      case 'Hobi':
        // productFilter(category);
        break;
      default:
        break;
    }
  }, [category]);

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
                  <div className="py-4 mx-8 overflow-x-auto no-scrollbar text-clip" 
                     data-aos="fade-up-left"
                     data-aos-durations="1000"
                     data-aos-delay="1000">
                    <div className="gap-4 flex "  
                        >
                        <Cardbuyer />
                        <Cardbuyer />
                        <Cardbuyer />
                        <Cardbuyer />
                        <Cardbuyer />
                        <Cardbuyer />
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
                      <div className=" pt-4">
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
                      <div className="py-4 overflow-x-auto no-scrollbar text-clip" 
                        data-aos="fade-up-left"
                        data-aos-durations="1000"
                        data-aos-delay="1000">
                        <div className="gap-4 flex "  
                            >
                            <Cardbuyer />
                            <Cardbuyer />
                            <Cardbuyer />
                            <Cardbuyer />
                            <Cardbuyer />
                            <Cardbuyer />
                        </div>
                      </div>

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