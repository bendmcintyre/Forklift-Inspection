import "./App.css";
import Safety from "./components/Safety";
import Inspect from "./components/Inspect";
import Contact from "./components/Contact";
import InspectForm from "./components/Form";

import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div id="navbar-container">
          <nav>
            <Link to="/inspect">INSPECT</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/safety">SAFETY</Link>
          </nav>
        </div>
        <div className="react-view my-4">
          <Routes>
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
