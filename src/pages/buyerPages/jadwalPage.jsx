import React,{Fragment,useEffect} from "react";
import Cardbuyer from "../../components/buyers/card";
import NavbarBuyer from "../../components/buyers/Navbar";
import Footer from "../../components/buyers/Footer";

import { listPondBuyer } from "../../slices/buyer/buyerSlice";

import { useDispatch, useSelector } from 'react-redux';
function JadwalPage(){

    const dispatch = useDispatch();
    const {isAuntheticated} =useSelector(
        (store) =>store.user
      )
    const { pondBuyer } = useSelector(
        (store) => store.buyer
      );
      useEffect(() => {
        if (isAuntheticated !== true){
          dispatch(listPondBuyer())
        }
      }, [dispatch,isAuntheticated]);

      const handleSearch =(e)=>{
          const search =e.target.value
          if(search){
              fetch()
          }
      }
    return(
        <Fragment>
            <div className="relative">
                <NavbarBuyer/>
                <div className="container-fluid max-w-6xl mx-auto h-full p-4">
                    <div className="text-center font-bold text-2xl">
                        {/* <h1>Jadwal Panen</h1> */}
                    </div>
                    <div className="flex justify-center items-center">
                        <div class="pt-2 relative mx-auto inline-flex  py-3 text-gray-600">
                            <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                            type="search" name="search" placeholder="Search"/>
                            <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
                            <svg class="text-gray-600 h-4 w-4 fill-current" 
                                xmlns="http://www.w3.org/2000/svg"
                                // xmlns:xlink="http://www.w3.org/1999/xlink"
                                version="1.1" id="Capa_1" x="0px" y="0px"
                                // style={"enable-background:new 0 0 56.966 56.966;"} 
                                viewBox="0 0 56.966 56.966" 
                                // xml:space="preserve"
                                width="512px" height="512px">
                                <path
                                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 px-3 justify-items-center lg:grid-cols-3 md:grid-cols-2 gap-2">
                        {pondBuyer.length > 0 && pondBuyer.map(item => 
                            <Cardbuyer key={item.id} buyer={item} />
                            )}
                    </div>
                </div>
            </div>
                <div className="bottom-0 left-0 right-0">
                    <Footer/>
                </div>
        </Fragment>
    )
}
export default JadwalPage