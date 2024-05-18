import React from 'react'
import { FaTrash } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { removeItem } from '../redux/slice/cartslice';
import {toast} from 'react-toastify'


export const Cartproduct = ({props}) => {
    const desc = props.description.slice(0,90)+'...';
    const  dispatch = useDispatch();
    function removehandler(){
        toast.warning("Item Removed Succesfully!!");
        dispatch(removeItem({ id: props.id }));
    }
  return (
    <div className='flex gap-x-5 my-5'>
        <div>
            <img src={props.image} alt="image" style={{ maxHeight: '160px', width: 'auto' }} />
        </div>
        <div >
            <h1 className='font-bold py-2'>{props.title}</h1>
            <div style={{ marginBottom: '0.5rem' }}>
                <p className='text-sm py-2'>{desc}</p>
            </div>
            <div className='flex justify-between '>
                <span className='text-green-500 font-bold'>${props.price}</span>
                <div className='mr-10 bg-red-300 h-8 w-8 rounded-full'>
                 <div className='relative left-2 top-[0.35rem]'>
                    <button onClick={removehandler}><FaTrash style={{ color: '#8B0000' }} /></button>
                 </div>
                
                </div>
            </div>
        </div>
    </div>
  )
}
