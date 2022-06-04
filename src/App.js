import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/css/style.css'
import 'loaders.css'
import 'animate.css'
import SidebBar from './components/includes/SidebBar';
import Home from './components/screens/Home';
import About from './components/screens/About';
import Contact from './components/screens/Contact';
import Skills from './components/screens/Skills';


function App() {
	return (
		<HashRouter>
			<SidebBar />
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
