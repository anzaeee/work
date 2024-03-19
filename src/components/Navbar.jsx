import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const productLabel = isMobileMenuOpen ? 'Product' : 'Product';

  return (
    <>
      <div className='flex justify-between items-center pb-8 h-24 w-full mx-auto bg-gray-900 text-white px-4'>
        <h1 className='w-full text-3xl font-bold text-yellow-400'>EASYPC</h1>
        <ul className='hidden md:flex flex-nowrap items-center'>
          <li className='p-4'>Builder</li>
          <li className='p-4 relative flex items-center'>
            <span className="flex items-center" onClick={toggleMobileMenu}>{productLabel}</span>
            {isMobileMenuOpen && (
              <ul className="absolute top-full left-0 bg-gray-900 text-white w-48 py-2 rounded-lg shadow-lg z-10">
                {/* Dropdown items */}
                <li className="p-2">CPUs</li>
                <li className="p-2">CPU Coolers</li>
                <li className="p-2">Motherboards</li>
                <li className="p-2">Memory</li>
                <li className="p-2">Storage</li>
                <li className="p-2">Video Cards</li>
                <li className="p-2">Power Supplies</li>
                <li className="p-2">Cases</li>
              </ul>
            )}
          </li>
          <li className='p-4'>Guides</li>
          <li className='p-4 flex flex-nowrap'>Completed Builds</li>
          <li className='p-4'>Trends</li>
          <li className='p-4'>Forums</li>
        </ul>
        <div className='md:hidden'>
          {isMobileMenuOpen ? (
            <AiOutlineClose className='text-2xl' onClick={toggleMobileMenu} />
          ) : (
            <AiOutlineMenu className='text-2xl' onClick={toggleMobileMenu} />
          )}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className='md:hidden bg-gray-900 text-white'>
          <ul className='flex flex-col'>
            <li className='p-4'>Builder</li>
            <li className='p-4 relative flex items-center'>
              <span className="flex items-center" onClick={toggleMobileMenu}>{productLabel}</span>
              {isMobileMenuOpen && (
                <ul className="absolute top-full left-0 bg-gray-900 text-white w-48 py-2 rounded-lg shadow-lg z-10">
                  {/* Dropdown items */}
                  <li className="p-2">CPUs</li>
                  <li className="p-2">CPU Coolers</li>
                  <li className="p-2">Motherboards</li>
                  <li className="p-2">Memory</li>
                  <li className="p-2">Storage</li>
                  <li className="p-2">Video Cards</li>
                  <li className="p-2">Power Supplies</li>
                  <li className="p-2">Cases</li>
                </ul>
              )}
            </li>
            <li className='p-4'>Guides</li>
            <li className='p-4'>Completed Builds</li>
            <li className='p-4'>Trends</li>
            <li className='p-4'>Forums</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
