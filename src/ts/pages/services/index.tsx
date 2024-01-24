// Import packages
import { useEffect } from "react";

// Import page css
import './services.scss';

const Services = () => {
	useEffect(() => {
        document.title = "Power Gym - Services";
        window.scrollTo(0,0);
    }, []);

	return (
		<main className="page">
			<section className="wrapper">
				<div className="content">
					<h2 className="section-heading uppercase">
						<span className="white">Our </span>
						<span className="red">services</span>
					</h2>

					<span className="heading-text white uppercase">
                        Our top features
                    </span>
				</div>
			</section>
		</main>
	);
}

export default Services;