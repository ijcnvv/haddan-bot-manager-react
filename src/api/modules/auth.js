import ajax from "../../modules/ajax";

const ajaxAuthByEmailAndPassword = ({ email, password }) => {
  const params = { get: "email_auth", email, password };
  return ajax.get("/api.php", params);
};

const ajaxAuthByToken = () => {
  const params = { get: "token_auth" };
  return ajax.get("/api.php", params);
};

const ajaxLogout = () => {
  const params = { get: "logout" };
  return ajax.get("/api.php", params);
};

export { ajaxAuthByEmailAndPassword, ajaxAuthByToken, ajaxLogout };
