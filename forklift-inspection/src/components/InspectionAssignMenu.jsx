import React, { useState } from 'react';
import '../styles/InspectionAssignMenu.module.scss';

function InspectionAssignMenu() {
  const [inspections, setInspections] = useState([
    { id: 'inspection-a', name: 'Inspection A', active: true, lastDateUsed: '2023-04-21' },
    { id: 'inspection-b', name: 'Inspection B', active: false, lastDateUsed: '2023-04-20' },
    { id: 'inspection-c', name: 'Inspection C', active: true, lastDateUsed: '2023-04-19' },
  ]);

  const toggleActive = (id) => {
    const updatedInspections = inspections.map((inspection) => {
      if (inspection.id === id) {
        return { ...inspection, active: !inspection.active };
      }
      return inspection;
    });
    setInspections(updatedInspections);
  };

  return (
    <div className="container">
      <h2>Assign Inspections</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Inspection Name</th>
            <th>Active</th>
            <th>Inactive</th>
            <th>Last Date Used</th>
          </tr>
        </thead>
        <tbody>
          {inspections.map(({ id, name, active, lastDateUsed }) => (
            <tr key={id} className="row">
              <td>{name}</td>
              <td>
                <input
                  type="checkbox"
                  checked={active}
                  onChange={() => toggleActive(id)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={!active}
                  onChange={() => toggleActive(id)}
                />
              </td>
              <td>{lastDateUsed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InspectionAssignMenu;
