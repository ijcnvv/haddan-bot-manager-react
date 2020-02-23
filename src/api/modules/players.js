import ajax from "../../modules/ajax";

const addPlayer = ({ id, player_id }) => {
  const params = { get: "add_player", id, player_id };
  return ajax.get("/api.php", params);
};

export { addPlayer };
