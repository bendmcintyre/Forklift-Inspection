import {
  React,
  useEffect,
} from 'react';

import {
  Link,
} from 'react-router-dom';

import {
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/20/solid';

import {
  useInspections,
  useInspectionsDispatch,
} from '../contexts/InspectionsContext';

import * as Api from '../Api';

function TH({ extraClassName, children }) {
  const thStyles = 'border border-slate-300 dark:border-slate-600 p-4 text-slate-900 dark:text-slate-200';

  return (
    <th className={`${thStyles}${extraClassName ? ` ${extraClassName}` : ''}`}>
      {children}
    </th>
  );
}

export default function Inspections() {
  const inspectionsDispatch = useInspectionsDispatch();
  const inspections = useInspections();

  const loadData = async () => {
    document.title = 'Inspections';

    const apiResponse = await Api.getInspections();
    console.log(apiResponse);

    inspectionsDispatch({
      type: 'FETCH_INSPECTIONS_SUCCESS',
      inspections: apiResponse.data,
    });
  };

  // TODO: Determine the 'proper' way to handle loading data without violating
  //       the associated ESLint Rule
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removeData = async (id) => {
    const apiResponse = await Api.deleteInspection(id);
    console.log(apiResponse);

    // alert(apiResponse.message);
  };

  const deleteButtonHandler = (event) => {
    const id = event.currentTarget.value;

    if (window.confirm('Are you sure you want to remove?')) {
      removeData(id);
    }
  };

  return (
    <div className="container mx-auto">
      <table className="table-auto border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-md shadow-sm">
        <thead className="bg-slate-50 dark:bg-slate-700 font-semibold">
          <tr>
            <TH extraClassName="text-left">Name</TH>
            <TH extraClassName="text-left">Date</TH>
            <TH extraClassName="text-left">Lift</TH>
            <TH extraClassName="text-left">Hours</TH>
            <TH extraClassName="w-1/5">&nbsp;</TH>
          </tr>
        </thead>
        <tbody>
          {inspections.map((inspection, index) => {
            const rowColor = index % 2 !== 0 ? 'bg-slate-900' : '';
            const date = new Date(inspection.date);

            return (
              <tr className={`border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 ${rowColor}`} key={inspection._id}>
                <td className="p-3">{inspection.name}</td>
                <td className="p-3">{`${date.toDateString()} @ ${date.toLocaleTimeString()}`}</td>
                <td className="p-3">{inspection.lift}</td>
                <td className="p-3">{inspection.hours}</td>
                <td className="p-3 flex justify-evenly">
                  <Link
                    as="button"
                    to={`/inspect-form?id=${inspection._id}`}
                    className="inline-flex items-center rounded-md border dark:border-slate-700 bg-white px-4 py-2
                              text-sm font-medium text-gray-700 shadow-sm
                              focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:right-offset-gray-200"
                  >
                    <PencilIcon className="-ml-1 mr-2 h-5 w-5 " aria-hidden="true" />
                    Edit
                  </Link>
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-red-800 bg-red-700 px-4 py-2
                              text-sm font-medium text-white shadow-sm
                              focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:right-offset-gray-200"
                    onClick={deleteButtonHandler}
                    value={inspection._id}
                  >
                    <TrashIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
