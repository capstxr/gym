// Import packages
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    Star,
    StarFill,
    Twitter,
    Facebook,
    Instagram
} from "react-bootstrap-icons";

// Import components
import CheckPlans from "../../components/body/check_plans";
import Trainers from "../../components/body/trainers";

// Import CSS
import './home.scss';

const Home = () => {
    useEffect(() => {
        document.title = "Power Gym - Home";
        window.scrollTo(0,0);
    }, []);

    // Service Component
    interface ServiceProps {
        name_1: string;
        name_2: string;
        description: string;
        urlTo: string;
        img: string;
        id?: string;
    }

    const Service = (props: ServiceProps) => {
        // Initialize props
        const { img, name_1, name_2, description, urlTo, id } = props;

        return (
            <div className="service-container" id={id}>
                <img
                    src={`/images/services/${img}.jpg`}
                    alt="Service"
                    className={`service-img`}
                    loading="lazy"
                />

                <span className="service-name">
                    <span className="white">{name_1} </span>

                    <span className="red">
                        {name_2}
                    </span>
                </span>

                <p className="service-description white">
                    {description}
                </p>

                <Link
                    to={urlTo}
                    rel="noreferrer noopener nofollow"
                    className="red-btn-1 b-40 white red-btn-2"
                >
                    Read more
                </Link>
            </div>
        );
    }
    // End of service component

    // Start of review component
    interface ReviewProps {
        review: string;
        name: string;
        occupation: string;
        image: string;
        stars: number;
    }

    const Review = (props: ReviewProps) => {
        const { review, name, occupation, image, stars } = props;

        const renderStars = () => {
            const starElements = [];

            for (let i = 0; i < 5; i++) {
                starElements.push(i < stars ? <StarFill className="star star-filled" key={i} /> : <Star className="star" key={i} />);
            }

            return starElements;
        };

        return (
            <div className="review-wrapper">
                <div className="top-stars">
                    {renderStars()}
                </div>

                <p className="review">"{review}"</p>

                <div className="review-bottom">
                    <img
                        src={`/images/clients/${image}`}
                        alt="Client"
                        className="review-image"
                        loading="lazy"
                    />

                    <div className="r-b-right">
                        <span className="name">{name}</span>
                        <span className="occupation">{occupation}</span>
                    </div>
                </div>
            </div>
        );
    }
    // End of review component

    return (
        <main
            className="page"
            id="home"
        >
            {/* Start of landing */}

            <section
                className="wrapper"
                id="home-landing"
            >
                <img
                    src="/images/body/home/home-landing-bg.jpg"
                    alt="Gym Background"
                    className="landing-bg"
                    id="home-bg"
                    loading="eager"
                />

                <div
                    className="content"
                    id="h-l-content"
                >
                    <h2 className="slogan">
                        <span className="s-large">"</span>
                        <span className="s-large">W</span>
                        <span className="s-text">ork harder, get stronger</span>
                        <span className="s-large">"</span>
                    </h2>

                    <h1 className="landing-head">
                        <span className="white">Easy with </span>
                        <span className="red">Power </span>
                        <span className="white">Gym</span>
                    </h1>

                    <span className="landing-text white">
                        Forge strength, crush limits. Welcome to Power Gym, where hardcore meets heart. Unleash your power and conquer the extraordinary.
                    </span>

                    <Link
                        to='/pricing'
                        rel="noreferrer noopener nofollow"
                        className="red-btn-1 white b-4 uppercase"
                    >
                        Become a member
                    </Link>
                </div>
            </section>

            {/* End of landing */}

            {/* Start of services */}

            <section
                id="home-services"
                className="wrapper"
            >
                <div className="head-bg">
                    <span>F</span>
                    <span>e</span>
                    <span>a</span>
                    <span>t</span>
                    <span>u</span>
                    <span>r</span>
                    <span>e</span>
                    <span>s</span>
                </div>

                <div className="content">
                    <h2 className="section-heading uppercase">
                        <span className="white">What </span>
                        <span className="red">we offer</span>
                    </h2>

                    <span className="heading-text white uppercase">
                        Our top features
                    </span>

                    <div className="home-service-grid">
                        <Service
                            img="basic_fitness"
                            name_1="Basic"
                            name_2="Fitness"
                            description="We cover everything you need in a gym, from treadmills and e-bikes to heavy weights."
                            urlTo="/basic-fitness"
                        />

                        <Service
                            img="personal_trainers"
                            name_1="Personal"
                            name_2="Trainers"
                            description="Our professional coaches will help you reach your goals with a personalized program."
                            urlTo="/personal-trainers"
                        />

                        <Service
                            img="sport_masseuse"
                            name_1="Sport"
                            name_2="Masseuses"
                            description="Regular massages will help with blood flow, relieve muscle pain and tension."
                            urlTo="/sport-masseuses"
                        />

                        <Service
                            img="sauna"
                            name_1="Infrared"
                            name_2="Sauna"
                            description="Our sauna sessions elevate well-being through relaxation and revitalization."
                            urlTo="/sauna"
                            id='sauna'
                        />

                        <Service
                            img="nutrients"
                            name_1="Additional"
                            name_2="Nutrients"
                            description="Boost workouts with our nutrients, unstoppable energy for optimal training."
                            urlTo="/nutrients"
                            id="nutrients"
                        />

                        <Service
                            img="stretching_area"
                            name_1="Stretching"
                            name_2="Area"
                            description="A dedicated space for warming up is important for injury prevention."
                            urlTo="/stretching-area"
                            id="stretching"
                        />
                    </div>
                </div>
            </section>

            {/* End of services */}

            {/* Start of begin today */}

            <section
                id="start-today"
                className="wrapper"
            >
                <img
                    src="/images/body/home/gym_picture.jpg"
                    alt="Background"
                    className="background-image"
                />

                <div className="content">
                    <h2 className="section-heading uppercase">
                        <span className="white">Don't </span>
                        <span className="red">think</span>
                        <span className="white">, start </span>
                        <span className="red">today</span>
                        <span className="white">!</span>
                    </h2>

                    <p className="dont-think white">
                        Seize strength now! Become a member to start your fitness journey. No excuses, your results await.
                    </p>

                    <Link
                        to='/pricing'
                        rel="noreferrer noopener nofollow"
                        className="red-btn-1 b-4 white uppercase"
                    >
                        Become a member
                    </Link>
                </div>
            </section>

            {/* End of begin today */}

            {/* Start of why us */}

            <section
                id="why-us"
                className="wrapper"
            >
                <div className="head-bg end">
                    <span>R</span>
                    <span>e</span>
                    <span>v</span>
                    <span>i</span>
                    <span>e</span>
                    <span>w</span>
                    <span>s</span>
                </div>

                <div className="content">
                    <h2 className="section-heading uppercase">
                        <span className="white">Why </span>
                        <span className="red">choose us</span>
                        <span className="white">?</span>
                    </h2>

                    <p className="heading-text white uppercase">
                        Read from our clients
                    </p>

                    <div className="home-service-grid" id="review-grid">
                        <Review
                            review="This gym stands out with state-of-the-art equipment and a spacious layout—a bodybuilder's dream. The commitment to serious strength training is impressive, delivering phenomenal gains. The place to be for muscle building."
                            name="Mike Oxlong"
                            occupation="bodybuilder"
                            image="bodybuilder.jpg"
                            stars={4}
                        />

                        <Review
                            review="This gym is my second home! The clean, vibrant atmosphere and specialized training programs have significantly improved my agility and endurance. Highly recommended for athletes seeking a dynamic and supportive space."
                            name="Matthew Perry"
                            occupation="footballer"
                            image="matthew.jpg"
                            stars={5}
                        />

                        <Review
                            review="As a personal trainer, I'm discerning about where I train. This gym exceeds expectations with a clean facility, professional staff, and flexibility. Highly recommended for comprehensive experiences."
                            name="R.U. Winningson"
                            occupation="personal trainer"
                            image="sporty.jpg"
                            stars={5}
                        />
                    </div>
                </div>
            </section>

            {/* End of why us */}

            {/* Start of our trainers */}

            <Trainers />

            {/* End of our trainers */}

            {/* Start of ready to change */}

            <CheckPlans/>

            {/* End of ready to change */}
        </main>
    );
}

export default Home;
