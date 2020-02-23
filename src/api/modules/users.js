import ajax from "../../modules/ajax";

const getUsers = () => {
  const params = { get: "users" };
  return ajax.get("/api.php", params);
};

const getUserById = id => {
  const params = { get: "user", id };
  return ajax.get("/api.php", params);
};

const editUserProperty = ({ id, property, type = "set", value }) => {
  const params = { get: "edit_user", id, property, type, value };
  return ajax.get("/api.php", params);
};

const createUser = ({ name, email, player_id, network }) => {
  const params = { get: "create_user", name, email, player_id, network };
  return ajax.get("/api.php", params);
};

export { getUsers, getUserById, editUserProperty, createUser };
