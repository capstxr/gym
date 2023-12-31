// Import Modules
import { Link } from 'react-router-dom';

// Import CSS
import './error.scss';

const ErrorPage = () => {
    return (
        <section
            className="page"
            id="error"
        >
            <section
                className="wrapper"
                id="error-wrapper"
            >
                <img
                    src="/images/home-landing-bg.jpg"
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
                            src="/images/plate.png"
                            alt=""
                            className="not-found-plate"
                        />
                        <span>4</span>
                    </h2>

                    <div className="not-found-container">
                        <h2 className="not-found-text white uppercase">
                            Page not found!
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
        </section>
    );
}

export default ErrorPage;