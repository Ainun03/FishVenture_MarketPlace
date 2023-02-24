import React, { Fragment } from "react";

// Component Buyers
import NavbarBuyer from "../../components/buyers/Navbar";
import Cardbuyer from "../../components/buyers/card";
import Footer from "../../components/buyers/Footer";

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
                <CenteredCarousel />
                <div className="mx-8  mx-auto max-w-screen-2xl">
                  {/* <div className="overflow-hidden z-10">
                    <Slider {...slider}>
                      <div className="mx-auto">
                        <Cardbuyer/>
                      </div>
                    </Slider>
                        <Cardbuyer/>
                  </div> */}
                  <div className="py-4 overflow-x-auto no-scrollbar snap-none text-clip">
                    <div className="snap-center relative flex items-center justify-center w-screen ">
                        <Cardbuyer />
                    </div>
                  </div>
                </div>
            <Footer/>
            </div>
        </Fragment>
    )
}
export default HomePage