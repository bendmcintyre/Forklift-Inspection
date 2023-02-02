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
            <Link to="./components/Inspect.jsx">INSPECT</Link>
            <Link to="./components/Contact.jsx">CONTACT</Link>
            <Link to="./components/Safety.jsx">SAFETY</Link>
          </nav>
        </div>
        <div className="react-view my-4">
          <Routes>
            <Route
              path="./components/Inspect.jsx"
              element={<Inspect />}
            ></Route>
            <Route
              path="./components/Contact.jsx"
              element={<Contact />}
            ></Route>
            <Route path="./components/Safety.jsx" element={<Safety />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
