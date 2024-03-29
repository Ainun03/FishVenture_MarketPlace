import React, { Fragment,useState } from "react";

// react-dom
import { useNavigate,useMatch, useResolvedPath,Link } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";

// icons
// import { FiSearch, FiShoppingCart, FiUser,FiLogIn } from "react-icons/fi";
import {FaUserAlt} from 'react-icons/fa'
import { IoClose, IoMenu } from "react-icons/io5";

// slice
// import { logout } from "../../slices/authSlice";

// comp
import ProfileMenu from "./profil/ProfilMenu";


export default function NavbarBuyer(){
    const [show, setShow] = useState(true);
    const [profileMenu, setProfileMenu] = useState(true);
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    const profileMenuClick = () => {
      setProfileMenu(!profileMenu);
    };

    const { isAuthenticated,profil } = useSelector(
      (store) => store.user
    );
        
    const handleClick = () => {
        setShow(current => !current);
    };
    return(
        <Fragment>
        <div className='bg-transparant border-b-2  bg-white shadow md:static flex w-full z-[30] md:block md:top-0 md:z-0'>
          <div className="container mx-4 py-4 md:mx-auto  max-w-7xl md:px-4 flex justify-between md:py-4">
            <div className="items-center flex-none "> 
                <h1 className="font-semibold  text-primary h-full justify-center inline-flex items-center text-3xl">Fish<span className="text-black underline decoration-primary">Venture</span>.</h1>
            </div>
            <div className=" justify-center inline-flex items-center "
            >
                <nav className=" hidden md:block ">
                  <ul className="flex gap-2 text-sm font-medium" >
                    <li className=" py-2 ">
                      <CustomLink to="/">Home</CustomLink>
                    </li>
                    <li className="py-2">
                      <CustomLink to="/jadwal-panen">Jadwal</CustomLink>
                    </li>
                    <li className=" py-2 ">
                      <CustomLink to='/pesanan'>Pesanan</CustomLink>
                    </li>

                    {/* <li className=" py-2 ">
                      <CustomLink to="/kontak">Home</CustomLink>
                    </li> */}
                    
                  </ul>
                </nav>
            </div>
            {/* <div className=''>
								<button className='text-2xl mr-3' onClick={profileMenuClick}>
									<FiUser />
								</button>
								<ProfileMenu hidden={profileMenu ? 'translate-x-full scale-0' : '-translate-x-[90%]'} />
							</div> */}
            <div className="pt-2 hidden md:block">
              {/* <button onClick={() => navigate('/login')} className='flex bg-primary text-white py-2 px-4 rounded-xl hover:bg-[#79B51F] ease-in-out duration-200'>
                <span className='my-auto mr-2 hover:animate-bounce'> <FiLogIn /> </span> Masuk
              </button> */}
              {
                isAuthenticated ? (
                  <div className="">
                    <div className="flex justify-end gap-4 ">
                    
                        <div className=" ">
                            <h1 className="text-right text-[#053742]"><p className="font-thin text-[#808080] text-sm">Selamat Datang</p> {profil ? profil.name : "Anonim"} </h1>     
                        </div>
                        <div className=" flex justify-center mx-auto md:mx-0 items-center">
                            <button onClick={profileMenuClick}
                              className='bg-gray-400 text-dark border border-gray-400  rounded-3xl hover:bg-primary ease-in-out duration-200' >       
                              {
                                profil.photo ==="" ? 
                                <div className="py-4 px-4">
                                    <span ><FaUserAlt /></span>
                                </div>
                                 :
                                <img className="rounded-full h-[40px] w-[40px] object-cover" src={profil.photo} alt="profile" />
                              }                     
                                
                            {/* <span className='my-auto mr-2 hover:animate-bounce'> <FiLogIn /> </span> Keluar */}
                          </button>
                        </div>
                      
                    </div>

                    <ProfileMenu hidden={profileMenu ? 'translate-x-full scale-0' : '-translate-x-[35%]'} />
                  </div>
                ) :(
                <div className="gap-2 flex flex-row">
                  <Link to="/auth-page/register">
                    <h1 className="tracking-tight hover:underline hover:decoration-primary text-xl font-semibold">Register </h1>
                  </Link>{"||"}
                  <Link to="/auth-page/login-penjual">
                    <h1 className="tracking-tight hover:underline hover:decoration-primary text-xl font-semibold">Login </h1>
                  </Link>

                </div>
                )
              }
            </div>
            <div onClick={handleClick} className="cursor-pointer mt-2 text-black-300 hover:bg-gray-100 hover:text-[#78716c] md:hidden flex border rounded-md p-1 text-xl">
              <IoMenu size={25} />
            </div>
            {/* <div className="">
            </div> */}
            
        </div>
        {/* <div className=" hidden md:block">
          <div className="flex justify-center gap-4 pb-4">  
            <div className="form-search h-12 w-full md:w-80 bg-white md:bg-[#EEEEEE] rounded-lg ml-4 flex text-[#8A8A8A] text-sm px-6 py-2 md:py-0">
                <input className='w-full text-black bg-transparent focus:outline-none' placeholder='Cari di sini ...' alt='search' />
                <span className='my-auto text-lg bg-white cursor-pointer border p-2 rounded'> <FiSearch /> </span>
            </div>
            <Link to="/checkout">
              <div className=" pt-2">
                  <FiShoppingCart size={30}/>
              </div>
            </Link>
          </div>
        </div> */}
{/* mobilee  */}
        <div role='button' onClick={handleClick} className={`overlay fixed z-40 h-full w-full bg-slate-600 opacity-40 inset-x-0 cursor-default transition ease-in-out duration-700 md:translate-x-full ${show ? "hidden" : ""}`}></div>
          <div className={`fixed bg-white h-full right-0 w-1/2 z-50 md:translate-x-full p-5 ${show ? "translate-x-full transition ease-in-out duration-1000" : "transition ease-in-out duration-1000"}`}>
            <div className='title flex justify-between mb-3 items-center'>
              <h1 className='font-bold text-primary text-base' >Fish<span className="text-black underline decoration-primary">Venture</span>.</h1>
              <button onClick={handleClick} className='hover:text-primary text-3xl'>
                <IoClose />
              </button>
            </div>
            <div className="flex items-baseline">
                <ul className="flex flex-col text-sm font-medium" >
                  <li className=" py-1">
                        <CustomLink to="/">Home</CustomLink>
                      </li>
                      <li className="py-1">
                        <CustomLink to="/jadwal-panen">Jadwal</CustomLink>
                      </li>
                      <li className=" py-1 ">
                        <CustomLink to='/pesanan'>Pesanan</CustomLink>
                      </li>
                </ul>
              </div>
              <div className="pt-2 ">
              {/* <button onClick={() => navigate('/login')} className='flex bg-primary text-white py-2 px-4 rounded-xl hover:bg-[#79B51F] ease-in-out duration-200'>
                <span className='my-auto mr-2 hover:animate-bounce'> <FiLogIn /> </span> Masuk
              </button> */}
              {
                isAuthenticated ? (
                  <div className="">
                    <div className="flex justify-end gap-4 ">
                        <div className="">
                            <h1 className="text-[#053742]"><p className="font-thin text-[#808080] text-sm">Selamat Datang</p> Joko Purnomo </h1>     
                        </div>
                        <div className=" flex justify-end items-center">
                            <button onClick={profileMenuClick}
                            // onClick={() => {  
                            //   dispatch(logout());
                            // }}
                          className='bg-gray-400 text-dark border border-gray-400 py-2 px-2 rounded-3xl hover:bg-primary ease-in-out duration-200'>
                            
                            <FaUserAlt />
                            {/* <span className='my-auto mr-2 hover:animate-bounce'> <FiLogIn /> </span> Keluar */}
                          </button>
                        </div>
                      
                    </div>

                    <ProfileMenu hidden={profileMenu ? 'translate-x-full scale-0' : 'bg-gray-200 -translate-x-[1%]'} />
                  </div>
                ) :(
                <div className="gap-2 flex flex-row">
                  <Link to="/auth-page/register">
                    <h1 className="tracking-tight hover:underline hover:decoration-primary text-xl font-semibold">Register </h1>
                  </Link>{"||"}
                  <Link to="/auth-page/login-penjual">
                    <h1 className="tracking-tight hover:underline hover:decoration-primary text-xl font-semibold">Login </h1>
                  </Link>

                </div>
                )
              }
            </div>
          </div>       
{/* ----- */}
        </div>
  </Fragment>
)
}
function CustomLink({ to, children, ...props }) {
const resolvedPath = useResolvedPath(to)
const isActive = useMatch({ path: resolvedPath.pathname, end: true })

return (
<li className={isActive ? 'bg-primary border rounded-md p-2 text-white' : 'text-black-300 hover:border rounded-md p-2 hover:bg-primary hover:text-white'}>
  <Link to={to} {...props}>
    {children}
  </Link>
</li>
)
}