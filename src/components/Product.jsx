import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addItem, removeItem } from '../redux/slice/cartslice';
import { toast } from 'react-toastify';

export const Product = ({ props }) => {
    const description = props.description.slice(0, 30) + '...';
    const title = props.title.slice(0, 30) + '...';
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.value);

    function addcarthandler() {
        //redux
        toast.success("Item Added Succesfully!!");
        dispatch(addItem(props.id))
    }
    function removecarthandler() {
        // Dispatch the removeItem action with the item ID
        toast.warning("Item Removed Succesfully!!");
        dispatch(removeItem({ id: props.id }));
    }
    

    return (
        <div className='w-56 h-80 border shadow-lg hover:shadow-slate-400 mx-2 my-2 px-3 py-3 flex flex-col justify-between rounded-xl'>
            <div className='text-center'>
                <h1 className='text-sm font-bold'>{title}</h1>
                <p className='text-xs'>{description}</p>
            </div>
            <div className='flex justify-center'>
                <img src={props.image} alt="image" style={{ maxHeight: '150px', width: 'auto' }} />
            </div>
            <div className='flex justify-between items-center'>
                <span className=' text-green-400'>${props.price}</span>
                {
                    cartItems.includes(props.id) ? ( <button className='border-2 border-black rounded-3xl text-xs px-1 py-1' onClick={removecarthandler}>
                    REMOVE ITEM
                </button>) : (<button className='border-2 border-black rounded-3xl text-xs px-1 py-1' onClick={addcarthandler}>
                    ADD TO CART
                </button>)
                }
               
            </div>
        </div>
    );
};

