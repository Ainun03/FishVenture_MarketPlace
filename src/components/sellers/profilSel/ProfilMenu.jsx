import React from 'react';

import { useNavigate } from 'react-router-dom';

// Icons
import { FiLogIn, FiUser } from "react-icons/fi";

// Redux
import { useDispatch, useSelector } from 'react-redux';

import {logout} from '../../../slices/authSlice'
import { logoutSeller } from '../../../slices/seller/sellerSlice';

function ProfileMenuSel({ hidden }) {
  const dispatch = useDispatch();

  const { auth } = useSelector(state => state);

  const navigate = useNavigate();

  return (
    <div className={`${hidden} bg-white absolute z-[999] rounded-2xl shadow-main px-5 py-3  w-48 transition ease-in-out duration-300`}>
      <div onClick={() => {
        hidden ? navigate('/home-sel/profil') : navigate('/auth-page/login-penjual');
      }} className='flex items-center py-3 gap-2 cursor-pointer'>
        <FiUser size={20} />
        <span>Profil</span>
      </div>
      {hidden ? (
        <button
            onClick={() => {  
              navigate('/auth-page/login-penjual');
              dispatch(logout());
              dispatch(logoutSeller());
            }}
        >
            <div className='flex border-t border-gray-200 items-center py-3 gap-2 cursor-pointer'>
                <FiLogIn size={20} />
                    <span>Keluar</span>
            </div>
        </button>
      ) : (<div onClick={() => {
        navigate('/auth-page/login-penjual');
        dispatch(logout() && logoutSeller() );
      }} className='flex border-t border-gray-200 items-center py-3 gap-2 cursor-pointer'>
        <FiLogIn size={20} />
        <span>Masuk</span>
      </div>)}
    </div>
  );
}

export default ProfileMenuSel;