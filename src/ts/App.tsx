// Import Public CSS
import '../css/App.scss';
import '../css/colors.css';

// Import Packages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Header from './components/header/header';

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

            <Routes>
                <Route
                    path='/'
                    element={<Home/>}
                />
            </Routes>
        </Router>
    );
}

export default App;