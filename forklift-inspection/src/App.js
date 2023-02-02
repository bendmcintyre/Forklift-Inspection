import "./App.css";
import { Safety } from "./components/Safety.jsx";
import { Inspect } from "./components/Inspect.jsx";
import { Contact } from "./components/Contact.jsx";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div id="navbar-container">
          <nav>
            <Link to="/Inspect">INSPECT</Link>
            <Link to="/Contact">CONTACT</Link>
            <Link to="/Safety">SAFETY</Link>
          </nav>
        </div>
        <div className="react-view my-4">
          <Routes>
            <Route path="/Inspect" element={<Inspect />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/Safety" element={<Safety />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
