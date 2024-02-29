const BASE_URL = 'http://localhost:8000'; // Your API base URL

async function fetchStudents(query = "") {
  try {
    const response = await fetch(`${BASE_URL}/Students/?query=${query}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
}
export { fetchStudents };
