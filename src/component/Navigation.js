import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/series">Series</Link>
            <Link to="/schedule">Schedule</Link>
        </nav>
    )
}