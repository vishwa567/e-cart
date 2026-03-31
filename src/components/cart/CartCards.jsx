import { useContext } from "react";
import Counter from "./Counter";
import { RiDeleteBinLine } from "react-icons/ri";
import { CartData } from "../../contexts/CartContext";


export default function CartCards({ item }) {
    let { removeItem } = useContext(CartData);
    return (
        <div className="flex border border-gray-400 rounded-4xl w-185 p-5 justify-start items-center gap-10">
            <img src={item?.thumbnail} className="w-25 bg-gray-300 rounded-3xl" />
            <div className="w-65">
                <h1 className="text-lg font-semibold  text-gray-600 my-1">{item?.title}</h1>
                <h3 className="text-xs font-semibold text-gray-500 my-1">Brand: {item?.brand}</h3>
                <h4 className='flex gap-2 text-md font-light my-1'>
                    <div>
                        <span className='text-yellow-400'>{"★".repeat(Math.round(item?.rating))}</span>
                        <span className='text-gray-300'>{"★".repeat(5 - Math.round(item?.rating))}</span>
                    </div>

                    {item?.rating}
                </h4>
            </div>
            <div>
                <Counter id={item?.id} quantity={item?.quantity} />
            </div>
            <h1 className="text-2xl font-semibold tracking-wide">
                ${item?.price}</h1>
            <div><RiDeleteBinLine className="text-2xl cursor-pointer" onClick={() => {removeItem(item?.id)}} />
            </div>
        </div>
    )
}
