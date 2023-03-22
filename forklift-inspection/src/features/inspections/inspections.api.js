import { API_URL } from 'config';

const inspectionsUrl = `${API_URL}/inspections`;

export async function fetchInspections() {
  const rawResponse = await fetch(inspectionsUrl);

  if (!rawResponse.ok) {
    throw new Error(rawResponse);
  }

  return rawResponse.json();
}

export async function deleteInspection(id) {
  const rawResponse = await fetch(`${inspectionsUrl}/${id}`, {
    method: 'DELETE',
  });

  if (!rawResponse.ok) {
    throw new Error(rawResponse);
  }

  return rawResponse.json();
}
