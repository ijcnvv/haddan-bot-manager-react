export const getToken = () => {
  return window.localStorage.getItem("auth") || null;
};

export const clearToken = () => {
  return Promise.resolve(window.localStorage.removeItem("auth"));
};

export const saveToken = token => {
  return Promise.resolve(window.localStorage.setItem("auth", token));
};
