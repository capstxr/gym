// Import packages
import { Link } from 'react-router-dom';

// Import component css
import './header.scss';

const Header = () => {
    return (
        <header
            id="header"
            className="wrapper"
        >
            <nav
                className="content"
                id="nav"
            >
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link 
                            to="/"
                            rel='noreferrer noopener nfollow'
                            className='logo-link'
                        >
                            <img
                                src=""
                                alt="Logo"
                                className="header-logo"
                            />
                        </Link>
                    </li>
                </ul>

                <ul className="nav-list">
                    <li className="nav-item">
                        <Link 
                            to="/"
                            rel='noreferrer noopener nfollow'
                            className='nav-link'
                        >
                            Home
                        </Link>

                    </li>

                    <li className="nav-item">
                        <Link 
                            to="/about"
                            rel='noreferrer noopener nfollow'
                            className='nav-link'
                        >
                            About
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link 
                            to="/services"
                            rel='noreferrer noopener nfollow'
                            className='nav-link'
                        >
                            Services
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link 
                            to="/contact"
                            rel='noreferrer noopener nfollow'
                            className='nav-link'
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;