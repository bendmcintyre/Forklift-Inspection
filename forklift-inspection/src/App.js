import {
  React,
} from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,

  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'; // this is for routing purposes

import './App.css';

import TopBar from './components/TopBar';
import InspectForm from './components/Form';
import IndexPage from './pages/IndexPage';
import ContactPage from './pages/contact';
import InspectionsPage from './pages/inspections';
//import RemindersPage from './pages/RemindersPage';
import {
  InspectionsProvider,
} from './contexts/InspectionsContext';

const router = createBrowserRouter([
  {
    path: '/',
    // element: <IndexPage />,
    element: <div>Hello world!</div>,
  },
]);

const yourRouter = createBrowserRouter(
  createRoutesFromElements(
    <InspectionsProvider>
        <TopBar />

        {/* Component that'll match the routes name will be rendered here */}
        <div className="container mx-auto max-w-7xl">
            <Route path="/" element={<IndexPage />} />
            <Route path="/inspections" element={<InspectionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/inspect-form" element={<InspectForm />} />

        </div>
    </InspectionsProvider>
  )
);

function NewApp() {
  return (
    <RouterProvider router={router} />
  );
}

function App() {
  return (
    <InspectionsProvider>
      <Router>
        <TopBar />

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

export default NewApp;
