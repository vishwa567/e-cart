import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Cards({ title, thumbnail, price, rating, category, id}) {
    return (
        <div className='flex flex-col items-start w-73 h-108  border-2 gap-1.5 border-gray-400 rounded-3xl p-5 justify-evenly'>
            <img className="bg-gray-200 rounded-2xl" src={thumbnail} alt="" />
            <div className="w-full">
                <h3 className="flex items-center gap-1 text-sm"><FaStar className="text-amber-600" />{rating}</h3>
                <div className="flex w-full justify-between font-semibold tracking-wide">
                    <h1 className="w-3/4 h-6 overflow-hidden">{title}</h1>
                    <h2 className="bg-amber-500 h-6 px-2 rounded-md">${price}</h2>
                </div>
                <h4 className="capitalize opacity-50">{category}</h4>
            </div>
            <Link to={"/productDetail/" + id} className="w-full">
                <button className="bg-black text-white text-center w-full py-2 rounded-md cursor-pointer">View Product</button>
            </Link>
        </div>
    )
}
