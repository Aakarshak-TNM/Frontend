import config from "./config";

const BASE_URL = config.base_url; // Your API base URL

async function fetchStudents(query = "") {
  try {
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${BASE_URL}/Students/?query=${query}`, {
      method: 'GET',
      headers: headers,
    });

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
