import { useContext } from 'react'
import { CartData } from '../../contexts/CartContext'
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function Counter({ id, quantity }) {
    let { incrementQty, decrementQty } = useContext(CartData);
    return (
        <div className='flex gap-1'>
            <button onClick={() => decrementQty(id)} className='bg-gray-200 hover:bg-gray-300 px-1.5 py-1 cursor-pointer rounded-l-2xl'><FaMinus className=' font-extrabold text-lg' /></button>
            <h1 className='bg-gray-200 w-10 px-3 py-1 font-bold text-center'>{quantity}</h1>
            <button onClick={() => incrementQty(id)} className='bg-gray-200 hover:bg-gray-300 px-1.5 py-1 rounded-r-2xl cursor-pointer'><FaPlus className=' font-extrabold text-lg' /></button>
        </div>
    )
}
