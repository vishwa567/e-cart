import { useContext, useEffect, useState } from "react";
import Hero from "./Hero";
import axios from 'axios';
import Cards from "./Cards";
import { useOutletContext } from "react-router-dom";
import { AllItems } from "../../../contexts/ItemContext";


export default function Home() {
    let { search } = useOutletContext();
    let { items, visibleItemsState, limitState, categoryState } = useContext(AllItems);
    let { visibleItems, setVisibleItems } = visibleItemsState;
    let { limit, setLimit } = limitState;
    let { category, setCategory } = categoryState;


    //! Handling the data
    function handleFiltering() {
        let filtered = items?.filter((prod) => {
            return (
                prod.title.toLowerCase().includes(search.toLowerCase()) &&
                prod.category.toLowerCase().includes(category.toLowerCase())
            );
        });

        setVisibleItems(filtered?.slice(0, limit));
    }

    useEffect(() => { handleFiltering(); }, [search, limit, items, category]);

    return (
        <>
            {items.length != 0 ?
                <div className="flex flex-col w-full mb-8">
                    <Hero />
                    <div className="flex gap-5 flex-wrap justify-center items-center my-12">
                        {
                            visibleItems?.map((prod) => (
                                <Cards
                                    id={prod.id}
                                    key={prod.id}
                                    title={prod.title}
                                    price={prod.price}
                                    category={prod.category}
                                    rating={prod.rating}
                                    thumbnail={prod.thumbnail}
                                />
                            ))
                        }
                    </div>
                    {category ? <div></div> : <button
                        className="bg-black text-white text-center w-50  py-2 self-center cursor-pointer"
                        onClick={() => setLimit(limit + 12)}
                    >Load More</button>}
                </div> :
                <div className='animate-spin w-5 h-10 absolute top-1/2 left-1/2 -translate-1/2 border-4 border-gray-500 rounded-full border-t-gray-700'></div>
            }
        </>
    )
}
