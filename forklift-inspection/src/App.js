import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'; // this is for routing purposes

import './App.css';

import { Layout } from 'features/ui';
import ContactPage from 'pages/contact';
import HomePage from 'pages/home';
import InspectionsPage from 'pages/inspections';
import RemindersPage from 'pages/reminders';
import ErrorPage from 'pages/error';
import LoginPage from 'pages/login';
import LogoutPage from 'pages/logout';

import { InspectionForm } from 'features/inspections';
import { RequireAuth } from 'features/authentication';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/logout',
        element: <LogoutPage />,
      },
      {
        path: '/inspections',
        element: <RequireAuth />,
        children: [
          {
            index: true,
            element: <InspectionsPage />,
          },
        ],
      },
      {
        path: '/reminders',
        element: <RemindersPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      // Refactor this to 'inspections/new'
      {
        path: '/inspect-form',
        element: <InspectionForm />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
