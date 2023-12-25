/* Figma Designs

https://www.figma.com/file/mAWQTv9Am31iwKNFVXOeC4/andre's-gym-(Community)?node-id=0%3A1&mode=dev

https://www.figma.com/file/AgSJfOMJKoSFvWWm21REDV/Gym-Website-Design-(Community)?type=design&node-id=1-8&mode=design&t=tGvAxC7WXlp6UOkd-0

https://www.figma.com/file/kmrBZlxZNMnn6ECaiNAvA0/Fitness%2FGym-Webflow-Website-Template-(Community)?node-id=0%3A1&mode=dev

https://www.figma.com/file/QQSWk0B0GkPFTwsadepFu7/SPYRO-(Community)?node-id=0%3A1&mode=dev

*/

// Import Public CSS
import '../css/App.scss';
import '../css/colors.css';

// Import Packages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import CookiePopup from './components/cookies/cookies';
import Header from './components/header/header';
import Footer from './components/footer/footer';

// Import Pages
import Home from './pages/home/home';

function App() {
    /*

    - set up router for multipage support
    - call commonly used components

    */

    return (
        <Router>
            <Header/>

            {/* <CookiePopup/> */}

            <Routes>
                <Route
                    path='/'
                    element={<Home/>}
                />
            </Routes>

            <Footer/>
        </Router>
    );
}

export default App;