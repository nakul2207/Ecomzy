import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import products from '../data';
import { Cartproduct } from './cartproduct';
import { NavLink } from 'react-router-dom';

export const Cartitem = () => {
    const [amount, setAmount] = useState(0);
    const cartItems = useSelector((state) => state.cart.value);
    const len = cartItems.length;

    useEffect(() => {
        let calculatedAmount = 0;
        for (let i = 0; i < len; i++) {
            if (typeof products[cartItems[i]-1].price === 'number' && !isNaN(products[cartItems[i]].price)) {
                calculatedAmount += parseFloat(products[cartItems[i]-1].price);
            }
        }
        calculatedAmount = parseFloat(calculatedAmount.toFixed(2));
        setAmount(calculatedAmount);
    }, [cartItems, len]);

    
    
    return (
        <div >
            {cartItems.length === 0 ? (
                <div className='flex flex-col justify-center text-center h-screen '>
                    <h1 className='font-bold'>Your cart is empty!</h1>
                    <NavLink to='/'>
                        <button className='bg-green-700 text-center text-white font-bold mt-2 py-2 rounded px-10'>SHOP NOW</button>
                    </NavLink>
                </div>
            ) : (
                <div className='flex justify-center w-5/6 gap-x-10 my-5'>
                    <div className=' ml-60 w-1/2 '>
                        {cartItems.map((id) => (
                            <div key={id}>
                                <Cartproduct props={products[id-1]} />
                                <div className='bg-black h-[.1rem] '></div>
                            </div>
                        ))}
                    </div>
                    <div className=' w-2/6 border-1/2 py-6 h-screen'>
                        <h1 className='text-green-700 text-lg'>YOUR CART</h1>
                        <h2 className='text-green-700 font-bold text-5xl'>SUMMARY</h2>
                        <p className='my-2'>Total items: {len}</p>
                        <p className=' mt-44'>Total amount: <b>${amount}</b></p>
                        <button className='bg-green-700 text-center text-white font-bold w-full mt-2 py-2 rounded'>CHECKOUT NOW</button>
                    </div>
                </div>
            )}
        </div>
    );
};

