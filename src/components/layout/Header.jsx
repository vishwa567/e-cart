import Navbar from '../navigation/Navbar'
import Menu from '../navigation/Menu'

export default function Header({ searchState }) {
    return (
        <>
            <Navbar />
            <Menu searchState={searchState} />
        </>
    )
}
