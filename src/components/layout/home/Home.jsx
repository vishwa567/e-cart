import { useEffect, useState } from "react";
import Hero from "./Hero";
import axios from 'axios';
import Cards from "./Cards";
import { useOutletContext } from "react-router-dom";


export default function Home() {

    let [items, setItems] = useState([]);
    let [limit, setLimit] = useState(16);
    let { search } = useOutletContext();

    async function fetchApi() {
        let finalItemsData = await axios.get(`https://dummyjson.com/products?limit=${limit}&select=id,price,title,rating,category,thumbnail`);
        let { products } = finalItemsData.data;
        setItems(products);
    }
    useEffect(() => { fetchApi(); }, [limit]);

    function fetchSearchedData() {

    }

    return (
        <div className="flex flex-col w-full mb-8">
            <Hero />
            <div className="flex gap-5 flex-wrap justify-center items-center my-12">
                {
                    items?.map((prod) => (
                        <Cards
                            title={prod.title}
                            price={prod.price}
                            category={prod.category}
                            rating={prod.rating}
                            thumbnail={prod.thumbnail}
                        />
                    ))
                }
            </div>
            <button
                className="bg-black text-white text-center w-50  py-2 self-center cursor-pointer"
                onClick={() => setLimit(limit + 12)}
            >Load More</button>
        </div>
    )
}
