import {
  React,
} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'; // this is for routing purposes

import './App.css';

import TopBar from './components/TopBar';
import InspectForm from './components/Form';
import IndexPage from './pages/IndexPage';
import ContactPage from './pages/ContactPage';
import InspectionsPage from './pages/InspectionsPage';
import RemindersPage from './pages/RemindersPage';
import {
  InspectionsProvider,
} from './contexts/InspectionsContext';

function App() {
  return (
    <InspectionsProvider>
      <Router>
        <TopBar />

        {/* Component that'll match the routes name will be rendered here */}
        <div className="container mx-auto max-w-7xl">
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/inspections" element={<InspectionsPage />} />
            <Route path="/reminders" element={<RemindersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/inspect-form" element={<InspectForm />} />
          </Routes>
        </div>
      </Router>
    </InspectionsProvider>
  );
}

export default App;
