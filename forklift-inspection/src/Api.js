const API_URL = 'https://forklift-inspection-backend.vercel.app';
// const API_URL = "http://localhost:5000/inspections"

export async function getInspections() {
  const rawResponse = await fetch(`${API_URL}/inspections/`);

  if (!rawResponse.ok) {
    throw new Error(rawResponse);
  }

  return rawResponse.json();
}

export async function deleteInspection(id) {
  const rawResponse = await fetch(`${API_URL}/inspections/${id}`, {
    method: 'DELETE',
  });

  if (!rawResponse.ok) {
    throw new Error(rawResponse);
  }

  return rawResponse.json();
}
