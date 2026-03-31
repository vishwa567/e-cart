import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search';
import { GoHomeFill } from "react-icons/go";
import { FaCartShopping, FaList } from "react-icons/fa6";
import { MdLogin, MdLogout } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { AuthUserContext } from '../../contexts/AuthContext';
import { AllItems } from '../../contexts/ItemContext';
import CategoryList from './CategoryList';


export default function Menu({ searchState }) {

    let { userData } = useContext(AuthUserContext);
    let [showCategory, setShowCategory] = useState(false);

    function validUser() {
        return (
            <>
                <Link className='flex gap-1 items-center' to="/login" ><MdLogout />Logout</Link>
            </>
        )
    }

    function inValidUser() {
        return (
            <>
                <Link className='flex gap-1 items-center' to="/login" ><MdLogin />
                    Login</Link>
                <Link className='flex gap-1 items-center' to="/register" ><IoMdPersonAdd />
                    Register</Link>
            </>
        )
    }

    return (
        <div className='flex justify-center bg-gray-300 h-18 items-center gap-60 text-lg'>
            <Search searchState={searchState} />
            <div className='flex gap-25 relative'>
                <Link className='flex gap-1 items-center' to="/" ><GoHomeFill />Home</Link>
                <div className='relative'
                    onClick={() => setShowCategory(!showCategory)}
                >
                    <Link
                        className='flex gap-1 items-center' to="/" >
                        <FaList />Category
                        {showCategory && (
                            <CategoryList />
                        )}
                    </Link>
                </div >
                <Link className='flex gap-1 items-center' to="/cart" ><FaCartShopping />Cart</Link>
                {
                    userData?.emailVerified ? validUser() : inValidUser()
                }
            </div>
        </div>
    )
}
