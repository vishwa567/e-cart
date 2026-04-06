import { useContext } from "react";
import CartCards from "./CartCards";
import { CartData } from "../../contexts/CartContext";

export default function Cart() {
    let { cartItems, totalPrice, calcTax, calcDiscount, delivery, handleCoupon } = useContext(CartData);

    return (
        <div className="p-10 w-full h-[calc(100dvh-132px)]">
            <h1 className="font-bold text-4xl mb-3">Shopping Cart</h1>
            <div className="flex w-full h-10/11 justify-center gap-10 ">
                <div className="w-3/4 p-4  h-full overflow-auto overflow-x-hidden ">
                    {cartItems.length ?
                        <div className="flex flex-col gap-3 justify-self-center">
                            {
                                cartItems?.map(item => (
                                    <CartCards item={item} key={item.id} />
                                ))
                            }
                        </div> :
                        <h1 className="font-semibold text-lg text-gray-400 lowercase">Cart is Empty</h1>
                    }
                </div>
                <div className="w-170 h-80 flex flex-col items-center gap-3">
                    <div className="w-9/10 border border-gray-400 rounded-3xl flex flex-col gap-5 p-4 pb-8">
                        <h1 className="text-2xl font-bold capitalize">Coupon Code</h1>
                        <hr className="text-gray-300" />
                        <input
                            type="text"
                            className="h-13 rounded-2xl bg-gray-200 px-5 text-black uppercase font-light focus:outline-0 tracking-wider text-lg"
                            placeholder="Enter Coupon Code"
                            onChange={handleCoupon}
                        />
                        <button className="border border-black text-black font-semibold text-center w-full rounded  py-3 self-center cursor-pointer " >Apply</button>
                    </div>
                    <div className="w-9/10 border border-gray-400 rounded-3xl flex flex-col gap-2 p-4 pb-8">
                        <h1 className="text-2xl font-bold capitalize">Order Summary</h1>
                        <hr className="text-gray-300" />
                        <div className="flex justify-between">
                            <h3 className="text-gray-400">Saved </h3>
                            <h3>${calcDiscount()}</h3>
                        </div>
                        <div className="flex justify-between">
                            <h3 className="text-gray-400">Delivery </h3>
                            <h3>${delivery()}</h3>
                        </div>
                        <div className="flex justify-between">
                            <h3 className="text-gray-400">Tax </h3>
                            <h3>${calcTax()}</h3>
                        </div>
                        <div className="flex justify-between">
                            <h3 className="text-black text-2xl font-semibold ">Total </h3>
                            <h3 className="text-2xl font-semibold">${totalPrice()}</h3>
                        </div>
                        <button className="bg-black text-white text-center w-full rounded  py-3 self-center cursor-pointer" >Check Out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
