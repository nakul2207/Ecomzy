import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Temp = ({ setloggedIn, setuser, user }) => {
  // Debug information to check the user data

  function logout() {
    toast.success('User Logged out!!')
    setloggedIn(false);
    setuser({});
  }

  return (
    <>
      <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16 mb-24 px-4 md:px-8'>
        <div className='flex flex-col mt-10 mr-20 md:mt-20'>
          <h1 className='font-bold text-slate-600 text-3xl md:text-4xl mb-6 md:mb-10'>My Account</h1>
          <h2 className='font-bold text-lg'>Dashboard</h2>
          <ul>
            <Link to="/orders"><li className='my-2 font-mono'>ORDERS</li></Link>
            <Link to="/addresses"><li className='my-2 font-mono'>ADDRESSES</li></Link>
            <Link to="/account-details"><li className='my-2 font-mono'>ACCOUNT DETAILS</li></Link>
            <Link to="/wishlist"><li className='my-2 font-mono'>WISHLIST</li></Link>
            <li onClick={logout} className='my-2 font-mono cursor-pointer'>LOGOUT</li>
          </ul>
        </div>
        <div className='flex flex-col justify-center font-sans text-slate-600 mt-10 md:mt-16 '>
          <h1>Hello!! <b>{user.firstname} {user.lastname}</b> (not <b>{user.firstname} {user.lastname}</b> <span className='cursor-pointer underline' onClick={logout} >Logout</span>?)</h1>
          <span>From your account dashboard you can view your recent orders, manage your shipping, and</span>
          <span>billing addresses, and edit your password and account details.</span>
        </div>
      </div>
    </>
  )
}
