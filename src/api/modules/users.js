import ajax from "../../modules/ajax";

const ajaxGetUsers = () => {
  const params = { get: "users" };
  return ajax.get("/api.php", params);
};

const ajaxGetUserById = id => {
  const params = { get: "user", id };
  return ajax.get("/api.php", params);
};

const ajaxEditUserProperty = ({ id, property, type = "set", value }) => {
  const params = { get: "edit_user", id, property, type, value };
  return ajax.get("/api.php", params);
};

const ajaxCreateUser = ({ name, email, player_id, network }) => {
  const params = { get: "create_user", name, email, player_id, network };
  return ajax.get("/api.php", params);
};

export { ajaxGetUsers, ajaxGetUserById, ajaxEditUserProperty, ajaxCreateUser };
