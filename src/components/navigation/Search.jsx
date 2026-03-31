import { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { AllItems } from "../../contexts/ItemContext";

export default function Search({ searchState }) {

    let { search, setSearch } = searchState;
    let { categoryState } = useContext(AllItems);
    let { setCategory } = categoryState;

    function handleSearch(event) {
        setSearch(event.target.value);
        setCategory("");
    }

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
                    className='w-90 h-12 rounded-full px-4 bg-gray-200 pl-9 font-roboto tracking-wider  focus:outline-0 capitalize'
                />
                <IoSearch className='absolute top-1/3 left-2' />
            </form>
        </div>
    )
}
