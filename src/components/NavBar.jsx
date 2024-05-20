import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoPersonOutline, IoBagOutline, IoMenu } from "react-icons/io5";

export const NavBar = () => {
  const cartItems = useSelector((state) => state.cart.value);
  const len = cartItems.length;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-black bg-blend-hard-light'>
      {/* Layout for smaller screens */}
      <div className='lg:hidden flex flex-col'>
        {/* Logo at the top */}
        <div className='flex justify-center py-4'>
          <Link to='/'>
            <img src={logo} alt="logo" className='h-10' />
          </Link>
        </div>
        {/* Nav and icons */}
        <div className='flex justify-between items-center py-4 px-4'>
          {/* Hamburger Menu for small screens */}
          <button onClick={toggleMenu} className='text-white'>
            <IoMenu size="1.5em" />
          </button>
          {/* Profile and Cart Icons */}
          <div className='flex gap-x-5 items-center'>
            <Link to='/login'>
              <IoPersonOutline color="white" size="1.5em" />
            </Link>
            <Link to='/cart' className='relative'>
              <IoBagOutline color="white" size="1.5em" />
              {len !== 0 && (
                <div className='bg-yellow-400 h-4 w-4 text-center text-xs rounded-full absolute -top-2 -right-2'>{len}</div>
              )}
            </Link>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='bg-black'>
            <Link to='/' className='block text-white text-sm py-2 px-4 underline'>Home</Link>
            <Link to='/Aboutus' className='block text-white text-sm py-2 px-4'>About Us</Link>
            <Link to='/' className='block text-white text-sm py-2 px-4'>Catalog</Link>
            <Link to='/Contactus' className='block text-white text-sm py-2 px-4'>Contact Us</Link>
            <Link to='/FAQ' className='block text-white text-sm py-2 px-4'>FAQ</Link>
          </div>
        )}
      </div>

      {/* Layout for larger screens */}
      <div className='hidden lg:flex justify-between items-center py-4 px-32'>
        <div className='flex font-mono'>
          <Link to='/'>
            <img src={logo} alt="logo" style={{ height: '40px' }} />
          </Link>
          <Link to='/' className='mt-2 ml-10 mr-6 text-sm underline text-white'>Home</Link>
          <Link to='/Aboutus' className='mt-2 mr-6 text-sm text-white'>About Us</Link>
          <Link to='/' className='mt-2 mr-6 text-sm text-white'>Catalog</Link>
          <Link to='/Contactus' className='mt-2 mr-6 text-sm text-white'>Contact Us</Link>
          <Link to='/' className='mt-2 mr-6 text-sm text-white'>FAQ</Link>
        </div>
        <div className='flex gap-x-5'>
          <Link to='/login'>
            <IoPersonOutline color="white" size="1.5em" />
          </Link>
          <Link to='/cart' className='relative'>
            <IoBagOutline color="white" size="1.5em" />
            {len !== 0 && (
              <div className='bg-yellow-400 h-4 w-4 text-center text-xs rounded-full absolute -top-2 -right-2'>{len}</div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};
