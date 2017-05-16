export const API_URL = 'https://poll-api.herokuapp.com';

export const setAuth = (username: string, displayname: string, token: string) => {
  localStorage.setItem('username', username);
  localStorage.setItem('displayname', displayname);
  localStorage.setItem('token', token);
  location.reload();
};

export const clearAuth = () => {
  localStorage.removeItem('username');
  localStorage.removeItem('displayname');
  localStorage.removeItem('token');
  location.reload();
};

export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  if (!token || token === 'undefined' || token === 'null') {
    return false;
  }
  return true;
};

export const getStoredToken = () => {
  return localStorage.getItem('token') as string;
};
