// Import packages
import { useEffect } from 'react';

// Import CSS
import './pricing.scss';

const Pricing = () => {
	useEffect(() => {
        document.title = "Power Gym - Pricing";
        window.scrollTo(0,0);
    }, []);

	return (
		<main
			className="page"
			id="pricing"
		>
			<section
				className="wrapper landing-65vh"
			>
				<img
                    src="/images/body/home/home-landing-bg.jpg"
                    alt="Background"
                    className="landing-bg"
                    loading='eager'
                />

				<div className="content">
					<h1 className='pricing-hero-head'>
						<span className="white">Our </span>
						<span className="red">pricing</span>
					</h1>
				</div>
			</section>
		</main>
	);
}

export default Pricing;