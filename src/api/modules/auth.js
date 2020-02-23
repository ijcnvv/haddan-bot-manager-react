import ajax from "../../modules/ajax";

const getAuthByEmailAndPassword = ({ email, password }) => {
  const params = { get: "email_auth", email, password };
  return ajax.get("/api.php", params);
};

const getAuthByToken = () => {
  const params = { get: "token_auth" };
  return ajax.get("/api.php", params);
};

const logout = () => {
  const params = { get: "logout" };
  return ajax.get("/api.php", params);
};

export { getAuthByEmailAndPassword, getAuthByToken, logout };
