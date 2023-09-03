import React, { Fragment,useState,useEffect } from "react";

import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const SideProfil=()=>{
    const location=useLocation()
    const [category, setCategory] = useState('Edit');

    useEffect(() => {
        switch (category) {
          case 'profil':
            setCategory(category)
            break;
          case 'Edit':
            setCategory(category);
            break;
          default:
            break;
        }
      }, [category]);
    return category

    // return(
    //     <Fragment>
            
    //         <div className="card p-2 bg-white">
    //             {/* <Link to="/buyer-profil"> */}
    //             <button onClick={() => setCategory('Edit')} className="w-full">
    //                 <div className={
    //                         "home text-sm flex gap-2 mt-4  font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-gray-600 hover:text-base rounded-md transition duration-150 ease-in-out " +
    //                         (location.pathname === "/buyer-profil" ||
    //                         location.pathname === "/buyer-profil/"
    //                         ? "active-state bg-primary text-gray-600 text-base "
    //                         : "nonActive-state")
    //                 }>
    //                     <h1>Edit Profile</h1>
    //                 </div>
    //             </button>

    //                 {/* </Link> */}

    //                 <button className="w-full">
    //                     <div className={
    //                             "home text-sm flex gap-2 mt-2  font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-gray-600 hover:text-base rounded-md transition duration-150 ease-in-out " +
    //                             (location.pathname === "/buyer-profil" ||
    //                             location.pathname === "/buyer-profil/"
    //                             ? "active-state bg-primary text-gray-600 text-base "
    //                             : "nonActive-state")
    //                     }>
    //                         <h1>Profil Anda</h1>
    //                     </div>
    //                 </button>

    //         </div>
    //     </Fragment>
    // )
}
export default SideProfil