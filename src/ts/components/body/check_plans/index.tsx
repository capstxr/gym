// Import Modules
import { Link } from 'react-router-dom';

// Import CSS
import './plans.scss';

const CheckPlans = () => {
    return (
        <section
            id="ready-wrapper"
            className="wrapper"
        >
            <div className="content b-8">
                <div className="ready-left">
                    <h2 className="ready-head uppercase white">
                        Ready to change?
                    </h2>
                    
                    <p className="ready-text white">
                        Challenge your strength. Stretch your body. Breathe easy. Our team of world-class instructors will empower
                    </p>
                </div>

                <div className="ready-right">
                    <div className="ready-link b-8">
                        <Link
                            to='/pricing'
                            rel="noreferrer noopener nofollow"
                            className="r-l-link"
                        >
                            <p className="r-l-text uppercase">
                                Check out our plans
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CheckPlans;