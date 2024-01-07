// Import Modules
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

// Import CSS
import './error.scss';

const ErrorPage = () => {
    useEffect(() => {
        document.title = "Power Gym | Error Page";
        window.scrollTo(0,0);
    }, []);

    return (
        <main
            className="page"
            id="error"
        >
            <section
                className="wrapper"
                id="error-wrapper"
            >
                <img
                    src="/images/body/home/home-landing-bg.jpg"
                    alt=""
                    className="landing-bg"
                />

                <div
                    className="content"
                    id='error-content'
                >
                    <h2 className="not-found-head white">
                        <span>4</span>
                        <img
                            src="/images/plate.webp"
                            alt=""
                            className="not-found-plate"
                        />
                        <span>4</span>
                    </h2>

                    <div className="not-found-container">
                        <h2 className="not-found-text uppercase">
                            <span className='white'>Page </span>
                            <span className="red">not </span>
                            <span className="white">found!</span>
                        </h2>

                        <span className="not-found-small white">
                            Sorry, we cannot find the page you are looking for.
                        </span>

                        <Link
                            to="/"
                            rel='noreferrer noopener nofollow'
                            className="red-btn-1 b-40 white"
                        >
                            Back to home
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ErrorPage;