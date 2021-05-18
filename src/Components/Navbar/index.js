import './styles.css';
import { Link } from 'react-router-dom';

const Navigate = () => {
    return (
        <div className="navbar">
            <Link className="nav-link" to='/'>HOME</Link>
            <Link className="nav-link" to='/About'>ABOUT ME</Link>
            <Link className="nav-link" to='/Skills'>SKILLS</Link>
            <Link className="nav-link" to='/Experience'>EXPERIENCE</Link>
            <Link className="nav-link" to='/Portfolio'>PORTFOLIO</Link>
            <Link className="nav-link" to='/Contact'>CONTACT</Link>
        </div>
    )
}

export default Navigate;