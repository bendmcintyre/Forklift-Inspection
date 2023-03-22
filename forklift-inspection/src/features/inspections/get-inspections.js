import { fetchInspections } from './inspections.api';

export async function getInspections() {
  const apiResponse = await fetchInspections();
  console.log('apiResponse', apiResponse);

  const inspections = apiResponse.data;

  return inspections;
}

export default getInspections;
