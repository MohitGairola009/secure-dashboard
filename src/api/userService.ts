import axios from 'axios';

const API_URL = 'https://reqres.in/api';

export const fetchUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};
