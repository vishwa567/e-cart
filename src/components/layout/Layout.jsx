import React from 'react'
import Navbar from '../navigation/Navbar'
import { Outlet } from 'react-router-dom'
import Menu from '../navigation/Menu'

export default function Layout() {
    return (
        <div className='font-poppins'>
            <Navbar />
            <Menu />
            <Outlet />

        </div>
    )
}
