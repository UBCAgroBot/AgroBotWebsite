import React from "react";
import {
    Navbar
} from "./components";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {
    Home,
    Projects,
    Sponsorship,
    Recruitment,
    ContactUs,
    AboutUs,
    AgroPonics,
    AgroBot,
} from "./pages";

import {
    Footer
} from "./components/common";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/sponsorship" element={<Sponsorship />} />
                <Route path="/recruitment" element={<Recruitment />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/agroponics" element={<AgroPonics />} />
                <Route path="/agrobot" element={<AgroBot />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;