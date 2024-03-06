import { useState, useEffect } from 'react';

import './works.scss';

import { ImCross } from "react-icons/im";
import { BsExclamationTriangle } from "react-icons/bs";

const InWorks = () => {
    const [ popupOpen, setPopupOpen ] = useState<boolean>(true);

    useEffect(() => {
        document.body.classList.add('modal-open');
        window.scrollTo(0,0);
	}, []);

    const handleClose = () => {
        setPopupOpen(false);
        document.body.classList.remove('modal-open');
    }

    return (
        <>
        {popupOpen && (
            <div className="in-works-wrapper">
                <div className="content">  
                    <div className="popup-top">
                        <button 
                            onClick={handleClose}
                            className='close-cross-btn'
                        >
                            <ImCross />
                        </button>
                    </div>

                    <div className="popup-bottom">
                        <div className="caution-wrapper">
                            <BsExclamationTriangle/>
                        </div>

                        <span className="dev-popup-head">
                            Under Development
                        </span>

                        <p className="dev-popup-text">
                            Hi! Our website is actively under development and some features may not be available yet.
                        </p>

                        <span className="dev-popup-text black">
                            <a
                                href="https://veeti-webdev.vercel.app/"
                                className="black"
                                target='_blank'
                                rel='noreferrer noopener nofollow'
                            >
                                ~ Power Gym Team
                            </a>
                        </span>

                        <button
                            className="dev-popup-long-btn"
                            onClick={handleClose}
                        >
                            Got it!
                        </button>
                    </div>
                </div>
            </div>
        )}
        </>
    );
}

export default InWorks;