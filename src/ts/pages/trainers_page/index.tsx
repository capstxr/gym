// Import packages
import { useEffect } from 'react';

// Import components
import Trainers from '../../components/body/trainers';

// Import page css
import './trainers_page.scss';

const TrainersPage = () => {
	useEffect(() => {
        document.title = "Power Gym - Trainers";
        window.scrollTo(0,0);
    }, []);

	return (
		<main className="page">
			<Trainers/>
		</main>
	);
}

export default TrainersPage;