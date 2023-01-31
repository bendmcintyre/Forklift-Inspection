import "./App.css";
import { BrowserRouter as Router, Link, Routes, Route, NavLink } from "react-router-dom"

import Header from "./components/Header";
import Inspect from "./components/Inspect";
import DailyChecklist from "./components/DailyChecklist";
import Safety from "./components/Safety";
import Contact from "./components/Contact";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />

      <div className="react-view my-4">
        <Routes>
          <Route path="/daily-checklist" element={<DailyChecklist />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App