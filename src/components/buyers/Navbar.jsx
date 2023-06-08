import React, { Fragment,useState } from "react";

// react-dom
import { useNavigate,useMatch, useResolvedPath,Link } from 'react-router-dom';

// icons
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { IoClose, IoMenu } from "react-icons/io5";

export default function NavbarBuyer(){
    const [show, setShow] = useState(true);
    const navigate = useNavigate();
        
    const handleClick = () => {
        setShow(current => !current);
    };
    return(
        <Fragment>
        <div className='bg-tarnsparent  bg-white shadow md:static flex w-full z-[30] md:block md:top-0 md:z-0'>
          <div className="container mx-4 py-4 md:mx-auto  max-w-7xl md:px-4 flex justify-between md:py-4">
            <div className="items-center flex-none "> 
                <h1 className="font-semibold  text-primary h-full justify-center inline-flex items-center text-3xl">E-<span className="text-black underline decoration-primary">Fish</span>.</h1>
            </div>
            {/* <div className=" w-full justify-center inline-flex items-center "
            >
                <nav className=" hidden md:block ">
                  <ul className="flex gap-2 text-sm font-medium" >
                    <li className="py-2">
                      <CustomLink to="/">Home</CustomLink>
                    </li>
                    <li className=" py-2 ">
                      <CustomLink to='/banana'>Home</CustomLink>
                    </li>
                    <li className=" py-2 ">
                      <CustomLink to="/kelapa">Home</CustomLink>
                    </li>

                    <li className=" py-2 ">
                      <CustomLink to="/kontak">Home</CustomLink>
                    </li>
                    
                  </ul>
                </nav>
            </div> */}
            <div className="pt-2 hidden md:block">
              {/* <button onClick={() => navigate('/login')} className='flex bg-primary text-white py-2 px-4 rounded-xl hover:bg-[#79B51F] ease-in-out duration-200'>
                <span className='my-auto mr-2 hover:animate-bounce'> <FiLogIn /> </span> Masuk
              </button> */}
              <div className="gap-2 flex flex-row">
                <Link to="/auth-page/register">
                  <h1 className="tracking-tight hover:underline hover:decoration-primary text-xl font-semibold">Register </h1>
                </Link>{"||"}
                <Link to="/auth-page/login">
                  <h1 className="tracking-tight hover:underline hover:decoration-primary text-xl font-semibold">Login </h1>
                </Link>

              </div>
            </div>
            <div onClick={handleClick} className="cursor-pointer mt-2 text-black-300 hover:bg-gray-100 hover:text-[#78716c] md:hidden flex border rounded-md p-1 text-xl">
              <IoMenu size={25} />
            </div>
            {/* <div className="">
            </div> */}
            
        </div>
        <div className=" hidden md:block">
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
        </div>
{/* mobilee  */}
        <div role='button' onClick={handleClick} className={`overlay fixed z-40 h-full w-full bg-slate-600 opacity-40 inset-x-0 cursor-default transition ease-in-out duration-700 md:translate-x-full ${show ? "hidden" : ""}`}></div>
          <div className={`fixed bg-white h-full right-0 w-1/2 z-50 md:translate-x-full p-5 ${show ? "translate-x-full transition ease-in-out duration-1000" : "transition ease-in-out duration-1000"}`}>
            <div className='title flex justify-between mb-3 items-center'>
              <h1 className='font-bold text-primary text-base' >E - <span className="text-black underline decoration-primary">Fish</span>.</h1>
              <button onClick={handleClick} className='hover:text-primary text-3xl'>
                <IoClose />
              </button>
            </div>
            <div className="flex items-baseline">
                <ul className="flex flex-col text-sm font-medium" >
                  <li className="py-1">
                    <CustomLink to="/">Home</CustomLink>
                  </li>
                  <li className=" py-1 ">
                    <CustomLink to="/banana">Banana</CustomLink>
                  </li>
                  <li className="py-1">
                  <CustomLink to="/kelapa">Coconut</CustomLink>
                  </li>
                  <li className=" py-1 ">
                  <CustomLink to="/kontak">Contact</CustomLink>
                  </li>
                  <li className=" py-1 ">
                  <CustomLink to="/list-jual">Jual</CustomLink>
                  </li>
                </ul>
              </div>
              <div className=''>
                <button className='text-2xl mr-3' >
                  <FiUser />
                </button>
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