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
                <ul className="nav-list" id='logo-list'>
                    <li className="nav-item" id='logo-item'>
                        <Link 
                            to="/"
                            rel='noreferrer noopener nfollow'
                            className='logo-link'
                            onClick={HamburgerClick}
                        >
                            <div className="logo-container">
                                <img
                                    src="/images/favicon.svg"
                                    alt="Logo"
                                    className="header-logo"
                                />

                                <span>Power Gym</span>
                            </div>   
                        </Link>
                    </li>
                </ul>

                <ul className="nav-list">
                    <li className="nav-item">
                        <Link 
                            to="/"
                            rel='noreferrer noopener nfollow'
                            className='nav-link'
                            onClick={HamburgerClick}
                        >
                            Home
                        </Link>

                    </li>

                    <li className="nav-item">
                        <Link 
                            to="/about"
                            rel='noreferrer noopener nfollow'
                            className='nav-link'
                            onClick={HamburgerClick}
                        >
                            About
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link 
                            to="/services"
                            rel='noreferrer noopener nfollow'
                            className='nav-link'
                            onClick={HamburgerClick}
                        >
                            Services
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link 
                            to="/pricing"
                            rel='noreferrer noopener nfollow'
                            className='nav-link'
                            onClick={HamburgerClick}
                        >
                            Pricing
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link 
                            to="/contact"
                            rel='noreferrer noopener nfollow'
                            className='nav-link'
                            onClick={HamburgerClick}
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
                            onClick={HamburgerClick}
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