import React from 'react'
import logo from '../assets/logo.png'
import cart from '../assets/apple-touch-icon.png'
import { NavLink,Link } from 'react-router-dom'
import { useSelector} from 'react-redux'
import { IoPersonOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";

export const NavBar = () => {
    const cartItems = useSelector((state) => state.cart.value);
    const len = cartItems.length;
  return (
    <div className='flex justify-between py-4 px-32 bg-black bg-blend-hard-light '>
        <div className='flex font-mono pt-1'>
            <Link to='/'>
                <img src={logo} alt="logo" style={{ height: '40px' }}/>
            </Link>
            <Link to='/'>
                <div className='mt-2 ml-10 mr-6 text-sm underline text-white'>Home</div>
            </Link>
            <Link to='/Aboutus'>
                <div className='mt-2 mr-6  text-sm text-white'>About Us</div>
            </Link>
            <Link to='/'>
                <div className='mt-2  mr-6 text-sm  text-white'>Catalog</div>
            </Link>
            <Link to='/Contactus'>
                <div className='mt-2  mr-6 text-sm  text-white'>Contact Us</div>
            </Link>
            <Link to='/'>
                <div className='mt-2  mr-6 text-sm  text-white'>FAQ</div>
            </Link>
        </div>
        <div className='flex gap-x-5 pt-1'>
            <Link to='/login'>
                <div className='pt-1' >
                    <IoPersonOutline color="white" size="1.5em" />
                </div>
            </Link>
            <div className='mt-1'>
                <Link to='/cart'>
                <IoBagOutline color="white" size="1.5em" />
                <>
                {
                    len!==0 && 
                    <div className=' bg-yellow-400 h-4 w-4 text-center text-xs  rounded-full relative bottom-7 left-3'>{len}</div>
                }
                </>
                </Link>
            </div>

        </div>
    </div>
  )
}
