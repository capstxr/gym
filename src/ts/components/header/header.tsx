// Import packages
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Import component css
import './header.scss';

const Header = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    const HamburgerClick = () => {
        setIsOpen(!isOpen);
        document.body.className = `${!isOpen}`
    }

    return (
        <header
            id="header"
            className={`wrapper ${isOpen}`}
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
                            to="/pricing"
                            rel='noreferrer noopener nfollow'
                            className='nav-link'
                        >
                            Pricing
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

                <ul className="nav-list">
                    <li className="nav-item">
                        <Link 
                            to="/store"
                            rel='noreferrer noopener nfollow'
                            className='nav-link'
                        >
                            store
                        </Link>
                    </li>
                </ul>

                <div
                    className="hamburger-container"
                    onClick={HamburgerClick}
                >
                    <span />
                    <span />
                    <span />
                </div>
            </nav>
        </header>
    );
}

export default Header;