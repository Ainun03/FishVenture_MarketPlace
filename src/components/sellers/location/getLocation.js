import React,{useState,useEffect} from "react";

const useGeoLocation = () =>{
    // ========== location==============\\\\
    const [loc, setLocation]=useState(
       {
           loaded:false,
           coordinates:{lat:"", lng:""}
       }
   );
   const onSuccess = (loc) => {
       setLocation({
           loaded:true,
           coordinates:{
               lat:loc.coords.latitude,
               lng:loc.coords.longitude
           },
       });
       // return
   };
   const onErr = (error) => {
       setLocation({
           loaded:true,
           
           error: {
               code: error.code,
               message: error.message,
           }
           // alert(`ERROR(${error.code}): ${error.message}`);
           // alert("eror"),

       })
   }
   useEffect(()=>{
       if (!("geolocation" in navigator)){
           onErr({
               code:0,
               massage:"Geolocation not supported"
           })
       }
       navigator.geolocation.getCurrentPosition(onSuccess,onErr, {maximumAge:6000, timeout:1000, enableHighAccuracy:true});
   },[]);

   return loc
};
export default useGeoLocation;

