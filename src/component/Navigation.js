import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import './component.scss'
import { languages } from '../constant'

export default function Navigation(props) {

    const handleChange = (e) => {
        props.changeLanguage(e.target.value)
    }

    return (
        <nav className="page-navigation">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/movies">Movies</Link>
            <Link className="link" to="/series">Series</Link>
            <Link className="link" to="/schedule">Schedule</Link>
            <Link className="link" to="/browse"><FontAwesomeIcon icon={faMagnifyingGlass} />&nbsp;Browse</Link>
            <select onChange={handleChange}>
                {languages.map(lan =>
                    (<option key={lan.language} value={lan.language}>{lan.name}</option>)
                )}
            </select>
        </nav>
    )
}