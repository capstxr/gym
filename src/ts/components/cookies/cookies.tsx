// Import packages
import { useState } from 'react';
import { X } from 'react-bootstrap-icons';

// Import component css
import './cookies.scss';

const CookiePopup = () => {
    // Default value for cookie popup
    const [ isVisible, setIsVisible ] = useState(true);

    // Close button click
    const HandleClose = () => {
        setIsVisible(false);
    }

    return (
        <>

        {isVisible && (
        <div className="cookie-popup">
            <div className="cookie-top">
                <span className="cookie-head">
                    We value your privacy
                </span>

                <button 
                    className="close-cookies"
                    onClick={HandleClose}
                >
                    <X/>
                </button>
            </div>

            <span className="cookie-text">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
            </span>

            <div className="cookie-buttons">
                <button
                    className="cookie-btn filled"
                    onClick={HandleClose}
                >
                    Accept All
                </button>

                <button
                    className="cookie-btn"
                    onClick={HandleClose}
                >
                    Reject All
                </button>
            </div>
        </div>
        )}

        </>
    );
}

export default CookiePopup;