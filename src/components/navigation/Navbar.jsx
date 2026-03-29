import Logo from './Logo'
import Menu from './Menu'
import Profile from './Profile'
import Search from './Search'

export default function Navbar() {
    return (
        <nav className='flex justify-between items-center px-2 h-15 text-xl'>
            <Profile />
            <Logo />
            <Search />
        </nav>
    )
}
