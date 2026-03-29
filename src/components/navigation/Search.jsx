import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";

export default function Search() {

    let [search, setSearch] = useState("");

    //! Update the state of the search
    function handleSearch(event) {
        let { value } = event.target;
        setSearch(value)
    }

    console.log("Searching for... ", search)

    return (
        <div className='w-1/3 flex justify-end'>
            <form className='relative'>
                <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder='Search'
                    value={search}
                    onChange={handleSearch}
                    className='w-90 h-12 rounded-full px-4 bg-gray-200 pl-9 font-roboto tracking-wider focus:outline-0 focus:bg-gray-300'
                />
                <IoSearch className='absolute top-1/3 left-2' />
            </form>
        </div>
    )
}
