import "./App.css";

import Header from "./components/Header";
import Safety from "./components/Safety";
import Inspect from "./components/Inspect";
import Contact from "./components/Contact";
import InspectForm from "./components/Form";

import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom"; // this is for routing purposes

function App() {
  return (
    <div>
      <Router>
        <Header/>

        <div className="react-view">
          {/* Component that'll match the routes name will be rendered here */}
          <Routes>
            <Route path="/" element={<Inspect />} />
            <Route path="/inspect" element={<Inspect />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/inspect-form" element={<InspectForm />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
