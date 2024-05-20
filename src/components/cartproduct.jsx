import React from 'react';
import { FaTrash } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { removeItem } from '../redux/slice/cartslice';
import { toast } from 'react-toastify';

export const Cartproduct = ({ props }) => {
    const desc = props.description.slice(0, 90) + '...';
    const dispatch = useDispatch();

    function removehandler() {
        toast.warning("Item Removed Successfully!!");
        dispatch(removeItem({ id: props.id }));
    }

    return (
        <div className='flex flex-col md:flex-row gap-5 md:items-center my-5'>
            <div className='w-full md:w-1/4'>
                <img src={props.image} alt="image" className='max-h-40 md:max-h-full w-auto' />
            </div>
            <div className='w-full md:w-3/4'>
                <h1 className='font-bold py-2'>{props.title}</h1>
                <div style={{ marginBottom: '0.5rem' }}>
                    <p className='text-sm py-2'>{desc}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='text-green-500 font-bold'>${props.price}</span>
                    <div className='bg-red-300 h-8 w-8 rounded-full flex items-center justify-center'>
                        <button onClick={removehandler}>
                            <FaTrash style={{ color: '#8B0000' }} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cartproduct;
