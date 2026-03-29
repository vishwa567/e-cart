import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthUserContext } from '../../contexts/AuthContext'

export default function Menu() {

    let { userData } = useContext(AuthUserContext);

    function validUser() {
        return (
            <Link to="/login" >Logout</Link>
        )
    }

    function inValidUser() {
        return (
            <>
                <Link to="/login" >Login</Link>
                <Link to="/register" >Register</Link>
            </>
        )
    }

    return (
        <div className='flex justify-center bg-gray-300 h-10 items-center'>
            <div className='flex gap-50 text-lg'>
                <Link to="/" >Home</Link>
                {
                    userData?.emailVerified ? validUser() : inValidUser()
                }
            </div>
        </div>
    )
}
