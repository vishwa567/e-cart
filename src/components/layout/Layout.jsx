import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Header from './Header'

export default function Layout() {
    return (
        <div className='font-poppins'>
            <Toaster />
            <Header />
            <Outlet />
        </div>
    )
}
