// Import Packages
import { useEffect } from 'react';

// Import Components
import CheckPlans from '../../components/body/check_plans';
import Trainers from '../../components/body/trainers';

// Import CSS
import './about.scss';

const About = () => {
    useEffect(() => {
        document.title = "Power Gym | About Us";
        window.scrollTo(0,0);
    }, []);

    return (
        <main
            className="page"
            id="about"
        >
            {/* hero */}
            <section
                id="about-hero"
                className="wrapper"
            >
                <img
                    src="/images/home-landing-bg.jpg"
                    alt="Gym background"
                    className="landing-bg"
                />

                <div className="content">
                    <h2 className="about-hero-text">
                        <span className="white">Start the </span>
                        <span className="red">body </span>
                        <span className="white">and </span>
                        <span className="red">mind cleansing </span>
                        <span className="white">with us</span>
                    </h2>
                </div>
            </section>
            {/* end of hero */}

            {/* images */}
            <section
                id="introduction-images"
            >
                <div className="content">
                    <img
                        src="/images/about/gym_1.jpg"
                        alt="Working out"
                        className='intro-img'
                    />

                    <img
                        src="/images/about/gym_2.jpg"
                        alt="Working out"
                        className='intro-img'
                    />
                </div>
            </section>
            {/* end of images */}

            {/* Our trainers */}
            <Trainers/>

            {/* Check out our plans */}
            <CheckPlans/>
        </main>
    );
}

export default About;