// Import Packages
import { useEffect } from 'react';

// Import CSS
import './about.scss';

const About = () => {
    useEffect(() => {
        document.title = "Power Gym | About Us";
        window.scrollTo(0,0);
    }, []);

    return (
        <h1>Hello, World</h1>
    );
}

export default About;