import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import './component.scss'

export default function Navigation() {
    return (
        <nav class="page-navigation">
            <Link class="link" to="/">Home</Link>
            <Link class="link" to="/movies">Movies</Link>
            <Link class="link" to="/series">Series</Link>
            <Link class="link" to="/schedule">Schedule</Link>
            <Link class="link" to="/browse"><FontAwesomeIcon icon={faMagnifyingGlass} />&nbsp;Browse</Link>
        </nav>
    )
}