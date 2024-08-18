import React from "react";
import { Navbar } from "./components";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Sponsorship, Agrobot, Agroponics, Recruitment, Contact, About } from "./pages";

import { Footer } from "./components/common";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/agrobot" element={<Agrobot />} />
				<Route path="/agroponics" element={<Agroponics />} />
				<Route path="/sponsorship" element={<Sponsorship />} />
				<Route path="/recruitment" element={<Recruitment />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
