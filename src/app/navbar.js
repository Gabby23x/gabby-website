import Link from 'next/link';
import './home.css'; // Ensure the path to the CSS file is correct

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                    <Link href="/" className="navbar-link">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="navbar-link">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/projects" className="navbar-link">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className="navbar-link">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}