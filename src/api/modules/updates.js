import ajax from "../../modules/ajax";

const getUpdates = () => {
  const params = {
    get: "updates"
  };
  return ajax.get("/api.php", params);
};
export { getUpdates };
