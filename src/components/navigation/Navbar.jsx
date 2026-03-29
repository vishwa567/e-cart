import Logo from './Logo'
import Profile from './Profile'
import Search from './Search'

export default function Navbar({ searchState }) {
    return (
        <nav className='flex justify-between items-center px-2 h-15 text-xl'>
            <Profile />
            <Logo />
            <Search searchState={searchState} />
        </nav>
    )
}
