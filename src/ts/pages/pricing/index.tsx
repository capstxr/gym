// Import packages
import { useEffect } from "react";

// Import page css
import './pricing.scss';

// Import icons
import { FcCheckmark } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";

const Pricing = () => {
	useEffect(() => {
        document.title = "Power Gym - Pricing";
        window.scrollTo(0,0);
    }, []);

	interface Props {
		isIncluded: boolean;
		name: string;
	}

	const PlanIncludes = (props: Props) => {
		const { isIncluded, name } = props;

		return (
			<div className="plan-includes">
				{isIncluded ? (
					<FcCheckmark className="plan-icon"/>
				) : <RxCross2 className="plan-icon red"/>}

				<span className="fs-16 fw-400 ls-125">{name}</span>
			</div>
		);
	}

	return (
		<main className="page">
			<section className="wrapper">
				<div className="content pricing-grid">
				<div className="plan-wrapper">
						<div className="plan-top">
							<span className="fs-24 fw-500 ls-125">
								Free
							</span>

							<span className="fs-20 fw-450 ls-075">
								0 € / month
							</span>
						</div>

						<hr className="plan-line" />

						<div className="plan-bottom">
							<div className="included">
								<PlanIncludes
									isIncluded
									name="1 free weekly visit"
								/>

								<PlanIncludes
									isIncluded={false}
									name="Personal Trainers"
								/>

								<PlanIncludes
									isIncluded={false}
									name="Free sauna access"
								/>

								<PlanIncludes
									isIncluded={false}
									name="14-Day money-back guarantee"
								/>

								<PlanIncludes
									isIncluded={false}
									name="Discounts on supplements"
								/>

								<PlanIncludes
									isIncluded={false}
									name="Free massages"
								/>

								<PlanIncludes
									isIncluded={false}
									name="Free gym merchandise"
								/>

								<PlanIncludes
									isIncluded={false}
									name="Weekly fitness assessments"
								/>
							</div>
						</div>
					</div>

					<div className="plan-wrapper">
						<div className="plan-top">
							<span className="fs-24 fw-500 ls-125">
								Normal
							</span>

							<span className="fs-20 fw-450 ls-075">
								20 € / month
							</span>
						</div>

						<hr className="plan-line" />

						<div className="plan-bottom">
							<div className="included">
								<PlanIncludes
									isIncluded
									name="24/7 Access to our facilities"
								/>

								<PlanIncludes
									isIncluded
									name="Personal Trainers"
								/>

								<PlanIncludes
									isIncluded
									name="Free sauna access"
								/>

								<PlanIncludes
									isIncluded
									name="14-Day money-back guarantee"
								/>

								<PlanIncludes
									isIncluded={false}
									name="Discounts on supplements"
								/>

								<PlanIncludes
									isIncluded={false}
									name="Free massages"
								/>

								<PlanIncludes
									isIncluded={false}
									name="Free gym merchandise"
								/>

								<PlanIncludes
									isIncluded={false}
									name="Weekly fitness assessments"
								/>
							</div>
						</div>
					</div>

					<div className="plan-wrapper">
						<div className="popular-plan">
							Popular
						</div>

						<div className="plan-top">
							<span className="fs-24 fw-500 ls-125">
								Premium
							</span>

							<span className="fs-20 fw-450 ls-075">
								30 € / month
							</span>
						</div>

						<hr className="plan-line" />

						<div className="plan-bottom">
							<div className="included">
								<PlanIncludes
									isIncluded
									name="24/7 Access to our facilities"
								/>

								<PlanIncludes
									isIncluded
									name="Personal Trainers"
								/>

								<PlanIncludes
									isIncluded
									name="Free sauna access"
								/>

								<PlanIncludes
									isIncluded
									name="14-Day money-back guarantee"
								/>

								<PlanIncludes
									isIncluded
									name="Discounts on supplements"
								/>

								<PlanIncludes
									isIncluded
									name="One free massage"
								/>

								<PlanIncludes
									isIncluded={false}
									name="Free gym merchandise"
								/>

								<PlanIncludes
									isIncluded={false}
									name="Weekly fitness assessments"
								/>
							</div>
						</div>
					</div>

					<div className="plan-wrapper">
						<div className="plan-top">
							<span className="fs-24 fw-500 ls-125">
								Premium Plus
							</span>

							<span className="fs-20 fw-450 ls-075">
								50 € / month
							</span>
						</div>

						<hr className="plan-line" />

						<div className="plan-bottom">
							<div className="included">
								<PlanIncludes
									isIncluded
									name="24/7 Access to our facilities"
								/>

								<PlanIncludes
									isIncluded
									name="Personal Trainers"
								/>

								<PlanIncludes
									isIncluded
									name="Free sauna access"
								/>

								<PlanIncludes
									isIncluded
									name="14-Day money-back guarantee"
								/>

								<PlanIncludes
									isIncluded
									name="Discounts on supplements"
								/>

								<PlanIncludes
									isIncluded
									name="Two free massages"
								/>

								<PlanIncludes
									isIncluded
									name="Free gym merchandise"
								/>

								<PlanIncludes
									isIncluded
									name="Weekly fitness assessments"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Pricing;