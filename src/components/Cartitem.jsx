import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/slice/cartslice';
import products from '../data';
import { Cartproduct } from './cartproduct';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Cartitem = ({ user }) => {
    const [amount, setAmount] = useState(0);
    const [productDetails, setProductDetails] = useState([]);
    const cartItems = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();

    useEffect(() => {
        let calculatedAmount = 0;
        const detailsArray = [];

        for (let i = 0; i < cartItems.length; i++) {
            const product = products[cartItems[i] - 1];
            if (product && typeof product.price === 'number' && !isNaN(product.price)) {
                calculatedAmount += parseFloat(product.price);
                detailsArray.push({
                    title: product.title,
                    description: product.description,
                    price: product.price
                });
            }
        }

        setAmount(parseFloat(calculatedAmount.toFixed(2)));
        setProductDetails(detailsArray);
    }, [cartItems]);

    const order = async (orderDetails, amount, userId) => {
        const baseUrl = import.meta.env.VITE_BASE_URL;

        try {
            const response = await fetch(
                `${baseUrl}/placeorder`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ product: orderDetails, totalamount: amount, user: userId }),
                }
            );

            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error("Error placing order:", error);
        }
    };

    const OrderHandler = async (e) => {
        e.preventDefault();
        if (!user || !user._id) {
            toast.warning("Please Login!!");
            return;
        }

        try {
            await order(productDetails, amount, user._id);
            toast.success("Order Placed!!");
            dispatch(clearCart());
        } catch (error) {
            toast.error("Failed to place order");
            console.error("Error placing order:", error);
        }
    };

    return (
        <div>
            {cartItems.length === 0 ? (
                <div className='flex flex-col justify-center text-center h-screen'>
                    <h1 className='font-bold'>Your cart is empty!</h1>
                    <NavLink to='/'>
                        <button className='bg-green-700 text-center text-white font-bold mt-2 py-2 rounded px-10'>SHOP NOW</button>
                    </NavLink>
                </div>
            ) : (
                <div className='flex flex-col md:flex-row justify-center items-center md:items-start w-full gap-4 my-5'>
                    <div className='w-full md:w-1/2'>
                        {cartItems.map((id) => (
                            <div key={id}>
                                <Cartproduct props={products[id - 1]} />
                                <div className='bg-black h-[.1rem]'></div>
                            </div>
                        ))}
                    </div>
                    <div className='w-full md:w-1/2 border py-6'>
                        <h1 className='text-green-700 text-lg'>YOUR CART</h1>
                        <h2 className='text-green-700 font-bold text-5xl'>SUMMARY</h2>
                        <p className='my-2'>Total items: {cartItems.length}</p>
                        <p className='mt-44'>Total amount: <b>${amount}</b></p>
                        <button className='bg-green-700 text-center text-white font-bold w-full mt-2 py-2 rounded' onClick={OrderHandler}>CHECKOUT NOW</button>
                    </div>
                </div>
            )}
        </div>
    );
};
