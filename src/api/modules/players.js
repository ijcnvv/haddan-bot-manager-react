import ajax from "../../modules/ajax";

const ajaxAddPlayer = ({ id, player_id }) => {
  const params = { get: "add_player", id, player_id };
  return ajax.get("/api.php", params);
};

export { ajaxAddPlayer };
