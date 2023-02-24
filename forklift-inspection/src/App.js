import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'; // this is for routing purposes
import TopBar from './components/TopBar';
import Reminders from './components/Reminders';

import Contact from './components/Contact';
import InspectForm from './components/Form';
import Inspections from './components/Inspections';

function App() {
  return (
    <Router>
      <TopBar />

      {/* Component that'll match the routes name will be rendered here */}
      <div className="container mx-auto max-w-7xl">
        <Routes>
          <Route path="/inspections" element={<Inspections />} />
          <Route path="/reminders" element={<Reminders />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inspect-form" element={<InspectForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
