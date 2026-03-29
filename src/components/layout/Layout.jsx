import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Header from './Header'
import { useState } from 'react';

export default function Layout() {

    let [search, setSearch] = useState("");
    return (
        <div className='font-poppins'>
            <Toaster />
            <Header searchState={{ search, setSearch }} />
            <Outlet context={{ search }} />
        </div>
    )
}
