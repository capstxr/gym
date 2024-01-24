// Import packages
import { useEffect, useState } from "react";
import CheckPlans from "../../components/body/check_plans";

// Import page css
import './bmi.scss';

const BmiCalculator = () => {
    useEffect(() => {
        document.title = "Power Gym - BMI Calculator";
        window.scrollTo(0,0);
    }, []);

	const [ bmi, setBmi ] = useState<any>(0);
	const [ bmiText, setBmiText ] = useState<string>('');
	const [ height, setHeight ] = useState<any>(0);
	const [ weight, setWeight ] = useState<any>(0);

	const calculateBmi = (h: any, w: any) => {
		const FORMULA = (w / ((h / 100) * (h / 100)));
		let TEXT = 'underweight';

		if (FORMULA <= 18.5)
			TEXT = 'underweight';
		else if (FORMULA > 18.5 && FORMULA < 24.9)
			TEXT = 'healthy'
		else if (FORMULA > 25.0 && FORMULA < 29.9)
			TEXT = 'overweight'
		else if (FORMULA > 29.9)
			TEXT = 'obese'

		setBmi(FORMULA.toFixed(1));
		setBmiText(TEXT);
	}

	return (
		<main className="page">
			<section className="wrapper">
				<div className="content">
					<div className="bmi-grid">
							<div className="bmi-g-side">
								<h2 className="fs-36 uppercase text-start">
									<span className="white">Your </span>
									<span className="red">BMI</span>
								</h2>

								<p className="fs-16 gray-text ls-1">
									Overrideds on hanging fruits to identify ball park value added activity to beta overrided the digitals divided with additionals clickthroughs from line.
								</p>

								<div className="bmi-c-form">
									<div className="form-flex">
										<input
											type="text"
											name="height"
											id="height"
											className="form-input fs-16 fw-500 ls-075"
											placeholder="Height / cm"
											onChange={(e) => setHeight(e.target.value)}
										/>

										<input
											type="text"
											name="weight"
											id="weight"
											className="form-input fs-16 ls-075"
											placeholder="Weight / kg"
											onChange={(e) => setWeight(e.target.value)}
										/>
									</div>

									<button
										className="red-btn-1 white uppercase fs-16 fw-450 ls-125"
										onClick={() => calculateBmi(height, weight)}
									>
										Calculate
									</button>

								{bmi > 0 && (
									<p>Your BMI is {bmi} <br/> You are {bmiText}</p>
								)}
								</div>
							</div>

							<div className="bmi-g-side">
								<h2 className="fs-36 uppercase text-start">
									<span className="white">BMI </span>
									<span className="red">Chart</span>
								</h2>

								<table className="bmi-chart-table">
									<tr>
										<th className="uppercase fs-18 ls-1 fw-450">
											BMI
										</th>

										<th className="uppercase fs-18 ls-1 fw-450">
											Weight status
										</th>
									</tr>

									<tr>
										<td className="fs-16 ls-075 fw-400">
											Below 18.5
										</td>
										
										<td className="fs-16 ls-075 fw-400" id="underweight">
											Underweight
										</td>
									</tr>

									<tr>
										<td className="fs-16 ls-075 fw-400">
											18.5 - 24.9
										</td>
										
										<td className="fs-16 ls-075 fw-400" id="healthy">
											Healthy
										</td>
									</tr>

									<tr>
										<td className="fs-16 ls-075 fw-400">
											25.0 - 29.9
										</td>
										
										<td className="fs-16 ls-075 fw-400" id="overweight">
											Overweight
										</td>
									</tr>

									<tr>
										<td className="fs-16 ls-075 fw-400">
											30.0 and above
										</td>
										
										<td className="fs-16 ls-075 fw-400" id="obese">
											Obese
										</td>
									</tr>
								</table>
							</div>
					</div>
				</div>
			</section>

			<CheckPlans/>
		</main>
	);
}

export default BmiCalculator;