export const getStorageSortBy = () => {
  return window.localStorage.getItem("sortBy") || "name";
};

export const setStorageSortBy = value => {
  return Promise.resolve(window.localStorage.setItem("sortBy", value));
};
