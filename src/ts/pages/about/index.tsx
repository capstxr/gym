// Import Packages
import { useEffect, useRef, useState } from 'react';

// Import Components
import CheckPlans from '../../components/body/check_plans';
import Trainers from '../../components/body/trainers';

// Import icons
import { IoPlay } from "react-icons/io5";
import { IoPause } from "react-icons/io5";

// Import CSS
import './about.scss';

const About = () => {
    useEffect(() => {
        document.title = "Power Gym - About Us";
        window.scrollTo(0,0);
    }, []);

    const isMobile = window.innerWidth < 600;

    const [ isPlaying, setIsPlaying ] = useState<boolean>(false);

    const vidRef = useRef<HTMLVideoElement | null>(null);

    const handlePlayVideo = () => {
        if (vidRef.current) {
            if (!isPlaying)
                vidRef.current.play();
            else
                vidRef.current.pause();
            
            setIsPlaying(!isPlaying);
        }
    }

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
                    src="/images/body/home/home-landing-bg.jpg"
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
                        src="/images/body/about/gym_1.jpg"
                        alt="Working out"
                        className='intro-img'
                        loading='lazy'
                    />

                    <img
                        src="/images/body/about/gym_2.jpg"
                        alt="Working out"
                        className='intro-img'
                        loading='lazy'
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
                    <span>A</span>
                    <span>b</span>
                    <span>o</span>
                    <span>u</span>
                    <span>t</span>
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
                                Sitting at the heart of New York City, PowerGym was founded in 2022 by three personal trainers and has now helped hundreds reach their goals.
                            </p>
                        </div>

                        <div className="s-side-bottom" id='so'>
                            <div className="story-long">
                                <div className="s-l-text">
                                    <h3 className='idk'>What it's about</h3>
                                    <p className='idk-p'>
                                        We offer facilites and services for everyone from beginners to expert bodybuilders and personal trainers. If you wish to lose weight or gain muscle, we got you covered.
                                    </p>
                                </div>

                                <img
                                    src="/images/body/about/work_out.jpg"
                                    alt="Working out"
                                    className="s-l-img"
                                    loading='lazy'
                                />
                            </div>
                        </div>

                        <div className="s-side-bottom" id='mi'>
                            <img
                                src="/images/body/about/pt.jpg"
                                alt="Trainer"
                                className="background-image"
                                id='mission-img'
                                loading='lazy'
                            />

                            <div className="mission-content">
                                <h3 className='idk white'>
                                    Our Mission
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

            {/* Our facilities */}
            <section id="facilities" className="wrapper">
                {isMobile && (
                <video
                    poster='/images/body/about/facility_poster_low.jpg'
                    id='facility-video'
                    muted
                    src='/images/body/about/facilities_low.mp4'
                    preload='none'
                    ref={vidRef}
                    loop
                />
                )}

                {!isMobile && (
                <video
                    poster='/images/body/about/facility_poster.jpg'
                    id='facility-video'
                    muted
                    src='/images/body/about/facilities.mp4'
                    preload='none'
                    ref={vidRef}
                    loop
                />
                )}

                <div className="content">
                    <h3 id='facility-bg-head'>
                        <span>O</span>
                        <span>u</span>
                        <span>r</span>
                        <span></span>
                        <span>f</span>
                        <span>a</span>
                        <span>c</span>
                        <span>i</span>
                        <span>l</span>
                        <span>i</span>
                        <span>t</span>
                        <span>i</span>
                        <span>e</span>
                        <span>s</span>
                    </h3>

                    <button
                        className="play-btn"
                        onClick={handlePlayVideo}
                    >
                        {isPlaying && (
                            <IoPause/>
                        )}

                        {!isPlaying && (
                            <IoPlay/>
                        )}
                    </button>
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