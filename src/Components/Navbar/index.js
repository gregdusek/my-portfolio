import './styles.css';
import { Link } from 'react-router-dom';

const Navigate = () => {
    return (
        <div className="navbar">
            <Link className="nav-link" to='/'>Home</Link>
            <Link className="nav-link" to='/About'>About Me</Link>
            <Link className="nav-link" to='/Skills'>Skills</Link>
            <Link className="nav-link" to='/Experience'>Experience</Link>
            <Link className="nav-link" to='/Portfolio'>Portfolio</Link>
            <Link className="nav-link" to='/Contact'>Contact</Link>
        </div>
    )
}

export default Navigate;