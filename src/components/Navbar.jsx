import {Link} from 'react-router-dom'
import {useState} from 'react';

export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <>
            <header>
                <Link to="/" className="logo">
                    <h2>Portfo<span>lio</span></h2>
                </Link>
                <nav>
                    <ul className={isNavOpen ? "open" : ""}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Cv">Cv Sida</Link></li>
                        <li><Link to="#projects">Projects</Link></li>
                        <li><Link to="#contact">Contact</Link></li>
                    </ul>
                </nav>
                <p className="toggle-input" onClick={() => setIsNavOpen(!isNavOpen)} >✅</p>
            </header>
        </>
    )
}