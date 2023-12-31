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
        <section
            className="page"
            id="about"
        >
            {/* Our trainers */}
            <Trainers/>

            {/* Check out our plans */}
            <CheckPlans/>
        </section>
    );
}

export default About;