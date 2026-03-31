import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoClose } from "react-icons/io5";

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CartData } from "../../../contexts/CartContext";

export default function ProductDetail() {

    let [clickedItem, setClickedItem] = useState(null);
    let reqParam = useParams();
    let redirect = useNavigate();
    let { addToCart, orgCost } = useContext(CartData);


    async function fetchApi() {
        let finalProductData = await axios.get(`https://dummyjson.com/products/${reqParam.id}`);
        setClickedItem(finalProductData.data);
    }
    useEffect(() => { fetchApi(); addEventListener("online", fetchApi) }, []);


    if (!clickedItem) {
        return (
            <div className='animate-spin w-5 h-10 absolute top-1/2 left-1/2 -translate-1/2 border-4 border-gray-500 rounded-full border-t-gray-700'></div>
        );
    }

    return (
        <div className="w-full flex p-10 gap-15 items-center relative ">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className="w-full border border-gray-400 rounded-4xl"
            >
                {clickedItem?.images?.map(img => (
                    <SwiperSlide className="p-15">
                        <img className="w-full rounded-2xl bg-gray-300 " src={img} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="w-full flex flex-col items-start gap-10">
                <div>
                    <div>
                        <h3 className="text-xs font-semibold text-gray-500">Brand: {clickedItem?.brand}</h3>
                        <h1 className="text-3xl font-semibold tracking-wide text-gray-600">{clickedItem?.title}</h1>
                        <h4 className='flex gap-2 text-md font-light'>

                            <div>
                                <span className='text-yellow-400'>{"★".repeat(Math.round(clickedItem?.rating))}</span>
                                <span className='text-gray-300'>{"★".repeat(5 - Math.round(clickedItem?.rating))}</span>
                            </div>

                            {clickedItem?.rating}
                        </h4>
                    </div>

                    <div>
                        <h3 className="text-2xl text-gray-300">$<del>{orgCost(clickedItem)}</del></h3>
                        <h1 className="text-3xl font-semibold tracking-wide">
                            ${clickedItem?.price}
                            <span className="text-sm border mx-2 px-3 rounded-md border-green-400 bg-green-200">
                                -{clickedItem?.discountPercentage}%
                            </span>
                        </h1>
                        <p className="text-xs text-gray-400 mt-1">Only {clickedItem?.stock} item(s) left in stock</p>
                    </div>
                </div>

                <button onClick={() => addToCart(clickedItem)} className="bg-black text-white text-center w-75  py-2  cursor-pointer">Add To Cart</button>

                <div>
                    <h3 className="font-semibold">About the Product</h3>
                    <h3 className="w-4/5 text-justify">{clickedItem?.description}</h3>
                    <ul>
                        <li className="list-disc ml-8">Warranty: {clickedItem?.warrantyInformation}</li>
                        <li className="list-disc ml-8">Shipped: {clickedItem?.shippingInformation}</li>
                        <li className="list-disc ml-8">Stock Status: {clickedItem?.availabilityStatus}</li>
                    </ul>
                </div>
            </div>
            <button onClick={() => { redirect("/") }}>
                <IoClose className="absolute text-5xl right-10 top-10 text-gray-500 cursor-pointer hover:text-black" />
            </button>
        </div>

    )
}
