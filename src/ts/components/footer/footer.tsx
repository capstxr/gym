// Import packages
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Youtube, Facebook } from 'react-bootstrap-icons';

// Import component css
import './footer.scss';

const Footer = () => {
    return (
        <footer
            id="footer"
            className='wrapper'
        >
            <div className="content">
                <div className="footer-list">
                    <span className="footer-head">
                        Navigation
                    </span>

                    <Link
                        to='/'
                        rel='noreferrer noopener nofollow'
                        className='footer-link'
                    >
                        Home
                    </Link>

                    <Link
                        to='/about'
                        rel='noreferrer noopener nofollow'
                        className='footer-link'
                    >
                        About
                    </Link>

                    <Link
                        to='/services'
                        rel='noreferrer noopener nofollow'
                        className='footer-link'
                    >
                        Services
                    </Link>

                    <Link
                        to='/pricing'
                        rel='noreferrer noopener nofollow'
                        className='footer-link'
                    >
                        Pricing
                    </Link>

                    <Link
                        to='/store'
                        rel='noreferrer noopener nofollow'
                        className='footer-link'
                    >
                        Store
                    </Link>
                </div>

                <div className="footer-list">
                    <span className="footer-head">
                        Services
                    </span>

                    <Link
                        to='/personal-trainers'
                        rel='noreferrer noopener nofollow'
                        className='footer-link'
                    >
                        Personal Trainers
                    </Link>

                    <Link
                        to='/sport-masseuses'
                        rel='noreferrer noopener nofollow'
                        className='footer-link'
                    >
                        Sport Masseuses
                    </Link>

                    <Link
                        to='/sauna'
                        rel='noreferrer noopener nofollow'
                        className='footer-link'
                    >
                        Infrared Sauna
                    </Link>

                    <Link
                        to='/nutrients'
                        rel='noreferrer noopener nofollow'
                        className='footer-link'
                    >
                        Additional Nutrients
                    </Link>
                </div>

                <div className="footer-list">
                    <span className="footer-head">
                        Support
                    </span>

                    <Link
                        to='/contact'
                        rel='noreferrer noopener nofollow'
                        className='footer-link'
                    >
                        Contact Us
                    </Link>

                    <Link
                        to='/faq'
                        rel='noreferrer noopener nofollow'
                        className='footer-link'
                    >
                        FAQ
                    </Link>

                    <Link
                        to='/refund-policy'
                        rel='noreferrer noopener nofollow'
                        className='footer-link'
                    >
                        Refund Policy
                    </Link>
                </div>

                <div className="footer-list">
                    <span className="footer-head">
                        Policies
                    </span>

                    <Link
                        to='/terms-of-service'
                        rel='noreferrer noopener nofollow'
                        className='footer-link'
                    >
                        Terms Of Service
                    </Link>

                    <Link
                        to='/privacy-policy'
                        rel='noreferrer noopener nofollow'
                        className='footer-link'
                    >
                        Privacy Policy
                    </Link>

                    <Link
                        to='/legal-info'
                        rel='noreferrer noopener nofollow'
                        className='footer-link'
                    >
                        Legal Info
                    </Link>
                </div>

                <div className="footer-list">
                    <span className="footer-head">
                        Contact Information
                    </span>

                    <span className='footer-link'>
                        +123 456 7890
                    </span>

                    <span className="footer-link">
                        info@powergym.com
                    </span>

                    <span className="footer-link">
                        Manhattan, NY 10036, USA
                    </span>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8547.8885248125!2d-73.9897996909318!3d40.75905606317062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sfi!2sfi!4v1703361981863!5m2!1sfi!2sfi"
                        width="600"
                        height="450"
                        allowFullScreen={false}
                        loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                        className='location-maps'
                    />
                </div>
            </div>
        </footer>
    );
}

export default Footer;