import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-[#121614] text-white">
      <div className='flex justify-between items-center h-24 w-full mx-auto px-4'>
        <ul className='hidden md:flex flex-nowrap'>
          <li className='p-4'>About Us</li>
          <li className='p-4'>Contact</li>
          <li className='p-4'>Terms of Service</li>
          <li className='p-4'>Privacy Policy</li>
          <li className='p-4'>FAQs</li>
        </ul>
        <div className='md:hidden'>
          <AiOutlineMenu className='text-2xl' />
        </div>
        <h1 className='text-3xl font-bold text-[#FFC71F]'>EASYPC</h1>
      </div>
    </footer>
  );
};

export default Footer;
