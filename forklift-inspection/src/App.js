import "./App.css";

import Header from "./components/Header";
import Reminders from "./components/Reminders";

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
            <Route path="/inspections" element={<Inspections />} />
            <Route path="/reminders" element={<Reminders />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/inspect-form" element={<InspectForm />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
