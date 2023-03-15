import React from 'react';
import { Outlet } from 'react-router-dom';

import { InspectionsProvider } from 'features/inspections';
import { TopBar } from 'features/ui';

//
// TODO: Refactor InspectionsProvider usage into the page-level component(s)
//       if possible.
//
export function Layout() {
  return (
    <InspectionsProvider>
      <TopBar />

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </InspectionsProvider>
  );
}

export default Layout;
