// Import Packages
import { useEffect } from 'react';

// Import Components
import CheckPlans from '../../components/body/check_plans';
import Trainers from '../../components/body/trainers';

// Import CSS
import './about.scss';

const About = () => {
    useEffect(() => {
        document.title = "Power Gym - About Us";
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

            <section className="wrapper">
                <div className="content">
                    <h2
                        className="section-heading uppercase"
                    >
                        <span className="white">About </span>
                        <span className="red">us</span>
                    </h2>

                    <span className="heading-text white uppercase">
                        Get to know our business
                    </span>
                </div>
            </section>

            {/* Our story */}
            <section
                id="story" 
                className="wrapper"
            >                
                <h3 className="head-bg end">
                    <span>S</span>
                    <span>t</span>
                    <span>o</span>
                    <span>r</span>
                    <span>y</span>
                </h3>

                <div className="content">
                    <div className="story-grid">
                        <div className="s-side-top" id='si'>
                            <h2
                                className="section-heading uppercase story-head"
                            >
                                <span className="white">Our </span>
                                <span className="red">story</span>
                            </h2>

                            <span className="heading-text white uppercase story-heading">
                                The story behind our gym
                            </span>

                            <p className="story-short idk-p">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. point of using Lorem Ipsum is 
                            </p>
                        </div>

                        <div className="s-side-bottom" id='so'>
                            <div className="story-long">
                                <div className="s-l-text">
                                    <h3 className='idk'>Story</h3>
                                    <p className='idk-p'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.point of using Lorem Ipsum.
                                    </p>
                                </div>

                                <img
                                    src="/images/work_out.jpg"
                                    alt="Working out"
                                    className="s-l-img"
                                />
                            </div>
                        </div>

                        <div className="s-side-bottom" id='mi'>
                            <img
                                src="/images/pt.png"
                                alt="Trainer"
                                className="background-image"
                                id='mission-img'
                            />

                            <div className="mission-content">
                                <h3 className='idk white'>
                                    Our mission
                                </h3>

                                <p className='idk-p white'>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.point of using Lorem Ipsum.
                                </p>
                            </div>
                        </div>

                        <div className="s-side-top" id='ov'>
                            <div className="value-box">
                                <h3 className='id'>Our Values</h3>
                                <p className='idk-p'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.point of using Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our trainers */}
            <Trainers/>

            {/* Check out our plans */}
            <CheckPlans/>
        </main>
    );
}

export default About;