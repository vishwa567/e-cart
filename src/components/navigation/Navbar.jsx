import Logo from './Logo'
import Profile from './Profile'

export default function Navbar() {
    return (
        <nav className='flex justify-between items-center px-2 h-15 text-xl'>
            <Logo />
            <Profile />
        </nav>
    )
}
