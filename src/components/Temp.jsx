import React from 'react'
import {Link} from 'react-router-dom'

export const Temp = ({user}) => {
  // Debug information to check the user data
  console.log("Profile component rendered with user:", user);

  return (
    <>
    <div className='flex space-x-64 mb-24'>
        <div className='flex flex-col ml-4 mt-20' >
            <h1 className='font-bold text-slate-600 text-4xl mb-10'>My Account</h1>
            <h2 className='font-bold text-lg'>Dashboard</h2>
            <ul>
                <Link><li className='my-2 font-mono'>ORDERS</li></Link>
                <Link><li className='my-2 font-mono'>ADDRESSES</li></Link>
                <Link><li className='my-2 font-mono'>MY WALLET</li></Link>
                <Link><li className='my-2 font-mono'>ACCOUNT DETAILS</li></Link>
                <Link><li className='my-2 font-mono'>WISHLIST</li></Link>
                <Link><li className='my-2 font-mono'>LOGOUT</li></Link>
            
            </ul>     
        </div>
        <div className='flex flex-col justify-center font-sans text-slate-600 mt-16'>
            <h1>Hello!! <b>{user.firstname} {user.lastname}</b> (not <b>{user.firstname} {user.lastname}</b> Logout?)  </h1>
            <span>From your account dashboard you can view your recent orders, manage your shipping, and</span> 
            <span>billing addresses, and edit your password and account details.</span>
        </div>
    </div>
    </>
  )
}
