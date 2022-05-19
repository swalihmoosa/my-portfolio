import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/css/style.css'
import SidebBar from './components/includes/SidebBar';
import Home from './components/screens/Home';
import About from './components/screens/About';
import Contact from './components/screens/Contact';


function App() {
	return (
		<BrowserRouter>
			<SidebBar />
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
