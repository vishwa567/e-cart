import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div className='flex justify-center bg-gray-300 h-10 items-center'>
            <div className='flex gap-50 text-lg'>
                <Link to="/" >Home</Link>
                <Link to="/login" >Login</Link>
                <Link to="/register" >Register</Link>
            </div>
        </div>
    )
}
