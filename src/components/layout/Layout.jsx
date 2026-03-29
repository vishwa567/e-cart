import React from 'react'
import Navbar from '../navigation/Navbar'
import { Outlet } from 'react-router-dom'
import Menu from '../navigation/Menu'
import Header from './Header'

export default function Layout() {
    return (
        <div className='font-poppins'>
            <Header />
            <Outlet />
        </div>
    )
}
