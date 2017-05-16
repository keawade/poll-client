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
