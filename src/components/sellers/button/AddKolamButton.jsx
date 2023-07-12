import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';

const AddKolamButton = () => {
  const navigate = useNavigate();
  return (
    <div className='rounded-md border-2 border-dashed text-[#D0D0D0] border-[#D0D0D0] flex flex-col justify-center items-center cursor-pointer min-h-[13.5rem] md:min-w-[13.5rem] hover:text-primary hover:border-primary' onClick={() => navigate('/home-sel/laporan/post-kolam')}>
      <AiOutlinePlus size={25} />
      <span className='text-md mt-2'>Tambah Kolam</span>
    </div>
  );
};

export default AddKolamButton;