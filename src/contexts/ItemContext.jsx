import axios from "axios";
import { createContext, useEffect, useState } from "react"


export let AllItems = createContext();

export default function ItemContext({ children }) {


    let [items, setItems] = useState([]);
    let [visibleItems, setVisibleItems] = useState([]);
    let [category, setCategory] = useState("");
    let [limit, setLimit] = useState(16);


    //! Fetching the API
    async function fetchApi() {
        let finalItemsData = await axios.get(`https://dummyjson.com/products?limit=0&select=id,price,title,rating,category,thumbnail`);
        let { products } = finalItemsData.data;
        setItems(products);
        setVisibleItems(products.slice(0, limit));
    }
    useEffect(() => {
        // Try immediately to fetch the data 
        fetchApi();

        addEventListener("online", fetchApi);
    }, []);

    return (
        <AllItems.Provider value={{
            items,
            visibleItemsState: { visibleItems, setVisibleItems },
            limitState: { limit, setLimit },
            categoryState: { category, setCategory },
        }}>
            {children}
        </AllItems.Provider>
    )
}
