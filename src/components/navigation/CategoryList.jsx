import axios from 'axios';
import { useContext, useEffect, useState } from 'react'
import { AllItems } from '../../contexts/ItemContext';
import Logo from './Logo';

export default function CategoryList() {

    let [categoryList, setCategoryList] = useState([]);
    let { setCategory } = useContext(AllItems);

    async function fetchCategory() {

        let finalCategoryList = await axios.get(`https://dummyjson.com/products/category-list`);
        setCategoryList(finalCategoryList.data);

    }
    useEffect(() => { fetchCategory() }, []);

    function filterCategory(items) {
        setCategory(items)
    }


    return (
        <div className='absolute  h-100 w-135 z-50 bg-gray-400 top-15 -left-25  rounded-3xl '>
            {categoryList.length != 0 ?
                <ul className='flex flex-col flex-wrap h-full py-4 px-10'>
                    {
                        categoryList?.map(list => (
                            <li
                                onClick={() => filterCategory(list)}
                                className='capitalize list-disc text-gray-200 hover:text-black'
                                key={list}
                            >
                                {list.replace("-", " ")}
                            </li>
                        ))
                    }
                </ul>
                :
                <div className='animate-spin w-5 h-10 absolute top-1/2 left-1/2 -translate-1/2 border-4 border-gray-500 rounded-full border-t-gray-700'></div>

            }
        </div>
    )
}
