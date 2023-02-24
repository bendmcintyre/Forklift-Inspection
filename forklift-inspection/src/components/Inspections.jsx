import {
  React,
  Fragment, useEffect, useState,
} from 'react';
import {
  Link,
} from 'react-router-dom';

import {
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/20/solid';

export default function Inspections() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');

  const API_URL = 'https://forklift-inspection-backend.vercel.app';
  // const API_URL = "http://localhost:5000/inspections"

  const fetchData = async () => {
    document.title = 'Inspections';

    const rawResposne = await fetch(`${API_URL}/inspections/`);
    const response = await rawResposne.json();

    // console.log(response)

    if (response.count !== 0) {
      setData(response.data);
    } else {
      setMessage(response.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  const removeData = async (id) => {
    const rawResposne = await fetch(`${API_URL}/inspections/${id}`, {
      method: 'DELETE',
    });

    const response = await rawResposne.json();

    alert(response.message);
  };

  const deleteButtonHandler = (event) => {
    const id = event.currentTarget.value;

    if (window.confirm('Are you sure you want to remove?')) {
      removeData(id);
    }
  };

  const tableRows = data.map((el, index) => {
    const rowColor = index % 2 !== 0 ? 'bg-slate-900' : '';
    const date = new Date(el.date);

    return (
      <tr className={`border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 ${rowColor}`} key={index}>
        <td className="p-3">{el.name}</td>
        <td className="p-3">{`${date.toDateString()} @ ${date.toLocaleTimeString()}`}</td>
        <td className="p-3">{el.lift}</td>
        <td className="p-3">{el.hours}</td>
        <td className="p-3 flex justify-evenly">
          <Link
            as="button"
            to={`/inspect-form?id=${el._id}`}
            className="inline-flex items-center rounded-md border dark:border-slate-700 bg-white px-4 py-2
                       text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
                       focus:right-offset-gray-200"
          >
            <PencilIcon className="-ml-1 mr-2 h-5 w-5 " aria-hidden="true" />
            Edit
          </Link>
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-red-800 bg-red-700 px-4 py-2
                       text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2
                       focus:ring-indigo-500 focus:ring-offset-2"
            onClick={deleteButtonHandler}
            value={el._id}
          >
            <TrashIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container mx-auto">
      <table className="table-auto border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-md shadow-sm">
        <thead className="bg-slate-50 dark:bg-slate-700 font-semibold">
          <tr>
            <th className="border border-slate-300 dark:border-slate-600 p-4 text-slate-900 dark:text-slate-200 text-left">Name</th>
            <th className="border border-slate-300 dark:border-slate-600 p-4 text-slate-900 dark:text-slate-200 text-left">Date</th>
            <th className="border border-slate-300 dark:border-slate-600 p-4 text-slate-900 dark:text-slate-200 text-left">Lift</th>
            <th className="border border-slate-300 dark:border-slate-600 p-4 text-slate-900 dark:text-slate-200 text-left">Hours</th>
            <th className="w-1/5 border border-slate-300 dark:border-slate-600 p-4 text-slate-900 dark:text-slate-200">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </div>
  );
}
