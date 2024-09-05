// navbar.js
// navbar.js
export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li><a href="#home" className="navbar-link">Home</a></li>
                <li><a href="#about" className="navbar-link">About</a></li>
                <li><a href="#services" className="navbar-link">Projects</a></li>
                <li><a href="#contact" className="navbar-link">Contact</a></li>
            </ul>
        </nav>
    );
}