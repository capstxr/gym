// Import packages
import { 
    Instagram,
    Facebook,
    Twitter
} from 'react-bootstrap-icons';

import { Link } from 'react-router-dom';

// Import css
import './trainers.scss';

interface TrainerProps {
    image: string;
    name: string;
    specialiations: string;
}

const Trainer = (props: TrainerProps) => {
    // Initialize props
    const { image, name, specialiations } = props;

    // Return component HTML
    return (
        <div className="trainer-wrapper">
            <img
                src={`/images/trainers/${image}.jpg`}
                alt={name}
                className="trainer-image"
                loading="lazy"
            />

            <div className="trainer-bottom">
                <span className="trainer-name white">
                    {name}
                </span>

                <hr className="trainer-line" />

                <div className="specialiations-grid">
                    <span className="specialiations-head white">
                        Specialiations
                    </span>

                    <span className="specialiations-text">
                        {specialiations}
                    </span>
                </div>

                <div className="trainer-social-medias">
                    <a 
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer noopener nofollow"
                        className="trainer-some"
                        aria-label='Instagram'
                    >
                        <Instagram
                            className="t-some-icon"
                            id="instagram"
                        />
                    </a>

                    <a 
                        href="https://facebook.com"
                        target="_blank"
                        rel="noreferrer noopener nofollow"
                        className="trainer-some"
                        aria-label='Facebook'
                    >
                        <Facebook
                            className="t-some-icon"
                            id="facebook"
                        />
                    </a>

                    <a 
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer noopener nofollow"
                        className="trainer-some"
                        aria-label='Twitter'
                    >
                        <Twitter
                            className="t-some-icon"
                            id="twitter"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

const Trainers = () => {
    return (
        <section
            id="home-trainers"
            className="wrapper"
        >
            <div className="head-bg">
                <span>T</span>
                <span>r</span>
                <span>a</span>
                <span>i</span>
                <span>n</span>
                <span>e</span>
                <span>r</span>
                <span>s</span>
            </div>

            <div className="content">
                <h2 className="section-heading uppercase">
                    <span className="white">Our </span>
                    <span className="red">trainers</span>
                </h2>

                <span className="heading-text white uppercase">
                    We help you gain
                </span>

                <div className="home-service-grid" id="trainer-grid">
                    <Trainer
                        image="trainer_1"
                        name="Amanda"
                        specialiations="Crossfit, Nutrition"
                    />

                    <Trainer
                        image="trainer_2"
                        name="Emma"
                        specialiations="Crossfit, Nutrition"
                    />

                    <Trainer
                        image="trainer_3"
                        name="Joshua"
                        specialiations="Crossfit, Nutrition"
                    />
                </div>

                <div className="center-full-width p-25-0">
                    <Link
                        to="/personal-trainers"
                        rel='noreferrer noopener nofollow'
                        className='red-btn-1 white b-4'
                    >
                        Read more
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Trainers;