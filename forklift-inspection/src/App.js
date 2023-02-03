import "./App.css";

import Header from "./components/Header";
import Safety from "./components/Safety";
import Home from "./components/Home";
import Contact from "./components/Contact";
import InspectForm from "./components/Form";
import Inspections from "./components/Inspections";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // this is for routing purposes

function App() {
  return (
    <div>
      <Router>
        <Header />

        <div className="react-view">
          {/* Component that'll match the routes name will be rendered here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/inspections" element={<Inspections />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/inspect-form" element={<InspectForm />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
