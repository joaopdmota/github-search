import axios from '../config/axios';

export const fetchUser = async (query) => {
  const response = await axios.get(`/users/${query}`);
  return response;
};

export const fetchRepositories = async (user) => {
  const response = await axios.get(`/users/${user}/repos`);
  return response;
};
