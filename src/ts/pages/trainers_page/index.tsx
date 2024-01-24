// Import packages
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import page css
import './trainers_page.scss';

const TrainersPage = () => {
	useEffect(() => {
        document.title = "Power Gym - Trainers";
        window.scrollTo(0,0);
    }, []);

	interface Props {
		name: string;
		special: string;
		email: string;
		personal_details: string;
		training_history: string;
		image: string;
		url: string;
	}

	const PersonalTrainer = (props: Props) => {
		const {
			name, special, training_history,
			personal_details, email, image, url
		} = props;

		return (
			<div className="p-t-wrapper">
				<div className="p-t-side">
					<img
						src={`/images/trainers/${image}`}
						alt={name}
						className="p-t-image"
						loading='lazy'
					/>

					<h3 className="fs-24 ls-125 fw-450 white name">
						{name}
					</h3>

					<span className="fs-18 fw-400 ls-075 red special">
						{special}
					</span>

					<p>
						<span 
							className="fw-500 fs-16 white ls-1"
						>Email: </span>

						<span 
							className="fw-400 fs-16 gray ls-075"
						>{email}</span>
					</p>
				</div>

				<div className="p-t-side">
					<h2 className="fs-36 fw-500 ls-1 white">
						Personal Details
					</h2>

					<p className="fs-16 gray fw-400 ls-075">
						{personal_details}
					</p>

					<h2 className="fs-28 fw-500 ls-1 white training">
						Training History
					</h2>

					<p className="fs-16 gray fw-400 ls-075">
						{training_history}
					</p>

					<Link
						to={`/trainers/${url}`}
						rel='noreferrer noopener nofollow'
						className='red-btn-1 white b-4'
					>
						Read More
					</Link>
				</div>
			</div>
		);
	}

	return (
		<main className="page">
			<section className="wrapper">
				<div className="content">
					<div className="p-t-grid">
						<PersonalTrainer
							name='Joshua Franklin'
							image='trainer_3.jpg'
							special='Bodybuilding'
							email='joshua@powergym.com'
							personal_details='Lorem, Ipsum.'
							training_history='Lorem Ipsum'
							url='joshua'
						/>
					</div>
				</div>
			</section>
		</main>
	);
}

export default TrainersPage;