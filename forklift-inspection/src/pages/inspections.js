import React, { useEffect } from 'react';

import {
  InspectionsList,
  getInspections,
  useInspectionsDispatch,
} from 'features/inspections';

export default function InspectionsPage() {
  const inspectionsDispatch = useInspectionsDispatch();
  const loadData = async () => {
    const inspections = await getInspections();
    // console.log('inspections', inspections);

    inspectionsDispatch({
      type: 'FETCH_INSPECTIONS_SUCCESS',
      inspections,
    });
  };

  // TODO: Determine why this wasn't working with React Router's
  //       'useLoaderData' hook - this isn't the 'proper' way to handle data
  //       loading but it works for now.
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container mx-auto">
      <InspectionsList />
    </div>
  );
}
