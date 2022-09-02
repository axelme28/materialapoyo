const API_URL = 'http://localhost:8080';

export const request = async (endpoint = '', method = 'GET', data = {}) => {
  if (method === 'GET') {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method,
      headers: { 'Content-Type': 'application/json' },
    });
    return response.json();
  }
  const response = await fetch(`${API_URL}${endpoint}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
};
